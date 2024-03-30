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
 * @fileoverview  Implements a class that marks complex items for collapsing
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { MmlNode } from '../../core/MmlTree/MmlNode.js';
import { ComplexityVisitor } from './visitor.js';
/**
 * Function for checking if a node should be collapsible
 */
export type CollapseFunction = (node: MmlNode, complexity: number) => number;
/**
 * Map of types to collase functions
 */
export type CollapseFunctionMap = Map<string, CollapseFunction>;
/**
 * A list of values indexed by semantic-type, possibly sub-indexed by semantic-role
 *
 * @template T   The type of the indexed item
 */
export type TypeRole<T> = {
    [type: string]: T | {
        [role: string]: T;
    };
};
/**
 * The class for determining of a subtree can be collapsed
 */
export declare class Collapse {
    /**
     * A constant to use to indicate no collapsing
     */
    static NOCOLLAPSE: number;
    /**
     * The complexity object containing this one
     */
    complexity: ComplexityVisitor;
    /**
     * The cutt-off complexity values for when a structure
     *   of the given type should collapse
     */
    cutoff: TypeRole<number>;
    /**
     *  These are the characters to use for the various collapsed elements
     *  (if an object, then semantic-role is used to get the character
     *  from the object)
     */
    marker: TypeRole<string>;
    /**
     * The type-to-function mapping for semantic types
     */
    collapse: CollapseFunctionMap;
    /**
     * The highest id number used for mactions so far
     */
    private idCount;
    /**
     * @param {ComplexityVisitor} visitor  The visitor for computing complexities
     */
    constructor(visitor: ComplexityVisitor);
    /**
     * Check if a node should be collapsible and insert the
     *  maction node to handle that.  Return the updated
     *  complexity.
     *
     * @param {MmlNode} node        The node to check
     * @param {number} complexity   The current complexity of the node
     * @return {number}             The revised complexity
     */
    check(node: MmlNode, complexity: number): number;
    /**
     * Check if the complexity exceeds the cutoff value for the type
     *
     * @param {MmlNode} node        The node to check
     * @param {number} complexity   The current complexity of the node
     * @param {string} type         The semantic type of the node
     * @return {number}             The revised complexity
     */
    protected defaultCheck(node: MmlNode, complexity: number, type: string): number;
    /**
     * @param {MmlNode} node       The node to check
     * @param {number} complexity  The current complexity of the node
     * @param {string} text        The text to use for the collapsed node
     * @return {number}            The revised complexity for the collapsed node
     */
    protected recordCollapse(node: MmlNode, complexity: number, text: string): number;
    /**
     * Remove collapse markers (to move them to a parent node)
     *
     * @param {MmlNode} node   The node to uncollapse
     */
    protected unrecordCollapse(node: MmlNode): void;
    /**
     * @param {MmlNode} node    The node to check if its child is collapsible
     * @param {number} n        The position of the child node to check
     * @param {number=} m       The number of children node must have
     * @return {MmlNode|null}   The child node that was collapsed (or null)
     */
    protected canUncollapse(node: MmlNode, n: number, m?: number): MmlNode | null;
    /**
     * @param {number} complexity   The current complexity
     * @param {MmlNode} node        The node to check
     * @param {number} n            The position of the child node to check
     * @param {number=} m           The number of children the node must have
     * @return {number}             The updated complexity
     */
    protected uncollapseChild(complexity: number, node: MmlNode, n: number, m?: number): number;
    /**
     * @param {MmlNode} node   The node whose attribute is to be split
     * @param {string} id      The name of the data-semantic attribute to split
     * @return {string[]}      Array of ids in the attribute split at commas
     */
    protected splitAttribute(node: MmlNode, id: string): string[];
    /**
     * @param {MmlNode} node   The node whose text content is needed
     * @return{string}         The text of the node (and its children), combined
     */
    protected getText(node: MmlNode): string;
    /**
     * @param {MmlNode} node   The node whose child text is needed
     * @param {string} id      The (semantic) id of the child needed
     * @return {string}        The text of the specified child node
     */
    protected findChildText(node: MmlNode, id: string): string;
    /**
     * @param {MmlNode} node    The node whose child is to be located
     * @param {string} id       The (semantic) id of the child to be found
     * @return {MmlNode|null}   The child node (or null if not found)
     */
    protected findChild(node: MmlNode, id: string): MmlNode | null;
    /**
     * Add maction nodes to the nodes in the tree that can collapse
     *
     * @paramn {MmlNode} node   The root of the tree to check
     */
    makeCollapse(node: MmlNode): void;
    /**
     * @param {MmlNode[]} nodes   The list of nodes to replace by maction nodes
     */
    makeActions(nodes: MmlNode[]): void;
    /**
     * @return {string}   A unique id string.
     */
    private makeId;
    /**
     * @param {MmlNode} node   The node to make collapsible by replacing with an maction
     */
    makeAction(node: MmlNode): void;
    /**
     * If the <math> node is to be collapsible, add an mrow to it instead so that we can wrap it
     *  in an maction (can't put one around the <math> node).
     *
     * @param {MmlNode} node  The math node to create an mrow for
     * @return {MmlNode}      The newly created mrow
     */
    addMrow(node: MmlNode): MmlNode;
}
