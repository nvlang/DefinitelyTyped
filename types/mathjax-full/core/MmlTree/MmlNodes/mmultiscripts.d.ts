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
 * @fileoverview  Implements the MmlMmultiscripts node
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { PropertyList } from '../../Tree/Node.js';
import { AbstractMmlNode, AttributeList } from '../MmlNode.js';
import { MmlMsubsup } from './msubsup.js';
/*****************************************************************/
/**
 *  Implements the MmlMmultiscripts node class (subclass of MmlMsubsup)
 */
export declare class MmlMmultiscripts extends MmlMsubsup {
    /**
     * @override
     */
    static defaults: PropertyList;
    /**
     * @override
     */
    get kind(): string;
    /**
     * <mmultiscripts> requires at least one child (the base)
     * @override
     */
    get arity(): number;
    /**
     * Push the inherited values to the base
     * Make sure the number of pre- and post-scripts are even by adding mrows, if needed.
     * For the scripts, use displaystyle = false, scriptlevel + 1, and
     *   set the primestyle in the subscripts.
     *
     * @override
     */
    protected setChildInheritedAttributes(attributes: AttributeList, display: boolean, level: number, prime: boolean): void;
    /**
     * Check that mprescripts only occurs once, and that the number of pre- and post-scripts are even.
     *
     * @override
     */
    protected verifyChildren(options: PropertyList): void;
}
/*****************************************************************/
/**
 *  Implements the MmlMprescripts node class (subclass of AbstractMmlNode)
 */
export declare class MmlMprescripts extends AbstractMmlNode {
    /**
     * @override
     */
    static defaults: PropertyList;
    /**
     * @return {string}  The mprescripts kind
     */
    get kind(): string;
    /**
     * @return {number}  <mprescripts> can have no children
     */
    get arity(): number;
    /**
     * Check that parent is mmultiscripts
     *
     * @override
     */
    verifyTree(options: PropertyList): void;
}
/*****************************************************************/
/**
 *  Implements the MmlNone node class (subclass of AbstractMmlNode)
 */
export declare class MmlNone extends AbstractMmlNode {
    /**
     * @override
     */
    static defaults: PropertyList;
    /**
     * @return {string}  The none kind
     */
    get kind(): string;
    /**
     * @return {number}  <none> can have no children
     */
    get arity(): number;
    /**
     * Check that parent is mmultiscripts
     *
     * @override
     */
    verifyTree(options: PropertyList): void;
}
