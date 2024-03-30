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
 * @fileoverview  Implements the CHTMLmsqrt wrapper for the MmlMsqrt object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { CHTMLWrapper, CHTMLConstructor } from '../Wrapper.js';
import { BBox } from '../../../util/BBox.js';
import { StyleList } from '../../../util/StyleList.js';
declare const CHTMLmsqrt_base: import("../../common/Wrappers/msqrt.js").MsqrtConstructor & CHTMLConstructor<any, any, any>;
/*****************************************************************/
/**
 * The CHTMLmsqrt wrapper for the MmlMsqrt object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class CHTMLmsqrt<N, T, D> extends CHTMLmsqrt_base {
    /**
     * The msqrt wrapper
     */
    static kind: string;
    /**
     * @override
     */
    static styles: StyleList;
    /**
     * @override
     */
    toCHTML(parent: N): void;
    /**
     * Add root HTML (overridden in mroot)
     *
     * @param {N} ROOT             The container for the root
     * @param {CHTMLWrapper} root  The wrapped MML root content
     * @param {BBox} sbox          The bounding box of the surd
     * @param {number} H           The height of the root as a whole
     */
    protected addRoot(_ROOT: N, _root: CHTMLWrapper<N, T, D>, _sbox: BBox, _H: number): void;
}
export {};
