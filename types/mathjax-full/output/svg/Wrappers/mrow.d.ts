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
 * @fileoverview  Implements the SVGmrow wrapper for the MmlMrow object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { SVGConstructor, Constructor } from '../Wrapper.js';
declare const SVGmrow_base: import("../../common/Wrappers/mrow.js").MrowConstructor & SVGConstructor<any, any, any>;
/*****************************************************************/
/**
 * The SVGmrow wrapper for the MmlMrow object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class SVGmrow<N, T, D> extends SVGmrow_base {
    /**
     * The mrow wrapper
     */
    static kind: string;
    /**
     * @override
     */
    toSVG(parent: N): void;
}
declare const SVGinferredMrow_base: import("../../common/Wrappers/mrow.js").InferredMrowConstructor & Constructor<SVGmrow<any, any, any>>;
/*****************************************************************/
/**
 *  The SVGinferredMrow wrapper for the MmlInferredMrow object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class SVGinferredMrow<N, T, D> extends SVGinferredMrow_base {
    /**
     * The inferred-mrow wrapper
     */
    static kind: string;
}
export {};
