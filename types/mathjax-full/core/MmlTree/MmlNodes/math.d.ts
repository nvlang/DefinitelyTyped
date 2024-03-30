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
 * @fileoverview  Implements the MmlMath node
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { PropertyList } from '../../Tree/Node.js';
import { AbstractMmlLayoutNode, AttributeList } from '../MmlNode.js';
/*****************************************************************/
/**
 *  Implements the MmlMath node class (subclass of AbstractMmlLayoutNode)
 */
export declare class MmlMath extends AbstractMmlLayoutNode {
    /**
     *  These are used as the defaults for any attributes marked INHERIT in other classes
     */
    static defaults: PropertyList;
    /**
     * @override
     */
    get kind(): string;
    /**
     * Linebreaking can occur in math nodes
     * @override
     */
    get linebreakContainer(): boolean;
    /**
     * The attributes of math nodes are inherited, so add them into the list.
     * The displaystyle attribute comes from the display attribute if not given explicitly
     * The scriptlevel comes from the scriptlevel attribute or default
     *
     * @override
     */
    protected setChildInheritedAttributes(attributes: AttributeList, display: boolean, level: number, prime: boolean): void;
}
