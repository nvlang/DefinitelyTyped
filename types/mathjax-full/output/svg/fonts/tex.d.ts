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
import { SVGFontData, SVGCharOptions, SVGVariantData, SVGDelimiterData, DelimiterMap, CharMapMap } from '../FontData.js';
import { OptionList } from '../../../util/Options.js';
declare const TeXFont_base: import("ts/output/common/FontData.js").FontDataClass<SVGCharOptions, SVGVariantData, SVGDelimiterData> & typeof SVGFontData;
/***********************************************************************************/
/**
 *  The TeXFont class
 */
export declare class TeXFont extends TeXFont_base {
    /**
     *  The stretchy delimiter data
     */
    protected static defaultDelimiters: DelimiterMap<SVGDelimiterData>;
    /**
     *  The character data by variant
     */
    protected static defaultChars: CharMapMap<SVGCharOptions>;
    /**
     * The cacheIDs to use for the variants in font-caching
     */
    protected static variantCacheIds: {
        [name: string]: string;
    };
    /**
     * @override
     */
    constructor(options?: OptionList);
}
export {};
