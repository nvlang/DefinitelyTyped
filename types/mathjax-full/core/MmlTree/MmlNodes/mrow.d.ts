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
 * @fileoverview  Implements the MmlMrow node
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { PropertyList } from '../../Tree/Node.js';
import { MmlNode, AbstractMmlNode } from '../MmlNode.js';
/*****************************************************************/
/**
 *  Implements the MmlMrow node class (subclass of AbstractMmlNode)
 */
export declare class MmlMrow extends AbstractMmlNode {
    /**
     * @override
     */
    static defaults: PropertyList;
    /**
     * The index of the core child, when acting as an embellish mrow
     */
    protected _core: number;
    /**
     * @override
     */
    get kind(): string;
    /**
     * An mrow is space-like if all its children are.
     *
     * @override
     */
    get isSpacelike(): boolean;
    /**
     * An mrow is embellished if it contains one embellished operator
     * and any number of space-like nodes
     *
     * @override
     */
    get isEmbellished(): boolean;
    /**
     * @override
     */
    core(): MmlNode;
    /**
     * @override
     */
    coreMO(): MmlNode;
    /**
     * @return {number}  The number of non-spacelike child nodes
     */
    nonSpaceLength(): number;
    /**
     * @return {MmlNode|null}  The first non-space-like child node
     */
    firstNonSpace(): MmlNode | null;
    /**
     * @return {MmlNode|null}  The last non-space-like child node
     */
    lastNonSpace(): MmlNode | null;
    /**
     * @override
     */
    setTeXclass(prev: MmlNode): MmlNode;
}
/*****************************************************************/
/**
 *  Implements the MmlInferredMrow node class (subclass of MmlMrow)
 */
export declare class MmlInferredMrow extends MmlMrow {
    /**
     * @override
     */
    static defaults: PropertyList;
    /**
     * @return {string}  The inferred-mrow kind
     */
    get kind(): string;
    /**
     * @return {boolean}  This is inferred
     */
    get isInferred(): boolean;
    /**
     * @override
     */
    get notParent(): boolean;
    /**
     * Show the child nodes in brackets
     */
    toString(): string;
}
