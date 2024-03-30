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
 * @fileoverview  Implements the CHTMLmsubsup wrapper for the MmlMsubsup object
 *                and the special cases CHTMLmsub and CHTMLmsup
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { CHTMLWrapper, Constructor } from '../Wrapper.js';
import { CHTMLscriptbase } from './scriptbase.js';
import { StyleList } from '../../../util/StyleList.js';
declare const CHTMLmsub_base: import("../../common/Wrappers/msubsup.js").MsubConstructor<CHTMLWrapper<any, any, any>> & Constructor<CHTMLscriptbase<any, any, any>>;
/*****************************************************************/
/**
 * The CHTMLmsub wrapper for the MmlMsub object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class CHTMLmsub<N, T, D> extends CHTMLmsub_base {
    /**
     * The msub wrapper
     */
    static kind: string;
}
declare const CHTMLmsup_base: import("../../common/Wrappers/msubsup.js").MsupConstructor<CHTMLWrapper<any, any, any>> & Constructor<CHTMLscriptbase<any, any, any>>;
/*****************************************************************/
/**
 * The CHTMLmsup wrapper for the MmlMsup object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class CHTMLmsup<N, T, D> extends CHTMLmsup_base {
    /**
     * The msup wrapper
     */
    static kind: string;
}
declare const CHTMLmsubsup_base: import("../../common/Wrappers/msubsup.js").MsubsupConstructor<CHTMLWrapper<any, any, any>> & Constructor<CHTMLscriptbase<any, any, any>>;
/*****************************************************************/
/**
 * The CHTMLmsubsup wrapper for the MmlMsubsup object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class CHTMLmsubsup<N, T, D> extends CHTMLmsubsup_base {
    /**
     * The msubsup wrapper
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
}
export {};
