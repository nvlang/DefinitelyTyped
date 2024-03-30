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
 * @fileoverview  Implements the MmlMi node
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { PropertyList } from '../../Tree/Node.js';
import { AbstractMmlTokenNode, AbstractMmlNode, AttributeList } from '../MmlNode.js';
/*****************************************************************/
/**
 *  Implements the MmlMi node class (subclass of AbstractMmlTokenNode)
 */
export declare class MmlMi extends AbstractMmlTokenNode {
    /**
     * @override
     */
    static defaults: PropertyList;
    /**
     * Pattern for operator names
     */
    static operatorName: RegExp;
    /**
     * Pattern for single-character texts
     */
    static singleCharacter: RegExp;
    /**
     * TeX class is ORD
     */
    protected texclass: number;
    /**
     * @override
     */
    get kind(): string;
    /**
     * Do the usual inheritance, then check the text length to see
     *   if mathvariant should be normal or italic.
     *
     * @override
     */
    setInheritedAttributes(attributes?: AttributeList, display?: boolean, level?: number, prime?: boolean): void;
    /**
     * Mark multi-character texts as OP rather than ORD for spacing purposes
     *
     * @override
     */
    setTeXclass(prev: AbstractMmlNode): this;
}
