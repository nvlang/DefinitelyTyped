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
 * @fileoverview  Implements the MmlMtable node
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { PropertyList } from '../../Tree/Node.js';
import { MmlNode, AbstractMmlNode, AttributeList } from '../MmlNode.js';
/*****************************************************************/
/**
 *  Implements the MmlMtable node class (subclass of AbstractMmlNode)
 */
export declare class MmlMtable extends AbstractMmlNode {
    /**
     * @override
     */
    static defaults: PropertyList;
    /**
     * Extra properties for this node
     */
    properties: {
        useHeight: boolean;
    };
    /**
     * TeX class is ORD
     */
    protected texclass: number;
    /**
     * @override
     */
    get kind(): string;
    /**
     * Linebreaks are allowed in tables
     * @override
     */
    get linebreakContainer(): boolean;
    /**
     * @override
     */
    setInheritedAttributes(attributes: AttributeList, display: boolean, level: number, prime: boolean): void;
    /**
     * Make sure all children are mtr or mlabeledtr nodes
     * Inherit the table attributes, and set the display attribute based on the table's displaystyle attribute
     * Reset the prime value to false
     *
     * @override
     */
    protected setChildInheritedAttributes(attributes: AttributeList, display: boolean, level: number, _prime: boolean): void;
    /**
     * Check that children are mtr or mlabeledtr
     *
     * @override
     */
    protected verifyChildren(options: PropertyList): void;
    /**
     * @override
     */
    setTeXclass(prev: MmlNode): this;
}
