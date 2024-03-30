/*************************************************************
 *
 *  Copyright (c) 2019-2022 The MathJax Consortium
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
 * @fileoverview  A visitor to serialize MathML taking menu settings into account
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { MathItem } from '../../core/MathItem.js';
import { MmlNode } from '../../core/MmlTree/MmlNode.js';
import { SerializedMmlVisitor } from '../../core/MmlTree/SerializedMmlVisitor.js';
import { OptionList } from '../../util/Options.js';
/**
 * The visitor to serialize MathML
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class MmlVisitor<N, T, D> extends SerializedMmlVisitor {
    /**
     * The options controlling the serialization
     */
    options: OptionList;
    /**
     * The MathItem currently being processed
     */
    mathItem: MathItem<N, T, D>;
    /**
     * @param {MmlNode} node         The internal MathML node to serialize
     * @param {MathItem} math        The MathItem for this node
     * @param {OptionList} options   The options controlling the processing
     * @override
     */
    visitTree(node: MmlNode, math?: MathItem<N, T, D>, options?: OptionList): any;
    /**
     * @override
     */
    visitTeXAtomNode(node: MmlNode, space: string): any;
    /**
     * @param {MmlNode} node    The math node to visit
     * @param {string} space    The number of spaces to use for indentation
     * @returns {string}        The serialized math element
     */
    visitMathNode(node: MmlNode, space: string): string;
}
