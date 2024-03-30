/*************************************************************
 *  Copyright (c) 2021-2022 MathJax Consortium
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
 * @fileoverview    Utility functions for the mathtools package.
 *
 * @author dpvc@mathjax.org (Davide P. Cervone)
 */
import { EqnArrayItem } from '../base/BaseItems.js';
import TexParser from '../TexParser.js';
import ParseOptions from '../ParseOptions.js';
import { MmlNode } from '../../../core/MmlTree/MmlNode.js';
/**
 * Utility functions for the Mathtools package.
 */
export declare const MathtoolsUtil: {
    /**
     * Set the displaystyle and scriptlevel attributes of an mstyle element
     *
     * @param {MmlNode} mml     The mstyle node to modify.
     * @param {string} style    The TeX style macro to apply.
     */
    setDisplayLevel(mml: MmlNode, style: string): void;
    /**
     * Check that the top stack item is an alignment table.
     *
     * @param {TexParser} parser   The current TeX parser.
     * @param {string} name        The name of the macro doing the checking.
     * @return {EqnArrayItem}      The top item (an EqnArrayItem).
     */
    checkAlignment(parser: TexParser, name: string): EqnArrayItem;
    /**
     * Add a paired delimiter to the list of them.
     *
     * @param {ParseOptions} config   The parse options to modify.
     * @param {string} cs             The control sequence for the paired delimiters.
     * @param {string[]} args         The definition for the paired delimiters.  One of:
     *                                   [left, right]
     *                                   [left, right, body, argcount]
     *                                   [left, right, body, argcount, pre, post]
     */
    addPairedDelims(config: ParseOptions, cs: string, args: string[]): void;
    /**
     * Adjust the line spacing for a table.
     *
     * @param {MmlNode} mtable   The mtable node to adjust (if it is a table).
     * @param {string} spread    The dimension to change by (number-with-units).
     */
    spreadLines(mtable: MmlNode, spread: string): void;
    /**
     * Check if a string is a number and return it with an explicit plus if there isn't one.
     *
     * @param {string} name   The name of the macro doing the checking.
     * @param {string} n      The string to test as a number.
     * @return {srtring}      The number with an explicit sign.
     */
    plusOrMinus(name: string, n: string): string;
    /**
     * Parse a \prescript argument, with its associated format, if any.
     *
     * @param {TexParser} parser   The active tex parser.
     * @param {string} name        The name of the calling macro (\prescript).
     * @param {string} pos         The position for the argument (sub, sup, arg).
     * @return {MmlNode}           The parsed MML version of the argument.
     */
    getScript(parser: TexParser, name: string, pos: string): MmlNode;
};
