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
 * @fileoverview  Implements the interface and abstract class for the InputJax
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { MathDocument } from './MathDocument.js';
import { MathItem, ProtoItem } from './MathItem.js';
import { MmlNode } from './MmlTree/MmlNode.js';
import { MmlFactory } from './MmlTree/MmlFactory.js';
import { OptionList } from '../util/Options.js';
import { FunctionList } from '../util/FunctionList.js';
import { DOMAdaptor } from '../core/DOMAdaptor.js';
/*****************************************************************/
/**
 *  The InputJax interface
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export interface InputJax<N, T, D> {
    /**
     * The name of the input jax subclass (e.g,. 'TeX')
     */
    name: string;
    /**
     * Whether this input jax processes string arrays or DOM nodes
     * (TeX and AsciiMath process strings, MathML processes DOM nodes)
     */
    processStrings: boolean;
    /**
     * The options for this input jax instance
     */
    options: OptionList;
    /**
     * Lists of pre- and post-filters to call before and after processing the input
     */
    preFilters: FunctionList;
    postFilters: FunctionList;
    /**
     * The DOM adaptor for managing HTML elements
     */
    adaptor: DOMAdaptor<N, T, D>;
    /**
     * The MmlFactory for this input jax
     */
    mmlFactory: MmlFactory;
    /**
     * @param {DOMAdaptor} adaptor The adaptor to use in this jax
     */
    setAdaptor(adaptor: DOMAdaptor<N, T, D>): void;
    /**
     * @param {MmlFactory} mmlFactory The MmlFactory to use in this jax
     */
    setMmlFactory(mmlFactory: MmlFactory): void;
    /**
     * Do any initialization that depends on the document being set up
     */
    initialize(): void;
    /**
     * Reset any needed features of the input jax
     *
     * @param {any[]} args   The arguments needed by the reset operation
     */
    reset(...args: any[]): void;
    /**
     * Finds the math within the DOM or the list of strings
     *
     * @param {N | string[]} which   The element or array of strings to be searched for math
     * @param {OptionList} options   The options for the search, if any
     * @return {ProtoItem[]}         Array of proto math items found (further processed by the
     *                                handler to produce actual MathItem objects)
     */
    findMath(which: N | string[], options?: OptionList): ProtoItem<N, T>[];
    /**
     * Convert the math in a math item into the internal format
     *
     * @param {MathItem} math  The MathItem whose math content is to processed
     * @param {MathDocument} document The MathDocument for this input jax.
     * @return {MmlNode}       The resulting internal node tree for the math
     */
    compile(math: MathItem<N, T, D>, document: MathDocument<N, T, D>): MmlNode;
}
/*****************************************************************/
/**
 *  The abstract InputJax class
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare abstract class AbstractInputJax<N, T, D> implements InputJax<N, T, D> {
    /**
     * The name of the input jax
     */
    static NAME: string;
    /**
     * The default options for the input jax
     */
    static OPTIONS: OptionList;
    /**
     * The actual options supplied to the input jax
     */
    options: OptionList;
    /**
     * Filters to run on the TeX string before it is processed
     */
    preFilters: FunctionList;
    /**
     * Filters to run on the generated MathML after the TeX string is processed
     */
    postFilters: FunctionList;
    /**
     * The DOMAdaptor for the MathDocument for this input jax
     */
    adaptor: DOMAdaptor<N, T, D>;
    /**
     * The MathML node factory
     */
    mmlFactory: MmlFactory;
    /**
     * @param {OptionList} options  The options to apply to this input jax
     *
     * @constructor
     */
    constructor(options?: OptionList);
    /**
     * @return {string}  The name of this input jax class
     */
    get name(): string;
    /**
     * @override
     */
    setAdaptor(adaptor: DOMAdaptor<N, T, D>): void;
    /**
     * @override
     */
    setMmlFactory(mmlFactory: MmlFactory): void;
    /**
     * @override
     */
    initialize(): void;
    /**
     * @override
     */
    reset(..._args: any[]): void;
    /**
     * @return {boolean}  True means find math in string array, false means in DOM element
     */
    get processStrings(): boolean;
    /**
     * @override
     */
    findMath(_node: N | string[], _options?: OptionList): ProtoItem<N, T>[];
    /**
     * @override
     */
    abstract compile(math: MathItem<N, T, D>, document: MathDocument<N, T, D>): MmlNode;
    /**
     * Execute a set of filters, passing them the MathItem and any needed data,
     *  and return the (possibly modified) data
     *
     * @param {FunctionList} filters   The list of functions to be performed
     * @param {MathItem} math          The math item that is being processed
     * @param {MathDocument} document  The math document containg the math item
     * @param {any} data               Whatever other data is needed
     * @return {any}                   The (possibly modified) data
     */
    protected executeFilters(filters: FunctionList, math: MathItem<N, T, D>, document: MathDocument<N, T, D>, data: any): any;
}
