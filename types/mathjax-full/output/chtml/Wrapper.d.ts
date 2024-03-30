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
 * @fileoverview  Implements the CHTMLWrapper class
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { OptionList } from '../../util/Options.js';
import { CommonWrapper, AnyWrapperClass, Constructor, StringMap } from '../common/Wrapper.js';
import { CHTML } from '../chtml.js';
import { CHTMLWrapperFactory } from './WrapperFactory.js';
import { CHTMLFontData, CHTMLCharOptions, CHTMLDelimiterData } from './FontData.js';
export { Constructor, StringMap } from '../common/Wrapper.js';
/*****************************************************************/
/**
 * Some standard sizes to use in predefind CSS properties
 */
export declare const FONTSIZE: StringMap;
export declare const SPACE: StringMap;
/**
 * Shorthand for making a CHTMLWrapper constructor
 */
export type CHTMLConstructor<N, T, D> = Constructor<CHTMLWrapper<N, T, D>>;
/*****************************************************************/
/**
 *  The type of the CHTMLWrapper class (used when creating the wrapper factory for this class)
 */
export interface CHTMLWrapperClass extends AnyWrapperClass {
    kind: string;
    /**
     * If true, this causes a style for the node type to be generated automatically
     * that sets display:inline-block (as needed for the output for MmlNodes).
     */
    autoStyle: boolean;
}
/*****************************************************************/
/**
 *  The base CHTMLWrapper class
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class CHTMLWrapper<N, T, D> extends CommonWrapper<CHTML<N, T, D>, CHTMLWrapper<N, T, D>, CHTMLWrapperClass, CHTMLCharOptions, CHTMLDelimiterData, CHTMLFontData> {
    /**
     * The wrapper type
     */
    static kind: string;
    /**
     * If true, this causes a style for the node type to be generated automatically
     * that sets display:inline-block (as needed for the output for MmlNodes).
     */
    static autoStyle: boolean;
    /**
     * @override
     */
    protected factory: CHTMLWrapperFactory<N, T, D>;
    /**
     * @override
     */
    parent: CHTMLWrapper<N, T, D>;
    /**
     * @override
     */
    childNodes: CHTMLWrapper<N, T, D>[];
    /**
     * The HTML element generated for this wrapped node
     */
    chtml: N;
    /*******************************************************************/
    /**
     * Create the HTML for the wrapped node.
     *
     * @param {N} parent  The HTML node where the output is added
     */
    toCHTML(parent: N): void;
    /*******************************************************************/
    /**
     * Create the standard CHTML element for the given wrapped node.
     *
     * @param {N} parent  The HTML element in which the node is to be created
     * @returns {N}  The root of the HTML tree for the wrapped node's output
     */
    protected standardCHTMLnode(parent: N): N;
    /**
     * Mark this class as having been typeset (so its styles will be output)
     */
    markUsed(): void;
    /**
     * @param {N} parent  The HTML element in which the node is to be created
     * @returns {N}  The root of the HTML tree for the wrapped node's output
     */
    protected createCHTMLnode(parent: N): N;
    /**
     * Set the CSS styles for the chtml element
     */
    protected handleStyles(): void;
    /**
     * Set the CSS for the math variant
     */
    protected handleVariant(): void;
    /**
     * Set the (relative) scaling factor for the node
     */
    protected handleScale(): void;
    /**
     * @param {N} chtml  The HTML node to scale
     * @param {number} rscale      The relatie scale to apply
     * @return {N}       The HTML node (for chaining)
     */
    protected setScale(chtml: N, rscale: number): N;
    /**
     * Add the proper spacing
     */
    protected handleSpace(): void;
    /**
     * Add the foreground and background colors
     * (Only look at explicit attributes, since inherited ones will
     *  be applied to a parent element, and we will inherit from that)
     */
    protected handleColor(): void;
    /**
     * Copy RDFa, aria, and other tags from the MathML to the CHTML output nodes.
     * Don't copy those in the skipAttributes list, or anything that already exists
     * as a property of the node (e.g., no "onlick", etc.).  If a name in the
     * skipAttributes object is set to false, then the attribute WILL be copied.
     * Add the class to any other classes already in use.
     */
    protected handleAttributes(): void;
    /**
     * Handle the attributes needed for percentage widths
     */
    protected handlePWidth(): void;
    /*******************************************************************/
    /**
     * @param {N} chtml       The HTML node whose indentation is to be adjusted
     * @param {string} align  The alignment for the node
     * @param {number} shift  The indent (positive or negative) for the node
     */
    protected setIndent(chtml: N, align: string, shift: number): void;
    /*******************************************************************/
    /**
     * For debugging
     */
    drawBBox(): void;
    /*******************************************************************/
    /**
     * @param {string} type      The tag name of the HTML node to be created
     * @param {OptionList} def   The properties to set for the created node
     * @param {(N|T)[]} content  The child nodes for the created HTML node
     * @return {N}               The generated HTML tree
     */
    html(type: string, def?: OptionList, content?: (N | T)[]): N;
    /**
     * @param {string} text  The text from which to create an HTML text node
     * @return {T}           The generated text node with the given text
     */
    text(text: string): T;
    /**
     * @param {number} n  A unicode code point to be converted to a character className reference.
     * @return {string}   The className for the character
     */
    protected char(n: number): string;
}
