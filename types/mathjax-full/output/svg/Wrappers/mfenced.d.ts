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
 * @fileoverview  Implements the SVGmfenced wrapper for the MmlMfenced object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { SVGWrapper, SVGConstructor } from '../Wrapper.js';
import { SVGinferredMrow } from './mrow.js';
declare const SVGmfenced_base: import("../../common/Wrappers/mfenced.js").MfencedConstructor & SVGConstructor<any, any, any>;
/*****************************************************************/
/**
 * The SVGmfenced wrapper for the MmlMfenced object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class SVGmfenced<N, T, D> extends SVGmfenced_base {
    /**
     * The mfenced wrapper
     */
    static kind: string;
    /**
     * An mrow used to render the result
     */
    mrow: SVGinferredMrow<N, T, D>;
    /**
     * @override
     */
    toSVG(parent: N): void;
    /**
     * @param {SVGWrapper} parent   The parent to use for the fenced children
     */
    protected setChildrenParent(parent: SVGWrapper<N, T, D>): void;
}
export {};
