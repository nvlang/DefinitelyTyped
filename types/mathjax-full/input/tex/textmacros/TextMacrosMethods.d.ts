/*************************************************************
 *
 *  Copyright (c) 2020-2022 The MathJax Consortium
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
import { TextParser } from './TextParser.js';
/**
 * The methods used to implement the text-mode macros
 */
export declare const TextMacrosMethods: {
    /**
     * @param {TextParser} parser   The text-mode parser
     * @param {string} c            The character that called this function
     */
    Comment(parser: TextParser, _c: string): void;
    /**
     * @param {TextParser} parser   The text-mode parser
     * @param {string} open         The delimiter used to open math-mode in text-mode
     */
    Math(parser: TextParser, open: string): void;
    /**
     * @param {TextParser} parser   The text-mode parser
     * @param {string} c            The character that called this function
     */
    MathModeOnly(parser: TextParser, c: string): void;
    /**
     * @param {TextParser} parser   The text-mode parser
     * @param {string} c            The character that called this function
     */
    Misplaced(parser: TextParser, c: string): void;
    /**
     * @param {TextParser} parser   The text-mode parser
     * @param {string} c            The character that called this function
     */
    OpenBrace(parser: TextParser, _c: string): void;
    /**
     * @param {TextParser} parser   The text-mode parser
     * @param {string} c            The character that called this function
     */
    CloseBrace(parser: TextParser, _c: string): void;
    /**
     * @param {TextParser} parser   The text-mode parser
     * @param {string} c            The character that called this function
     */
    OpenQuote(parser: TextParser, c: string): void;
    /**
     * @param {TextParser} parser   The text-mode parser
     * @param {string} c            The character that called this function
     */
    CloseQuote(parser: TextParser, c: string): void;
    /**
     * @param {TextParser} parser   The text-mode parser
     * @param {string} c            The character that called this function
     */
    Tilde(parser: TextParser, _c: string): void;
    /**
     * @param {TextParser} parser   The text-mode parser
     * @param {string} c            The character that called this function
     */
    Space(parser: TextParser, _c: string): void;
    /**
     * @param {TextParser} parser   The text-mode parser
     * @param {string} name         The control sequence that called this function
     */
    SelfQuote(parser: TextParser, name: string): void;
    /**
     * @param {TextParser} parser   The text-mode parser
     * @param {string} name         The control sequence that called this function
     * @param {string} c            The character to insert into the string
     */
    Insert(parser: TextParser, _name: string, c: string): void;
    /**
     * @param {TextParser} parser   The text-mode parser
     * @param {string} name         The control sequence that called this function
     * @param {string} c            The character to insert into the string
     */
    Accent(parser: TextParser, name: string, c: string): void;
    /**
     * @param {TextParser} parser   The text-mode parser
     * @param {string} name         The control sequence that called this function
     */
    Emph(parser: TextParser, name: string): void;
    /**
     * @param {TextParser} parser   The text-mode parser
     * @param {string} name         The control sequence that called this function
     * @param {string} variant      The font variant to use from now on
     */
    SetFont(parser: TextParser, _name: string, variant: string): void;
    /**
     * @param {TextParser} parser   The text-mode parser
     * @param {string} name         The control sequence that called this function
     * @param {number} size         The font size to use from now on
     */
    SetSize(parser: TextParser, _name: string, size: number): void;
    /**
     * @param {TextParser} parser   The text-mode parser
     * @param {string} name         The control sequence that called this function
     */
    CheckAutoload(parser: TextParser, name: string): void;
    Macro: import("ts/input/tex/Types.js").ParseMethod;
    Spacer: import("ts/input/tex/Types.js").ParseMethod;
    Hskip: import("ts/input/tex/Types.js").ParseMethod;
    rule: import("ts/input/tex/Types.js").ParseMethod;
    Rule: import("ts/input/tex/Types.js").ParseMethod;
    HandleRef: import("ts/input/tex/Types.js").ParseMethod;
};
