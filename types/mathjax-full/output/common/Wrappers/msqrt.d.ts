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
 * @fileoverview  Implements the CommonMsqrt wrapper for the MmlMsqrt object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { AnyWrapper, WrapperConstructor, Constructor } from '../Wrapper.js';
import { BBox } from '../../../util/BBox.js';
/*****************************************************************/
/**
 * The CommonMsqrt interface
 */
export interface CommonMsqrt extends AnyWrapper {
    /**
     * The index of the base of the root in childNodes
     */
    readonly base: number;
    /**
     * The index of the surd in childNodes
     */
    readonly surd: number;
    /**
     * The index of the root in childNodes (or null if none)
     */
    readonly root: number;
    /**
     * The requested height of the stretched surd character
     */
    surdH: number;
    /**
     * Combine the bounding box of the root (overridden in mroot)
     *
     * @param {BBox} bbox  The bounding box so far
     * @param {BBox} sbox  The bounding box of the surd
     * @param {number} H   The height of the root as a whole
     */
    combineRootBBox(bbox: BBox, sbox: BBox, H: number): void;
    /**
     * @param {BBox} sbox  The bounding box for the surd character
     * @return {number[]}  The p, q, and x values for the TeX layout computations
     */
    getPQ(sbox: BBox): number[];
    /**
     * @param {BBox} sbox  The bounding box of the surd
     * @param {number} H   The height of the root as a whole
     * @return {number[]}  The x offset of the surd, and the height, x offset, and scale of the root
     */
    getRootDimens(sbox: BBox, H: Number): number[];
}
/**
 * Shorthand for the CommonMsqrt constructor
 */
export type MsqrtConstructor = Constructor<CommonMsqrt>;
/*****************************************************************/
/**
 * The CommonMsqrt wrapper mixin for the MmlMsqrt object
 *
 * @template T  The Wrapper class constructor type
 */
export declare function CommonMsqrtMixin<T extends WrapperConstructor>(Base: T): MsqrtConstructor & T;
