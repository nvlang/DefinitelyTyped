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
 * @fileoverview  Implements the SVGmenclose wrapper for the MmlMenclose object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { SVGWrapper, SVGConstructor } from '../Wrapper.js';
import { SVGmsqrt } from './msqrt.js';
import * as Notation from '../Notation.js';
declare const SVGmenclose_base: import("../../common/Wrappers/menclose.js").MencloseConstructor<SVGWrapper<any, any, any>, SVGmsqrt<any, any, any>, any> & SVGConstructor<any, any, any>;
/*****************************************************************/
/**
 * The SVGmenclose wrapper for the MmlMenclose object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class SVGmenclose<N, T, D> extends SVGmenclose_base {
    /**
     * The menclose wrapper
     */
    static kind: string;
    /**
     *  The definitions of the various notations
     */
    static notations: Notation.DefList<SVGmenclose<any, any, any>, any>;
    /********************************************************/
    /**
     * @override
     */
    toSVG(parent: N): void;
    /********************************************************/
    /**
     * Create an arrow using SVG elements
     *
     * @param {number} W        The length of the arrow
     * @param {number} a        The angle for the arrow
     * @param {boolean} double  True if this is a double-headed arrow
     * @param {string} offset   'X' for vertical arrow, 'Y' for horizontal
     * @param {number} dist     Distance to translate in the offset direction
     * @return {N}              The newly created arrow
     */
    arrow(W: number, a: number, double: boolean, offset?: string, dist?: number): N;
    /********************************************************/
    /**
     * Create a line element
     *
     * @param {number[]} pq   The coordinates of the endpoints, [x1, y1, x2, y2]
     * @return {N}            The newly created line element
     */
    line(pq: [number, number, number, number]): N;
    /**
     * Create a rectangle element
     *
     * @param {number} w    The width of the rectangle
     * @param {number} h    The height of the rectangle
     * @param {number} d    The depth of the rectangle
     * @param {number=} r   The corner radius for a rounded rectangle
     * @return {N}          The newly created line element
     */
    box(w: number, h: number, d: number, r?: number): N;
    /**
     * Create an ellipse element
     *
     * @param {number} w  The width of the ellipse
     * @param {number} h  The height of the ellipse
     * @param {number} d  The depth of the ellipse
     * @return {N}        The newly created ellipse node
     */
    ellipse(w: number, h: number, d: number): N;
    /**
     * Create a path element from the commands that specify it
     *
     * @param {string} join           The join style for the path
     * @param {(string|number)[]} P   The list of commands and coordinates for the path
     * @return {N}                    The newly created path
     */
    path(join: string, ...P: (string | number)[]): N;
    /**
     * Create a filled path element from the commands the specify it
     *   (same as path above, but no thickness adjustments)
     *
     * @param {(string|number)[]} P   The list of commands and coordinates for the path
     * @return {N}                    The newly created path
     */
    fill(...P: (string | number)[]): N;
}
export {};
