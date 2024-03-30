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
 * @fileoverview  Implements the CHTMLFontData class and AddCSS() function.
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { CharMap, CharOptions, CharData, VariantData, DelimiterData, FontData } from '../common/FontData.js';
import { Usage } from './Usage.js';
import { StringMap } from './Wrapper.js';
import { StyleList } from '../../util/StyleList.js';
export * from '../common/FontData.js';
/****************************************************************************/
/**
 * Add the extra data needed for CharOptions in CHTML
 */
export interface CHTMLCharOptions extends CharOptions {
    c?: string;
    f?: string;
}
/**
 * Shorthands for CHTML char maps and char data
 */
export type CHTMLCharMap = CharMap<CHTMLCharOptions>;
export type CHTMLCharData = CharData<CHTMLCharOptions>;
/**
 * The extra data needed for a Variant in CHTML output
 */
export interface CHTMLVariantData extends VariantData<CHTMLCharOptions> {
    classes?: string;
    letter: string;
}
/**
 * The extra data needed for a Delimiter in CHTML output
 */
export interface CHTMLDelimiterData extends DelimiterData {
}
/****************************************************************************/
/**
 * The CHTML FontData class
 */
export declare class CHTMLFontData extends FontData<CHTMLCharOptions, CHTMLVariantData, CHTMLDelimiterData> {
    /**
     * Default options
     */
    static OPTIONS: {
        fontURL: string;
    };
    /**
     * @override
     */
    static JAX: string;
    /**
     * The default class names to use for each variant
     */
    protected static defaultVariantClasses: StringMap;
    /**
     * The default font letter to use for each variant
     */
    protected static defaultVariantLetters: StringMap;
    /**
     * The CSS styles needed for this font.
     */
    protected static defaultStyles: {
        'mjx-c::before': {
            display: string;
            width: number;
        };
    };
    /**
     * The default @font-face declarations with %%URL%% where the font path should go
     */
    protected static defaultFonts: {
        '@font-face /* 0 */': {
            'font-family': string;
            src: string;
        };
    };
    /***********************************************************************/
    /**
     * Data about the characters used (for adaptive CSS)
     */
    charUsage: Usage<[string, number]>;
    /**
     * Data about the delimiters used (for adpative CSS)
     */
    delimUsage: Usage<number>;
    /***********************************************************************/
    /**
     * @override
     */
    static charOptions(font: CHTMLCharMap, n: number): CHTMLCharOptions;
    /***********************************************************************/
    /**
     * @param {boolean} adapt   Whether to use adaptive CSS or not
     */
    adaptiveCSS(adapt: boolean): void;
    /**
     * Clear the cache of which characters have been used
     */
    clearCache(): void;
    /**
     * @override
     */
    createVariant(name: string, inherit?: string, link?: string): void;
    /**
     * @override
     */
    defineChars(name: string, chars: CHTMLCharMap): void;
    /***********************************************************************/
    /**
     * @return {StyleList}  The (computed) styles for this font
     */
    get styles(): StyleList;
    /**
     * Get the styles for any newly used characters and delimiters
     *
     * @param {StyleList} styles  The style list to add delimiter styles to.
     * @return {StyleList}        The modified style list.
     */
    updateStyles(styles: StyleList): StyleList;
    /**
     * @param {StyleList} styles  The style list to add characters to
     */
    protected allStyles(styles: StyleList): void;
    /**
     * @param {StyleList} styles    The style object to add styles to
     * @param {StyleList} fonts     The default font-face directives with %%URL%% where the url should go
     * @param {string} url          The actual URL to insert into the src strings
     */
    protected addFontURLs(styles: StyleList, fonts: StyleList, url: string): void;
    /*******************************************************/
    /**
     * @param {StyleList} styles         The style object to add styles to
     * @param {number} n                 The unicode character number of the delimiter
     * @param {CHTMLDelimiterData} data  The data for the delimiter whose CSS is to be added
     */
    protected addDelimiterStyles(styles: StyleList, n: number, data: CHTMLDelimiterData): void;
    /*******************************************************/
    /**
     * @param {StyleList} styles         The style object to add styles to
     * @param {string} c                 The delimiter character string
     * @param {CHTMLDelimiterData} data  The data for the delimiter whose CSS is to be added
     */
    protected addDelimiterVStyles(styles: StyleList, c: string, data: CHTMLDelimiterData): void;
    /**
     * @param {StyleList} styles  The style object to add styles to
     * @param {string} c          The vertical character whose part is being added
     * @param {string} part       The name of the part (beg, ext, end, mid) that is being added
     * @param {number} n          The unicode character to use for the part
     * @param {number} HDW        The height-depth-width data for the stretchy delimiter
     * @return {number}           The total height of the character
     */
    protected addDelimiterVPart(styles: StyleList, c: string, part: string, n: number, HDW: CHTMLCharData): number;
    /*******************************************************/
    /**
     * @param {StyleList} styles         The style object to add styles to
     * @param {string} c                 The delimiter character string
     * @param {CHTMLDelimiterData} data  The data for the delimiter whose CSS is to be added
     */
    protected addDelimiterHStyles(styles: StyleList, c: string, data: CHTMLDelimiterData): void;
    /**
     * @param {StyleList} styles  The style object to add styles to
     * @param {string} c          The vertical character whose part is being added
     * @param {string} part       The name of the part (beg, ext, end, mid) that is being added
     * @param {number} n          The unicode character to use for the part
     * @param {CHTMLCharData} HDW The height-depth-width data for the stretchy character
     */
    protected addDelimiterHPart(styles: StyleList, c: string, part: string, n: number, HDW: CHTMLCharData): void;
    /*******************************************************/
    /**
     * @param {StyleList} styles  The style object to add styles to
     * @param {string} vletter    The variant class letter (e.g., `B`, `SS`) where this character is being defined
     * @param {number} n          The unicode character being defined
     * @param {CHTMLCharData} data     The bounding box data and options for the character
     */
    protected addCharStyles(styles: StyleList, vletter: string, n: number, data: CHTMLCharData): void;
    /***********************************************************************/
    /**
     * @param {number} n         The character number to find
     * @return {CHTMLCharData}   The data for that character to be used for stretchy delimiters
     */
    protected getDelimiterData(n: number): CHTMLCharData;
    /**
     * @param {number} n  The number of ems
     * @return {string}   The string representing the number with units of "em"
     */
    em(n: number): string;
    /**
     * @param {number} n  The number of ems (will be restricted to non-negative values)
     * @return {string}   The string representing the number with units of "em"
     */
    em0(n: number): string;
    /**
     * @param {CHTMLCharData} data   The [h, d, w] data for the character
     * @param {number} dw            The (optional) left offset of the glyph
     * @param {number} ic            The (optional) italic correction value
     * @return {string}              The padding string for the h, d, w.
     */
    padding([h, d, w]: CHTMLCharData, dw?: number, ic?: number): string;
    /**
     * @param {number} n  A unicode code point to be converted to character content for use with the
     *                    CSS rules for fonts (either a literal character for most ASCII values, or \nnnn
     *                    for higher values, or for the double quote and backslash characters).
     * @return {string}   The character as a properly encoded string in quotes.
     */
    charContent(n: number): string;
    /**
     * @param {number} n  A unicode code point to be converted to a selector for use with the
     *                    CSS rules for fonts
     * @return {string}   The character as a selector value.
     */
    charSelector(n: number): string;
}
/**
 * The CHTMLFontData constructor class
 */
export type CHTMLFontDataClass = typeof CHTMLFontData;
/****************************************************************************/
/**
 * Data needed for AddCSS()
 */
export type CharOptionsMap = {
    [name: number]: CHTMLCharOptions;
};
export type CssMap = {
    [name: number]: number;
};
/**
 * @param {CHTMLCharMap} font        The font to augment
 * @param {CharOptionsMap} options   Any additional options for characters in the font
 * @return {CHTMLCharMap}            The augmented font
 */
export declare function AddCSS(font: CHTMLCharMap, options: CharOptionsMap): CHTMLCharMap;
