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
 * @fileoverview  Implements the CHTMLmenclose wrapper for the MmlMenclose object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { CHTMLWrapper, CHTMLConstructor } from '../Wrapper.js';
import { CHTMLmsqrt } from './msqrt.js';
import * as Notation from '../Notation.js';
import { StyleList } from '../../../util/StyleList.js';
declare const CHTMLmenclose_base: import("../../common/Wrappers/menclose.js").MencloseConstructor<CHTMLWrapper<any, any, any>, CHTMLmsqrt<any, any, any>, any> & CHTMLConstructor<any, any, any>;
/*****************************************************************/
/**
 * The CHTMLmenclose wrapper for the MmlMenclose object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class CHTMLmenclose<N, T, D> extends CHTMLmenclose_base {
    /**
     * The menclose wrapper
     */
    static kind: string;
    /**
     * Styles needed for the various notations
     */
    static styles: StyleList;
    /**
     *  The definitions of the various notations
     */
    static notations: Notation.DefList<CHTMLmenclose<any, any, any>, any>;
    /********************************************************/
    /**
     * @override
     */
    toCHTML(parent: N): void;
    /********************************************************/
    /**
     * Create an arrow using HTML elements
     *
     * @param {number} w        The length of the arrow
     * @param {number} a        The angle for the arrow
     * @param {boolean} double  True if this is a double-headed arrow
     * @param {string} offset   'X' for vertical arrow, 'Y' for horizontal
     * @param {number} dist     Distance to translate in the offset direction
     * @return {N}              The newly created arrow
     */
    arrow(w: number, a: number, double: boolean, offset?: string, dist?: number): N;
    /**
     * @param {N} arrow          The arrow whose thickness and arrow head is to be adjusted
     * @param {boolean} double   True if the arrow is double-headed
     */
    protected adjustArrow(arrow: N, double: boolean): void;
    /**
     * @param {N} head            The piece of arrow head to be adjusted
     * @param {string[]} border   The border sizes [T, R, B, L]
     * @param {string} a          The skew angle for the piece
     */
    protected adjustHead(head: N, border: string[], a: string): void;
    /**
     * @param {N} line           The arrow shaft to be adjusted
     * @param {number} t         The arrow shaft thickness
     * @param {number} x         The arrow head x size
     * @param {boolean} double   True if the arrow is double-headed
     */
    protected adjustLine(line: N, t: number, x: number, double: boolean): void;
    /**
     * @param {N} arrow        The arrow whose position is to be adjusted
     * @param {string} offset  The direction to move the arrow
     * @param {number} d       The distance to translate in that direction
     */
    protected moveArrow(arrow: N, offset: string, d: number): void;
    /********************************************************/
    /**
     * @param {N} node   The HTML element whose border width must be
     *                   adjusted if the thickness isn't the default
     * @return {N}       The adjusted element
     */
    adjustBorder(node: N): N;
    /**
     * @param {N} shape   The svg element whose stroke-thickness must be
     *                    adjusted if the thickness isn't the default
     * @return {N}        The adjusted element
     */
    adjustThickness(shape: N): N;
    /********************************************************/
    /**
     * @param {number} m    A number to be shown with a fixed number of digits
     * @param {number=} n   The number of digits to use
     * @return {string}     The formatted number
     */
    fixed(m: number, n?: number): string;
    /**
     * @override
     * (make it public so it can be called by the notation functions)
     */
    em(m: number): string;
}
export {};
