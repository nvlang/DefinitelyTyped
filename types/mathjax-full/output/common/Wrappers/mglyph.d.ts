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
 * @fileoverview  Implements the CommonMglyph wrapper mixin for the MmlMglyph object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { AnyWrapper, WrapperConstructor, Constructor } from '../Wrapper.js';
import { CommonTextNode } from './TextNode.js';
/*****************************************************************/
/**
 * The CommonMglyph interface
 */
export interface CommonMglyph extends AnyWrapper {
    /**
     * The image's width converted to em's
     */
    width: number;
    /**
     * The image's height converted to em's
     */
    height: number;
    valign: number;
    /**
     * TextNode used for deprecated fontfamily/index use case
     */
    charWrapper: CommonTextNode;
    /**
     * Obtain the width, height, and valign.
     * Note:  Currently, the width and height must be specified explicitly, or they default to 1em
     *   Since loading the image may be asynchronous, it would require a restart.
     *   A future extension could implement this either by subclassing this object, or
     *   perhaps as a post-filter on the MathML input jax that adds the needed dimensions
     */
    getParameters(): void;
}
/**
 * Shorthand for the CommonMglyph constructor
 */
export type MglyphConstructor = Constructor<CommonMglyph>;
/*****************************************************************/
/**
 * The CommonMglyph wrapper mixin for the MmlMglyph object
 *
 * @template T  The Wrapper class constructor type
 */
export declare function CommonMglyphMixin<T extends WrapperConstructor>(Base: T): MglyphConstructor & T;
