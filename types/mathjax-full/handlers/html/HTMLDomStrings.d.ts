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
 * @fileoverview  Implements the HTMLDomStrings class
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { OptionList } from '../../util/Options.js';
import { DOMAdaptor } from '../../core/DOMAdaptor.js';
/**
 *  List of consecutive text nodes and their text lengths
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 */
export type HTMLNodeList<N, T> = [N | T, number][];
/*****************************************************************/
/**
 *  The HTMLDocument class (extends AbstractMathDocument)
 *
 *  A class for extracting the text from DOM trees
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class HTMLDomStrings<N, T, D> {
    /**
     * The default options for string processing
     */
    static OPTIONS: OptionList;
    /**
     * The options for this instance
     */
    protected options: OptionList;
    /**
     * The array of strings found in the DOM
     */
    protected strings: string[];
    /**
     * The string currently being constructed
     */
    protected string: string;
    /**
     * The list of nodes and lengths for the string being constructed
     */
    protected snodes: HTMLNodeList<N, T>;
    /**
     * The list of node lists corresponding to the strings in this.strings
     */
    protected nodes: HTMLNodeList<N, T>[];
    /**
     * The container nodes that are currently being traversed, and whether their
     *  contents are being ignored or not
     */
    protected stack: [N | T, boolean][];
    /**
     * Regular expression for the tags to be skipped
     *  processing of math
     */
    protected skipHtmlTags: RegExp;
    /**
     * Regular expression for which classes should stop processing of math
     */
    protected ignoreHtmlClass: RegExp;
    /**
     * Regular expression for which classes should start processing of math
     */
    protected processHtmlClass: RegExp;
    /**
     * The DOM Adaptor to managing HTML elements
     */
    adaptor: DOMAdaptor<N, T, D>;
    /**
     * @param {OptionList} options  The user-supplied options
     * @constructor
     */
    constructor(options?: OptionList);
    /**
     * Set the initial values of the main properties
     */
    protected init(): void;
    /**
     * Create the search patterns for skipHtmlTags, ignoreHtmlClass, and processHtmlClass
     */
    protected getPatterns(): void;
    /**
     * Add a string to the string array and record its node list
     */
    protected pushString(): void;
    /**
     * Add more text to the current string, and record the
     * node and its position in the string.
     *
     * @param {N|T} node        The node to be pushed
     * @param {string} text   The text to be added (it may not be the actual text
     *                         of the node, if it is one of the nodes that gets
     *                         translated to text, like <br> to a newline).
     */
    protected extendString(node: N | T, text: string): void;
    /**
     * Handle a #text node (add its text to the current string)
     *
     * @param {T} node          The Text node to process
     * @param {boolean} ignore  Whether we are currently ignoring content
     * @return {N | T}          The next element to process
     */
    protected handleText(node: T, ignore: boolean): N | T;
    /**
     * Handle a BR, WBR, or #comment element (or others in the includeHtmlTags object).
     *
     * @param {N} node          The node to process
     * @param {boolean} ignore  Whether we are currently ignoring content
     * @return {N | T}          The next element to process
     */
    protected handleTag(node: N, ignore: boolean): N | T;
    /**
     * Handle an arbitrary DOM node:
     *   Check the class to see if it matches the processHtmlClass regex
     *   If the node has a child and is not marked as created by MathJax (data-MJX)
     *       and either it is marked as restarting processing or is not a tag to be skipped, then
     *     Save the next node (if there is one) and whether we are currently ignoring content
     *     Move to the first child node
     *     Update whether we are ignoring content
     *   Otherwise
     *     Move on to the next sibling
     *   Return the next node to process and the ignore state
     *
     * @param {N} node               The node to process
     * @param {boolean} ignore       Whether we are currently ignoring content
     * @return {[N|T, boolean]}      The next element to process and whether to ignore its content
     */
    protected handleContainer(node: N, ignore: boolean): [N | T, boolean];
    /**
     * Handle an unknown node type (nodeType other than 1, 3, 8)
     *
     * @param {N} node           The node to process
     * @param {boolean} ignore   Whether we are currently ignoring content
     * @return {N|T}             The next element to process
     */
    protected handleOther(node: N, _ignore: boolean): N | T;
    /**
     * Find the strings for a given DOM element:
     *   Initialize the state
     *   Get the element where we stop processing
     *   While we still have a node, and it is not the one where we are to stop:
     *     If it is a text node, handle it and get the next node
     *     Otherwise, if it is in the includeHtmlTags list, handle it and get the next node
     *     Otherwise, handle it as a container and get the next node and ignore status
     *     If there is no next node, and there are more nodes on the stack:
     *       Save the current string, and pop the node and ignore status from the stack
     *   Push the final string
     *   Get the string array and array of associated DOM nodes
     *   Clear the internal values (so the memory can be freed)
     *   Return the strings and node lists
     *
     * @param {N} node                       The node to search
     * @return {[string[], HTMLNodeList[]]}  The array of strings and their associated lists of nodes
     */
    find(node: N | T): [string[], HTMLNodeList<N, T>[]];
}
