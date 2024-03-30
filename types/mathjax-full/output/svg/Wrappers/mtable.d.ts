/*************************************************************
 *
 *  Copyright (c) 2018-2022 The MathJax Consortium
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
 * @fileoverview  Implements the SVGmtable wrapper for the MmlMtable object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { SVGWrapper, SVGConstructor } from '../Wrapper.js';
import { SVGWrapperFactory } from '../WrapperFactory.js';
import { SVGmtr } from './mtr.js';
import { SVGmtd } from './mtd.js';
import { MmlNode } from '../../../core/MmlTree/MmlNode.js';
import { OptionList } from '../../../util/Options.js';
import { StyleList } from '../../../util/StyleList.js';
declare const SVGmtable_base: import("../../common/Wrappers/mtable.js").MtableConstructor<SVGmtd<any, any, any>, SVGmtr<any, any, any>> & SVGConstructor<any, any, any>;
/*****************************************************************/
/**
 * The SVGmtable wrapper for the MmlMtable object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class SVGmtable<N, T, D> extends SVGmtable_base {
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
    /******************************************************************/
    /**
     * @override
     */
    constructor(factory: SVGWrapperFactory<N, T, D>, node: MmlNode, parent?: SVGWrapper<N, T, D>);
    /**
     * @override
     */
    toSVG(parent: N): void;
    /**
     * @param {N} svg  The container in which to place the rows
     */
    protected placeRows(svg: N): void;
    /**
     * @param {boolean} equal   True for equal-height rows
     * @param {number} HD       The height of equal-height rows
     * @param {number} H        The natural height of the row
     * @param {number} D        The natural depth of the row
     * @returns {number[]}      The (possibly scaled) height and depth to use
     */
    protected getRowHD(equal: boolean, HD: number, H: number, D: number): [number, number];
    /******************************************************************/
    /**
     * @override
     */
    handleColor(): void;
    /**
     * Add vertical lines between columns
     *
     * @param {N} svg   The container for the table
     */
    protected handleColumnLines(svg: N): void;
    /**
     * Add horizontal lines between rows
     *
     * @param {N} svg   The container for the table
     */
    protected handleRowLines(svg: N): void;
    /**
     * Add a frame to the mtable, if needed
     *
     * @param {N} svg   The container for the table
     */
    protected handleFrame(svg: N): void;
    /**
     * @returns {number}   The x-adjustement needed to handle the true size of percentage-width tables
     */
    protected handlePWidth(svg: N): number;
    /******************************************************************/
    /**
     * @param {string} style   The line style whose class is to be obtained
     * @returns {string}       The class name for the style
     */
    protected lineClass(style: string): string;
    /**
     * @param {number} w       The width of the frame
     * @param {number} h       The height of the frame
     * @param {number} d       The depth of the frame
     * @param {string} style   The border style for the frame
     * @returns {N}            The SVG element for the frame
     */
    protected makeFrame(w: number, h: number, d: number, style: string): N;
    /**
     * @param {number} x       The x location of the line
     * @param {string} style   The border style for the line
     * @param {number} t       The line thickness
     * @returns {N}            The SVG element for the line
     */
    protected makeVLine(x: number, style: string, t: number): N;
    /**
     * @param {number} y       The y location of the line
     * @param {string} style   The border style for the line
     * @param {number} t       The line thickness
     * @returns {N}            The SVG element for the line
     */
    protected makeHLine(y: number, style: string, t: number): N;
    /**
     * @param {number} t                The thickness of the line
     * @param {string} style            The border style for the line
     * @param {OptionList} properties   The list of properties to modify
     * @param {OptionList}              The modified properties
     */
    protected setLineThickness(t: number, style: string, properties: OptionList): OptionList;
    /******************************************************************/
    /**
     * Handle addition of labels to the table
     *
     * @param {N} svg       The container for the table contents
     * @param {N} parent    The parent containing the the table
     * @param {number} dx   The adjustement for percentage width tables
     */
    protected handleLabels(svg: N, _parent: N, dx: number): void;
    /**
     * Add spacing elements between the label rows to align them with the rest of the table
     */
    protected spaceLabels(): void;
    /**
     * Handles tables with labels so that the label will move with the size of the container
     *
     * @param {N} svg         The SVG container for the table
     * @param {N} labels      The group of labels
     * @param {string} side   The side alignment (left or right)
     */
    protected topTable(svg: N, labels: N, side: string): void;
    /**
     * @param {N} svg         The SVG container for the table
     * @param {N} labels      The group of labels
     * @param {string} side   The side alignment (left or right)
     * @param {number} dx     The adjustement for percentage width tables
     */
    protected subTable(svg: N, labels: N, side: string, dx: number): void;
}
export {};
