/*************************************************************
 *
 *  Copyright (c) 2009-2022 The MathJax Consortium
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
import TexParser from '../TexParser.js';
import { Symbol } from '../Symbol.js';
import { Args, Attributes, ParseMethod } from '../Types.js';
declare namespace NewcommandUtil {
    /**
     * Transforms the attributes of a symbol into the arguments of a macro. E.g.,
     * Symbol('ell', 'l', {mathvariant: "italic"}) is turned into Macro arguments:
     * ['ell', 'l', 'mathvariant', 'italic'].
     *
     * @param {string} name The command name for the symbol.
     * @param {Symbol} symbol The symbol associated with name.
     * @return {Args[]} Arguments for a macro.
     */
    function disassembleSymbol(name: string, symbol: Symbol): Args[];
    /**
     * Assembles a symbol from a list of macro arguments. This is the inverse
     * method of the one above.
     *
     * @param {Args[]} args The arguments of the macro.
     * @return {Symbol} The Symbol generated from the arguments..
     */
    function assembleSymbol(args: Args[]): Symbol;
    /**
     * Get the next CS name or give an error.
     * @param {TexParser} parser The calling parser.
     * @param {string} cmd The string starting with a control sequence.
     * @return {string} The control sequence.
     */
    function GetCSname(parser: TexParser, cmd: string): string;
    /**
     * Get a control sequence name as an argument (doesn't require the backslash)
     * @param {TexParser} parser The calling parser.
     * @param {string} name The macro that is getting the name.
     * @return {string} The control sequence.
     */
    function GetCsNameArgument(parser: TexParser, name: string): string;
    /**
     * Get the number of arguments for a macro definition
     * @param {TexParser} parser The calling parser.
     * @param {string} name The macro that is getting the argument count.
     * @return {string} The number of arguments (or blank).
     */
    function GetArgCount(parser: TexParser, name: string): string;
    /**
     * Get a \def parameter template.
     * @param {TexParser} parser The calling parser.
     * @param {string} cmd The string starting with the template.
     * @param {string} cs The control sequence of the \def.
     * @return {number | string[]} The number of parameters or a string array if
     *     there is an optional argument.
     */
    function GetTemplate(parser: TexParser, cmd: string, cs: string): number | string[];
    /**
     * Find a single parameter delimited by a trailing template.
     * @param {TexParser} parser The calling parser.
     * @param {string} name The name of the calling command.
     * @param {string} param The parameter for the macro.
     */
    function GetParameter(parser: TexParser, name: string, param: string): string;
    /**
     * Check if a template is at the current location.
     * (The match must be exact, with no spacing differences. TeX is
     *  a little more forgiving than this about spaces after macro names)
     * @param {TexParser} parser The calling parser.
     * @param {string} param Tries to match an optional parameter.
     * @return {number} The number of optional parameters, either 0 or 1.
     */
    function MatchParam(parser: TexParser, param: string): number;
    /**
     * Adds a new delimiter as extension to the parser.
     * @param {TexParser} parser The current parser.
     * @param {string} cs The control sequence of the delimiter.
     * @param {string} char The corresponding character.
     * @param {Attributes} attr The attributes needed for parsing.
     */
    function addDelimiter(parser: TexParser, cs: string, char: string, attr: Attributes): void;
    /**
     * Adds a new macro as extension to the parser.
     * @param {TexParser} parser The current parser.
     * @param {string} cs The control sequence of the delimiter.
     * @param {ParseMethod} func The parse method for this macro.
     * @param {Args[]} attr The attributes needed for parsing.
     * @param {string=} symbol Optionally original symbol for macro, in case it is
     *     different from the control sequence.
     */
    function addMacro(parser: TexParser, cs: string, func: ParseMethod, attr: Args[], symbol?: string): void;
    /**
     * Adds a new environment as extension to the parser.
     * @param {TexParser} parser The current parser.
     * @param {string} env The environment name.
     * @param {ParseMethod} func The parse method for this macro.
     * @param {Args[]} attr The attributes needed for parsing.
     */
    function addEnvironment(parser: TexParser, env: string, func: ParseMethod, attr: Args[]): void;
    /**
     * Naming constants for the extension mappings.
     */
    const NEW_DELIMITER = "new-Delimiter";
    const NEW_COMMAND = "new-Command";
    const NEW_ENVIRONMENT = "new-Environment";
}
export default NewcommandUtil;
