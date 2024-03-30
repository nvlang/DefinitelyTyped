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
 * @fileoverview  Implements the interface and abstract class for MathDocument objects
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { OptionList } from '../util/Options.js';
import { InputJax } from './InputJax.js';
import { OutputJax } from './OutputJax.js';
import { MathList } from './MathList.js';
import { MathItem } from './MathItem.js';
import { MmlNode } from './MmlTree/MmlNode.js';
import { MmlFactory } from '../core/MmlTree/MmlFactory.js';
import { DOMAdaptor } from '../core/DOMAdaptor.js';
import { BitField } from '../util/BitField.js';
import { PrioritizedList } from '../util/PrioritizedList.js';
/*****************************************************************/
/**
 * A function to call while rendering a document (usually calls a MathDocument method)
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export type RenderDoc<N, T, D> = (document: MathDocument<N, T, D>) => boolean;
/**
 * A function to call while rendering a MathItem (usually calls one of its methods)
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export type RenderMath<N, T, D> = (math: MathItem<N, T, D>, document: MathDocument<N, T, D>) => boolean;
/**
 * The data for an action to perform during rendering or conversion
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export type RenderData<N, T, D> = {
    id: string;
    renderDoc: RenderDoc<N, T, D>;
    renderMath: RenderMath<N, T, D>;
    convert: boolean;
};
/**
 * The data used to define a render action in configurations and options objects
 *   (the key is used as the id, the number in the data below is the priority, and
 *    the remainind data is as described below; if no boolean is given, convert = true
 *    by default)
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export type RenderAction<N, T, D> = [
    number
] | // id (i.e., key) is method name to use
[
    number,
    string
] | // string is method to call
[
    number,
    string,
    string
] | // the strings are methods names for doc and math
[
    number,
    RenderDoc<N, T, D>,
    RenderMath<N, T, D>
] | // explicit functions for doc and math
[
    number,
    boolean
] | // same as first above, with boolean for convert
[
    number,
    string,
    boolean
] | // same as second above, with boolean for convert
[
    number,
    string,
    string,
    boolean
] | // same as third above, with boolean for convert
[
    number,
    RenderDoc<N, T, D>,
    RenderMath<N, T, D>,
    boolean
];
/**
 * An object representing a collection of rendering actions (id's tied to priority-and-method data)
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export type RenderActions<N, T, D> = {
    [id: string]: RenderAction<N, T, D>;
};
/**
 * Implements a prioritized list of render actions.  Extensions can add actions to the list
 *   to make it easy to extend the normal typesetting and conversion operations.
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class RenderList<N, T, D> extends PrioritizedList<RenderData<N, T, D>> {
    /**
     * Creates a new RenderList from an initial list of rendering actions
     *
     * @param {RenderActions} actions The list of actions to take during render(), rerender(), and convert() calls
     * @returns {RenderList}    The newly created prioritied list
     */
    static create<N, T, D>(actions: RenderActions<N, T, D>): RenderList<N, T, D>;
    /**
     * Parses a RenderAction to produce the correspinding RenderData item
     *  (e.g., turn method names into actual functions that call the method)
     *
     * @param {string} id               The id of the action
     * @param {RenderAction} action     The RenderAction defining the action
     * @returns {[RenderData,number]}   The corresponding RenderData definition for the action and its priority
     */
    static action<N, T, D>(id: string, action: RenderAction<N, T, D>): [RenderData<N, T, D>, number];
    /**
     * Produces the doc and math actions for the given method name(s)
     *   (a blank name is a no-op)
     *
     * @param {string} method1    The method to use for the render() call
     * @param {string} method1    The method to use for the rerender() and convert() calls
     */
    protected static methodActions(method1: string, method2?: string): ((math: any, document: any) => boolean)[];
    /**
     * Perform the document-level rendering functions
     *
     * @param {MathDocument} document   The MathDocument whose methods are to be called
     * @param {number=} start           The state at which to start rendering (default is UNPROCESSED)
     */
    renderDoc(document: MathDocument<N, T, D>, start?: number): void;
    /**
     * Perform the MathItem-level rendering functions
     *
     * @param {MathItem} math           The MathItem whose methods are to be called
     * @param {MathDocument} document   The MathDocument to pass to the MathItem methods
     * @param {number=} start           The state at which to start rendering (default is UNPROCESSED)
     */
    renderMath(math: MathItem<N, T, D>, document: MathDocument<N, T, D>, start?: number): void;
    /**
     * Perform the MathItem-level conversion functions
     *
     * @param {MathItem} math           The MathItem whose methods are to be called
     * @param {MathDocument} document   The MathDocument to pass to the MathItem methods
     * @param {number=} end             The state at which to end rendering (default is LAST)
     */
    renderConvert(math: MathItem<N, T, D>, document: MathDocument<N, T, D>, end?: number): void;
    /**
     * Find an entry in the list with a given ID
     *
     * @param {string} id            The id to search for
     * @returns {RenderData|null}   The data for the given id, if found, or null
     */
    findID(id: string): RenderData<N, T, D> | null;
}
/*****************************************************************/
/**
 * The ways of specifying a container (a selector string, an actual node,
 * or an array of those (e.g., the result of document.getElementsByTagName())
 *
 * @template N  The HTMLElement node class
 */
