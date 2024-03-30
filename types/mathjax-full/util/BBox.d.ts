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
 *  The data used to initialize a BBox
 */
export type BBoxData = {
    w?: number;
    h?: number;
    d?: number;
};
/*****************************************************************/
/**
 *  The BBox class
 */
export declare class BBox {
    /**
     * Constant for pwidth of full width box
     */
    static fullWidth: string;
    /**
     *  CSS styles that affect BBoxes
     */
    static StyleAdjust: [string, string, number?][];
    /**
     *  These are the data stored for a bounding box
     */
    w: number;
    h: number;
    d: number;
    scale: number;
    rscale: number;
    L: number;
    R: number;
    pwidth: string;
    ic: number;
    sk: number;
    dx: number;
    /**
     * @return {BBox}  A BBox initialized to zeros
     */
    static zero(): BBox;
    /**
     * @return {BBox}  A BBox with height and depth not set
     */
    static empty(): BBox;
    /**
     * @param {BBoxData} def  The data with which to initialize the BBox
     *
     * @constructor
     */
    constructor(def?: BBoxData);
    /**
     * Set up a bbox for append() and combine() operations
     * @return {BBox}  the boox itself (for chaining calls)
     */
    empty(): BBox;
    /**
     * Convert any unspecified values into zeros
     */
    clean(): void;
    /**
     * @param {number} scale  The scale to use to modify the bounding box size
     */
    rescale(scale: number): void;
    /**
     * @param {BBox} cbox  A bounding to combine with this one
     * @param {number} x   An x-offest for the child bounding box
     * @param {number} y   A y-offset for the child bounding box
     */
    combine(cbox: BBox, x?: number, y?: number): void;
    /**
     * @param {BBox} cbox  A bounding box to be added to the right of this one
     */
    append(cbox: BBox): void;
    /**
     * @param {BBox} cbox  The bounding box to use to overwrite this one
     */
    updateFrom(cbox: BBox): void;
}
