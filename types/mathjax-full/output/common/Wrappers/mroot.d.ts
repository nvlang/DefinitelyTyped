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
 * @fileoverview  Implements the CommonMroot wrapper mixin for the MmlMroot object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { Constructor } from '../../common/Wrapper.js';
import { CommonMsqrt, MsqrtConstructor } from './msqrt.js';
/*****************************************************************/
/**
 * The CommonMroot interface
 */
export interface CommonMroot extends CommonMsqrt {
}
/**
 * Shorthand for the CommonMroot constructor
 */
export type MrootConstructor = Constructor<CommonMroot>;
/*****************************************************************/
/**
 * The CommonMroot wrapper mixin for the MmlMroot object (extends CommonMsqrt)
 *
 * @template T  The Wrapper class constructor type
 */
export declare function CommonMrootMixin<T extends MsqrtConstructor>(Base: T): MrootConstructor & T;
