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
 * @fileoverview  Implements the CommonWrapper class
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { AbstractWrapper, WrapperClass } from '../../core/Tree/Wrapper.js';
import { PropertyList } from '../../core/Tree/Node.js';
import { MmlNode, TextNode } from '../../core/MmlTree/MmlNode.js';
import { Property } from '../../core/Tree/Node.js';
import { Styles } from '../../util/Styles.js';
import { StyleList } from '../../util/StyleList.js';
import { CommonOutputJax } from './OutputJax.js';
import { CommonWrapperFactory } from './WrapperFactory.js';
import { BBox } from '../../util/BBox.js';
import { FontData, DelimiterData, CharData, CharOptions, DIRECTION } from './FontData.js';
/*****************************************************************/
/**
 * Shorthand for a dictionary object (an object of key:value pairs)
 */
export type StringMap = {
    [key: string]: string;
};
export type Constructor<T> = new (...args: any[]) => T;
/**
 * Shorthands for wrappers and their constructors
 */
export type AnyWrapper = CommonWrapper<any, any, any, any, any, any>;
export type AnyWrapperClass = CommonWrapperClass<any, any, any, any, any, any>;
export type WrapperConstructor = Constructor<AnyWrapper>;
/*********************************************************/
/**
 *  The CommonWrapper class interface
 *
 * @template J  The OutputJax type
 * @template W  The Wrapper type
 * @template C  The WrapperClass type
 * @template CC The CharOptions type
 * @template FD The FontData type
 */
export interface CommonWrapperClass<J extends CommonOutputJax<any, any, any, W, CommonWrapperFactory<J, W, C, CC, DD, FD>, FD, any>, W extends CommonWrapper<J, W, C, CC, DD, FD>, C extends CommonWrapperClass<J, W, C, CC, DD, FD>, CC extends CharOptions, DD extends DelimiterData, FD extends FontData<CC, any, DD>> extends WrapperClass<MmlNode, CommonWrapper<J, W, C, CC, DD, FD>> {
    /**
     * @override
     */
    new (factory: CommonWrapperFactory<J, W, C, CC, DD, FD>, node: MmlNode, ...args: any[]): W;
}
/*****************************************************************/
/**
 *  The base CommonWrapper class
 *
 * @template J  The OutputJax type
 * @template W  The Wrapper type
 * @template C  The WrapperClass type
 * @template CC The CharOptions type
 * @template FD The FontData type
 */
