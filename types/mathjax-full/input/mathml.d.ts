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
 * @fileoverview  Implements the MathML InputJax object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { AbstractInputJax } from '../core/InputJax.js';
import { OptionList } from '../util/Options.js';
import { FunctionList } from '../util/FunctionList.js';
import { MathDocument } from '../core/MathDocument.js';
import { MathItem } from '../core/MathItem.js';
import { DOMAdaptor } from '../core/DOMAdaptor.js';
import { MmlFactory } from '../core/MmlTree/MmlFactory.js';
import { FindMathML } from './mathml/FindMathML.js';
import { MathMLCompile } from './mathml/MathMLCompile.js';
/*****************************************************************/
/**
 *  Implements the MathML class (extends AbstractInputJax)
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class MathML<N, T, D> extends AbstractInputJax<N, T, D> {
    /**
     * The name of this input jax
     */
    static NAME: string;
    /**
     * @override
     */
    static OPTIONS: OptionList;
    /**
     * The FindMathML instance used to locate MathML in the document
     */
    protected findMathML: FindMathML<N, T, D>;
    /**
     * The MathMLCompile instance used to convert the MathML tree to internal format
     */
    protected mathml: MathMLCompile<N, T, D>;
    /**
     * A list of functions to call on the parsed MathML DOM before conversion to internal structure
     */
    mmlFilters: FunctionList;
    /**
     * @override
     */
    constructor(options?: OptionList);
    /**
     * Set the adaptor in any of the objects that need it
     *
     * @override
     */
    setAdaptor(adaptor: DOMAdaptor<N, T, D>): void;
    /**
     * @param {MmlFactory} mmlFactory  The MmlFactory to use for this MathML input jax
     */
    setMmlFactory(mmlFactory: MmlFactory): void;
    /**
     * Don't process strings (process nodes)
     *
     * @override
     */
    get processStrings(): boolean;
    /**
     * Convert a MathItem to internal format:
     *   If there is no existing MathML node, or we are asked to reparse everything
     *     Execute the preFilters on the math
     *     Parse the MathML string in the desired format, and check the result for errors
     *     If we got an HTML document:
     *       Check that it has only one child (the <math> element), and use it
     *     Otherwise
     *       Use the root element from the XML document
     *     If the node is not a <math> node, report the error.
     *   Execute the mmlFilters on the parsed MathML
     *   Compile the MathML to internal format, and execute the postFilters
     *   Return the resulting internal format
     *
     * @override
     */
    compile(math: MathItem<N, T, D>, document: MathDocument<N, T, D>): any;
    /**
     * Check a parsed MathML string for errors.
     *
     * @param {D} doc  The document returns from the DOMParser
     * @return {D}     The document
     */
    protected checkForErrors(doc: D): D;
    /**
     * Throw an error
     *
     * @param {string} message  The error message to produce
     */
    protected error(message: string): void;
    /**
     * @override
     */
    findMath(node: N): import("../core/MathItem.js").ProtoItem<N, T>[];
}
