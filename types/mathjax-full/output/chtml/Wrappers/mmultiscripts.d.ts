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
 * @fileoverview  Implements the CHTMLmmultiscripts wrapper for the MmlMmultiscripts object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { CHTMLWrapper, Constructor } from '../Wrapper.js';
import { CHTMLmsubsup } from './msubsup.js';
import { BBox } from '../../../util/BBox.js';
import { StyleList } from '../../../util/StyleList.js';
declare const CHTMLmmultiscripts_base: import("../../common/Wrappers/mmultiscripts.js").MmultiscriptsConstructor<CHTMLWrapper<any, any, any>> & Constructor<CHTMLmsubsup<any, any, any>>;
/*****************************************************************/
/**
 * The CHTMLmmultiscripts wrapper for the MmlMmultiscripts object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class CHTMLmmultiscripts<N, T, D> extends CHTMLmmultiscripts_base {
    /**
     * The mmultiscripts wrapper
     */
    static kind: string;
    /**
     * @override
     */
    static styles: StyleList;
    /*************************************************************/
    /**
     * @override
     */
    toCHTML(parent: N): void;
    /**
     * Create a table with the super and subscripts properly separated and aligned.
     *
     * @param {number} u       The baseline offset for the superscripts
     * @param {number} v       The baseline offset for the subscripts
     * @param {boolean} isPre  True for prescripts, false for scripts
     * @param {BBox} sub       The subscript bounding box
     * @param {BBox} sup       The superscript bounding box
     * @param {number} i       The starting index for the scripts
     * @param {number} n       The number of sub/super-scripts
     * @return {N}             The script table for these scripts
     */
    protected addScripts(u: number, v: number, isPre: boolean, sub: BBox, sup: BBox, i: number, n: number): N;
}
export {};
