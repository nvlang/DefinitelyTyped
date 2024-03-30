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
 * @fileoverview  Implements the CHTMLmtable wrapper for the MmlMtable object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { CHTMLWrapper, CHTMLConstructor } from '../Wrapper.js';
import { CHTMLWrapperFactory } from '../WrapperFactory.js';
import { CHTMLmtr } from './mtr.js';
import { CHTMLmtd } from './mtd.js';
import { MmlNode } from '../../../core/MmlTree/MmlNode.js';
import { StyleList } from '../../../util/StyleList.js';
declare const CHTMLmtable_base: import("../../common/Wrappers/mtable.js").MtableConstructor<CHTMLmtd<any, any, any>, CHTMLmtr<any, any, any>> & CHTMLConstructor<any, any, any>;
/*****************************************************************/
/**
 * The CHTMLmtable wrapper for the MmlMtable object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class CHTMLmtable<N, T, D> extends CHTMLmtable_base {
    /**
     * The mtable wrapper
     */
    static kind: string;
    /**
     * @override
     */
    static styles: StyleList;
    /**
     * The column for labels
     */
    labels: N;
    /**
     * The inner table DOM node
     */
    itable: N;
    /******************************************************************/
    /**
     * @override
     */
    constructor(factory: CHTMLWrapperFactory<N, T, D>, node: MmlNode, parent?: CHTMLWrapper<N, T, D>);
    /**
     * @override
     */
    getAlignShift(): [string, number];
    /**
     * @override
     */
    toCHTML(parent: N): void;
    /**
     * Move background color (if any) to inner itable node so that labeled tables are
     * only colored on the main part of the table.
     */
    protected shiftColor(): void;
    /******************************************************************/
    /**
     * Pad any short rows with extra cells
     */
    protected padRows(): void;
    /**
     * Set the inter-column spacing for all columns
     *  (Use frame spacing on the outsides, if needed, and use half the column spacing on each
     *   neighboring column, so that if column lines are needed, they fall in the middle
     *   of the column space.)
     */
    protected handleColumnSpacing(): void;
    /**
     * Add borders to the left of cells to make the column lines
     */
    protected handleColumnLines(): void;
    /**
     * Add widths to the cells for the column widths
     */
    protected handleColumnWidths(): void;
    /**
     * Set the inter-row spacing for all rows
     *  (Use frame spacing on the outsides, if needed, and use half the row spacing on each
     *   neighboring row, so that if row lines are needed, they fall in the middle
     *   of the row space.)
     */
    protected handleRowSpacing(): void;
    /**
     * Add borders to the tops of cells to make the row lines
     */
    protected handleRowLines(): void;
    /**
     * Adjust row heights for equal-sized rows
     */
    protected handleRowHeights(): void;
    /**
     * Set the heights of all rows to be the same, and properly center
     * baseline or axis rows within the newly sized
     */
    protected handleEqualRows(): void;
    /**
     * @param {CHTMLWrapper} row   The row whose height is to be set
     * @param {number} HD          The height to be set for the row
     */
    protected setRowHeight(row: CHTMLWrapper<N, T, D>, HD: number): void;
    /**
     * Make sure the baseline is in the right position for cells
     *   that are row aligned to baseline ot axis
     *
     * @param {CHTMLWrapper} row   The row to be set
     * @param {number} HD          The total height+depth for the row
     * @param {number] D           The new depth for the row
     */
    protected setRowBaseline(row: CHTMLWrapper<N, T, D>, HD: number, D: number): void;
    /**
     * Make sure the baseline is in the correct place for cells aligned on baseline or axis
     *
     * @param {CHTMLWrapper} cell  The cell to modify
     * @param {string} ralign      The alignment of the row
     * @param {number} HD          The total height+depth for the row
     * @param {number] D           The new depth for the row
     * @return {boolean}           True if no other cells in this row need to be processed
     */
    protected setCellBaseline(cell: CHTMLWrapper<N, T, D>, ralign: string, HD: number, D: number): boolean;
    /**
     * Add a frame to the mtable, if needed
     */
    protected handleFrame(): void;
    /**
     * Handle percentage widths and fixed widths
     */
    protected handleWidth(): void;
    /**
     * Handle alignment of table to surrounding baseline
     */
    protected handleAlign(): void;
    /**
     * Mark the alignment of the table
     */
    protected handleJustify(): void;
    /******************************************************************/
    /**
     * Handle addition of labels to the table
     */
    protected handleLabels(): void;
    /**
     * @param {string} side         The side for the labels
     * @return {[string, number]}   The alignment and shift values
     */
    protected addLabelPadding(side: string): [string, number];
    /**
     * Update any rows that are not naturally tall enough for the labels,
     *   and set the baseline for labels that are baseline aligned.
     */
    protected updateRowHeights(): void;
    /**
     * Add spacing elements between the label rows to align them with the rest of the table
     */
    protected addLabelSpacing(): void;
}
export {};
