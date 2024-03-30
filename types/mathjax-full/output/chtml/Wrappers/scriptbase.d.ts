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
 * @fileoverview  Implements the a base class for CHTMLmsubsup, CHTMLmunderover
 *                and their relatives.  (Since munderover can become msubsup
 *                when movablelimits is set, munderover needs to be able to
 *                do the same thing as msubsup in some cases.)
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { CHTMLWrapper, CHTMLConstructor } from '../Wrapper.js';
import { BBox } from '../../../util/BBox.js';
declare const CHTMLscriptbase_base: import("../../common/Wrappers/scriptbase.js").ScriptbaseConstructor<CHTMLWrapper<any, any, any>> & CHTMLConstructor<any, any, any>;
/*****************************************************************/
/**
 * A base class for msup/msub/msubsup and munder/mover/munderover
 * wrapper implementations
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class CHTMLscriptbase<N, T, D> extends CHTMLscriptbase_base {
    /**
     * The scriptbase wrapper
     */
    static kind: string;
    /**
     * This gives the common output for msub and msup.  It is overridden
     * for all the others (msubsup, munder, mover, munderover).
     *
     * @override
     */
    toCHTML(parent: N): void;
    /**
     * @param {N[]} nodes    The HTML elements to be centered in a stack
     * @param {number[]} dx  The x offsets needed to center the elements
     */
    protected setDeltaW(nodes: N[], dx: number[]): void;
    /**
     * @param {N} over        The HTML element for the overscript
     * @param {BBox} overbox  The bbox for the overscript
     */
    protected adjustOverDepth(over: N, overbox: BBox): void;
    /**
     * @param {N} under        The HTML element for the underscript
     * @param {BBox} underbox  The bbox for the underscript
     */
    protected adjustUnderDepth(under: N, underbox: BBox): void;
    /**
     * @param {N} base        The HTML element for the base
     * @param {BBox} basebox  The bbox for the base
     */
    protected adjustBaseHeight(base: N, basebox: BBox): void;
}
export {};