export declare class CommonWrapper<J extends CommonOutputJax<any, any, any, W, CommonWrapperFactory<J, W, C, CC, DD, FD>, FD, any>, W extends CommonWrapper<J, W, C, CC, DD, FD>, C extends CommonWrapperClass<J, W, C, CC, DD, FD>, CC extends CharOptions, DD extends DelimiterData, FD extends FontData<CC, any, DD>> extends AbstractWrapper<MmlNode, CommonWrapper<J, W, C, CC, DD, FD>> {
    /**
     * The wrapper kind
     */
    static kind: string;
    /**
     * Any styles needed for the class
     */
    static styles: StyleList;
    /**
     * Styles that should not be passed on from style attribute
     */
    static removeStyles: string[];
    /**
     * Non-MathML attributes on MathML elements NOT to be copied to the
     * corresponding DOM elements.  If set to false, then the attribute
     * WILL be copied.  Most of these (like the font attributes) are handled
     * in other ways.
     */
    static skipAttributes: {
        [name: string]: boolean;
    };
    /**
     * The translation of mathvariant to bold styles, or to remove
     * bold from a mathvariant.
     */
    static BOLDVARIANTS: {
        [name: string]: StringMap;
    };
    /**
     * The translation of mathvariant to italic styles, or to remove
     * italic from a mathvariant.
     */
    static ITALICVARIANTS: {
        [name: string]: StringMap;
    };
    /**
     * The factory used to create more wrappers
     */
    protected factory: CommonWrapperFactory<J, W, C, CC, DD, FD>;
    /**
     * The parent of this node
     */
    parent: W;
    /**
     * The children of this node
     */
    childNodes: W[];
    /**
     * Styles that must be handled directly by the wrappers (mostly having to do with fonts)
     */
    protected removedStyles: StringMap;
    /**
     * The explicit styles set by the node
     */
    protected styles: Styles;
    /**
     * The mathvariant for this node
     */
    variant: string;
    /**
     * The bounding box for this node
     */
    bbox: BBox;
    /**
     * Whether the bounding box has been computed yet
     */
    protected bboxComputed: boolean;
    /**
     * Delimiter data for stretching this node (NOSTRETCH means not yet determined)
     */
    stretch: DD;
    /**
     * Easy access to the font parameters
     */
    font: FD;
    /**
     * Easy access to the output jax for this node
     */
    get jax(): J;
    /**
     * Easy access to the DOMAdaptor object
     */
    get adaptor(): import("ts/core/DOMAdaptor.js").DOMAdaptor<any, any, any>;
    /**
     * Easy access to the metric data for this node
     */
    get metrics(): import("ts/core/MathItem.js").Metrics;
    /**
     * True if children with percentage widths should be resolved by this container
     */
    get fixesPWidth(): boolean;
    /*******************************************************************/
    /**
     * @override
     */
    constructor(factory: CommonWrapperFactory<J, W, C, CC, DD, FD>, node: MmlNode, parent?: W);
    /**
     * @param {MmlNode} node  The node to the wrapped
     * @param {W} parent  The wrapped parent node
     * @return {W}  The newly wrapped node
     */
    wrap(node: MmlNode, parent?: W): W;
    /*******************************************************************/
    /**
     * Return the wrapped node's bounding box, either the cached one, if it exists,
     *   or computed directly if not.
     *
     * @param {boolean} save  Whether to cache the bbox or not (used for stretchy elements)
     * @return {BBox}  The computed bounding box
     */
    getBBox(save?: boolean): BBox;
    /**
     * Return the wrapped node's bounding box that includes borders and padding
     *
     * @param {boolean} save  Whether to cache the bbox or not (used for stretchy elements)
     * @return {BBox}  The computed bounding box
     */
    getOuterBBox(save?: boolean): BBox;
    /**
     * @param {BBox} bbox           The bounding box to modify (either this.bbox, or an empty one)
     * @param {boolean} recompute   True if we are recomputing due to changes in children that have percentage widths
     */
    protected computeBBox(bbox: BBox, recompute?: boolean): void;
    /**
     * Recursively resolve any percentage widths in the child nodes using the given
     *   container width (or the child width, if none was passed).
     *   Overriden for mtables in order to compute the width.
     *
     * @param {boolean} recompute  True if we are recomputing due to changes in children
     * @param {(number|null)=} w   The width of the container (from which percentages are computed)
     * @param {boolean=} clear     True if pwidth marker is to be cleared
     * @return {boolean}           True if a percentage width was found
     */
    setChildPWidths(recompute: boolean, w?: (number | null), clear?: boolean): boolean;
    /**
     * Mark BBox to be computed again (e.g., when an mo has stretched)
     */
    invalidateBBox(): void;
    /**
     * Copy child skew and italic correction
     *
     * @param {BBox} bbox  The bounding box to modify
     */
    protected copySkewIC(bbox: BBox): void;
    /*******************************************************************/
    /**
     * Add the style attribute, but remove any font-related styles
     *   (since these are handled separately by the variant)
     */
    protected getStyles(): void;
    /**
     * Get the mathvariant (or construct one, if needed).
     */
    protected getVariant(): void;
    /**
     * Set the CSS for a token element having an explicit font (rather than regular mathvariant).
     *
     * @param {string} fontFamily  The font family to use
     * @param {string} fontWeight  The font weight to use
     * @param {string} fontStyle   The font style to use
     */
    protected explicitVariant(fontFamily: string, fontWeight: string, fontStyle: string): string;
    /**
     * Determine the scaling factor to use for this wrapped node, and set the styles for it.
     */
    protected getScale(): void;
    /**
     * Sets the spacing based on TeX or MathML algorithm
     */
    protected getSpace(): void;
    /**
     * Get the spacing using MathML rules based on the core MO
     */
    protected getMathMLSpacing(): void;
    /**
     * Get the spacing using the TeX rules
     *
     * @parm {boolean} isTop       True when this is a top-level embellished operator
     * @parm {boolean} hasSpacing  True when there is an explicit or inherited 'form' attribute
     */
    protected getTeXSpacing(isTop: boolean, hasSpacing: boolean): void;
    /**
     * @return {boolean}   True if this is the top-most container of an embellished operator that is
     *                       itself an embellished operator (the maximal embellished operator for its core)
     */
    protected isTopEmbellished(): boolean;
    /*******************************************************************/
    /**
     * @return {CommonWrapper}  The wrapper for this node's core node
     */
    core(): CommonWrapper<J, W, C, CC, DD, FD>;
    /**
     * @return {CommonWrapper}  The wrapper for this node's core <mo> node
     */
    coreMO(): CommonWrapper<J, W, C, CC, DD, FD>;
    /**
     * @return {string}  For a token node, the combined text content of the node's children
     */
    getText(): string;
    /**
     * @param {DIRECTION} direction  The direction to stretch this node
     * @return {boolean}             Whether the node can stretch in that direction
     */
    canStretch(direction: DIRECTION): boolean;
    /**
     * @return {[string, number]}  The alignment and indentation shift for the expression
     */
    protected getAlignShift(): [string, number];
    /**
     * @param {number} W       The total width
     * @param {BBox} bbox      The bbox to be aligned
     * @param {string} align   How to align (left, center, right)
     * @return {number}        The x position of the aligned width
     */
    protected getAlignX(W: number, bbox: BBox, align: string): number;
    /**
     * @param {number} H        The total height
     * @param {number} D        The total depth
     * @param {number} h        The height to be aligned
     * @param {number} d        The depth to be aligned
     * @param {string} align    How to align (top, bottom, center, axis, baseline)
     * @return {number}         The y position of the aligned baseline
     */
    protected getAlignY(H: number, D: number, h: number, d: number, align: string): number;
    /**
     * @param {number} i   The index of the child element whose container is needed
     * @return {number}    The inner width as a container (for percentage widths)
     */
    getWrapWidth(i: number): number;
    /**
     * @param {number} i   The index of the child element whose container is needed
     * @return {string}    The alignment child element
     */
    getChildAlign(_i: number): string;
    /*******************************************************************/
    /**
     * @param {number} m  A number to be shown as a percent
     * @return {string}  The number m as a percent
     */
    protected percent(m: number): string;
    /**
     * @param {number} m  A number to be shown in ems
     * @return {string}  The number with units of ems
     */
    protected em(m: number): string;
    /**
     * @param {number} m   A number of em's to be shown as pixels
     * @param {number} M   The minimum number of pixels to allow
     * @return {string}  The number with units of px
     */
    protected px(m: number, M?: number): string;
    /**
     * @param {Property} length  A dimension (giving number and units) or number to be converted to ems
     * @param {number} size  The default size of the dimension (for percentage values)
     * @param {number} scale  The current scaling factor (to handle absolute units)
     * @return {number}  The dimension converted to ems
     */
    protected length2em(length: Property, size?: number, scale?: number): number;
    /**
     * @param {string} text   The text to turn into unicode locations
     * @param {string} name   The name of the variant for the characters
     * @return {number[]}     Array of numbers represeting the string's unicode character positions
     */
    protected unicodeChars(text: string, name?: string): number[];
    /**
     * @param {number[]} chars    The array of unicode character numbers to remap
     * @return {number[]}         The converted array
     */
    remapChars(chars: number[]): number[];
    /**
     * @param {string} text   The text from which to create a TextNode object
     * @return {TextNode}     The TextNode with the given text
     */
    mmlText(text: string): TextNode;
    /**
     * @param {string} kind             The kind of MmlNode to create
     * @param {ProperyList} properties  The properties to set initially
     * @param {MmlNode[]} children      The child nodes to add to the created node
     * @return {MmlNode}                The newly created MmlNode
     */
    mmlNode(kind: string, properties?: PropertyList, children?: MmlNode[]): MmlNode;
    /**
     * Create an mo wrapper with the given text,
     *   link it in, and give it the right defaults.
     *
     * @param {string} text     The text for the wrapped element
     * @return {CommonWrapper}  The wrapped MmlMo node
     */
    protected createMo(text: string): CommonWrapper<J, W, C, CC, DD, FD>;
    /**
     * @param {string} variant   The variant in which to look for the character
     * @param {number} n         The number of the character to look up
     * @return {CharData}        The full CharData object, with CharOptions guaranteed to be defined
     */
    protected getVariantChar(variant: string, n: number): CharData<CC>;
}
