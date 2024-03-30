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
 * @fileoverview  Implements the CommonMmultiscripts wrapper mixin for the MmlMmultiscripts object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { AnyWrapper, Constructor } from '../Wrapper.js';
import { CommonMsubsup, MsubsupConstructor } from './msubsup.js';
import { BBox } from '../../../util/BBox.js';
/*****************************************************************/
/**
 * The data about the scripts and base
 */
export type ScriptData = {
    base: BBox;
    sub: BBox;
    sup: BBox;
    psub: BBox;
    psup: BBox;
    numPrescripts: number;
    numScripts: number;
};
export type ScriptDataName = keyof ScriptData;
/**
 * The lists of all the individual script bboxes
 */
export type ScriptLists = {
    base: BBox[];
    subList: BBox[];
    supList: BBox[];
    psubList: BBox[];
    psupList: BBox[];
};
export type ScriptListName = keyof ScriptLists;
/**
 * The type of script that follows the given type
 */
export declare const NextScript: {
    [key: string]: ScriptListName;
};
/**
 * The names of the scripts (for looping)
 */
export declare const ScriptNames: (keyof ScriptData)[];
/*****************************************************************/
/**
 * The CommonMmultiscripts interface
 *
 * @template W  The child-node Wrapper class
 */
export interface CommonMmultiscripts<W extends AnyWrapper> extends CommonMsubsup<W> {
    /**
     *  The cached data for the various bounding boxes
     */
    scriptData: ScriptData;
    /**
     *  The index of the child following the <mprescripts/> tag
     */
    firstPrescript: number;
    /**
     * @param {BBox} pre   The prescript bounding box
     * @param {BBox} post  The postcript bounding box
     * @return {BBox}      The combined bounding box
     */
    combinePrePost(pre: BBox, post: BBox): BBox;
    /**
     * Compute the bounding box information about all the scripts
     */
    getScriptData(): void;
    /**
     * @return {ScriptLists}  The bounding boxes for all the scripts divided into lists by position
     */
    getScriptBBoxLists(): ScriptLists;
    /**
     * Pad the second list, if it is one short
     *
     * @param {BBox[]} list1   The first list
     * @param {BBox[]} list2   The second list
     */
    padLists(list1: BBox[], list2: BBox[]): void;
    /**
     * @param {BBox} bbox1    The bbox for the combined subscripts
     * @param {BBox} bbox2    The bbox for the combined superscripts
     * @param {BBox[]} list1  The list of subscripts to combine
     * @param {BBox[]} list2  The list of superscripts to combine
     */
    combineBBoxLists(bbox1: BBox, bbox2: BBox, list1: BBox[], list2: BBox[]): void;
    /**
     * @param {BBox} bbox  The bounding box from which to get the (scaled) width, height, and depth
     */
    getScaledWHD(bbox: BBox): void;
}
/**
 * Shorthand for the CommonMmultiscripts constructor
 *
 * @template W  The child-node Wrapper class
 */
export type MmultiscriptsConstructor<W extends AnyWrapper> = Constructor<CommonMmultiscripts<W>>;
/*****************************************************************/
/**
 * The CommonMmultiscripts wrapper mixin for the MmlMmultiscripts object
 *
 * @template W  The child-node Wrapper class
 * @template T  The Wrapper class constructor type
 */
export declare function CommonMmultiscriptsMixin<W extends AnyWrapper, T extends MsubsupConstructor<W>>(Base: T): MmultiscriptsConstructor<W> & T;
