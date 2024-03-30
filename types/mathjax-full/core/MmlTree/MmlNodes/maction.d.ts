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
 * @fileoverview  Implements the MmlMaction node
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { PropertyList } from '../../Tree/Node.js';
import { MmlNode, AbstractMmlNode } from '../MmlNode.js';
/*****************************************************************/
/**
 *  Implements the MmlMaction node class (subclass of AbstractMmlNode)
 */
export declare class MmlMaction extends AbstractMmlNode {
    /**
     * @override
     */
    static defaults: PropertyList;
    /**
     * @override
     */
    get kind(): string;
    /**
     * At least one child
     * @override
     */
    get arity(): number;
    /**
     * @return {MmlNode}  The selected child node (or an mrow if none selected)
     */
    get selected(): MmlNode;
    /**
     * @override
     */
    get isEmbellished(): boolean;
    /**
     * @override
     */
    get isSpacelike(): boolean;
    /**
     * @override
     */
    core(): MmlNode;
    /**
     * @override
     */
    coreMO(): MmlNode;
    /**
     * @override
     */
    protected verifyAttributes(options: PropertyList): void;
    /**
     * Get the TeX class from the selceted node
     * For tooltips, set TeX classes within the tip as a separate math list
     *
     * @override
     */
    setTeXclass(prev: MmlNode): MmlNode;
    /**
     * Select the next child for a toggle action
     */
    nextToggleSelection(): void;
}
