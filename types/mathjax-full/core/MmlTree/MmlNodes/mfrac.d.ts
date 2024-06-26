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
 * @fileoverview  Implements the MmlMfrac node
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { PropertyList } from '../../Tree/Node.js';
import { MmlNode, AbstractMmlBaseNode, AttributeList } from '../MmlNode.js';
/*****************************************************************/
/**
 *  Implements the MmlMfrac node class (subclass of AbstractMmlBaseNode)
 */
export declare class MmlMfrac extends AbstractMmlBaseNode {
    /**
     * @override
     */
    static defaults: PropertyList;
    /**
     * @override
     */
    get kind(): string;
    /**
     * <mfrac> requires two children
     * @override
     */
    get arity(): number;
    /**
     * The children of <mfrac> can include line breaks
     * @override
     */
    get linebreakContainer(): boolean;
    /**
     * Update the children separately
     * @override
     */
    setTeXclass(prev: MmlNode): this;
    /**
     * Adjust the display level, and use prime style in denominator
     * @override
     */
    protected setChildInheritedAttributes(attributes: AttributeList, display: boolean, level: number, prime: boolean): void;
}
