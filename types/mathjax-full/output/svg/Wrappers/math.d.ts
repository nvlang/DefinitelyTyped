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
 * @fileoverview  Implements the SVGmath wrapper for the MmlMath object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { SVGConstructor } from '../Wrapper.js';
import { StyleList } from '../../../util/StyleList.js';
declare const SVGmath_base: import("../../common/Wrappers/math.js").MathConstructor & SVGConstructor<any, any, any>;
/*****************************************************************/
/**
 * The SVGmath wrapper for the MmlMath object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class SVGmath<N, T, D> extends SVGmath_base {
    /**
     * The math wrapper
     */
    static kind: string;
    /**
     * @overreide
     */
    static styles: StyleList;
    /**
     * @override
     */
    toSVG(parent: N): void;
    /**
     * Set the justification, and get the minwidth and shift needed
     * for the displayed equation.
     */
    protected handleDisplay(): void;
    /**
     * Handle adding speech to the top-level node, if any.
     */
    protected handleSpeech(): void;
    /**
     * @return {string}  A unique ID to use for aria-labeledby title elements
     */
    protected getTitleID(): string;
    /**
     * @override
     */
    setChildPWidths(recompute: boolean, w?: number, _clear?: boolean): boolean;
}
export {};
