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
 * @fileoverview  The MathJax TeXFont object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { CHTMLFontData, CHTMLCharOptions, CHTMLVariantData, CHTMLDelimiterData, DelimiterMap, CharMapMap } from '../FontData.js';
import { StringMap } from '../Wrapper.js';
declare const TeXFont_base: import("ts/output/common/FontData.js").FontDataClass<CHTMLCharOptions, CHTMLVariantData, CHTMLDelimiterData> & typeof CHTMLFontData;
/**
 *  The TeXFont class
 */
export declare class TeXFont extends TeXFont_base {
    /**
     * Fonts to prefix any explicit ones
     */
    protected static defaultCssFamilyPrefix: string;
    /**
     * The classes to use for each variant
     */
    protected static defaultVariantClasses: StringMap;
    /**
     * The letters that identify the default font for each varaint
     */
    protected static defaultVariantLetters: StringMap;
    /**
     *  The stretchy delimiter data
     */
    protected static defaultDelimiters: DelimiterMap<CHTMLDelimiterData>;
    /**
     *  The character data by variant
     */
    protected static defaultChars: CharMapMap<CHTMLCharOptions>;
    /**
     * The CSS styles needed for this font.
     */
    protected static defaultStyles: {
        '.MJX-TEX': {
            'font-family': string;
        };
        '.TEX-B': {
            'font-family': string;
        };
        '.TEX-I': {
            'font-family': string;
        };
        '.TEX-MI': {
            'font-family': string;
        };
        '.TEX-BI': {
            'font-family': string;
        };
        '.TEX-S1': {
            'font-family': string;
        };
        '.TEX-S2': {
            'font-family': string;
        };
        '.TEX-S3': {
            'font-family': string;
        };
        '.TEX-S4': {
            'font-family': string;
        };
        '.TEX-A': {
            'font-family': string;
        };
        '.TEX-C': {
            'font-family': string;
        };
        '.TEX-CB': {
            'font-family': string;
        };
        '.TEX-FR': {
            'font-family': string;
        };
        '.TEX-FRB': {
            'font-family': string;
        };
        '.TEX-SS': {
            'font-family': string;
        };
        '.TEX-SSB': {
            'font-family': string;
        };
        '.TEX-SSI': {
            'font-family': string;
        };
        '.TEX-SC': {
            'font-family': string;
        };
        '.TEX-T': {
            'font-family': string;
        };
        '.TEX-V': {
            'font-family': string;
        };
        '.TEX-VB': {
            'font-family': string;
        };
        'mjx-stretchy-v mjx-c, mjx-stretchy-h mjx-c': {
            'font-family': string;
        };
        'mjx-c::before': {
            display: string;
            width: number;
        };
    };
    /**
     * The default @font-face declarations with %%URL%% where the font path should go
     */
    protected static defaultFonts: {
        '@font-face /* 1 */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* 2 */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* 3 */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* 4 */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* 5 */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* 6 */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* 7 */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* 8 */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* 9 */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* 10 */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* 11 */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* 12 */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* 13 */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* 14 */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* 15 */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* 16 */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* 17 */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* 18 */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* 19 */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* 20 */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* 21 */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* 0 */': {
            'font-family': string;
            src: string;
        };
    };
}
export {};
