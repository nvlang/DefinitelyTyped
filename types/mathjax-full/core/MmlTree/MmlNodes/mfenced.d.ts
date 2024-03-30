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
 * @fileoverview  Implements the MmlMfenced node
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { PropertyList } from '../../Tree/Node.js';
import { MmlNode, AbstractMmlNode, AttributeList } from '../MmlNode.js';
/*****************************************************************/
/**
 *  Implements the MmlMfenced node class (subclass of AbstractMmlNode)
 */
export declare class MmlMfenced extends AbstractMmlNode {
    /**
     * @overeride
     */
    static defaults: PropertyList;
    /**
     * TeX class is INNER
     */
    protected texclass: number;
    /**
     * Storage for "fake" nodes for the separators
     */
    separators: MmlNode[];
    /**
     * Storage for "fake" open node
     */
    open: MmlNode;
    /**
     * Storage for "fake" close node
     */
    close: MmlNode;
    /**
     * @override
     */
    get kind(): string;
    /**
     * Include the fake nodes in the process, since they will be used
     *  to produce the output.
     *
     * @override
     */
    setTeXclass(prev: MmlNode): MmlNode;
    /**
     * Create the fake nodes and do their inheritance
     * Then do inheridence of usual children
     *
     * @override
     */
    protected setChildInheritedAttributes(attributes: AttributeList, display: boolean, level: number, prime: boolean): void;
    /**
     * Create <mo> elements for the open and close delimiters, and for the separators (if any)
     */
    protected addFakeNodes(): void;
    /**
     * @param {string} c                 The character for the text of the node
     * @param {PropertyList} properties  The attributes for the node
     * @param {number} texClass          The TeX class for the node
     * @return {MmlNode}                 The generated <mo> node
     */
    protected fakeNode(c: string, properties?: PropertyList, texClass?: number): MmlNode;
}
