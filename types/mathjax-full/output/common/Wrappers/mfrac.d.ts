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
 * @fileoverview  Implements the CommonMfrac wrapper mixin for the MmlMfrac object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { AnyWrapper, WrapperConstructor, Constructor } from '../Wrapper.js';
import { BBox } from '../../../util/BBox.js';
/*****************************************************************/
/**
 * The CommonMfrac interface
 */
export interface CommonMfrac extends AnyWrapper {
    /**
     * @param {BBox} bbox        The buonding box to modify
     * @param {boolean} display  True for display-mode fractions
     * @param {number} t         The thickness of the line
     */
    getFractionBBox(bbox: BBox, display: boolean, t: number): void;
    /**
     * @param {boolean} display  True for display-mode fractions
     * @param {number} t         The thickness of the line
     * @return {Object}          The expanded rule thickness (T), and baseline offsets
     *                             for numerator and denomunator (u and v)
     */
    getTUV(display: boolean, t: number): {
        T: number;
        u: number;
        v: number;
    };
    /**
     * @param {BBox} bbox        The bounding box to modify
     * @param {boolean} display  True for display-mode fractions
     */
    getAtopBBox(bbox: BBox, display: boolean): void;
    /**
     * @param {boolean} display  True for diplay-mode fractions
     * @return {Object}
     *    The vertical offsets of the numerator (u), the denominator (v),
     *    the separation between the two, and the bboxes themselves.
     */
    getUVQ(display: boolean): {
        u: number;
        v: number;
        q: number;
        nbox: BBox;
        dbox: BBox;
    };
    /**
     * @param {BBox} bbox        The boundng box to modify
     * @param {boolean} display  True for display-mode fractions
     */
    getBevelledBBox(bbox: BBox, display: boolean): void;
    /**
     * @param {boolean} display  True for display-style fractions
     * @return {Object}          The height (H) of the bevel, horizontal offest (delta)
     *                             vertical offsets (u and v) of the parts, and
     *                             bounding boxes of the parts.
     */
    getBevelData(display: boolean): {
        H: number;
        delta: number;
        u: number;
        v: number;
        nbox: BBox;
        dbox: BBox;
    };
    /**
     * @return {boolean}   True if in display mode, false otherwise
     */
    isDisplay(): boolean;
}
/**
 * Shorthand for the CommonMfrac constructor
 */
export type MfracConstructor = Constructor<CommonMfrac>;
/*****************************************************************/
/**
 * The CommonMfrac wrapper mixin for the MmlMfrac object
 *
 * @template T  The Wrapper class constructor type
 */
export declare function CommonMfracMixin<T extends WrapperConstructor>(Base: T): MfracConstructor & T;
