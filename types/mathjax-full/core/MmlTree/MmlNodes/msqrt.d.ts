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
 * @fileoverview  Implements the MmlMsqrt node
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { PropertyList } from '../../Tree/Node.js';
import { MmlNode, AbstractMmlNode, AttributeList } from '../MmlNode.js';
/*****************************************************************/
/**
 *  Implements the MmlMsqrt node class (subclass of AbstractMmlNode)
 */
export declare class MmlMsqrt extends AbstractMmlNode {
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
     * <msqrt> has an inferred mrow
     * @override
     */
    get arity(): number;
    /**
     * <msqrt> can contain line breaks
     * @override
     */
    get linebreakContainer(): boolean;
    /**
     * @override
     */
    setTeXclass(prev: MmlNode): this;
    /**
     * The contents of sqrt are in TeX prime style.
     *
     * @override
     */
    protected setChildInheritedAttributes(attributes: AttributeList, display: boolean, level: number, _prime: boolean): void;
}
