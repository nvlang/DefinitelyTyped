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
 * @fileoverview  Implements the CommonMo wrapper mixin for the MmlMo object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { AnyWrapper, WrapperConstructor, Constructor } from '../Wrapper.js';
import { BBox } from '../../../util/BBox.js';
import { DelimiterData } from '../FontData.js';
/*****************************************************************/
/**
 * Convert direction to letter
 */
export declare const DirectionVH: {
    [n: number]: string;
};
/*****************************************************************/
/**
 * The CommonMo interface
 */
export interface CommonMo extends AnyWrapper {
    /**
     * The font size that a stretched operator uses.
     * If -1, then stretch arbitrarily, and bbox gives the actual height, depth, width
     */
    size: number;
    /**
     * True if used as an accent in an munderover construct
     */
    isAccent: boolean;
    /**
     * Get the (unmodified) bbox of the contents (before centering or setting accents to width 0)
     *
     * @param {BBox} bbox   The bbox to fill
     */
    protoBBox(bbox: BBox): void;
    /**
     * @return {number}    Offset to the left by half the actual width of the accent
     */
    getAccentOffset(): number;
    /**
     * @param {BBox} bbox   The bbox to center, or null to compute the bbox
     * @return {number}     The offset to move the glyph to center it
     */
    getCenterOffset(bbox?: BBox): number;
    /**
     * Determint variant for vertically/horizontally stretched character
     *
     * @param {number[]} WH  size to stretch to, either [W] or [H, D]
     * @param {boolean} exact  True if not allowed to use delimiter factor and shortfall
     */
    getStretchedVariant(WH: number[], exact?: boolean): void;
    /**
     * @param {string} name   The name of the attribute to get
     * @param {number} value  The default value to use
     * @return {number}       The size in em's of the attribute (or the default value)
     */
    getSize(name: string, value: number): number;
    /**
     * @param {number[]} WH  Either [W] for width, [H, D] for height and depth, or [] for min/max size
     * @return {number}      Either the width or the total height of the character
     */
    getWH(WH: number[]): number;
    /**
     * @param {number[]} WHD     The [W] or [H, D] being requested from the parent mrow
     * @param {number} D         The full dimension (including symmetry, etc)
     * @param {DelimiterData} C  The delimiter data for the stretchy character
     */
    getStretchBBox(WHD: number[], D: number, C: DelimiterData): void;
    /**
     * @param {number[]} WHD     The [H, D] being requested from the parent mrow
     * @param {number} HD        The full height (including symmetry, etc)
     * @param {DelimiterData} C  The delimiter data for the stretchy character
     * @return {number[]}        The height and depth for the vertically stretched delimiter
     */
    getBaseline(WHD: number[], HD: number, C: DelimiterData): number[];
    /**
     * Determine the size of the delimiter based on whether full extenders should be used or not.
     *
     * @param {number} D          The requested size of the delimiter
     * @param {DelimiterData} C   The data for the delimiter
     * @return {number}           The final size of the assembly
     */
    checkExtendedHeight(D: number, C: DelimiterData): number;
}
/**
 * Shorthand for the CommonMo constructor
 */
export type MoConstructor = Constructor<CommonMo>;
/*****************************************************************/
/**
 * The CommomMo wrapper mixin for the MmlMo object
 *
 * @template T  The Wrapper class constructor type
 */
export declare function CommonMoMixin<T extends WrapperConstructor>(Base: T): MoConstructor & T;
