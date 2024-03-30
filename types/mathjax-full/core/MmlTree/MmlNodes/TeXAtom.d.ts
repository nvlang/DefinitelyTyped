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
 * @fileoverview  Implements the TeXAtom node
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { MmlFactory } from '../MmlFactory.js';
import { PropertyList } from '../../Tree/Node.js';
import { AbstractMmlBaseNode, MmlNode } from '../MmlNode.js';
/*****************************************************************/
/**
 *  Implements the TeXAtom node class (subclass of AbstractMmlBaseNode)
 */
export declare class TeXAtom extends AbstractMmlBaseNode {
    /**
     * @override
     */
    static defaults: PropertyList;
    /**
     * TeX class is ORD
     */
    protected texclass: number;
    /**
     * @override
     */
    get kind(): string;
    /**
     * Inferred mrow with any number of children
     * @override
     */
    get arity(): number;
    /**
     * This element is not considered a MathML container
     * @override
     */
    get notParent(): boolean;
    /**
     * @override
     */
    constructor(factory: MmlFactory, attributes: PropertyList, children: MmlNode[]);
    /**
     * @override
     */
    setTeXclass(prev: MmlNode): MmlNode;
    /**
     * (Replaced below by the version from the MmlMo node)
     *
     * @override
     */
    adjustTeXclass(prev: MmlNode): MmlNode;
}
