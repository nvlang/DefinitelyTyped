/*************************************************************
 *
 *  Copyright (c) 2017-2022 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/**
 * @fileoverview  Implements the CommonMtable wrapper mixin for the MmlMtable object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { AnyWrapper, WrapperConstructor, Constructor } from '../Wrapper.js';
import { CommonMtr } from './mtr.js';
/*****************************************************************/
/**
 * The heights, depths, and widths of the rows and columns
 * Plus the natural height and depth (i.e., without the labels)
 * Plus the label column width
 */
export type TableData = {
    H: number[];
    D: number[];
    W: number[];
    NH: number[];
    ND: number[];
    L: number;
};
/**
 * An array of table dimensions
 */
export type ColumnWidths = (string | number | null)[];
/*****************************************************************/
/**
 * The CommonMtable interface
 *
 * @template C   The class for table cells
 * @template R   The class for table rows
 */
export interface CommonMtable<C extends AnyWrapper, R extends CommonMtr<C>> extends AnyWrapper {
    /**
     * The number of columns and rows in the table
     */
    numCols: number;
    numRows: number;
    /**
     * True if there are labeled rows
     */
    hasLabels: boolean;
    /**
     * True if this mtable is the top element, or in a top-most mrow
     */
    isTop: boolean;
    /**
     * The parent node of this table (skipping non-parents and mrows)
     *   and the position of the table as a child node
     */
    container: AnyWrapper;
    containerI: number;
    /**
     * The spacing and line data
     */
    frame: boolean;
    fLine: number;
    fSpace: number[];
    cSpace: number[];
    rSpace: number[];
    cLines: number[];
    rLines: number[];
    cWidths: (number | string)[];
    /**
     * The bounding box information for the table rows and columns
     */
    data: TableData;
    /**
     * The table cells that have percentage-width content
     */
    pwidthCells: [C, number][];
    /**
     * The full width of a percentage-width table
     */
    pWidth: number;
    /**
     * The rows of the table
     */
    readonly tableRows: R[];
    /**
     * @override
     */
    childNodes: R[];
    /**
     * Find the container and the child position of the table
     */
    findContainer(): void;
    /**
     * If the table has a precentage width or has labels, set the pwidth of the bounding box
     */
    getPercentageWidth(): void;
    /**
     * Stretch the rows to the equal height or natural height
     */
    stretchRows(): void;
    /**
     * Stretch the columns to their proper widths
     */
    stretchColumns(): void;
    /**
     * Handle horizontal stretching within the ith column
     *
     * @param {number} i   The column number
     * @param {number} W   The computed width of the column (or null of not computed)
     */
    stretchColumn(i: number, W: number): void;
    /**
     * Determine the row heights and depths, the column widths,
     * and the natural width and height of the table.
     *
     * @return {TableData}  The dimensions of the rows and columns
     */
    getTableData(): TableData;
    /**
     * @param {C} cell         The cell whose height, depth, and width are to be added into the H, D, W arrays
     * @param {number} i       The column number for the cell
     * @param {number} j       The row number for the cell
     * @param {string} align   The row alignment
     * @param {number[]} H     The maximum height for each of the rows
     * @param {number[]} D     The maximum depth for each of the rows
     * @param {number[]} W     The maximum width for each column
     * @param {number} M       The current height for items aligned top and bottom
     * @return {number}        The updated value for M
     */
    updateHDW(cell: C, i: number, j: number, align: string, H: number[], D: number[], W: number[], M: number): number;
    /**
     * Extend the H and D of a row to cover the maximum height needed by top/bottom aligned items
     *
     * @param {number} i     The row whose hight and depth should be adjusted
     * @param {number[]} H   The row heights
     * @param {number[]} D   The row depths
     * @param {number} M     The maximum height of top/bottom aligned items
     */
    extendHD(i: number, H: number[], D: number[], M: number): void;
    /**
     * Set cell widths for columns with percentage width children
     */
    setColumnPWidths(): void;
    /**
     * @param {number} height   The total height of the table
     * @return {number[]}       The [height, depth] for the aligned table
     */
    getBBoxHD(height: number): number[];
    /**
     * Get bbox left and right amounts to cover labels
     */
    getBBoxLR(): number[];
    /**
     * @param {string} side                 The side for the labels
     * @return {[number, string, number]}   The padding, alignment, and shift amounts
     */
    getPadAlignShift(side: string): [number, string, number];
    /**
     * @return {number}    The true width of the table (without labels)
     */
    getWidth(): number;
    /**
     * @return {number}   The maximum height of a row
     */
    getEqualRowHeight(): number;
    /**
     * @return {number[]}   The array of computed widths
     */
    getComputedWidths(): number[];
    /**
     * Determine the column widths that can be computed (and need to be set).
     * The resulting arrays will have numbers for fixed-size arrays,
     *   strings for percentage sizes that can't be determined now,
     *   and null for stretchy columns tht will expand to fill the extra space.
     * Depending on the width specified for the table, different column
     *  values can be determined.
     *
     * @return {ColumnWidths}  The array of widths
     */
    getColumnWidths(): ColumnWidths;
    /**
     * For tables with equal columns, get the proper amount per row.
     *
     * @return {ColumnWidths}  The array of widths
     */
    getEqualColumns(width: string): ColumnWidths;
    /**
     * For tables with width="auto", auto and fit columns
     * will end up being natural width, so don't need to
     * set those explicitly.
     *
     * @return {ColumnWidths}  The array of widths
     */
    getColumnWidthsAuto(swidths: string[]): ColumnWidths;
    /**
     * For tables with percentage widths, let 'fit' columns (or 'auto'
     * columns if there are not 'fit' ones) will stretch automatically,
     * but for 'auto' columns (when there are 'fit' ones), set the size
     * to the natural size of the column.
     *
     * @param {string[]} widths  Strings giving the widths
     * @return {ColumnWidths}    The array of widths
     */
    getColumnWidthsPercent(widths: string[]): ColumnWidths;
    /**
     * For fixed-width tables, compute the column widths of all columns.
     *
     * @return {ColumnWidths}  The array of widths
     */
    getColumnWidthsFixed(swidths: string[], width: number): ColumnWidths;
    /**
     * @param {number} i      The row number (starting at 0)
     * @param {string} align  The alignment on that row
     * @return {number}       The offest of the alignment position from the top of the table
     */
    getVerticalPosition(i: number, align: string): number;
    /**
     * @param {number} fspace   The frame spacing to use
     * @param {number[]} space  The array of spacing values to convert to strings
     * @param {number} scale    A scaling factor to use for the sizes
     * @return {string[]}       The half-spacing as stings with units of "em"
     *                           with frame spacing at the beginning and end
     */
    getEmHalfSpacing(fspace: number, space: number[], scale?: number): string[];
    /**
     * @return {number[]}   The half-spacing for rows with frame spacing at the ends
     */
    getRowHalfSpacing(): number[];
    /**
     * @return {number[]}   The half-spacing for columns with frame spacing at the ends
     */
    getColumnHalfSpacing(): number[];
    /**
     * @return {[string,number|null]}  The alignment and row number (based at 0) or null
     */
    getAlignmentRow(): [string, number | null];
    /**
     * @param {string} name           The name of the attribute to get as an array
     * @param {number=} i             Return this many fewer than numCols entries
     * @return {string[]}             The array of values in the given attribute, split at spaces,
     *                                 padded to the number of table columns (minus 1) by repeating the last entry
     */
    getColumnAttributes(name: string, i?: number): string[];
    /**
     * @param {string} name           The name of the attribute to get as an array
     * @param {number=} i             Return this many fewer than numRows entries
     * @return {string[]}             The array of values in the given attribute, split at spaces,
     *                                 padded to the number of table rows (minus 1) by repeating the last entry
     */
    getRowAttributes(name: string, i?: number): string[];
    /**
     * @param {string} name           The name of the attribute to get as an array
     * @return {string[]}             The array of values in the given attribute, split at spaces
     *                                 (after leading and trailing spaces are removed, and multiple
     *                                  spaces have been collapsed to one).
     */
    getAttributeArray(name: string): string[];
    /**
     * Adds "em" to a list of dimensions, after dividing by n (defaults to 1).
     *
     * @param {string[]} list   The array of dimensions (in em's)
     * @param {nunber=} n       The number to divide each dimension by after converted
     * @return {string[]}       The array of values with "em" added
     */
    addEm(list: number[], n?: number): string[];
    /**
     * Converts an array of dimensions (with arbitrary units) to an array of numbers
     *   representing the dimensions in units of em's.
     *
     * @param {string[]} list   The array of dimensions to be turned into em's
     * @return {number[]}       The array of values converted to em's
     */
    convertLengths(list: string[]): number[];
}
/**
 * Shorthand for the CommonMtable constructor
 */
export type MtableConstructor<C extends AnyWrapper, R extends CommonMtr<C>> = Constructor<CommonMtable<C, R>>;
/*****************************************************************/
/**
 * The CommonMtable wrapper mixin for the MmlMtable object
 *
 * @template C  The table cell class
 * @temlpate R  the table row class
 * @template T  The Wrapper class constructor type
 */
export declare function CommonMtableMixin<C extends AnyWrapper, R extends CommonMtr<C>, T extends WrapperConstructor>(Base: T): MtableConstructor<C, R> & T;
