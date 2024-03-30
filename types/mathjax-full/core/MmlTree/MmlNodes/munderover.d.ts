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
 * @fileoverview  Implements the MmlMunderover node
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { PropertyList } from '../../Tree/Node.js';
import { AbstractMmlBaseNode, AttributeList } from '../MmlNode.js';
/*****************************************************************/
/**
 *  Implements the MmlMunderover node class (subclass of AbstractMmlNode)
 */
export declare class MmlMunderover extends AbstractMmlBaseNode {
    /**
     * @override
     */
    static defaults: PropertyList;
    /**
     * The names of attributes controling accents for each child node (reversed for mover below)
     */
    protected static ACCENTS: string[];
    /**
     * @override
     */
    get kind(): string;
    /**
     * <munderover> requires three children
     * @override
     */
    get arity(): number;
    /**
     * @return {number}  The base is child 0
     */
    get base(): number;
    /**
     * @return {number}  Child 1 goes under (overridden by mover below)
     */
    get under(): number;
    /**
     * @return {number}  Child 2 goes over (overridden by mover below)
     */
    get over(): number;
    /**
     * <munderover> can contain line breaks
     * @override
     */
    get linebreakContainer(): boolean;
    /**
     * Base is in prime style if there is an over node
     * Force scriptlevel change if converted to sub-sup by movablelimits on the base in non-display mode
     * Adjust displaystyle, scriptlevel, and primestyle for the under/over nodes and check if accent
     *   values have changed due to the inheritance (e.g., settings in operator dictionary)
     *
     * @override
     */
    protected setChildInheritedAttributes(attributes: AttributeList, display: boolean, level: number, prime: boolean): void;
    /**
     * @param {string} accent  The name of the accent attribute to check ("accent" or "accentunder")
     * @param {boolean} force  True if the scriptlevel change is to be forced to occur
     * @param {number} level   The current scriptlevel
     * @return {number}        The new script level based on the accent attribute
     */
    protected getScriptlevel(accent: string, force: boolean, level: number): number;
    /**
     * Check if an under or over accent should cause the appropriate accent attribute to be inherited
     *   on the munderover node, and if it is not the default, re-inherit the scriptlevel, since that
     *   is affected by the accent attribute
     *
     * @param {number} n         The index of the node to check
     * @param {string} accent    The name of the accent attribute to check ("accent" or "accentunder")
     * @param {boolean} display  The displaystyle
     * @param {number} level     The scriptlevel
     * @param {number} prime     The TeX prime style
     * @param {boolean} force    Whether to force the scriptlevel change
     */
    protected setInheritedAccent(n: number, accent: string, display: boolean, level: number, prime: boolean, force: boolean): void;
}
/*****************************************************************/
/**
 *  Implements the MmlMunder node class (subclass of MmlMunderover)
 */
export declare class MmlMunder extends MmlMunderover {
    /**
     * @override
     */
    static defaults: PropertyList;
    /**
     * @override
     */
    get kind(): string;
    /**
     * <munder> has only two children
     * @override
     */
    get arity(): number;
}
/*****************************************************************/
/**
 *  Implements the MmlMover node class (subclass of MmlMunderover)
 */
export declare class MmlMover extends MmlMunderover {
    /**
     * @override
     */
    static defaults: PropertyList;
    /**
     *  The first child is the over accent (second never occurs)
     */
    protected static ACCENTS: string[];
    /**
     * @override
     */
    get kind(): string;
    /**
     * <mover> has only two children
     * @override
     */
    get arity(): number;
    /**
     * Child 1 is the over node
     * @override
     */
    get over(): number;
    /**
     * Child 2 is the null (the under node)
     * @override
     */
    get under(): number;
}
