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
 * @fileoverview  Implements the HTMLMathItem class
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { AbstractMathItem, Location } from '../../core/MathItem.js';
import { InputJax } from '../../core/InputJax.js';
import { HTMLDocument } from './HTMLDocument.js';
/*****************************************************************/
/**
 *  Implements the HTMLMathItem class (extends AbstractMathItem)
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class HTMLMathItem<N, T, D> extends AbstractMathItem<N, T, D> {
    /**
     * Easy access to DOM adaptor
     */
    get adaptor(): import("ts/core/DOMAdaptor.js").DOMAdaptor<N, T, D>;
    /**
     * @override
     */
    constructor(math: string, jax: InputJax<N, T, D>, display?: boolean, start?: Location<N, T>, end?: Location<N, T>);
    /**
     * Insert the typeset MathItem into the document at the right location
     *   If the starting and ending nodes are the same:
     *     Split the text to isolate the math and its delimiters
     *     Replace the math by the typeset version
     *   Otherewise (spread over several nodes)
     *     Split the start node, if needed
     *     Remove nodes until we reach the end node
     *     Insert the math before the end node
     *     Split the end node, if needed
     *     Remove the end node
     *
     * @override
     */
    updateDocument(_html: HTMLDocument<N, T, D>): void;
    /**
     * Update the style sheet for any changes due to rerendering
     *
     * @param {HTMLDocument} document   The document whose styles are to be updated
     */
    updateStyleSheet(document: HTMLDocument<N, T, D>): void;
    /**
     * Remove the typeset math from the document, and put back the original
     *  expression and its delimiters, if requested.
     *
     * @override
     */
    removeFromDocument(restore?: boolean): void;
}
