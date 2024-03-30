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
 * @fileoverview  Implements the SVGmtr wrapper for the MmlMtr object
 *                and SVGmlabeledtr for MmlMlabeledtr
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { SVGConstructor, Constructor } from '../Wrapper.js';
import { SVGmtd } from './mtd.js';
/**
 * The data needed for placeCell()
 */
export type SizeData = {
    x: number;
    y: number;
    w: number;
    lSpace: number;
    rSpace: number;
    lLine: number;
    rLine: number;
};
declare const SVGmtr_base: import("../../common/Wrappers/mtr.js").MtrConstructor<SVGmtd<any, any, any>> & SVGConstructor<any, any, any>;
/*****************************************************************/
/**
 * The SVGmtr wrapper for the MmlMtr object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class SVGmtr<N, T, D> extends SVGmtr_base {
    /**
     * The mtr wrapper
     */
    static kind: string;
    /**
     * The height of the row
     */
    H: number;
    /**
     * The depth of the row
     */
    D: number;
    /**
     * The space above the row
     */
    tSpace: number;
    /**
     * The space below the row
     */
    bSpace: number;
    /**
     * The line space above the row
     */
    tLine: number;
    /**
     * The line space below the row
     */
    bLine: number;
    /**
     * @override
     */
    toSVG(parent: N): void;
    /**
     * Set the location of the cell contents in the row and expand the cell background colors
     *
     * @param {N} svg   The container for the table
     */
    protected placeCells(svg: N): void;
    /**
     * @param {SVGmtd} cell      The cell to place
     * @param {SizeData} sizes   The positioning information
     * @return {number}          The new x position
     */
    placeCell(cell: SVGmtd<N, T, D>, sizes: SizeData): number;
    /**
     * Expand the backgound color to fill the entire row
     */
    protected placeColor(): void;
}
declare const SVGmlabeledtr_base: import("../../common/Wrappers/mtr.js").MlabeledtrConstructor<SVGmtd<any, any, any>> & Constructor<SVGmtr<any, any, any>>;
/*****************************************************************/
/**
 * The SVGlabeledmtr wrapper for the MmlMlabeledtr object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class SVGmlabeledtr<N, T, D> extends SVGmlabeledtr_base {
    /**
     * The mlabeledtr wrapper
     */
    static kind: string;
    /**
     * @override
     */
    toSVG(parent: N): void;
}
export {};
