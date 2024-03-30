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
 * @fileoverview  Implements the CommonTextNode wrapper mixin for the TextNode object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { AnyWrapper, WrapperConstructor, Constructor } from '../Wrapper.js';
/*****************************************************************/
/**
 * The CommonTextNode interface
 */
export interface CommonTextNode extends AnyWrapper {
    /**
     * @param {string} text     The text to remap
     * @param {string} variant  The variant for the character
     * @return {number[]}       The unicode points for the (remapped) text
     */
    remappedText(text: string, variant: string): number[];
}
/**
 * Shorthand for the CommonTextNode constructor
 */
export type TextNodeConstructor = Constructor<CommonTextNode>;
/*****************************************************************/
/**
 *  The CommonTextNode wrapper mixin for the TextNode object
 *
 * @template T  The Wrapper class constructor type
 */
export declare function CommonTextNodeMixin<T extends WrapperConstructor>(Base: T): TextNodeConstructor & T;
