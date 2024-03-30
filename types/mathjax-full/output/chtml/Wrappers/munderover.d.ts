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
 * @fileoverview  Implements the CHTMLmunderover wrapper for the MmlMunderover object
 *                and the special cases CHTMLmunder and CHTMLmsup
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { CHTMLWrapper, Constructor } from '../Wrapper.js';
import { CHTMLmsubsup, CHTMLmsub, CHTMLmsup } from './msubsup.js';
import { StyleList } from '../../../util/StyleList.js';
declare const CHTMLmunder_base: import("../../common/Wrappers/munderover.js").MunderConstructor<CHTMLWrapper<any, any, any>> & Constructor<CHTMLmsub<any, any, any>>;
/*****************************************************************/
/**
 * The CHTMLmunder wrapper for the MmlMunder object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class CHTMLmunder<N, T, D> extends CHTMLmunder_base {
    /**
     * The munder wrapper
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
declare const CHTMLmover_base: import("../../common/Wrappers/munderover.js").MoverConstructor<CHTMLWrapper<any, any, any>> & Constructor<CHTMLmsup<any, any, any>>;
/*****************************************************************/
/**
 * The CHTMLmover wrapper for the MmlMover object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class CHTMLmover<N, T, D> extends CHTMLmover_base {
    /**
     * The mover wrapper
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
declare const CHTMLmunderover_base: import("../../common/Wrappers/munderover.js").MunderoverConstructor<CHTMLWrapper<any, any, any>> & Constructor<CHTMLmsubsup<any, any, any>>;
/*****************************************************************/
export declare class CHTMLmunderover<N, T, D> extends CHTMLmunderover_base {
    /**
     * The munderover wrapper
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
     * Make sure styles get output when called from munderover with movable limits
     *
     * @override
     */
    markUsed(): void;
}
export {};
