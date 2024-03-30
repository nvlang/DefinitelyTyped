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
 * @fileoverview  Implements a class that computes complexities for enriched math
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { MmlNode } from '../../core/MmlTree/MmlNode.js';
import { MmlMroot } from '../../core/MmlTree/MmlNodes/mroot.js';
import { MmlMaction } from '../../core/MmlTree/MmlNodes/maction.js';
import { MmlMsubsup, MmlMsub, MmlMsup } from '../../core/MmlTree/MmlNodes/msubsup.js';
import { MmlMunderover, MmlMunder, MmlMover } from '../../core/MmlTree/MmlNodes/munderover.js';
import { MmlVisitor } from '../../core/MmlTree/MmlVisitor.js';
import { MmlFactory } from '../../core/MmlTree/MmlFactory.js';
import { Collapse } from './collapse.js';
import { OptionList } from '../../util/Options.js';
/**
 * A visitor pattern that computes complexities within the MathML tree
 */
export declare class ComplexityVisitor extends MmlVisitor {
    /**
     * The options for handling collapsing
     */
    static OPTIONS: OptionList;
    /**
     * Values used to compute complexities
     */
    complexity: {
        [name: string]: number;
    };
    /**
     * The object used to handle collapsable content
     */
    collapse: Collapse;
    /**
     * The MmlFactory for this visitor
     */
    factory: MmlFactory;
    /**
     * The options for this visitor
     */
    options: OptionList;
    /**
     * @override
     */
    constructor(factory: MmlFactory, options: OptionList);
    /**
     * @override
     */
    visitTree(node: MmlNode): void;
    /**
     * @override
     */
    visitNode(node: MmlNode, save: boolean): any;
    /**
     * For token nodes, use the content length, otherwise, add up the child complexities
     *
     * @override
     */
    visitDefault(node: MmlNode, save: boolean): number;
    /**
     * For a fraction, add the complexities of the children and scale by script factor, then
     *   add the fraction amount
     *
     * @param {MmlNode} node   The node whose complixity is being computed
     * @param {boolean} save   True if the complexity is to be saved or just returned
     */
    protected visitMfracNode(node: MmlNode, save: boolean): number;
    /**
     * For square roots, use the child complexity plus the sqrt complexity
     *
     * @param {MmlNode} node   The node whose complixity is being computed
     * @param {boolean} save   True if the complexity is to be saved or just returned
     */
    protected visitMsqrtNode(node: MmlNode, save: boolean): number;
    /**
     * For roots, do the sqrt root computation and remove a bit for the root
     *   (since it is counted in the children sum but is smaller)
     *
     * @param {MmlMroot} node   The node whose complixity is being computed
     * @param {boolean} save   True if the complexity is to be saved or just returned
     */
    protected visitMrootNode(node: MmlMroot, save: boolean): number;
    /**
     * Phantom complexity is 0
     *
     * @param {MmlNode} node   The node whose complixity is being computed
     * @param {boolean} save   True if the complexity is to be saved or just returned
     */
    protected visitMphantomNode(node: MmlNode, save: boolean): number;
    /**
     * For ms, add the complexity of the quotes to that of the content, and use the
     *    length of that times the text factor as the complexity
     *
     * @param {MmlNode} node   The node whose complixity is being computed
     * @param {boolean} save   True if the complexity is to be saved or just returned
     */
    protected visitMsNode(node: MmlNode, save: boolean): number;
    /**
     * For supscripts and superscripts use the maximum of the script complexities,
     *   multiply by the script factor, and add the base complexity.  Add the child
     *   complexity for each child, and the subsup complexity.
     *
     * @param {MmlMsubsup} node   The node whose complixity is being computed
     * @param {boolean} save   True if the complexity is to be saved or just returned
     */
    protected visitMsubsupNode(node: MmlMsubsup, save: boolean): number;
    /**
     * @param {MmlMsub} node   The node whose complixity is being computed
     * @param {boolean} save   True if the complexity is to be saved or just returned
     */
    protected visitMsubNode(node: MmlMsub, save: boolean): number;
    /**
     * @param {MmlMsup} node   The node whose complixity is being computed
     * @param {boolean} save   True if the complexity is to be saved or just returned
     */
    protected visitMsupNode(node: MmlMsup, save: boolean): number;
    /**
     * For under/over, get the maximum of the complexities of the under and over
     *   elements times the script factor, and that the maximum of that with the
     *   base complexity.  Add child complexity for all children, and add the
     *   underover amount.
     *
     * @param {MmlMunderover} node   The node whose complixity is being computed
     * @param {boolean} save   True if the complexity is to be saved or just returned
     */
    protected visitMunderoverNode(node: MmlMunderover, save: boolean): number;
    /**
     * @param {MmlMunder} node   The node whose complixity is being computed
     * @param {boolean} save   True if the complexity is to be saved or just returned
     */
    protected visitMunderNode(node: MmlMunder, save: boolean): number;
    /**
     * @param {MmlMover} node   The node whose complixity is being computed
     * @param {boolean} save   True if the complexity is to be saved or just returned
     */
    protected visitMoverNode(node: MmlMover, save: boolean): number;
    /**
     * For enclose, use sum of child complexities plus some for the enclose
     *
     * @param {MmlNode} node   The node whose complixity is being computed
     * @param {boolean} save   True if the complexity is to be saved or just returned
     */
    protected visitMencloseNode(node: MmlNode, save: boolean): number;
    /**
     * For actions, use the complexity of the selected child
     *
     * @param {MmlMaction} node   The node whose complixity is being computed
     * @param {boolean} save   True if the complexity is to be saved or just returned
     */
    protected visitMactionNode(node: MmlMaction, save: boolean): number;
    /**
     * For semantics, get the complexity from the first child
     *
     * @param {MmlNode} node   The node whose complixity is being computed
     * @param {boolean} save   True if the complexity is to be saved or just returned
     */
    protected visitMsemanticsNode(node: MmlNode, save: boolean): number;
    /**
     * Can't really measure annotations, so just use a specific value
     *
     * @param {MmlNode} node   The node whose complixity is being computed
     * @param {boolean} save   True if the complexity is to be saved or just returned
     */
    protected visitAnnotationNode(node: MmlNode, save: boolean): number;
    /**
     * Can't really measure annotations, so just use a specific value
     *
     * @param {MmlNode} node   The node whose complixity is being computed
     * @param {boolean} save   True if the complexity is to be saved or just returned
     */
    protected visitAnnotation_xmlNode(node: MmlNode, save: boolean): number;
    /**
     * Can't really measure mglyph complexity, so just use a specific value
     *
     * @param {MmlNode} node   The node whose complixity is being computed
     * @param {boolean} save   True if the complexity is to be saved or just returned
     */
    protected visitMglyphNode(node: MmlNode, save: boolean): number;
    /**
     * @param {MmlNode} node   The node whose complixity is needed
     * @return {number}        The complexity fof the node (if collapsable, then the collapsed complexity)
     */
    getComplexity(node: MmlNode): number;
    /**
     * @param {MmlNode} node       The node whose complixity is being set
     * @param {complexity} number  The complexity for the node
     * @param {boolean} save       True if complexity is to be set or just reported
     */
    protected setComplexity(node: MmlNode, complexity: number, save: boolean): number;
    /**
     * @param {MmlNode} node   The node whose children complexities are to be added
     * @return {number}        The sum of the complexities, plus child complexity for each one
     */
    protected childrenComplexity(node: MmlNode): number;
}
