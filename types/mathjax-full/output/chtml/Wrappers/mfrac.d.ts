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
 * @fileoverview  Implements the CHTMLmfrac wrapper for the MmlMfrac object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { CHTMLConstructor } from '../Wrapper.js';
import { CHTMLmo } from './mo.js';
import { StyleList } from '../../../util/StyleList.js';
declare const CHTMLmfrac_base: import("../../common/Wrappers/mfrac.js").MfracConstructor & CHTMLConstructor<any, any, any>;
/*****************************************************************/
/**
 * The CHTMLmfrac wrapper for the MmlMfrac object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class CHTMLmfrac<N, T, D> extends CHTMLmfrac_base {
    /**
     * The mfrac wrapper
     */
    static kind: string;
    /**
     * @override
     */
    static styles: StyleList;
    /**
     * An mop element to use for bevelled fractions
     */
    bevel: CHTMLmo<N, T, D>;
    /************************************************/
    /**
     * @override
     */
    toCHTML(parent: N): void;
    /************************************************/
    /**
     * @param {boolean} display  True when fraction is in display mode
     * @param {number} t         The rule line thickness
     */
    protected makeFraction(display: boolean, t: number): void;
    /************************************************/
    /**
     * @param {boolean} display  True when fraction is in display mode
     */
    protected makeAtop(display: boolean): void;
    /************************************************/
    /**
     * @param {boolean} display  True when fraction is in display mode
     */
    protected makeBevelled(display: boolean): void;
}
export {};
