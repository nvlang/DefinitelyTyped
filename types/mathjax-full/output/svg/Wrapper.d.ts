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
 * @fileoverview  Implements the SVGWrapper class
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { OptionList } from '../../util/Options.js';
import { CommonWrapper, AnyWrapperClass, Constructor } from '../common/Wrapper.js';
import { SVG } from '../svg.js';
import { SVGWrapperFactory } from './WrapperFactory.js';
import { SVGFontData, SVGDelimiterData, SVGCharOptions } from './FontData.js';
export { Constructor, StringMap } from '../common/Wrapper.js';
/*****************************************************************/
/**
 * Shorthand for makeing a SVGWrapper constructor
 */
export type SVGConstructor<N, T, D> = Constructor<SVGWrapper<N, T, D>>;
/*****************************************************************/
/**
 *  The type of the SVGWrapper class (used when creating the wrapper factory for this class)
 */
export interface SVGWrapperClass extends AnyWrapperClass {
    kind: string;
}
/*****************************************************************/
/**
 *  The base SVGWrapper class
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class SVGWrapper<N, T, D> extends CommonWrapper<SVG<N, T, D>, SVGWrapper<N, T, D>, SVGWrapperClass, SVGCharOptions, SVGDelimiterData, SVGFontData> {
    /**
     * The kind of wrapper
     */
    static kind: string;
    /**
     * A fuzz factor for borders to avoid anti-alias problems at the edges
     */
    static borderFuzz: number;
    /**
     * The factory used to create more SVGWrappers
     */
    protected factory: SVGWrapperFactory<N, T, D>;
    /**
     * @override
     */
    parent: SVGWrapper<N, T, D>;
    /**
     * @override
     */
    childNodes: SVGWrapper<N, T, D>[];
    /**
     * The SVG element generated for this wrapped node
     */
    element: N;
    /**
     * Offset due to border/padding
     */
    dx: number;
    /**
     * @override
     */
    font: SVGFontData;
    /*******************************************************************/
    /**
     * Create the HTML for the wrapped node.
     *
     * @param {N} parent  The HTML node where the output is added
     */
    toSVG(parent: N): void;
    /**
     * @param {N} parent  The element in which to add the children
     */
    addChildren(parent: N): void;
    /*******************************************************************/
    /**
     * Create the standard SVG element for the given wrapped node.
     *
     * @param {N} parent  The HTML element in which the node is to be created
     * @returns {N}  The root of the HTML tree for the wrapped node's output
     */
    protected standardSVGnode(parent: N): N;
    /**
     * @param {N} parent  The HTML element in which the node is to be created
     * @returns {N}  The root of the HTML tree for the wrapped node's output
     */
    protected createSVGnode(parent: N): N;
    /**
     * Set the CSS styles for the svg element
     */
    protected handleStyles(): void;
    /**
     * Set the (relative) scaling factor for the node
     */
    protected handleScale(): void;
    /**
     * Add the foreground and background colors
     * (Only look at explicit attributes, since inherited ones will
     *  be applied to a parent element, and we will inherit from that)
     */
    protected handleColor(): void;
    /**
     * Create the borders, if any are requested.
     */
    protected handleBorder(): void;
    /**
     * Create a solid border piece with the given color
     *
     * @param {[number, number][]} path    The points for the border segment
     * @param {string} color               The color to use
     * @param {N} child                    Insert the border before this child, if any
     */
    protected addBorderSolid(path: number[][], color: string, child: N): void;
    /**
     * Create a dashed or dotted border line with the given width and color
     *
     * @param {[number, number][]} path   The points for the border segment
     * @param {string} color              The color to use
     * @param {string} style              Either 'dotted' or 'dashed'
     * @param {number} t                  The thickness for the border line
     * @param {number} i                  The side being drawn
     */
    protected addBorderBroken(path: number[][], color: string, style: string, t: number, i: number): void;
    /**
     * Copy RDFa, aria, and other tags from the MathML to the SVG output nodes.
     * Don't copy those in the skipAttributes list, or anything that already exists
     * as a property of the node (e.g., no "onlick", etc.).  If a name in the
     * skipAttributes object is set to false, then the attribute WILL be copied.
     * Add the class to any other classes already in use.
     */
    protected handleAttributes(): void;
    /*******************************************************************/
    /**
     * @param {number} x   The x-offset for the element
     * @param {number} y   The y-offset for the element
     * @param {N} element  The element to be placed
     */
    place(x: number, y: number, element?: N): void;
    /**
     * Firefox and Safari don't scroll to the top of the element with an Id, so
     *   we shift the element up and then translate its contents down in order to
     *   correct for their positioning.  Also, Safari will go to the baseline of
     *   a <text> element (e.g., when mtextInheritFont is true), so add a text
     *   element to help Safari get the right location.
     *
     * @param {number} y     The current offset of the element
     * @return {number}      The new offset for the element if it has an id
     */
    protected handleId(y: number): number;
    /**
     * Return the first child element, skipping id align boxes and href hit boxes
     *
     * @return {N}   The first "real" child element
     */
    firstChild(): N;
    /**
     * @param {number} n        The character number
     * @param {number} x        The x-position of the character
     * @param {number} y        The y-position of the character
     * @param {N} parent        The container for the character
     * @param {string} variant  The variant to use for the character
     * @return {number}         The width of the character
     */
    placeChar(n: number, x: number, y: number, parent: N, variant?: string): number;
    /**
     * @param {string} variant    The name of the variant being used
     * @param {string} C          The hex string for the character code
     * @param {string} path       The data from the character
     * @return {N}                The <path> or <use> node for the glyph
     */
    protected charNode(variant: string, C: string, path: string): N;
    /**
     * @param {string} C          The hex string for the character code
     * @param {string} path       The data from the character
     * @return {N}                The <path> for the glyph
     */
    protected pathNode(C: string, path: string): N;
    /**
     * @param {string} variant    The name of the variant being used
     * @param {string} C          The hex string for the character code
     * @param {string} path       The data from the character
     * @return {N}                The <use> node for the glyph
     */
    protected useNode(variant: string, C: string, path: string): N;
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
     * @param {string} type      The tag name of the svg node to be created
     * @param {OptionList} def   The properties to set for the created node
     * @param {(N|T)[]} content  The child nodes for the created SVG node
     * @return {N}               The generated SVG tree
     */
    svg(type: string, def?: OptionList, content?: (N | T)[]): N;
    /**
     * @param {string} text  The text from which to create an HTML text node
     * @return {T}  The generated text node with the given text
     */
    text(text: string): T;
    /**
     * @param {number} x   The dimension to display
     * @param {number=} n  The number of digits to display
     * @return {string}    The dimension with the given number of digits (minus trailing zeros)
     */
    fixed(x: number, n?: number): string;
}
