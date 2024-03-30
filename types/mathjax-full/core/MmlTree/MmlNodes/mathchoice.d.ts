/*************************************************************
 *
 *  Copyright (c) 2018-2022 The MathJax Consortium
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
 * @fileoverview  Implements the MathChoice node
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { PropertyList } from '../../Tree/Node.js';
import { AbstractMmlBaseNode, AttributeList } from '../MmlNode.js';
/*****************************************************************/
/**
 *  Implements the MathChoice node class (subclass of AbstractMmlBaseNode)
 *
 *  This is used by TeX's \mathchoice macro, but removes itself
 *  during the setInheritedAttributes process
 */
export declare class MathChoice extends AbstractMmlBaseNode {
    /**
     * @override
     */
    static defaults: PropertyList;
    /**
     *  @override
     */
    get kind(): string;
    /**
     * 4 children (display, text, script, and scriptscript styles)
     * @override
     */
    get arity(): number;
    /**
     * This element is not considered a MathML container
     * @override
     */
    get notParent(): boolean;
    /**
     * Replace the MathChoice node with the selected on based on the displaystyle and scriptlevel settings
     * (so the MathChoice never ends up in a finished MmlNode tree)
     *
     * @override
     */
    setInheritedAttributes(attributes: AttributeList, display: boolean, level: number, prime: boolean): void;
}
