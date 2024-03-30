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
 * @fileoverview  Implements the CHTML OutputJax object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { CommonOutputJax } from './common/OutputJax.js';
import { CommonWrapper } from './common/Wrapper.js';
import { StyleList as CssStyleList, CssStyles } from '../util/StyleList.js';
import { OptionList } from '../util/Options.js';
import { MathDocument } from '../core/MathDocument.js';
import { MathItem } from '../core/MathItem.js';
import { MmlNode } from '../core/MmlTree/MmlNode.js';
import { CHTMLWrapper } from './chtml/Wrapper.js';
import { CHTMLWrapperFactory } from './chtml/WrapperFactory.js';
import { CHTMLFontData } from './chtml/FontData.js';
import { Usage } from './chtml/Usage.js';
/*****************************************************************/
/**
 *  Implements the CHTML class (extends AbstractOutputJax)
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class CHTML<N, T, D> extends CommonOutputJax<N, T, D, CHTMLWrapper<N, T, D>, CHTMLWrapperFactory<N, T, D>, CHTMLFontData, typeof CHTMLFontData> {
    /**
     * The name of this output jax
     */
    static NAME: string;
    /**
     * @override
     */
    static OPTIONS: OptionList;
    /**
     *  The default styles for CommonHTML
     */
    static commonStyles: CssStyleList;
    /**
     * The ID for the stylesheet element for the styles for the SVG output
     */
    static STYLESHEETID: string;
    /**
     *  Used to store the CHTMLWrapper factory.
     */
    factory: CHTMLWrapperFactory<N, T, D>;
    /**
     * The usage information for the wrapper classes
     */
    wrapperUsage: Usage<string>;
    /**
     * The CHTML stylesheet, once it is constructed
     */
    chtmlStyles: N;
    /**
     * @override
     * @constructor
     */
    constructor(options?: OptionList);
    /**
     * @override
     */
    escaped(math: MathItem<N, T, D>, html: MathDocument<N, T, D>): N;
    /**
     * @override
     */
    styleSheet(html: MathDocument<N, T, D>): N;
    /**
     * @param {CssStyles} styles   The styles to update with newly used character styles
     */
    protected updateFontStyles(styles: CssStyles): void;
    /**
     * @override
     */
    protected addWrapperStyles(styles: CssStyles): void;
    /**
     * @override
     */
    protected addClassStyles(wrapper: typeof CommonWrapper, styles: CssStyles): void;
    /**
     * @param {MmlNode} math  The MML node whose HTML is to be produced
     * @param {N} parent      The HTML node to contain the HTML
     */
    protected processMath(math: MmlNode, parent: N): void;
    /**
     * Clear the cache of which items need their styles to be output
     */
    clearCache(): void;
    /**
     * @override
     */
    reset(): void;
    /*****************************************************************/
    /**
     * @override
     */
    unknownText(text: string, variant: string, width?: number): N;
    /**
     * Measure the width of a text element by placing it in the page
     *  and looking up its size (fake the height and depth, since we can't measure that)
     *
     * @override
     */
    measureTextNode(textNode: N): {
        w: number;
        h: number;
        d: number;
    };
}
