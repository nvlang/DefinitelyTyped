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
 * @fileoverview  Implements the AsciiMath version of the FindMath object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { AbstractFindMath } from '../../core/FindMath.js';
import { OptionList } from '../../util/Options.js';
import { ProtoItem } from '../../core/MathItem.js';
/**
 * Shorthand types for data about end delimiters and delimiter pairs
 */
export type EndItem = [string, boolean, RegExp];
export type Delims = [string, string];
/*****************************************************************/
/**
 *  Implements the FindAsciiMath class (extends AbstractFindMath)
 *
 *  Locates AsciiMath expressions within strings
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class FindAsciiMath<N, T, D> extends AbstractFindMath<N, T, D> {
    /**
     * @override
     */
    static OPTIONS: OptionList;
    /**
     * The regular expression for any starting delimiter
     */
    protected start: RegExp;
    /**
     * The end-delimiter data keyed to the opening delimiter string
     */
    protected end: {
        [name: string]: EndItem;
    };
    /**
     * False if the configuration has no delimiters (so search can be skipped), true otherwise
     */
    protected hasPatterns: boolean;
    /**
     * @override
     */
    constructor(options: OptionList);
    /**
     * Create the patterns needed for searching the strings for AsciiMath
     *   based on the configuration options
     */
    protected getPatterns(): void;
    /**
     * Add the needed patterns for a pair of delimiters
     *
     * @param {string[]} starts  Array of starting delimiter strings
     * @param {Delims} delims    Array of delimiter strings, as [start, end]
     * @param {boolean} display  True if the delimiters are for display mode
     */
    protected addPattern(starts: string[], delims: Delims, display: boolean): void;
    /**
     * Search for the end delimiter given the start delimiter.
     *
     * @param {string} text            The string being searched for the end delimiter
     * @param {number} n               The index of the string being searched
     * @param {RegExpExecArray} start  The result array from the start-delimiter search
     * @param {EndItem} end            The end-delimiter data corresponding to the start delimiter
     * @return {ProtoItem}             The proto math item for the math, if found
     */
    protected findEnd(text: string, n: number, start: RegExpExecArray, end: EndItem): ProtoItem<N, T>;
    /**
     * Search a string for math delimited by one of the delimiter pairs.
     *
     * @param {ProtoItem[]} math  The array of proto math items located so far
     * @param {number} n          The index of the string being searched
     * @param {string} text       The string being searched
     */
    protected findMathInString(math: ProtoItem<N, T>[], n: number, text: string): void;
    /**
     * Search for math in an array of strings and return an array of matches.
     *
     * @override
     */
    findMath(strings: string[]): ProtoItem<N, T>[];
}
