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
 * @fileoverview Base methods for TeX Parsing.
 *
 * @author v.sorge@mathjax.org (Volker Sorge)
 */
import { Symbol } from './Symbol.js';
import TexParser from './TexParser.js';
declare namespace ParseMethods {
    /**
     * Handle a variable (a single letter or multi-letter if allowed).
     * @param {TexParser} parser The current tex parser.
     * @param {string} c The letter to transform into an mi.
     */
    function variable(parser: TexParser, c: string): void;
    /**
     * Handle a number (a sequence of digits, with decimal separator, etc.).
     * @param {TexParser} parser The current tex parser.
     * @param {string} c The first character of a number than can be parsed with
     *     the digits pattern.
     */
    function digit(parser: TexParser, c: string): void;
    /**
     * Lookup a control-sequence and process it.
     * @param {TexParser} parser The current tex parser.
     * @param {string} c The string '\'.
     */
    function controlSequence(parser: TexParser, _c: string): void;
    /**
     * Handle normal mathchar (as an mi).
     * @param {TexParser} parser The current tex parser.
     * @param {Symbol} mchar The parsed symbol.
     */
    function mathchar0mi(parser: TexParser, mchar: Symbol): void;
    /**
     * Handle normal mathchar (as an mo).
     * @param {TexParser} parser The current tex parser.
     * @param {Symbol} mchar The parsed symbol.
     */
    function mathchar0mo(parser: TexParser, mchar: Symbol): void;
    /**
     * Handle mathchar in current family.
     * @param {TexParser} parser The current tex parser.
     * @param {Symbol} mchar The parsed symbol.
     */
    function mathchar7(parser: TexParser, mchar: Symbol): void;
    /**
     * Handle delimiter.
     * @param {TexParser} parser The current tex parser.
     * @param {Symbol} delim The parsed delimiter symbol.
     */
    function delimiter(parser: TexParser, delim: Symbol): void;
    /**
     * Parse an environment.
     * @param {TexParser} parser The current tex parser.
     * @param {string} env The name of the environment.
     * @param {Function} func The parse method for the environment.
     * @param {any[]} args A list of additional arguments.
     */
    function environment(parser: TexParser, env: string, func: Function, args: any[]): void;
}
export default ParseMethods;
