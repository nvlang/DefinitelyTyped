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
 * @fileoverview  Implements the abstract class for the CommonOutputJax
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { AbstractOutputJax } from '../../core/OutputJax.js';
import { MathDocument } from '../../core/MathDocument.js';
import { MathItem, Metrics } from '../../core/MathItem.js';
import { MmlNode } from '../../core/MmlTree/MmlNode.js';
import { FontData, FontDataClass, CssFontData } from './FontData.js';
import { OptionList } from '../../util/Options.js';
import { CommonWrapper, AnyWrapper } from './Wrapper.js';
import { CommonWrapperFactory, AnyWrapperFactory } from './WrapperFactory.js';
import { StyleList, Styles } from '../../util/Styles.js';
import { StyleList as CssStyleList, CssStyles } from '../../util/StyleList.js';
/*****************************************************************/
export interface ExtendedMetrics extends Metrics {
    family: string;
}
/**
 * Maps linking a node to the test node it contains,
 *  and a map linking a node to the metrics within that node.
 */
export type MetricMap<N> = Map<N, ExtendedMetrics>;
/**
 * Maps for unknown characters
 */
export type UnknownBBox = {
    w: number;
    h: number;
    d: number;
};
export type UnknownMap = Map<string, UnknownBBox>;
export type UnknownVariantMap = Map<string, UnknownMap>;
/*****************************************************************/
/**
 *  The CommonOutputJax class on which the CHTML and SVG jax are built
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 * @template W  The Wrapper class
 * @template F  The WrapperFactory class
 * @template FD The FontData class
 * @template FC The FontDataClass object
 */
