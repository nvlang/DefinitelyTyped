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
 * @fileoverview  Implements the SVGmtd wrapper for the MmlMtd object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { SVGConstructor } from '../Wrapper.js';
declare const SVGmtd_base: import("../../common/Wrappers/mtd.js").MtdConstructor & SVGConstructor<any, any, any>;
/*****************************************************************/
/**
 * The SVGmtd wrapper for the MmlMtd object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class SVGmtd<N, T, D> extends SVGmtd_base {
    /**
     * The mtd wrapper
     */
    static kind: string;
    /**
     * @param {number} x    The x offset of the left side of the cell
     * @param {number} y    The y offset of the baseline of the cell
     * @param {number} W    The width of the cell
     * @param {number} H    The height of the cell
     * @param {number} D    The depth of the cell
     * @return {[number, number]}   The x and y offsets used
     */
    placeCell(x: number, y: number, W: number, H: number, D: number): [number, number];
    /**
     * @param {number} x    The x offset of the left side of the cell
     * @param {number} y    The y position of the bottom of the cell
     * @param {number} W    The width of the cell
     * @param {number} H    The height + depth of the cell
     */
    placeColor(x: number, y: number, W: number, H: number): void;
}
export {};
