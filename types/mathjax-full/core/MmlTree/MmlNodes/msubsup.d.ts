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
 * @fileoverview  Implements the MmlMsubsup, MmlMsub, and MmlMsup nodes
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { PropertyList } from '../../Tree/Node.js';
import { AbstractMmlBaseNode, AttributeList } from '../MmlNode.js';
/*****************************************************************/
/**
 *  Implements the MmlMsubsup node class (subclass of AbstractMmlBaseNode)
 */
export declare class MmlMsubsup extends AbstractMmlBaseNode {
    /**
     * @override
     */
    static defaults: PropertyList;
    /**
     * @override
     */
    get kind(): string;
    /**
     * <msubsup> requires three children
     * @override
     */
    get arity(): number;
    /**
     * @return {number}  The position of the base element
     */
    get base(): number;
    /**
     * @return {number}  The position of the subscript (overridden in msup below)
     */
    get sub(): number;
    /**
     * @return {number}  The position of the superscript (overridden in msup below)
     */
    get sup(): number;
    /**
     * Super- and subscripts are not in displaymode, have scriptlevel increased, and prime style in subscripts.
     *
     * @override
     */
    protected setChildInheritedAttributes(attributes: AttributeList, display: boolean, level: number, prime: boolean): void;
}
/*****************************************************************/
/**
 *  Implements the MmlMsub node class (subclass of MmlMsubsup)
 */
export declare class MmlMsub extends MmlMsubsup {
    /**
     * @override
     */
    static defaults: PropertyList;
    /**
     * @override
     */
    get kind(): string;
    /**
     * <msub> only gets two children
     * @override
     */
    get arity(): number;
}
/*****************************************************************/
/**
 *  Implements the MmlMsup node class (subclass of MmlMsubsup)
 */
export declare class MmlMsup extends MmlMsubsup {
    /**
     * @override
     */
    static defaults: PropertyList;
    /**
     * @override
     */
    get kind(): string;
    /**
     * <msup> only gets two children
     * @override
     */
    get arity(): number;
    /**
     * child 1 is superscript
     * @override
     */
    get sup(): number;
    /**
     * child 2 is null (no subscript)
     * @override
     */
    get sub(): number;
}
