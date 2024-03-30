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
 * @fileoverview  Implements the CommonMpadded wrapper mixin for the MmlMpadded object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { AnyWrapper, WrapperConstructor, Constructor } from '../Wrapper.js';
import { BBox } from '../../../util/BBox.js';
import { Property } from '../../../core/Tree/Node.js';
/*****************************************************************/
/**
 * The CommonMpadded interface
 */
export interface CommonMpadded extends AnyWrapper {
    /**
     * Get the content bounding box, and the change in size and offsets
     *   as specified by the parameters
     *
     * @return {number[]}  The original height, depth, width, the changes in height, depth,
     *                    and width, and the horizontal and vertical offsets of the content
     */
    getDimens(): number[];
    /**
     * Get a particular dimension, which can be relative to any of the BBox dimensions,
     *   and can be an offset from the default size of the given dimension.
     *
     * @param {Property} length   The value to be converted to a length in ems
     * @param {BBox} bbox         The bbox of the mpadded content
     * @param {string=} d         The default dimension to use for relative sizes ('w', 'h', or 'd')
     * @param {number=} m         The minimum value allowed for the dimension
     * @return {number}           The final dimension in ems
     */
    dimen(length: Property, bbox: BBox, d?: string, m?: number): number;
}
/**
 * Shorthand for the CommonMpadded constructor
 */
export type MpaddedConstructor = Constructor<CommonMpadded>;
/*****************************************************************/
/**
 * The CommomMpadded wrapper for the MmlMpadded object
 *
 * @template T  The Wrapper class constructor type
 */
export declare function CommonMpaddedMixin<T extends WrapperConstructor>(Base: T): MpaddedConstructor & T;
