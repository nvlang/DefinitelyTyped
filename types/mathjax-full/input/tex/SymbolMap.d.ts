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
 * @fileoverview Symbol map classes.
 *
 * @author v.sorge@mathjax.org (Volker Sorge)
 */
import { Attributes, Args, ParseMethod, ParseInput, ParseResult } from './Types.js';
import { Symbol, Macro } from './Symbol.js';
/**
 * SymbolMaps are the base components for the input parsers.
 *
 * They provide a contains method that checks if a map is applicable (contains)
 * a particular string. Implementing classes then perform the actual symbol
 * parsing, from simple regular expression test, straight forward symbol mapping
 * to transformational functionality on the parsed string.
 *
 * @interface
 */
export interface SymbolMap {
    /**
     * @return {string} The name of the map.
     */
    name: string;
    /**
     * @return {ParseMethod} The default parsing method.
     */
    parser: ParseMethod;
    /**
     * @param {string} symbol A symbol to parse.
     * @return {boolean} True if the symbol map applies to the symbol.
     */
    contains(symbol: string): boolean;
    /**
     * @param {string} symbol A symbol to parse.
     * @return {ParseMethod} A parse method for the symbol.
     */
    parserFor(symbol: string): ParseMethod;
    /**
     * @param {TexParser} env The current parser.
     * @param {string} symbol A symbol to parse.
     * @return {ParseResult} The parsed symbol and the rest of the string.
     */
    parse([env, symbol]: ParseInput): ParseResult;
}
/**
 * @param {ParseResult} result    The result to check
 * @return {ParseResult}          True if result was void, result otherwise
 */
export declare function parseResult(result: ParseResult): ParseResult;
/**
 * Abstract implementation of symbol maps.
 * @template T
 */
export declare abstract class AbstractSymbolMap<T> implements SymbolMap {
    private _name;
    private _parser;
    /**
     * @constructor
     * @implements {SymbolMap}
     * @param {string} name Name of the mapping.
     * @param {ParseMethod} parser The parser for the mappiong.
     */
    constructor(_name: string, _parser: ParseMethod);
    /**
     * @override
     */
    get name(): string;
    /**
     * @override
     */
    abstract contains(symbol: string): boolean;
    /**
     * @override
     */
    parserFor(symbol: string): ParseMethod;
    /**
     * @override
     */
    parse([env, symbol]: ParseInput): ParseResult;
    set parser(parser: ParseMethod);
    get parser(): ParseMethod;
    /**
     * @param {string} symbol
     * @return {T}
     */
    abstract lookup(symbol: string): T;
}
/**
 * Regular expressions used for parsing strings.
 */
export declare class RegExpMap extends AbstractSymbolMap<string> {
    private _regExp;
    /**
     * @constructor
     * @extends {AbstractSymbolMap}
     * @param {string} name Name of the mapping.
     * @param {ParseMethod} parser The parser for the mappiong.
     * @param {RegExp} regexp The regular expression.
     */
    constructor(name: string, parser: ParseMethod, _regExp: RegExp);
    /**
     * @override
     */
    contains(symbol: string): boolean;
    /**
     * @override
     */
    lookup(symbol: string): string;
}
/**
 * Parse maps associate strings with parsing functionality.
 * @constructor
 * @extends {AbstractSymbolMap}
 * @template K
 */
export declare abstract class AbstractParseMap<K> extends AbstractSymbolMap<K> {
    private map;
    /**
     * @override
     */
    lookup(symbol: string): K;
    /**
     * @override
     */
    contains(symbol: string): boolean;
    /**
     * Sets mapping for a symbol.
     * @param {string} symbol The symbol to map.
     * @param {K} object The symbols value in the mapping's codomain.
     */
    add(symbol: string, object: K): void;
    /**
     * Removes a symbol from the map
     * @param {string} symbol The symbol to remove
     */
    remove(symbol: string): void;
}
/**
 * Maps symbols that can all be parsed with the same method.
 *
 * @constructor
 * @extends {AbstractParseMap}
 */
export declare class CharacterMap extends AbstractParseMap<Symbol> {
    /**
     * @constructor
     * @param {string} name Name of the mapping.
     * @param {ParseMethod} parser The parser for the mapping.
     * @param {JSON} json The JSON representation of the character mapping.
     */
    constructor(name: string, parser: ParseMethod, json: {
        [index: string]: string | [string, Attributes];
    });
}
/**
 * Maps symbols that are delimiters, that are all parsed with the same method.
 *
 * @constructor
 * @extends {CharacterMap}
 */
export declare class DelimiterMap extends CharacterMap {
    /**
     * @override
     */
    parse([env, symbol]: ParseInput): ParseResult;
}
/**
 * Maps macros that all bring their own parsing method.
 *
 * @constructor
 * @extends {AbstractParseMap}
 */
export declare class MacroMap extends AbstractParseMap<Macro> {
    /**
     * @constructor
     * @param {string} name Name of the mapping.
     * @param {JSON} json The JSON representation of the macro map.
     * @param {Record<string, ParseMethod>} functionMap Collection of parse
     *     functions for the single macros.
     */
    constructor(name: string, json: {
        [index: string]: string | Args[];
    }, functionMap: Record<string, ParseMethod>);
    /**
     * @override
     */
    parserFor(symbol: string): ParseMethod;
    /**
     * @override
     */
    parse([env, symbol]: ParseInput): ParseResult;
}
/**
 * Maps macros that all bring their own parsing method.
 *
 * @constructor
 * @extends {MacroMap}
 */
export declare class CommandMap extends MacroMap {
    /**
     * @override
     */
    parse([env, symbol]: ParseInput): ParseResult;
}
/**
 * Maps macros for environments. It has a general parsing method for
 * environments, i.e., one that deals with begin/end, and each environment has
 * its own parsing method returning the content.
 *
 * @constructor
 * @extends {MacroMap}
 */
export declare class EnvironmentMap extends MacroMap {
    /**
     * @constructor
     * @param {string} name Name of the mapping.
     * @param {ParseMethod} parser The parser for the environments.
     * @param {JSON} json The JSON representation of the macro map.
     * @param {Record<string, ParseMethod>} functionMap Collection of parse
     *     functions for the single macros.
     */
    constructor(name: string, parser: ParseMethod, json: {
        [index: string]: string | Args[];
    }, functionMap: Record<string, ParseMethod>);
    /**
     * @override
     */
    parse([env, symbol]: ParseInput): ParseResult;
}
