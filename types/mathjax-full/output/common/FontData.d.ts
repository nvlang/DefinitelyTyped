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
 * @fileoverview  Implements the FontData class for character bbox data
 *                and stretchy delimiters.
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { OptionList } from '../../util/Options.js';
import { StyleList } from '../../util/StyleList.js';
/****************************************************************************/
/**
 * The extra options allowed in a CharData array
 */
export interface CharOptions {
    ic?: number;
    sk?: number;
    dx?: number;
    unknown?: boolean;
    smp?: number;
}
/****************************************************************************/
/**
 * Data about a character
 *   [height, depth, width, {italic-correction, skew, options}]
 *
 * @template C  The CharOptions type
 */
export type CharData<C extends CharOptions> = [
    number,
    number,
    number
] | [
    number,
    number,
    number,
    C
];
/**
 * An object making character positions to character data
 *
 * @template C  The CharOptions type
 */
export type CharMap<C extends CharOptions> = {
    [n: number]: CharData<C>;
};
/**
 * An object making variants to character maps
 *
 * @template C  The CharOptions type
 */
export type CharMapMap<C extends CharOptions> = {
    [name: string]: CharMap<C>;
};
/****************************************************************************/
/**
 * Data for a variant
 *
 * @template C  The CharOptions type
 */
export interface VariantData<C extends CharOptions> {
    /**
     * A list of CharMaps that must be updated when characters are
     * added to this variant
     */
    linked: CharMap<C>[];
    /**
     * The character data for this variant
     */
    chars: CharMap<C>;
}
/**
 * An object making variants names to variant data
 *
 * @template C  The CharOptions type
 * @template V  The VariantData type
 */
export type VariantMap<C extends CharOptions, V extends VariantData<C>> = {
    [name: string]: V;
};
/**
 * Data to use to map unknown characters in a variant to a
 * generic CSS font:
 *
 *    [fontname, italic, bold]
 */
export type CssFontData = [string, boolean, boolean];
/**
 * An object mapping a variant name to the CSS data needed for it
 */
export type CssFontMap = {
    [name: string]: CssFontData;
};
/****************************************************************************/
/**
 * Stretchy delimiter data
 */
export declare const enum DIRECTION {
    None = 0,
    Vertical = 1,
    Horizontal = 2
}
export declare const V = DIRECTION.Vertical;
export declare const H = DIRECTION.Horizontal;
/****************************************************************************/
/**
 * Data needed for stretchy vertical and horizontal characters
 */
export type DelimiterData = {
    dir: DIRECTION;
    sizes?: number[];
    variants?: number[];
    schar?: number[];
    stretch?: number[];
    stretchv?: number[];
    HDW?: number[];
    min?: number;
    c?: number;
    fullExt?: [number, number];
};
/**
 * An object mapping character numbers to delimiter data
 *
 * @template D  The DelimiterData type
 */
export type DelimiterMap<D extends DelimiterData> = {
    [n: number]: D;
};
/**
 * Delimiter data for a non-stretchy character
 */
export declare const NOSTRETCH: DelimiterData;
/****************************************************************************/
/**
 * Data for remapping characters
 */
export type RemapData = string;
export type RemapMap = {
    [key: number]: RemapData;
};
export type RemapMapMap = {
    [key: string]: RemapMap;
};
/**
 * Character remapping data for Math Alphanumerics
 */
export type SmpMap = {
    [c: number]: number;
};
/**
 * Data for Math Alphanumeric conversion:  starting positions for
 *  [Alpha, alpha, Greek, greek, Numbers]
 */
export type SmpData = [number, number, number?, number?, number?];
/****************************************************************************/
/**
 * Font parameters (for TeX typesetting rules)
 */
export type FontParameters = {
    x_height: number;
    quad: number;
    num1: number;
    num2: number;
    num3: number;
    denom1: number;
    denom2: number;
    sup1: number;
    sup2: number;
    sup3: number;
    sub1: number;
    sub2: number;
    sup_drop: number;
    sub_drop: number;
    delim1: number;
    delim2: number;
    axis_height: number;
    rule_thickness: number;
    big_op_spacing1: number;
    big_op_spacing2: number;
    big_op_spacing3: number;
    big_op_spacing4: number;
    big_op_spacing5: number;
    surd_height: number;
    scriptspace: number;
    nulldelimiterspace: number;
    delimiterfactor: number;
    delimitershortfall: number;
    min_rule_thickness: number;
    separation_factor: number;
    extra_ic: number;
};
/****************************************************************************/
/**
 *  The FontData class (for storing character bounding box data by variant,
 *                      and the stretchy delimiter data).
 *
 * @template C  The CharOptions type
 * @template V  The VariantData type
 * @template D  The DelimiterData type
 */
