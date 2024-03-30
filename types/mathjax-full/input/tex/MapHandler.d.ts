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
 * @fileoverview Singleton class for handling symbol maps.
 *
 * @author v.sorge@mathjax.org (Volker Sorge)
 */
import { SymbolMap } from './SymbolMap.js';
import { ParseInput, ParseResult, ParseMethod } from './Types.js';
export type HandlerType = 'delimiter' | 'macro' | 'character' | 'environment';
export type HandlerConfig = {
    [P in HandlerType]?: string[];
};
export type FallbackConfig = {
    [P in HandlerType]?: ParseMethod;
};
export declare namespace MapHandler {
    /**
     * Adds a new symbol map to the map handler. Might overwrite an existing
     * symbol map of the same name.
     *
     * @param {SymbolMap} map Registers a new symbol map.
     */
    let register: (map: SymbolMap) => void;
    /**
     * Looks up a symbol map if it exists.
     *
     * @param {string} name The name of the symbol map.
     * @return {SymbolMap} The symbol map with the given name or null.
     */
    let getMap: (name: string) => SymbolMap;
}
/**
 * Class of symbol mappings that are active in a configuration.
 */
export declare class SubHandler {
    private _configuration;
    private _fallback;
    /**
     * Adds a list of symbol maps to the handler.
     * @param {string[]} maps The names of the symbol maps to add.
     * @param {ParseMethod} fallback A fallback method.
     * @param {number} priority Optionally a priority.
     */
    add(maps: string[], fallback: ParseMethod, priority?: number): void;
    /**
     * Parses the given input with the first applicable symbol map.
     * @param {ParseInput} input The input for the parser.
     * @return {ParseResult} The output of the parsing function.
     */
    parse(input: ParseInput): ParseResult;
    /**
     * Maps a symbol to its "parse value" if it exists.
     *
     * @param {string} symbol The symbol to parse.
     * @return {T} A boolean, Character, or Macro.
     */
    lookup<T>(symbol: string): T;
    /**
     * Checks if a symbol is contained in one of the symbol mappings of this
     * configuration.
     *
     * @param {string} symbol The symbol to parse.
     * @return {boolean} True if the symbol is contained in the mapping.
     */
    contains(symbol: string): boolean;
    /**
     * @override
     */
    toString(): string;
    /**
     * Retrieves the first applicable symbol map in the configuration.
     * @param {string} symbol The symbol to parse.
     * @return {SymbolMap} A map that can parse the symbol.
     */
    applicable(symbol: string): SymbolMap;
    /**
     * Retrieves the map of the given name.
     * @param {string} name Name of the symbol map.
     * @return {SymbolMap} The map if it exists.
     */
    retrieve(name: string): SymbolMap;
    /**
     * Prints a warning message.
     * @param {string} message The warning.
     */
    private warn;
}
export declare class SubHandlers {
    private map;
    /**
     * Adds a symbol map to the configuration if it exists.
     * @param {string} name of the symbol map.
     */
    add(handlers: HandlerConfig, fallbacks: FallbackConfig, priority?: number): void;
    /**
     * Setter for subhandlers.
     * @param {HandlerType} name The name of the subhandler.
     * @param {SubHandler} subHandler The subhandler.
     */
    set(name: HandlerType, subHandler: SubHandler): void;
    /**
     * Getter for subhandler.
     * @param {HandlerType} name Name of the subhandler.
     * @return {SubHandler} The subhandler by that name if it exists.
     */
    get(name: HandlerType): SubHandler;
    /**
     * Retrieves a symbol map of the given name.
     * @param {string} name Name of the symbol map.
     * @return {SymbolMap} The map if it exists. O/w null.
     */
    retrieve(name: string): SymbolMap;
    /**
     * All names of registered subhandlers.
     * @return {IterableIterator<string>} Iterable list of keys.
     */
    keys(): IterableIterator<string>;
}
