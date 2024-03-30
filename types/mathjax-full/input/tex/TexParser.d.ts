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
import { HandlerType } from './MapHandler.js';
import Stack from './Stack.js';
import StackItemFactory from './StackItemFactory.js';
import { Tags } from './Tags.js';
import { MmlNode } from '../../core/MmlTree/MmlNode.js';
import { ParseInput, ParseResult } from './Types.js';
import ParseOptions from './ParseOptions.js';
import { StackItem, EnvList } from './StackItem.js';
import { OptionList } from '../../util/Options.js';
/**
 * The main Tex Parser class.
 */
export default class TexParser {
    private _string;
    configuration: ParseOptions;
    /**
     * Counter for recursive macros.
     * @type {number}
     */
    macroCount: number;
    /**
     * The stack for items and created nodes.
     * @type {Stack}
     */
    stack: Stack;
    /**
     * Current position in the string that is parsed.
     * @type {number}
     */
    i: number;
    /**
     * The last command sequence
     * @type {string}
     */
    currentCS: string;
    /**
     * @constructor
     * @param {string} string The string to parse.
     * @param {EnvList} env The intial environment representing the current parse
     *     state of the overall expression translation.
     * @param {ParseOptions} configuration A parser configuration.
     */
    constructor(_string: string, env: EnvList, configuration: ParseOptions);
    /**
     * @return {OptionList} The configuration options.
     */
    get options(): OptionList;
    /**
     * @return {StackItemFactory} The factory for stack items.
     */
    get itemFactory(): StackItemFactory;
    /**
     * @return {Tags} The tags style of this configuration.
     */
    get tags(): Tags;
    /**
     * Sets the string that should be parsed.
     * @param {string} str The new string to parse.
     */
    set string(str: string);
    /**
     * @return {string} The string that is currently parsed.
     */
    get string(): string;
    /**
     * Parses the input with the specified kind of map.
     * @param {HandlerType} kind Configuration name.
     * @param {ParseInput} input Input to be parsed.
     * @return {ParseResult} The output of the parsing function.
     */
    parse(kind: HandlerType, input: ParseInput): ParseResult;
    /**
     * Maps a symbol to its "parse value" if it exists.
     * @param {HandlerType} kind Configuration name.
     * @param {string} symbol The symbol to parse.
     * @return {any} A boolean, Character, or Macro.
     */
    lookup(kind: HandlerType, symbol: string): any;
    /**
     * Checks if a symbol is contained in one of the symbol mappings of the
     * specified kind.
     * @param {HandlerType} kind Configuration name.
     * @param {string} symbol The symbol to parse.
     * @return {boolean} True if the symbol is contained in the given types of
     *     symbol mapping.
     */
    contains(kind: HandlerType, symbol: string): boolean;
    /**
     * @override
     */
    toString(): string;
    /**
     * Parses the current input string.
     */
    Parse(): void;
    /**
     * Pushes a new item onto the stack. The item can also be a Mml node,
     *   but if the mml item is an inferred row, push its children instead.
     * @param {StackItem|MmlNode} arg The new item.
     */
    Push(arg: StackItem | MmlNode): void;
    /**
     * Pushes a list of new items onto the stack.
     * @param {StackItem|MmlNode[]} args The new items.
     */
    PushAll(args: (StackItem | MmlNode)[]): void;
    /**
     * @return {MmlNode} The internal Mathml structure.
     */
    mml(): MmlNode;
    /************************************************************************
     *
     *   String handling routines
     */
    /**
     * Convert delimiter to character.
     * @param {string} c The delimiter name.
     * @return {string} The corresponding character.
     */
    convertDelimiter(c: string): string;
    /**
     * @return {string}   Get the next unicode character in the string
     */
    getCodePoint(): string;
    /**
     * @return {boolean} True if the next character to parse is a space.
     */
    nextIsSpace(): boolean;
    /**
     * @return {string} Get the next non-space character.
     */
    GetNext(): string;
    /**
     * @return {string} Get and return a control-sequence name
     */
    GetCS(): string;
    /**
     * Get and return a TeX argument (either a single character or control
     *     sequence, or the contents of the next set of braces).
     * @param {string} name Name of the current control sequence.
     * @param {boolean} noneOK? True if no argument is OK.
     * @return {string} The next argument.
     */
    GetArgument(_name: string, noneOK?: boolean): string;
    /**
     * Get an optional LaTeX argument in brackets.
     * @param {string} name Name of the current control sequence.
     * @param {string} def? The default value for the optional argument.
     * @return {string} The optional argument.
     */
    GetBrackets(_name: string, def?: string): string;
    /**
     *  Get the name of a delimiter (check it in the delimiter list).
     * @param {string} name Name of the current control sequence.
     * @param {boolean} braceOK? Are braces around the delimiter OK.
     * @return {string} The delimiter name.
     */
    GetDelimiter(name: string, braceOK?: boolean): string;
    /**
     * Get a dimension (including its units).
     * @param {string} name Name of the current control sequence.
     * @return {string} The dimension string.
     */
    GetDimen(name: string): string;
    /**
     *  Get everything up to the given control sequence (token)
     * @param {string} name Name of the current control sequence.
     * @param {string} token The element until where to parse.
     * @return {string} The text between the current position and the given token.
     */
    GetUpTo(_name: string, token: string): string;
    /**
     * Parse the arguments of a control sequence in a new parser instance.
     * @param {string} name Name of the current control sequence.
     * @return {MmlNode} The parsed node.
     */
    ParseArg(name: string): MmlNode;
    /**
     * Parses a given string up to a given token in a new parser instance.
     * @param {string} name Name of the current control sequence.
     * @param {string} token A Token at which to end parsing.
     * @return {MmlNode} The parsed node.
     */
    ParseUpTo(name: string, token: string): MmlNode;
    /**
     * Get a delimiter or empty argument
     * @param {string} name Name of the current control sequence.
     * @return {string} The delimiter.
     */
    GetDelimiterArg(name: string): string;
    /**
     * @return {boolean} True if a star follows the control sequence name.
     */
    GetStar(): boolean;
    /**
     * Convenience method to create nodes with the node factory of the current
     * configuration.
     * @param {string} kind The kind of node to create.
     * @param {any[]} ...rest The remaining arguments for the creation method.
     * @return {MmlNode} The newly created node.
     */
    create(kind: string, ...rest: any[]): MmlNode;
}
