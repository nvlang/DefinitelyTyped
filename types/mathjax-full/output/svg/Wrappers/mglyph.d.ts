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
 * @fileoverview  Implements the SVGmglyph wrapper for the MmlMglyph object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { SVGConstructor } from '../Wrapper.js';
declare const SVGmglyph_base: import("../../common/Wrappers/mglyph.js").MglyphConstructor & SVGConstructor<any, any, any>;
/*****************************************************************/
/**
 * The SVGmglyph wrapper for the MmlMglyph object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class SVGmglyph<N, T, D> extends SVGmglyph_base {
    /**
     * The mglyph wrapper
     */
    static kind: string;
    /**
     * @override
     */
    toSVG(parent: N): void;
}
export {};
