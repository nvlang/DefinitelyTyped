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
 * @fileoverview  Implements the CommonMenclose wrapper mixin for the MmlMenclose object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { AnyWrapper, WrapperConstructor, Constructor, AnyWrapperClass } from '../Wrapper.js';
import * as Notation from '../Notation.js';
import { CommonMsqrt } from './msqrt.js';
/*****************************************************************/
/**
 * The CommonMenclose interface
 *
 * @template W  The menclose wrapper type
 */
export interface CommonMenclose<W extends AnyWrapper, S extends CommonMsqrt, N> extends AnyWrapper {
    /**
     *  The notations active on this menclose, and the one to use for the child, if any
     */
    notations: Notation.List<W, N>;
    renderChild: Notation.Renderer<W, N>;
    /**
     * fake msqrt for radial notation (if used)
     */
    msqrt: S;
    /**
     * The padding, thickness, and shape of the arrow head
     *   (may be overridden using data-padding, data-thickness, and data-arrowhead attibutes)
     */
    padding: number;
    thickness: number;
    arrowhead: {
        x: number;
        y: number;
        dx: number;
    };
    /**
     * The top, right, bottom, and left padding, added by notations
     */
    TRBL: Notation.PaddingData;
    /**
     * Look up the data-* attributes and override the default values
     */
    getParameters(): void;
    /**
     *  Get the notations given in the notation attribute
     *    and check if any are used to render the child nodes
     */
    getNotations(): void;
    /**
     *  Remove any redundant notations
     */
    removeRedundantNotations(): void;
    /**
     *  Run any initialization needed by notations in use
     */
    initializeNotations(): void;
    /**
     * @return {Notation.PaddingData}  Array of the maximum extra space from the notations along each side
     */
    getBBoxExtenders(): Notation.PaddingData;
    /**
     * @return {Notation.PaddingData}  Array of padding (i.e., BBox minus border) along each side
     */
    getPadding(): Notation.PaddingData;
    /**
     * Each entry in X gets replaced by the corresponding one in Y if it is larger
     *
     * @param {Notation.PaddingData} X   An array of numbers
     * @param {Notation.PaddingData} Y   An array of numbers that replace smaller ones in X
     */
    maximizeEntries(X: Notation.PaddingData, Y: Notation.PaddingData): void;
    /**
     * Get the offset amount for the given direction for vertical and horizontal centering
     *
     * @param {string} direction    The direction 'X' or 'Y' for the offset
     * @return {number}             The amount of offset in that direction
     */
    getOffset(direction: string): number;
    /**
     * @param {number} w    The width of the box whose diagonal is needed
     * @param {number} h    The height of the box whose diagonal is needed
     * @return {number[]}   The angle and width of the diagonal of the box
     */
    getArgMod(w: number, h: number): [number, number];
    /**
     * Create an arrow for output
     *
     * @param {number} w         The length of the arrow
     * @param {number} a         The angle for the arrow
     * @param {boolean} double   True if this is a double-headed arrow
     * @param {string} offset    'X' for vertical arrow, 'Y' for horizontal
     * @param {number} trans     Distance to translate in the offset direction
     * @return {N}               The newly created arrow
     */
    arrow(w: number, a: number, double: boolean, offset?: string, trans?: number): N;
    /**
     * Get the angle and width of a diagonal arrow, plus the x and y extension
     *   past the content bounding box
     */
    arrowData(): {
        a: number;
        W: number;
        x: number;
        y: number;
    };
    /**
     * Get the angle and width for a diagonal arrow
     *
     * @return {[number, number]}   The angle and width
     */
    arrowAW(): [number, number];
    /**
     * Create an unattached msqrt wrapper to render the 'radical' notation.
     *   We replace the inferred mrow of the msqrt with the one from the menclose
     *   but without changing the parent pointer, so as not to detach it from
     *   the menclose (which would desrtoy the original MathML tree).
     *
     * @param {W} child   The inferred mrow that is the child of this menclose
     * @return {S}        The newly created (but detached) msqrt wrapper
     */
    createMsqrt(child: W): S;
    /**
     * @return {number[]}  The differences between the msqrt bounding box
     *                     and its child bounding box (i.e., the extra space
     *                     created by the radical symbol).
     */
    sqrtTRBL(): number[];
}
/**
 * The CommonMenclose class interface
 *
 * @template W  The menclose wrapper type
 * @templare N  The DOM node class
 */
export interface CommonMencloseClass<W extends AnyWrapper, N> extends AnyWrapperClass {
    /**
     *  The definitions of the various notations
     */
    notations: Notation.DefList<W, N>;
}
/**
 * Shorthand for the CommonMenclose constructor
 *
 * @template W  The menclose wrapper type
 */
export type MencloseConstructor<W extends AnyWrapper, S extends CommonMsqrt, N> = Constructor<CommonMenclose<W, S, N>>;
/*****************************************************************/
/**
 * The CommonMenclose wrapper mixin for the MmlMenclose object
 *
 * @template W  The menclose wrapper type
 * @templare N  The DOM node class
 * @templare S  The msqrt wrapper class
 * @template T  The Wrapper class constructor type
 */
export declare function CommonMencloseMixin<W extends AnyWrapper, S extends CommonMsqrt, N, T extends WrapperConstructor>(Base: T): MencloseConstructor<W, S, N> & T;
