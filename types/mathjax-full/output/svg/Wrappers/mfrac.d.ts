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
 * @fileoverview  Implements the SVGmfrac wrapper for the MmlMfrac object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { SVGConstructor } from '../Wrapper.js';
import { SVGmo } from './mo.js';
declare const SVGmfrac_base: import("../../common/Wrappers/mfrac.js").MfracConstructor & SVGConstructor<any, any, any>;
/*****************************************************************/
/**
 * The SVGmfrac wrapper for the MmlMfrac object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class SVGmfrac<N, T, D> extends SVGmfrac_base {
    /**
     * The mfrac wrapper
     */
    static kind: string;
    /**
     * An mo element used to render bevelled fractions
     */
    bevel: SVGmo<N, T, D>;
    /************************************************/
    /**
     * @override
     */
    toSVG(parent: N): void;
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
