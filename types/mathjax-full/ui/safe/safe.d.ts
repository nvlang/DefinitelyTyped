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
/**
 * @fileoverview  Support for the safe extension
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { Property } from '../../core/Tree/Node.js';
import { MmlNode } from '../../core/MmlTree/MmlNode.js';
import { MathItem } from '../../core/MathItem.js';
import { MathDocument } from '../../core/MathDocument.js';
import { OptionList } from '../../util/Options.js';
import { DOMAdaptor } from '../../core/DOMAdaptor.js';
/**
 * Function type for filtering attributes
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export type FilterFunction<N, T, D> = (safe: Safe<N, T, D>, value: Property, ...args: any[]) => Property;
/**
 * The Safe object for sanitizing the internal MathML representation of an expression
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class Safe<N, T, D> {
    /**
     * The options controlling the handling of the safe extension
     */
    static OPTIONS: OptionList;
    /**
     * The attribute-to-filter-method mapping
     */
    filterAttributes: Map<string, string>;
    /**
     * The safe options from the document option list
     */
    options: OptionList;
    /**
     * Shorthand for options.allow
     */
    allow: OptionList;
    /**
     * The DOM adaptor from the document
     */
    adaptor: DOMAdaptor<N, T, D>;
    /**
     * The methods for filtering the MathML attributes
     */
    filterMethods: {
        [name: string]: FilterFunction<N, T, D>;
    };
    /**
     * @param {MathDocument<N,T,D>} document  The MathDocument we are sanitizing
     * @param {OptionList} options            The safeOptions from the document
     */
    constructor(document: MathDocument<N, T, D>, options: OptionList);
    /**
     * Sanitize a MathItem's root MathML tree
     *
     * @param {MathItem<N,T,D>} math           The MathItem to sanitize
     * @param {MathDocument<N,T,D>} document   The MathDocument in which it lives
     */
    sanitize(math: MathItem<N, T, D>, document: MathDocument<N, T, D>): void;
    /**
     * Sanitize a node's attributes
     *
     * @param {MmlNode} node      The node to sanitize
     */
    protected sanitizeNode(node: MmlNode): void;
    /**
     * Sanitize a MathML input attribute
     *
     * @param {string} id      The name of the attribute
     * @param {string} value   The value of the attribute
     * @return {string|null}   The sanitized value
     */
    mmlAttribute(id: string, value: string): string | null;
    /**
     * Sanitize a list of class names
     *
     * @param {string[]} list   The list of class names
     * @return {string[]}       The sanitized list
     */
    mmlClassList(list: string[]): string[];
}