export declare abstract class CommonOutputJax<N, T, D, W extends AnyWrapper, F extends AnyWrapperFactory, FD extends FontData<any, any, any>, FC extends FontDataClass<any, any, any>> extends AbstractOutputJax<N, T, D> {
    /**
     * The name of this output jax
     */
    static NAME: string;
    /**
     * @override
     */
    static OPTIONS: OptionList;
    /**
     *  The default styles for the output jax
     */
    static commonStyles: CssStyleList;
    /**
     * Used for collecting styles needed for the output jax
     */
    cssStyles: CssStyles;
    /**
     * The MathDocument for the math we find
     */
    document: MathDocument<N, T, D>;
    /**
     * the MathItem currently being processed
     */
    math: MathItem<N, T, D>;
    /**
     * The container element for the math
     */
    container: N;
    /**
     * The top-level table, if any
     */
    table: AnyWrapper;
    /**
     * The pixels per em for the math item being processed
     */
    pxPerEm: number;
    /**
     * The data for the font in use
     */
    font: FD;
    /**
     * The wrapper factory for the MathML nodes
     */
    factory: F;
    /**
     * A map from the nodes in the expression currently being processed to the
     * wrapper nodes for them (used by functions like core() to locate the wrappers
     * from the core nodes)
     */
    nodeMap: Map<MmlNode, W>;
    /**
     * Node used to test for in-line metric data
     */
    testInline: N;
    /**
     * Node used to test for display metric data
     */
    testDisplay: N;
    /**
     * Cache of unknonw character bounding boxes for this element
     */
    protected unknownCache: UnknownVariantMap;
    /*****************************************************************/
    /**
     * Get the WrapperFactory and connect it to this output jax
     * Get the cssStyle and font objects
     *
     * @param {OptionList} options         The configuration options
     * @param {CommonWrapperFactory} defaultFactory  The default wrapper factory class
     * @param {FC} defaultFont  The default FontData constructor
     * @constructor
     */
    constructor(options?: OptionList, defaultFactory?: typeof CommonWrapperFactory, defaultFont?: FC);
    /*****************************************************************/
    /**
     * Save the math document
     * Create the mjx-container node
     * Create the DOM output for the root MathML math node in the container
     * Return the container node
     *
     * @override
     */
    typeset(math: MathItem<N, T, D>, html: MathDocument<N, T, D>): N;
    /**
     * @return {N}  The container DOM node for the typeset math
     */
    protected createNode(): N;
    /**
     * @param {N} node   The container whose scale is to be set
     */
    protected setScale(node: N): void;
    /**
     * Save the math document, if any, and the math item
     * Set the document where HTML nodes will be created via the adaptor
     * Recursively set the TeX classes for the nodes
     * Set the scaling for the DOM node
     * Create the nodeMap (maps MathML nodes to corresponding wrappers)
     * Create the HTML output for the root MathML node in the container
     * Clear the nodeMape
     * Execute the post-filters
     *
     * @param {MathItem} math      The math item to convert
     * @param {N} node             The contaier to place the result into
     * @param {MathDocument} html  The document containing the math
     */
    toDOM(math: MathItem<N, T, D>, node: N, html?: MathDocument<N, T, D>): void;
    /**
     * This is the actual typesetting function supplied by the subclass
     *
     * @param {MmlNode} math   The intenral MathML node of the root math element to process
     * @param {N} node         The container node where the math is to be typeset
     */
    protected abstract processMath(math: MmlNode, node: N): void;
    /*****************************************************************/
    /**
     * @param {MathItem} math      The MathItem to get the bounding box for
     * @param {MathDocument} html  The MathDocument for the math
     */
    getBBox(math: MathItem<N, T, D>, html: MathDocument<N, T, D>): any;
    /*****************************************************************/
    /**
     * @override
     */
    getMetrics(html: MathDocument<N, T, D>): void;
    /**
     * @param {N} node            The container node whose metrics are to be measured
     * @param {boolean} display   True if the metrics are for displayed math
     * @return {Metrics}          Object containing em, ex, containerWidth, etc.
     */
    getMetricsFor(node: N, display: boolean): ExtendedMetrics;
    /**
     * Get a MetricMap for the math list
     *
     * @param {MathDocument} html  The math document whose math list is to be processed.
     * @return {MetricMap[]}       The node-to-metrics maps for all the containers that have math
     */
    protected getMetricMaps(html: MathDocument<N, T, D>): MetricMap<N>[];
    /**
     * @param {N} node    The math element to be measured
     * @return {N}        The test elements that were added
     */
    protected getTestElement(node: N, display: boolean): N;
    /**
     * @param {N} node              The test node to measure
     * @param {boolean} getFamily   True if font family of surroundings is to be determined
     * @return {ExtendedMetrics}    The metric data for the given node
     */
    protected measureMetrics(node: N, getFamily: boolean): ExtendedMetrics;
    /*****************************************************************/
    /**
     * @override
     */
    styleSheet(html: MathDocument<N, T, D>): N;
    /**
     * @param {CssStyles} styles   The style object to add to
     */
    protected addFontStyles(styles: CssStyles): void;
    /**
     * @param {CssStyles} styles   The style object to add to
     */
    protected addWrapperStyles(styles: CssStyles): void;
    /**
     * @param {typeof CommonWrapper} CLASS  The Wrapper class whose styles are to be added
     * @param {CssStyles} styles            The style object to add to.
     */
    protected addClassStyles(CLASS: typeof CommonWrapper, styles: CssStyles): void;
    /*****************************************************************/
    /**
     * @param {MathDocument} html  The document to be used
     */
    protected setDocument(html: MathDocument<N, T, D>): void;
    /**
     * @param {string} type      The type of HTML node to create
     * @param {OptionList} def   The properties to set on the HTML node
     * @param {(N|T)[]} content  Array of child nodes to set for the HTML node
     * @param {string} ns        The namespace for the element
     * @return {N}               The newly created DOM tree
     */
    html(type: string, def?: OptionList, content?: (N | T)[], ns?: string): N;
    /**
     * @param {string} text  The text string for which to make a text node
     *
     * @return {T}  A text node with the given text
     */
    text(text: string): T;
    /**
     * @param {number} m    A number to be shown with a fixed number of digits
     * @param {number=} n   The number of digits to use
     * @return {string}     The formatted number
     */
    fixed(m: number, n?: number): string;
    /*****************************************************************/
    /**
     * Create a DOM node for text from a specific CSS font, or that is
     *  not in the current MathJax font
     *
     * @param {string} text        The text to be displayed
     * @param {string} variant     The name of the variant for the text
     * @return {N}                 The text element containing the text
     */
    abstract unknownText(text: string, variant: string): N;
    /**
     * Measure text from a specific font, or that isn't in the MathJax font
     *
     * @param {string} text        The text to measure
     * @param {string} variant     The variant for the text
     * @param {CssFontData} font   The family, italic, and bold data for explicit fonts
     * @return {UnknownBBox}       The width, height, and depth of the text (in ems)
     */
    measureText(text: string, variant: string, font?: CssFontData): UnknownBBox;
    /**
     * Get the size of a text node, caching the result, and using
     *   a cached result, if there is one.
     *
     * @param {N} text         The text element to measure
     * @param {string} chars   The string contained in the text node
     * @param {string} variant     The variant for the text
     * @param {CssFontData} font   The family, italic, and bold data for explicit fonts
     * @return {UnknownBBox}   The width, height and depth for the text
     */
    measureTextNodeWithCache(text: N, chars: string, variant: string, font?: CssFontData): UnknownBBox;
    /**
     * Measure the width of a text element by placing it in the page
     *  and looking up its size (fake the height and depth, since we can't measure that)
     *
     * @param {N} text            The text element to measure
     * @return {UnknownBBox}      The width, height and depth for the text (in ems)
     */
    abstract measureTextNode(text: N): UnknownBBox;
    /**
     * Measure the width, height and depth of an annotation-xml node's content
     *
     * @param{N} xml          The xml content node to be measured
     * @return {UnknownBBox}  The width, height, and depth of the content
     */
    measureXMLnode(xml: N): UnknownBBox;
    /**
     * @param {CssFontData} font   The family, style, and weight for the given font
     * @param {StyleList} styles   The style object to add the font data to
     * @return {StyleList}         The modified (or initialized) style object
     */
    cssFontStyles(font: CssFontData, styles?: StyleList): StyleList;
    /**
     * @param {Styles} styles   The style object to query
     * @return {CssFontData}    The family, italic, and boolean values
     */
    getFontData(styles: Styles): CssFontData;
}
