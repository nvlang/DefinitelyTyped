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
 * @fileoverview  Implements the a base mixin for CommonMsubsup, CommonMunderover
 *                and their relatives.  (Since munderover can become msubsup
 *                when movablelimits is set, munderover needs to be able to
 *                do the same thing as msubsup in some cases.)
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { AnyWrapper, WrapperConstructor, Constructor, AnyWrapperClass } from '../Wrapper.js';
import { BBox } from '../../../util/BBox.js';
/*****************************************************************/
/**
 * The CommonScriptbase interface
 *
 * @template W  The child-node Wrapper class
 */
export interface CommonScriptbase<W extends AnyWrapper> extends AnyWrapper {
    /**
     * The core mi or mo of the base (or the base itself if there isn't one)
     */
    readonly baseCore: W;
    /**
     * The base element's wrapper
     */
    readonly baseChild: W;
    /**
     * The relative scaling of the base compared to the munderover/msubsup
     */
    readonly baseScale: number;
    /**
     * The italic correction of the base (if any)
     */
    readonly baseIc: number;
    /**
     * True if base italic correction should be removed (msub and msubsup or mathaccents)
     */
    readonly baseRemoveIc: boolean;
    /**
     * True if the base is a single character
     */
    readonly baseIsChar: boolean;
    /**
     * True if the base has an accent under or over
     */
    readonly baseHasAccentOver: boolean;
    readonly baseHasAccentUnder: boolean;
    /**
     * True if this is an overline or underline
     */
    readonly isLineAbove: boolean;
    readonly isLineBelow: boolean;
    /**
     * True if this is an msup with script that is a math accent
     */
    readonly isMathAccent: boolean;
    /**
     * The script element's wrapper (overridden in subclasses)
     */
    readonly scriptChild: W;
    /***************************************************************************/
    /**
     * @return {W}    The wrapper for the base core mi or mo (or whatever)
     */
    getBaseCore(): W;
    /**
     * @return {W}    The base fence item or null
     */
    getSemanticBase(): W;
    /**
     * Recursively retrieves an element for a given fencepointer.
     *
     * @param {W} fence The potential fence.
     * @param {string} id The fencepointer id.
     * @return {W} The original fence the scripts belong to.
     */
    getBaseFence(fence: W, id: string): W;
    /**
     * @return {number}   The scaling factor for the base core relative to the munderover/msubsup
     */
    getBaseScale(): number;
    /**
     * The base's italic correction (properly scaled)
     */
    getBaseIc(): number;
    /**
     * An adjusted italic correction (for slightly better results)
     */
    getAdjustedIc(): number;
    /**
     * @return {boolean}  True if the base is an mi, mn, or mo (not a largeop) consisting of
     *                    a single unstretched character
     */
    isCharBase(): boolean;
    /**
     * Determine if the under- and overscripts are under- or overlines.
     */
    checkLineAccents(): void;
    /**
     * @param {W} script   The script node to check for being a line
     */
    isLineAccent(script: W): boolean;
    /***************************************************************************/
    /**
     * @return {number}    The base child's width without the base italic correction (if not needed)
     */
    getBaseWidth(): number;
    /**
     * Get the shift for the script (implemented in subclasses)
     *
     * @return {number[]}   The horizontal and vertical offsets for the script
     */
    getOffset(): number[];
    /**
     * @param {number} n    The value to use if the base isn't a (non-large-op, unstretched) char
     * @return {number}     Either n or 0
     */
    baseCharZero(n: number): number;
    /**
     * Get the shift for a subscript (TeXBook Appendix G 18ab)
     *
     * @return {number}     The vertical offset for the script
     */
    getV(): number;
    /**
     * Get the shift for a superscript (TeXBook Appendix G 18acd)
     *
     * @return {number}     The vertical offset for the script
     */
    getU(): number;
    /***************************************************************************/
    /**
     * @return {boolean}  True if the base has movablelimits (needed by munderover)
     */
    hasMovableLimits(): boolean;
    /**
     * Get the separation and offset for overscripts (TeXBoox Appendix G 13, 13a)
     *
     * @param {BBox} basebox  The bounding box of the base
     * @param {BBox} overbox  The bounding box of the overscript
     * @return {number[]}     The separation between their boxes, and the offset of the overscript
     */
    getOverKU(basebox: BBox, overbox: BBox): number[];
    /**
     * Get the separation and offset for underscripts (TeXBoox Appendix G 13, 13a)
     *
     * @param {BBox} basebox   The bounding box of the base
     * @param {BBox} underbox  The bounding box of the underscript
     * @return {number[]}      The separation between their boxes, and the offset of the underscript
     */
    getUnderKV(basebox: BBox, underbox: BBox): number[];
    /**
     * @param {BBox[]} boxes     The bounding boxes whose offsets are to be computed
     * @param {number[]=} delta  The initial x offsets of the boxes
     * @return {number[]}        The actual offsets needed to center the boxes in the stack
     */
    getDeltaW(boxes: BBox[], delta?: number[]): number[];
    /**
     * @param {boolean=} noskew   Whether to ignore the skew amount
     * @return {number}           The offset for under and over
     */
    getDelta(noskew?: boolean): number;
    /**
     * Handle horizontal stretching of children to match greatest width
     *  of all children
     */
    stretchChildren(): void;
}
export interface CommonScriptbaseClass extends AnyWrapperClass {
    /**
     * Set to true for munderover/munder/mover/msup (Appendix G 13)
     */
    useIC: boolean;
}
/**
 * Shorthand for the CommonScriptbase constructor
 *
 * @template W  The child-node Wrapper class
 */
export type ScriptbaseConstructor<W extends AnyWrapper> = Constructor<CommonScriptbase<W>>;
/*****************************************************************/
/**
 * A base class for msup/msub/msubsup and munder/mover/munderover
 * wrapper mixin implementations
 *
 * @template W  The child-node Wrapper class
 * @template T  The Wrapper class constructor type
 */
export declare function CommonScriptbaseMixin<W extends AnyWrapper, T extends WrapperConstructor>(Base: T): ScriptbaseConstructor<W> & T;
