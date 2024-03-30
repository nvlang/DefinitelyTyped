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
 * @fileoverview  Implements the CcommonMtr wrapper mixin for the MmlMtr object
 *                and CommonMlabeledtr wrapper mixin for MmlMlabeledtr
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { AnyWrapper, WrapperConstructor, Constructor } from '../Wrapper.js';
import { BBox } from '../../../util/BBox.js';
/*****************************************************************/
/**
 * The CommonMtr interface
 *
 * @template C  The class for table cells
 */
export interface CommonMtr<C extends AnyWrapper> extends AnyWrapper {
    /**
     * The number of mtd's in the mtr
     */
    readonly numCells: number;
    /**
     * True if this is a labeled row
     */
    readonly labeled: boolean;
    /**
     * The child nodes that are part of the table (no label node)
     */
    readonly tableCells: C[];
    /**
     * @override;
     */
    childNodes: C[];
    /**
     * @param {number} i   The index of the child to get (skipping labels)
     * @return {C}         The ith child node wrapper
     */
    getChild(i: number): C;
    /**
     * @return {BBox[]}  An array of the bounding boxes for the mtd's in the row
     */
    getChildBBoxes(): BBox[];
    /**
     * Handle vertical stretching of cells to match height of
     *  other cells in the row.
     *
     * @param {number[]=} HD   The total height and depth for the row [H, D]
     *
     * If this isn't specified, the maximum height and depth is computed.
     */
    stretchChildren(HD?: number[]): void;
}
/**
 * Shorthand for the CommonMtr constructor
 *
 * @template C  The class for table cells
 */
export type MtrConstructor<C extends AnyWrapper> = Constructor<CommonMtr<C>>;
/*****************************************************************/
/**
 * The CommonMtr wrapper for the MmlMtr object
 *
 * @template C  The class for table cells
 * @template T  The Wrapper class constructor type
 */
export declare function CommonMtrMixin<C extends AnyWrapper, T extends WrapperConstructor>(Base: T): MtrConstructor<C> & T;
/*****************************************************************/
/**
 * The CommonMlabeledtr interface
 *
 * @template C  The class for table cells
 */
export interface CommonMlabeledtr<C extends AnyWrapper> extends CommonMtr<C> {
}
/**
 * Shorthand for the CommonMlabeledtr constructor
 *
 * @template C  The class for table cells
 */
export type MlabeledtrConstructor<C extends AnyWrapper> = Constructor<CommonMlabeledtr<C>>;
/*****************************************************************/
/**
 * The CommonMlabeledtr wrapper mixin for the MmlMlabeledtr object
 *
 * @template C  The class for table cells
 * @template T  The Wrapper class constructor type
 */
export declare function CommonMlabeledtrMixin<C extends AnyWrapper, T extends MtrConstructor<C>>(Base: T): MlabeledtrConstructor<C> & T;