export declare class FontData<C extends CharOptions, V extends VariantData<C>, D extends DelimiterData> {
    /**
     * Options for the font
     */
    static OPTIONS: OptionList;
    /**
     * The name of the output jax this font data is for (used by extensions)
     */
    static JAX: string;
    /**
     * The name of the font that is being defined (used by extensions)
     */
    static NAME: string;
    /**
     *  The standard variants to define
     */
    static defaultVariants: string[][];
    /**
     * The family, style, and weight to use for each variant (for unknown characters)
     * The 'unknown' family is replaced by options.unknownFamily
     */
    static defaultCssFonts: CssFontMap;
    /**
     * The default prefix for explicit font-family settings
     */
    protected static defaultCssFamilyPrefix: string;
    /**
     * Variant locations in the Math Alphabnumerics block:
     *  [upper-alpha, lower-alpha, upper-Greek, lower-Greek, numbers]
     */
    static VariantSmp: {
        [name: string]: SmpData;
    };
    /**
     * Character ranges to remap into Math Alphanumerics
     */
    static SmpRanges: number[][];
    /**
     * Characters to map back top other Unicode positions
     * (holes in the Math Alphanumeric ranges)
     */
    static SmpRemap: SmpMap;
    /**
     * Greek upper-case variants
     */
    static SmpRemapGreekU: SmpMap;
    /**
     * Greek lower-case variants
     */
    static SmpRemapGreekL: SmpMap;
    /**
     *  The default remappings
     */
    protected static defaultAccentMap: RemapMap;
    /**
     * Default map for characters inside <mo>
     */
    protected static defaultMoMap: RemapMap;
    /**
     * Default map for characters inside <mn>
     */
    protected static defaultMnMap: RemapMap;
    /**
     *  The default font parameters for the font
     */
    static defaultParams: FontParameters;
    /**
     * The default delimiter data
     */
    protected static defaultDelimiters: DelimiterMap<any>;
    /**
     * The default character data
     */
    protected static defaultChars: CharMapMap<any>;
    /**
     * The default variants for the fixed size stretchy delimiters
     */
    protected static defaultSizeVariants: string[];
    /**
     * The default variants for the assembly parts for stretchy delimiters
     */
    protected static defaultStretchVariants: string[];
    /**
     * The font options
     */
    protected options: OptionList;
    /**
     * The actual variant information for this font
     */
    protected variant: VariantMap<C, V>;
    /**
     * The actual delimiter information for this font
     */
    protected delimiters: DelimiterMap<D>;
    /**
     * The actual size variants to use for this font
     */
    protected sizeVariants: string[];
    /**
     * The actual stretchy variants to use for this font
     */
    protected stretchVariants: string[];
    /**
     * The data to use to make variants to default fonts and css for unknown characters
     */
    protected cssFontMap: CssFontMap;
    /**
     * A prefix to use for explicit font-family CSS settings
     */
    cssFamilyPrefix: string;
    /**
     * The character maps
     */
    protected remapChars: RemapMapMap;
    /**
     * The actual font parameters for this font
     */
    params: FontParameters;
    /**
     * Factor by which to multiply italic correction for computation of delta in munderover
     */
    skewIcFactor: number;
    /**
     * Any styles needed for the font
     */
    protected _styles: StyleList;
    /**
     * @param {CharMap} font   The font to check
     * @param {number} n       The character to get options for
     * @return {CharOptions}   The options for the character
     */
    static charOptions(font: CharMap<CharOptions>, n: number): CharOptions;
    /**
     * Copies the data from the defaults to the instance
     *
     * @param {OptionList} options   The options for this font
     *
     * @constructor
     */
    constructor(options?: OptionList);
    /**
     * Returns list of styles needed for the font
     */
    get styles(): StyleList;
    /**
     * Sets styles needed for that font.
     */
    set styles(style: StyleList);
    /**
     * Creates the data structure for a variant -- an object with
     *   prototype chain that includes a copy of the linked variant,
     *   and then the inherited variant chain.
     *
     *   The reason for this extra link is that for a mathvariant like
     *   bold-italic, you want to inherit from both the bold and
     *   italic variants, but the prototype chain can only inherit
     *   from one. So for bold-italic, we make an object that has a
     *   prototype consisting of a copy of the bold data, and add the
     *   italic data as the prototype chain. (Since this is a copy, we
     *   keep a record of this link so that if bold is changed later,
     *   we can update this copy. That is not needed for the prototype
     *   chain, since the prototypes are the actual objects, not
     *   copies.) We then use this bold-plus-italic object as the
     *   prototype chain for the bold-italic object
     *
     *   That means that bold-italic will first look in its own object
     *   for specifically bold-italic glyphs that are defined there,
     *   then in the copy of the bold glyphs (only its top level is
     *   copied, not its prototype chain), and then the specifically
     *   italic glyphs, and then the prototype chain for italics,
     *   which is the normal glyphs. Effectively, this means
     *   bold-italic looks for bold-italic, then bold, then italic,
     *   then normal glyphs in order to find the given character.
     *
     * @param {string} name     The new variant to create
     * @param {string} inherit  The variant to use if a character is not in this one
     * @param {string} link     A variant to search before the inherit one (but only
     *                           its top-level object).
     */
    createVariant(name: string, inherit?: string, link?: string): void;
    /**
     * Create the mapping from Basic Latin and Greek blocks to
     * the Math Alphanumeric block for a given variant.
     */
    protected remapSmpChars(chars: CharMap<C>, name: string): void;
    /**
     * @param {number} n      Math Alphanumerics position for this remapping
     * @return {CharData<C>}  The character data for the remapping
     */
    protected smpChar(n: number): CharData<C>;
    /**
     * Create a collection of variants
     *
     * @param {string[][]} variants  Array of [name, inherit?, link?] values for
     *                              the variants to define
     */
    createVariants(variants: string[][]): void;
    /**
     * Defines new character data in a given variant
     *  (We use Object.assign() here rather than the spread operator since
     *  the character maps are objeccts with prototypes, and we don't
     *  want to loose those by doing {...chars} or something similar.)
     *
     * @param {string} name    The variant for these characters
     * @param {CharMap} chars  The characters to define
     */
    defineChars(name: string, chars: CharMap<C>): void;
    /**
     * Defines stretchy delimiters
     *
     * @param {DelimiterMap} delims  The delimiters to define
     */
    defineDelimiters(delims: DelimiterMap<D>): void;
    /**
     * Defines a character remapping map
     *
     * @param {string} name     The name of the map to define or augment
     * @param {RemapMap} remap  The characters to remap
     */
    defineRemap(name: string, remap: RemapMap): void;
    /**
     * @param {number} n  The delimiter character number whose data is desired
     * @return {DelimiterData}  The data for that delimiter (or undefined)
     */
    getDelimiter(n: number): DelimiterData;
    /**
     * @param {number} n  The delimiter character number whose variant is needed
     * @param {number} i  The index in the size array of the size whose variant is needed
     * @return {string}   The variant of the i-th size for delimiter n
     */
    getSizeVariant(n: number, i: number): string;
    /**
     * @param {number} n  The delimiter character number whose variant is needed
     * @param {number} i  The index in the stretch array of the part whose variant is needed
     * @return {string}   The variant of the i-th part for delimiter n
     */
    getStretchVariant(n: number, i: number): string;
    /**
     * @param {string} name  The variant whose character data is being querried
     * @param {number} n     The unicode number for the character to be found
     * @return {CharData}    The data for the given character (or undefined)
     */
    getChar(name: string, n: number): CharData<C>;
    /**
     * @param {string} name   The name of the variant whose data is to be obtained
     * @return {V}            The data for the requested variant (or undefined)
     */
    getVariant(name: string): V;
    /**
     * @param {string} variant   The name of the variant whose data is to be obtained
     * @return {CssFontData}     The CSS data for the requested variant
     */
    getCssFont(variant: string): CssFontData;
    /**
     * @param {string} family   The font camily to use
     * @return {string}         The family with the css prefix
     */
    getFamily(family: string): string;
    /**
     * @param {string} name   The name of the map to query
     * @param {number} c      The character to remap
     * @return {string}       The remapped character (or the original)
     */
    getRemappedChar(name: string, c: number): string;
}
/**
 * The class interface for the FontData class
 *
 * @template C  The CharOptions type
 * @template V  The VariantData type
 * @template D  The DelimiterData type
 */
export interface FontDataClass<C extends CharOptions, V extends VariantData<C>, D extends DelimiterData> {
    OPTIONS: OptionList;
    defaultCssFonts: CssFontMap;
    defaultVariants: string[][];
    defaultParams: FontParameters;
    charOptions(font: CharMap<C>, n: number): C;
    new (...args: any[]): FontData<C, V, D>;
}
