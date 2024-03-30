/*************************************************************
 *
 *  Copyright (c) 2019-2022 The MathJax Consortium
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
 * @fileoverview  Implements the CommonMtext wrapper mixin for the MmlMtext object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { AnyWrapper, WrapperConstructor, Constructor } from '../Wrapper.js';
/*****************************************************************/
/**
 * The CommonMtext interface
 */
export interface CommonMtext extends AnyWrapper {
}
/**
 * Shorthand for the CommonMtext constructor
 */
export type MtextConstructor = Constructor<CommonMtext>;
/*****************************************************************/
/**
 *  The CommonMtext wrapper mixin for the MmlMtext object
 *
 * @template T  The Wrapper class constructor type
 */
export declare function CommonMtextMixin<T extends WrapperConstructor>(Base: T): MtextConstructor & T;
