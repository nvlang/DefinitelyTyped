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
 * @fileoverview  Interfaces and abstract classes for Handler objects
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { MathDocument, AbstractMathDocument, MathDocumentConstructor } from './MathDocument.js';
import { OptionList } from '../util/Options.js';
import { DOMAdaptor } from '../core/DOMAdaptor.js';
/*****************************************************************/
/**
 *  The Handler interface
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export interface Handler<N, T, D> {
    /**
     * The name of the handler class
     */
    name: string;
    /**
     * The DOM Adaptor to use for managing HTML elements
     */
    adaptor: DOMAdaptor<N, T, D>;
    /**
     * The priority for the handler when handlers are polled
     *   to see which one can process a given document.
     */
    priority: number;
    /**
     * The class implementing the MathDocument for this handler
     *   (so it can be subclassed by extensions as needed)
     */
    documentClass: MathDocumentConstructor<AbstractMathDocument<N, T, D>>;
    /**
     * Checks to see if the handler can process a given document
     *
     * @param {any} document  The document to be processed (string, window, etc.)
     * @return {boolean}      True if this handler can process the given document
     */
    handlesDocument(document: any): boolean;
    /**
     * Creates a MathDocument for the given handler
     *
     * @param {any} document        The document to be handled
     * @param {OptionList} options  The options for the handling of the document
     * @return {MathDocument}       The MathDocument object that manages the processing
     */
    create(document: any, options: OptionList): MathDocument<N, T, D>;
}
/*****************************************************************/
/**
 *  The Handler interface
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare abstract class AbstractHandler<N, T, D> implements Handler<N, T, D> {
    /**
     * The name of this class
     */
    static NAME: string;
    /**
     * The DOM Adaptor to use for managing HTML elements
     */
    adaptor: DOMAdaptor<N, T, D>;
    /**
     * The priority for this handler
     */
    priority: number;
    /**
     * The class implementing the MathDocument for this handler
     *   (so it can be subclassed by extensions as needed)
     */
    documentClass: MathDocumentConstructor<AbstractMathDocument<N, T, D>>;
    /**
     * @param {number} priority  The priority to use for this handler
     *
     * @constructor
     */
    constructor(adaptor: DOMAdaptor<N, T, D>, priority?: number);
    /**
     * @return {string}  The name of this handler class
     */
    get name(): string;
    /**
     * @override
     */
    handlesDocument(_document: any): boolean;
    /**
     * @override
     */
    create(document: any, options: OptionList): MathDocument<N, T, D>;
}