export type ContainerList<N> = string | N | (string | N | N[])[];
/**
 * The options allowed for the reset() method
 */
export type ResetList = {
    all?: boolean;
    processed?: boolean;
    inputJax?: any[];
    outputJax?: any[];
};
/**
 * The default option list for the reset() method
 */
export declare const resetOptions: ResetList;
/**
 * The option list for when all options are to be reset
 */
export declare const resetAllOptions: ResetList;
/*****************************************************************/
/**
 *  The MathDocument interface
 *
 *  The MathDocument is created by MathJax.Document() and holds the
 *  document, the math found in it, and so on.  The methods of the
 *  MathDocument all return the MathDocument itself, so you can
 *  chain the method calls.  E.g.,
 *
 *    const html = MathJax.Document('<html>...</html>');
 *    html.findMath()
 *        .compile()
 *        .getMetrics()
 *        .typeset()
 *        .updateDocument();
 *
 *  The MathDocument is the main interface for page authors to
 *  interact with MathJax.
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export interface MathDocument<N, T, D> {
    /**
     * The document being processed (e.g., DOM document, or Markdown string)
     */
    document: D;
    /**
     * The kind of MathDocument (e.g., "HTML")
     */
    kind: string;
    /**
     * The options for the document
     */
    options: OptionList;
    /**
     * The list of MathItems found in this page
     */
    math: MathList<N, T, D>;
    /**
     * The list of actions to take during a render() or convert() call
     */
    renderActions: RenderList<N, T, D>;
    /**
     * This object tracks what operations have been performed, so that (when
     *  asynchronous operations are used), the ones that have already been
     *  completed won't be performed again.
     */
    processed: BitField;
    /**
     * An array of input jax to run on the document
     */
    inputJax: InputJax<N, T, D>[];
    /**
     * The output jax to use for the document
     */
    outputJax: OutputJax<N, T, D>;
    /**
     * The DOM adaptor to use for input and output
     */
    adaptor: DOMAdaptor<N, T, D>;
    /**
     * The MmlFactory to be used for input jax and error processing
     */
    mmlFactory: MmlFactory;
    /**
     * @param {string} id      The id of the action to add
     * @param {any[]} action   The RenderAction to take
     */
    addRenderAction(id: string, ...action: any[]): void;
    /**
     * @param {string} id   The id of the action to remove
     */
    removeRenderAction(id: string): void;
    /**
     * Perform the renderActions on the document
     */
    render(): MathDocument<N, T, D>;
    /**
     * Rerender the MathItems on the page
     *
     * @param {number=} start    The state to start rerendering at
     * @return {MathDocument}    The math document instance
     */
    rerender(start?: number): MathDocument<N, T, D>;
    /**
     * Convert a math string to the document's output format
     *
     * @param {string} math           The math string to convert
     * @params {OptionList} options   The options for the conversion (e.g., format, ex, em, etc.)
     * @return {MmlNode|N}            The MmlNode or N node for the converted content
     */
    convert(math: string, options?: OptionList): MmlNode | N;
    /**
     * Locates the math in the document and constructs the MathList
     *  for the document.
     *
     * @param {OptionList} options  The options for locating the math
     * @return {MathDocument}       The math document instance
     */
    findMath(options?: OptionList): MathDocument<N, T, D>;
    /**
     * Calls the input jax to process the MathItems in the MathList
     *
     * @return {MathDocument}  The math document instance
     */
    compile(): MathDocument<N, T, D>;
    /**
     * Gets the metric information for the MathItems
     *
     * @return {MathDocument}  The math document instance
     */
    getMetrics(): MathDocument<N, T, D>;
    /**
     * Calls the output jax to process the compiled math in the MathList
     *
     * @return {MathDocument}  The math document instance
     */
    typeset(): MathDocument<N, T, D>;
    /**
     * Updates the document to include the typeset math
     *
     * @return {MathDocument}  The math document instance
     */
    updateDocument(): MathDocument<N, T, D>;
    /**
     * Removes the typeset math from the document
     *
     * @param {boolean} restore  True if the original math should be put
     *                            back into the document as well
     * @return {MathDocument}    The math document instance
     */
    removeFromDocument(restore?: boolean): MathDocument<N, T, D>;
    /**
     * Set the state of the document (allowing you to roll back
     *  the state to a previous one, if needed).
     *
     * @param {number} state     The new state of the document
     * @param {boolean} restore  True if the original math should be put
     *                            back into the document during the rollback
     * @return {MathDocument}    The math document instance
     */
    state(state: number, restore?: boolean): MathDocument<N, T, D>;
    /**
     * Clear the processed values so that the document can be reprocessed
     *
     * @param {ResetList} options   The things to be reset
     * @return {MathDocument}       The math document instance
     */
    reset(options?: ResetList): MathDocument<N, T, D>;
    /**
     * Reset the processed values and clear the MathList (so that new math
     * can be processed in the document).
     *
     * @return {MathDocument}  The math document instance
     */
    clear(): MathDocument<N, T, D>;
    /**
     * Merges a MathList into the list for this document.
     *
     * @param {MathList} list   The MathList to be merged into this document's list
     * @return {MathDocument}   The math document instance
     */
    concat(list: MathList<N, T, D>): MathDocument<N, T, D>;
    /**
     * Clear the typeset MathItems that are within the given container
     *   from the document's MathList.  (E.g., when the content of the
     *   container has been updated and you want to remove the
     *   associated MathItems)
     *
     * @param {ContainerList<N>} elements   The container DOM elements whose math items are to be removed
     * @return {MathItem<N,T,D>[]}          The removed MathItems
     */
    clearMathItemsWithin(containers: ContainerList<N>): MathItem<N, T, D>[];
    /**
     * Get the typeset MathItems that are within a given container.
     *
     * @param {ContainerList<N>} elements   The container DOM elements whose math items are to be found
     * @return {MathItem<N,T,D>[]}          The list of MathItems within that container
     */
    getMathItemsWithin(elements: ContainerList<N>): MathItem<N, T, D>[];
}
/*****************************************************************/
/**
 *  Implements the abstract MathDocument class
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare abstract class AbstractMathDocument<N, T, D> implements MathDocument<N, T, D> {
    /**
     * The type of MathDocument
     */
    static KIND: string;
    /**
     * The default options for the document
     */
    static OPTIONS: OptionList;
    /**
     * A bit-field for the actions that have been processed
     */
    static ProcessBits: typeof BitField;
    /**
     * The document managed by this MathDocument
     */
    document: D;
    /**
     * The actual options for this document (with user-supplied ones merged in)
     */
    options: OptionList;
    /**
     * The list of MathItems for this document
     */
    math: MathList<N, T, D>;
    /**
     * The list of render actions
     */
    renderActions: RenderList<N, T, D>;
    /**
     * The bit-field used to tell what steps have been taken on the document (for retries)
     */
    processed: BitField;
    /**
     * The list of input jax for the document
     */
    inputJax: InputJax<N, T, D>[];
    /**
     * The output jax for the document
     */
    outputJax: OutputJax<N, T, D>;
    /**
     * The DOM adaptor for the document
     */
    adaptor: DOMAdaptor<N, T, D>;
    /**
     * The MathML node factory for the internal MathML representation
     */
    mmlFactory: MmlFactory;
    /**
     * @param {any} document           The document (HTML string, parsed DOM, etc.) to be processed
     * @param {DOMAdaptor} adaptor     The DOM adaptor for this document
     * @param {OptionList} options     The options for this document
     * @constructor
     */
    constructor(document: D, adaptor: DOMAdaptor<N, T, D>, options: OptionList);
    /**
     * @return {string}  The kind of document
     */
    get kind(): string;
    /**
     * @override
     */
    addRenderAction(id: string, ...action: any[]): void;
    /**
     * @override
     */
    removeRenderAction(id: string): void;
    /**
     * @override
     */
    render(): this;
    /**
     * @override
     */
    rerender(start?: number): this;
    /**
     * @override
     */
    convert(math: string, options?: OptionList): any;
    /**
     * @override
     */
    findMath(_options?: OptionList): this;
    /**
     * @override
     */
    compile(): this;
    /**
     * @param {MathItem} math   The item to compile
     */
    protected compileMath(math: MathItem<N, T, D>): void;
    /**
     * Produce an error using MmlNodes
     *
     * @param {MathItem} math  The MathItem producing the error
     * @param {Error} err      The Error object for the error
     */
    compileError(math: MathItem<N, T, D>, err: Error): void;
    /**
     * @override
     */
    typeset(): this;
    /**
     * Produce an error using HTML
     *
     * @param {MathItem} math  The MathItem producing the error
     * @param {Error} err      The Error object for the error
     */
    typesetError(math: MathItem<N, T, D>, err: Error): void;
    /**
     * @override
     */
    getMetrics(): this;
    /**
     * @override
     */
    updateDocument(): this;
    /**
     * @override
     */
    removeFromDocument(_restore?: boolean): this;
    /**
     * @override
     */
    state(state: number, restore?: boolean): this;
    /**
     * @override
     */
    reset(options?: ResetList): this;
    /**
     * @override
     */
    clear(): this;
    /**
     * @override
     */
    concat(list: MathList<N, T, D>): this;
    /**
     * @override
     */
    clearMathItemsWithin(containers: ContainerList<N>): MathItem<N, T, D>[];
    /**
     * @override
     */
    getMathItemsWithin(elements: ContainerList<N>): MathItem<N, T, D>[];
}
/**
 * The constructor type for a MathDocument
 *
 * @template D    The MathDocument type this constructor is for
 */
export interface MathDocumentConstructor<D extends MathDocument<any, any, any>> {
    KIND: string;
    OPTIONS: OptionList;
    ProcessBits: typeof BitField;
    new (...args: any[]): D;
}
