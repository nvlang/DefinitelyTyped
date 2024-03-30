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
 * @fileoverview  Implements the MathML version of the FindMath object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { AbstractFindMath } from '../../core/FindMath.js';
import { DOMAdaptor } from '../../core/DOMAdaptor.js';
import { OptionList } from '../../util/Options.js';
import { ProtoItem } from '../../core/MathItem.js';
/*****************************************************************/
/**
 *  Implements the FindMathML object (extends AbstractFindMath)
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class FindMathML<N, T, D> extends AbstractFindMath<N, T, D> {
    /**
     * @override
     */
    static OPTIONS: OptionList;
    /**
     * The DOMAdaptor for the document being processed
     */
    adaptor: DOMAdaptor<N, T, D>;
    /**
     * Locates math nodes, possibly with namespace prefixes.
     *  Store them in a set so that if found more than once, they will only
     *  appear in the list once.
     *
     * @override
     */
    findMath(node: N): ProtoItem<N, T>[];
    /**
     * Find plain <math> tags
     *
     * @param {N} node       The container to seaerch for math
     * @param {Set<N>} set   The set in which to store the math nodes
     */
    protected findMathNodes(node: N, set: Set<N>): void;
    /**
     * Find <m:math> tags (or whatever prefixes there are)
     *
     * @param {N} node  The container to seaerch for math
     * @param {NodeSet} set   The set in which to store the math nodes
     */
    protected findMathPrefixed(node: N, set: Set<N>): void;
    /**
     * Find namespaced math in XHTML documents (is this really needed?)
     *
     * @param {N} node  The container to seaerch for math
     * @param {NodeSet} set   The set in which to store the math nodes
     */
    protected findMathNS(node: N, set: Set<N>): void;
    /**
     *  Produce the array of proto math items from the node set
     */
    protected processMath(set: Set<N>): ProtoItem<N, T>[];
}
