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
 * @fileoverview  Implements the TeX InputJax object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { AbstractInputJax } from '../core/InputJax.js';
import { OptionList } from '../util/Options.js';
import { MathDocument } from '../core/MathDocument.js';
import { MathItem } from '../core/MathItem.js';
import { MmlNode } from '../core/MmlTree/MmlNode.js';
import { MmlFactory } from '../core/MmlTree/MmlFactory.js';
import { FindTeX } from './tex/FindTeX.js';
import TexError from './tex/TexError.js';
import ParseOptions from './tex/ParseOptions.js';
import { ParserConfiguration } from './tex/Configuration.js';
import './tex/base/BaseConfiguration.js';
/*****************************************************************/
/**
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class TeX<N, T, D> extends AbstractInputJax<N, T, D> {
    /**
     * Name of input jax.
     * @type {string}
     */
    static NAME: string;
    /**
     * Default options for the jax.
     * @type {OptionList}
     */
    static OPTIONS: OptionList;
    /**
     * The FindTeX instance used for locating TeX in strings
     */
    protected findTeX: FindTeX<N, T, D>;
    /**
     * The configuration of the TeX jax.
     * @type {ParserConfiguration}
     */
    protected configuration: ParserConfiguration;
    /**
     * The LaTeX code that is parsed.
     * @type {string}
     */
    protected latex: string;
    /**
     * The Math node that results from parsing.
     * @type {MmlNode}
     */
    protected mathNode: MmlNode;
    private _parseOptions;
    /**
     * Initialises the configurations.
     * @param {string[]} packages Names of packages.
     * @return {Configuration} The configuration object.
     */
    protected static configure(packages: (string | [string, number])[]): ParserConfiguration;
    /**
     * Initialises the Tags factory. Add tagging structures from packages and set
     * tagging to given default.
     * @param {ParseOptions} options The parse options.
     * @param {Configuration} configuration The configuration.
     */
    protected static tags(options: ParseOptions, configuration: ParserConfiguration): void;
    /**
     * @override
     */
    constructor(options?: OptionList);
    /**
     * @override
     */
    setMmlFactory(mmlFactory: MmlFactory): void;
    /**
     * @return {ParseOptions} The parse options that configure this JaX instance.
     */
    get parseOptions(): ParseOptions;
    /**
     * @override
     */
    reset(tag?: number): void;
    /**
     * @override
     */
    compile(math: MathItem<N, T, D>, document: MathDocument<N, T, D>): MmlNode;
    /**
     * @override
     */
    findMath(strings: string[]): import("../core/MathItem.js").ProtoItem<N, T>[];
    /**
     * Default formatter for error messages:
     *   wrap an error into a node for output.
     * @param {TeXError} err The TexError.
     * @return {Node} The merror node.
     */
    formatError(err: TexError): MmlNode;
}
