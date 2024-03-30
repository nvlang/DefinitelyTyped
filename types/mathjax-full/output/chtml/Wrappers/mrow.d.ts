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
 * @fileoverview  Implements the CHTMLmrow wrapper for the MmlMrow object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { CHTMLConstructor, Constructor } from '../Wrapper.js';
declare const CHTMLmrow_base: import("../../common/Wrappers/mrow.js").MrowConstructor & CHTMLConstructor<any, any, any>;
/*****************************************************************/
/**
 * The CHTMLmrow wrapper for the MmlMrow object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class CHTMLmrow<N, T, D> extends CHTMLmrow_base {
    /**
     * The mrow wrapper
     */
    static kind: string;
    /**
     * @override
     */
    toCHTML(parent: N): void;
}
declare const CHTMLinferredMrow_base: import("../../common/Wrappers/mrow.js").InferredMrowConstructor & Constructor<CHTMLmrow<any, any, any>>;
/*****************************************************************/
/**
 *  The CHTMLinferredMrow wrapper for the MmlInferredMrow object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class CHTMLinferredMrow<N, T, D> extends CHTMLinferredMrow_base {
    /**
     * The inferred-mrow wrapper
     */
    static kind: string;
}
export {};
