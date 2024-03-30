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
 * @fileoverview Symbol classes.
 *
 * @author v.sorge@mathjax.org (Volker Sorge)
 */
import { Args, Attributes, ParseMethod } from './Types.js';
/**
 * Symbol class
 */
export declare class Symbol {
    private _symbol;
    private _char;
    private _attributes;
    /**
     * @constructor
     * @param {string} symbol The symbol parsed.
     * @param {string} char The corresponding translation.
     * @param {Attributes} attributes The attributes for the translation.
     */
    constructor(_symbol: string, _char: string, _attributes: Attributes);
    get symbol(): string;
    get char(): string;
    get attributes(): Attributes;
}
export declare class Macro {
    private _symbol;
    private _func;
    private _args;
    /**
     * @constructor
     * @param {string} symbol The symbol parsed
     * @param {ParseMethod} func The parsing function for that symbol.
     * @param {Args[]} args Additional arguments for the function.
     */
    constructor(_symbol: string, _func: ParseMethod, _args?: Args[]);
    get symbol(): string;
    get func(): ParseMethod;
    get args(): Args[];
}
