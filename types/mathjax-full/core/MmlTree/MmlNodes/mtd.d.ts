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
 * @fileoverview  Implements the MmlMtd node
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { PropertyList } from '../../Tree/Node.js';
import { AbstractMmlBaseNode, MmlNode } from '../MmlNode.js';
/*****************************************************************/
/**
 *  Implements the MmlMtd node class (subclass of AbstractMmlBaseNode)
 */
export declare class MmlMtd extends AbstractMmlBaseNode {
    /**
     * @override
     */
    static defaults: PropertyList;
    /**
     * @override
     */
    get kind(): string;
    /**
     * <mtd> has an inferred mrow
     * @overrride
     */
    get arity(): number;
    /**
     * <mtd> can contain line breaks
     * @override
     */
    get linebreakContainer(): boolean;
    /**
     * Check that parent is mtr
     *
     * @override
     */
    protected verifyChildren(options: PropertyList): void;
    /**
     * @override
     */
    setTeXclass(prev: MmlNode): this;
}
