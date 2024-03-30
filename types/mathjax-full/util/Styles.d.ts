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
 * @fileoverview  Implements a lite CssStyleDeclaration replacement
 *                (very limited in scope)
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
/**
 * An object contining name: value pairs
 */
export type StyleList = {
    [name: string]: string;
};
/**
 * Data for how to map a combined style (like border) to its children
 */
export type connection = {
    children: string[];
    split: (name: string) => void;
    combine: (name: string) => void;
};
/**
 * A collection of connections
 */
export type connections = {
    [name: string]: connection;
};
/*********************************************************/
/**
 * Implements the Styles object (lite version of CssStyleDeclaration)
 */
export declare class Styles {
    /**
     * Patterns for style values and comments
     */
    static pattern: {
        [name: string]: RegExp;
    };
    /**
     * The mapping of parents to children, and how to split and combine them
     */
    static connect: connections;
    /**
     * The list of styles defined for this declaration
     */
    protected styles: StyleList;
    /**
     * @param {string} cssText  The initial definition for the style
     * @constructor
     */
    constructor(cssText?: string);
    /**
     * @return {string}  The CSS string for the styles currently defined
     */
    get cssText(): string;
    /**
     * @param {string} name   The name of the style to set
     * @param {string|number|boolean} value The value to set it to
     */
    set(name: string, value: string | number | boolean): void;
    /**
     * @param {string} name  The name of the style to get
     * @return {string}      The value of the style (or empty string if not defined)
     */
    get(name: string): string;
    /**
     * @param {string} name   The name of the style to set (without causing parent updates)
     * @param {string} value  The value to set it to
     */
    protected setStyle(name: string, value: string): void;
    /**
     * @param {string} name   The name of the style whose parent is to be combined
     */
    protected combineChildren(name: string): void;
    /**
     * @param {string} name   The name of the style whose parent style is to be found
     * @return {string}       The name of the parent, or '' if none
     */
    protected parentName(name: string): string;
    /**
     * @param {string} name   The name of the parent style
     * @param {string} child  The suffix to be added to the parent
     * @preturn {string}      The combined name
     */
    protected childName(name: string, child: string): string;
    /**
     * @param {string} name  The name of a style to normalize
     * @return {string}      The name converted from CamelCase to lowercase with dashes
     */
    protected normalizeName(name: string): string;
    /**
     * @param {string} cssText  A style text string to be parsed into separate styles
     *                          (by using this.set(), we get all the sub-styles created
     *                           as well as the merged style shorthands)
     */
    protected parse(cssText?: string): void;
}
