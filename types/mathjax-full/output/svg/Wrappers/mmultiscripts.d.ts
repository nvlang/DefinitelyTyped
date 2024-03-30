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
 * @fileoverview  Implements the SVGmmultiscripts wrapper for the MmlMmultiscripts object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { SVGWrapper, Constructor } from '../Wrapper.js';
import { SVGmsubsup } from './msubsup.js';
/*****************************************************************/
/**
 * A function taking two widths and returning an offset of the first in the second
 */
export type AlignFunction = (w: number, W: number) => number;
/**
 * Get the function for aligning scripts horizontally (left, center, right)
 */
export declare function AlignX(align: string): AlignFunction;
declare const SVGmmultiscripts_base: import("../../common/Wrappers/mmultiscripts.js").MmultiscriptsConstructor<SVGWrapper<any, any, any>> & Constructor<SVGmsubsup<any, any, any>>;
/*****************************************************************/
/**
 * The SVGmmultiscripts wrapper for the MmlMmultiscripts object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class SVGmmultiscripts<N, T, D> extends SVGmmultiscripts_base {
    /**
     * The mmultiscripts wrapper
     */
    static kind: string;
    /**
     * @override
     */
    toSVG(parent: N): void;
    /**
     * Create a table with the super and subscripts properly separated and aligned.
     *
     * @param {number} x       The x offset of the scripts
     * @param {number} u       The baseline offset for the superscripts
     * @param {number} v       The baseline offset for the subscripts
     * @param {number} i       The starting index for the scripts
     * @param {number} n       The number of sub/super-scripts
     * @param {string} align   The alignment for the scripts
     * @return {number}        The right-hand offset of the scripts
     */
    protected addScripts(x: number, u: number, v: number, i: number, n: number, align: string): number;
}
export {};
