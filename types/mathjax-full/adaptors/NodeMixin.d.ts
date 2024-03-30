/*************************************************************
 *
 *  Copyright (c) 2022-2022 The MathJax Consortium
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
 * @fileoverview  Implements a mixin for node-based adaptors that overrides
 *                the methods that obtain DOM node sizes, when those aren't
 *                available from the DOM itself.
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { DOMAdaptor } from '../core/DOMAdaptor.js';
import { OptionList } from '../util/Options.js';
/**
 * A constructor for a given class
 *
 * @template T   The class to construct
 */
export type Constructor<T> = (new (...args: any[]) => T);
/**
 * The type of an Adaptor class
 */
export type AdaptorConstructor<N, T, D> = Constructor<DOMAdaptor<N, T, D>>;
/**
 * The options to the NodeMixin
 */
export declare const NodeMixinOptions: OptionList;
/**
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare function NodeMixin<N, T, D, A extends AdaptorConstructor<N, T, D>>(Base: A, options?: typeof NodeMixinOptions): A;
