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
 * @fileoverview  Implements the SVG OutputJax object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { CommonOutputJax, UnknownBBox } from './common/OutputJax.js';
import { OptionList } from '../util/Options.js';
import { MathDocument } from '../core/MathDocument.js';
import { MathItem } from '../core/MathItem.js';
import { MmlNode } from '../core/MmlTree/MmlNode.js';
import { SVGWrapper } from './svg/Wrapper.js';
import { SVGWrapperFactory } from './svg/WrapperFactory.js';
import { SVGFontData } from './svg/FontData.js';
import { StyleList as CssStyleList } from '../util/StyleList.js';
import { FontCache } from './svg/FontCache.js';
export declare const SVGNS = "http://www.w3.org/2000/svg";
export declare const XLINKNS = "http://www.w3.org/1999/xlink";
/*****************************************************************/
/**
 *  Implements the CHTML class (extends AbstractOutputJax)
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class SVG<N, T, D> extends CommonOutputJax<N, T, D, SVGWrapper<N, T, D>, SVGWrapperFactory<N, T, D>, SVGFontData, typeof SVGFontData> {
    /**
     * The name of the output jax
     */
    static NAME: string;
    /**
     * @override
     */
    static OPTIONS: OptionList;
    /**
     *  The default styles for SVG
     */
    static commonStyles: CssStyleList;
    /**
     * The ID for the SVG element that stores the cached font paths
     */
    static FONTCACHEID: string;
    /**
     * The ID for the stylesheet element for the styles for the SVG output
     */
    static STYLESHEETID: string;
    /**
     * Stores the CHTMLWrapper factory
     */
    factory: SVGWrapperFactory<N, T, D>;
    /**
     * Stores the information about the cached character glyphs
     */
    fontCache: FontCache<N, T, D>;
    /**
     * Minimum width for tables with labels,
     */
    minwidth: number;
    /**
     * The shift for the main equation
     */
    shift: number;
    /**
     * The container element for the math
     */
    container: N;
    /**
     * The SVG stylesheet, once it is constructed
     */
    svgStyles: N;
    /**
     * @override
     * @constructor
     */
    constructor(options?: OptionList);
    /**
     * @override
     */
    initialize(): void;
    /**
     * Clear the font cache (use for resetting the global font cache)
     */
    clearFontCache(): void;
    /**
     * @override
     */
    reset(): void;
    /**
     * @override
     */
    protected setScale(node: N): void;
    /**
     * @override
     */
    escaped(math: MathItem<N, T, D>, html: MathDocument<N, T, D>): N;
    /**
     * @override
     */
    styleSheet(html: MathDocument<N, T, D>): N;
    /**
     * @override
     */
    pageElements(html: MathDocument<N, T, D>): N;
    /**
     * Checks if there is already a font-cache element in the page
     *
     * @param {MathDocument} html   The document to search
     * @return {boolean}            True if a font cache already exists in the page
     */
    protected findCache(html: MathDocument<N, T, D>): boolean;
    /**
     * @param {MmlNode} math  The MML node whose SVG is to be produced
     * @param {N} parent      The HTML node to contain the SVG
     */
    protected processMath(math: MmlNode, parent: N): void;
    /**
     * @param {SVGWrapper} wrapper   The wrapped math to process
     * @return {[N, N]}              The svg and g nodes for the math
     */
    protected createRoot(wrapper: SVGWrapper<N, T, D>): [N, N];
    /**
     * Typeset the math and add minwidth (from mtables), or set the alignment and indentation
     * of the finalized expression.
     *
     * @param {SVGWrapper} wrapper   The wrapped math to typeset
     * @param {N} svg                The main svg element for the typeet math
     * @param {N} g                  The group in which the math is typeset
     */
    protected typesetSVG(wrapper: SVGWrapper<N, T, D>, svg: N, g: N): void;
    /**
     * @param {N} svg         The svg node whose indentation is to be adjusted
     * @param {string} align  The alignment for the node
     * @param {number} shift  The indent (positive or negative) for the node
     */
    protected setIndent(svg: N, align: string, shift: number): void;
    /**
     * @param {number} m  A number to be shown in ex
     * @return {string}   The number with units of ex
     */
    ex(m: number): string;
    /**
     * @param {string} kind             The kind of node to create
     * @param {OptionList} properties   The properties to set for the element
     * @param {(N|T)[]} children            The child nodes for this node
     * @return {N}                      The newly created node in the SVG namespace
     */
    svg(kind: string, properties?: OptionList, children?: (N | T)[]): N;
    /**
     * @param {string} text      The text to be displayed
     * @param {string} variant   The name of the variant for the text
     * @return {N}               The text element containing the text
     */
    unknownText(text: string, variant: string): N;
    /**
     * Measure the width of a text element by placing it in the page
     *  and looking up its size (fake the height and depth, since we can't measure that)
     *
     * @param {N} text         The text element to measure
     * @return {Object}        The width, height and depth for the text
     */
    measureTextNode(text: N): UnknownBBox;
}
