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
 * @fileoverview  Implements the CssStyles class for handling stylesheets
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
/**
 * The data for a selector
 */
export type StyleData = {
    [property: string]: string | number;
};
/**
 * A list of selectors and their data (basically a stylesheet)
 */
export type StyleList = {
    [selector: string]: StyleData;
};
/******************************************************************************/
/**
 * The CssStyles class (for managing a collection of CSS style definitions)
 */
export declare class CssStyles {
    /**
     * The styles as they currently stand
     */
    protected styles: StyleList;
    /**
     * @return {string}  The styles as a CSS string
     */
    get cssText(): string;
    /**
     * @param {StyleList} styles  The initial styles to use, if any
     * @constructor
     */
    constructor(styles?: StyleList);
    /**
     * @param {StyleList} styles  The styles to combine with the existing ones
     */
    addStyles(styles: StyleList): void;
    /**
     * @param {string[]} selectors  The selectors for the styles to remove
     */
    removeStyles(...selectors: string[]): void;
    /**
     * Clear all the styles
     */
    clear(): void;
    /**
     * @return {string} The CSS string for the style list
     */
    getStyleString(): string;
    /**
     * @return {string[]}  An array of rule strings for the style list
     */
    getStyleRules(): string[];
    /**
     * @param {StyleData} styles  The style data to be stringified
     * @return {string}           The CSS string for the given data
     */
    getStyleDefString(styles: StyleData): string;
}
