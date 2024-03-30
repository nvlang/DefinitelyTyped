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
 * @fileoverview  Implements the CommonMrow wrapper minin for the MmlMrow object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { AnyWrapper, WrapperConstructor, Constructor } from '../Wrapper.js';
/*****************************************************************/
/**
 * The CommonMrow interface
 */
export interface CommonMrow extends AnyWrapper {
    /**
     * Handle vertical stretching of children to match height of
     *  other nodes in the row.
     */
    stretchChildren(): void;
}
/**
 * Shorthand for the CommonMrow constructor
 */
export type MrowConstructor = Constructor<CommonMrow>;
/*****************************************************************/
/**
 * The CommonMrow wrapper mixin for the MmlMrow object
 *
 * @template T  The Wrapper class constructor type
 */
export declare function CommonMrowMixin<T extends WrapperConstructor>(Base: T): MrowConstructor & T;
/*****************************************************************/
/*****************************************************************/
/**
 * The CommonInferredMrow interface
 */
export interface CommonInferredMrow extends CommonMrow {
}
/**
 * Shorthand for the CommonInferredMrow constructor
 */
export type InferredMrowConstructor = Constructor<CommonInferredMrow>;
/*****************************************************************/
/**
 * The CommonInferredMrow wrapper mixin for the MmlInferredMrow object
 *
 * @template T  The Wrapper class constructor type
 */
export declare function CommonInferredMrowMixin<T extends MrowConstructor>(Base: T): InferredMrowConstructor & T;
