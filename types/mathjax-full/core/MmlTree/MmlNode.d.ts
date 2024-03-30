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
 * @fileoverview  Interfaces and abstract classes for MmlNode objects
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { Attributes } from './Attributes.js';
import { Property, PropertyList, Node, AbstractNode, AbstractEmptyNode, NodeClass } from '../Tree/Node.js';
import { MmlFactory } from './MmlFactory.js';
import { DOMAdaptor } from '../DOMAdaptor.js';
/**
 *  Used in setInheritedAttributes() to pass originating node kind as well as property value
 */
export type AttributeList = {
    [attribute: string]: [string, Property];
};
/**
 *  These are the TeX classes for spacing computations
 */
export declare const TEXCLASS: {
    ORD: number;
    OP: number;
    BIN: number;
    REL: number;
    OPEN: number;
    CLOSE: number;
    PUNCT: number;
    INNER: number;
    VCENTER: number;
    NONE: number;
};
export declare const TEXCLASSNAMES: string[];
/**
 * Attributes used to determine indentation and shifting
 */
export declare const indentAttributes: string[];
/**
 * The nodes that can be in the internal MathML tree
 */
export type MMLNODE = MmlNode | TextNode | XMLNode;
/*****************************************************************/
/**
 *  The MmlNode interface (extends Node interface)
 */
export interface MmlNode extends Node {
    /**
     * Test various properties of MathML nodes
     */
    readonly isToken: boolean;
    readonly isEmbellished: boolean;
    readonly isSpacelike: boolean;
    readonly linebreakContainer: boolean;
    readonly hasNewLine: boolean;
    /**
     *  The expected number of children (-1 means use inferred mrow)
     */
    readonly arity: number;
    readonly isInferred: boolean;
    /**
     *  Get the parent node (skipping inferred mrows and
     *    other nodes marked as notParent)
     */
    readonly Parent: MmlNode;
    readonly notParent: boolean;
    /**
     * The actual parent in the tree
     */
    parent: MmlNode;
    /**
     *  values needed for TeX spacing computations
     */
    texClass: number;
    prevClass: number;
    prevLevel: number;
    /**
     *  The attributes (explicit and inherited) for this node
     */
    attributes: Attributes;
    /**
     * @return {MmlNode}  For embellished operators, the child node that contains the
     *                    core <mo> node.  For non-embellished nodes, the original node.
     */
    core(): MmlNode;
    /**
     * @return {MmlNode}  For embellished operators, the core <mo> element (at whatever
     *                    depth).  For non-embellished nodes, the original node itself.
     */
    coreMO(): MmlNode;
    /**
     * @return {number}   For embellished operators, the index of the child node containing
     *                    the core <mo>.  For non-embellished nodes, 0.
     */
    coreIndex(): number;
    /**
     * @return {number}  The index of this node in its parent's childNodes array.
     */
    childPosition(): number;
    /**
     * @param {MmlNode} prev  The node that is before this one for TeX spacing purposes
     *                        (not all nodes count in TeX measurements)
     * @return {MmlNode}  The node that should be the previous node for the next one
     *                    in the tree (usually, either the last child, or the node itself)
     */
    setTeXclass(prev: MmlNode): MmlNode;
    /**
     * @return {string}  The spacing to use before this element (one of TEXSPACELENGTH array above)
     */
    texSpacing(): string;
    /**
     * @return {boolean}  The core mo element has an explicit 'form', 'lspace', or 'rspace' attribute
     */
    hasSpacingAttributes(): boolean;
    /**
     * Sets the nodes inherited attributes, and pushes them to the nodes children.
     *
     * @param {AttributeList} attributes  The list of inheritable attributes (with the node kinds
     *                                    from which they came)
     * @param {boolean} display           The displaystyle to inherit
     * @param {number} level              The scriptlevel to inherit
     * @param {boolean} prime             The TeX prime style to inherit (T vs. T', etc).
     */
    setInheritedAttributes(attributes: AttributeList, display: boolean, level: number, prime: boolean): void;
    /**
     * Set the nodes inherited attributes based on the attributes of the given node
     *   (used for creating extra nodes in the tree after setInheritedAttributes has already run)
     *
     * @param {MmlNode} node   The node whose attributes are to be used as a template
     */
    inheritAttributesFrom(node: MmlNode): void;
    /**
     * Replace the current node with an error message (or the name of the node)
     *
     * @param {string} message         The error message to use
     * @param {PropertyList} options   The options telling how much to verify
     * @param {boolean} short          True means use just the kind if not using full errors
     * @return {MmlNode}               The construted merror
     */
    mError(message: string, options: PropertyList, short?: boolean): MmlNode;
    /**
     * Check integrity of MathML structure
     *
     * @param {PropertyList} options  The options controlling the check
     */
    verifyTree(options?: PropertyList): void;
}
/*****************************************************************/
/**
 *  The MmlNode class interface (extends the NodeClass)
 */
export interface MmlNodeClass extends NodeClass {
    /**
     *  The list of default attribute values for nodes of this class
     */
    defaults?: PropertyList;
    /**
     * An MmlNode takes a NodeFactory (so it can create additional nodes as needed), a list
     *   of attributes, and an array of children and returns the desired MmlNode with
     *   those attributes and children
     *
     * @constructor
     * @param {MmlFactory} factory       The MathML node factory to use to create additional nodes
     * @param {PropertyList} attributes  The list of initial attributes for the node
     * @param {MmlNode[]} children       The initial child nodes (more can be added later)
     */
    new (factory: MmlFactory, attributes?: PropertyList, children?: MmlNode[]): MmlNode;
}
/*****************************************************************/
/**
 *  The abstract MmlNode class (extends the AbstractNode class and implements
 *  the IMmlNode interface)
 */
export declare abstract class AbstractMmlNode extends AbstractNode implements MmlNode {
    /**
     * The properties common to all MathML nodes
     */
    static defaults: PropertyList;
    /**
     *  This lists properties that do NOT get inherited between specific kinds
     *  of nodes.  The outer keys are the node kinds that are being inherited FROM,
     *  while the second level of keys are the nodes that INHERIT the values.  Any
     *  property appearing in the innermost list is NOT inherited by the pair.
     *
     *  For example, an mpadded element will not inherit a width attribute from an mstyle node.
     */
    static noInherit: {
        [node1: string]: {
            [node2: string]: {
                [attribute: string]: boolean;
            };
        };
    };
    /**
     * This lists the attributes that should always be inherited,
     *   even when there is no default value for the attribute.
     */
    static alwaysInherit: {
        [name: string]: boolean;
    };
    /**
     * This is the list of options for the verifyTree() method
     */
    static verifyDefaults: PropertyList;
    /**
     * The TeX class for the preceding node
     */
    prevClass: number;
    /**
     * The scriptlevel of the preceding node
     */
    prevLevel: number;
    /**
     * This node's attributes
     */
    attributes: Attributes;
    /**
     *  Child nodes are MmlNodes (special case of Nodes).
     */
    childNodes: MmlNode[];
    /**
     * The parent is an MmlNode
     */
    parent: MmlNode;
    /**
     * The node factory is an MmlFactory
     */
    readonly factory: MmlFactory;
    /**
     * The TeX class of this node (obtained via texClass below)
     */
    protected texclass: number;
    /**
     *  Create an MmlNode:
     *    If the arity is -1, add the inferred row (created by the factory)
     *    Add the children, if any
     *    Create the Attribute object from the class defaults and the global defaults (the math node defaults)
     *
     *  @override
     */
    constructor(factory: MmlFactory, attributes?: PropertyList, children?: MmlNode[]);
    /**
     * @override
     *
     * @param {boolean} keepIds   True to copy id attributes, false to skip them.
     *                              (May cause error in the future, since not part of the interface.)
     * @return {AbstractMmlNode}  The copied node tree.
     */
    copy(keepIds?: boolean): AbstractMmlNode;
    /**
     * The TeX class for this node
     */
    get texClass(): number;
    /**
     * The TeX class for this node
     */
    set texClass(texClass: number);
    /**
     * @return {boolean}  true if this is a token node
     */
    get isToken(): boolean;
    /**
     * @return {boolean}  true if this is an embellished operator
     */
    get isEmbellished(): boolean;
    /**
     * @return {boolean}  true if this is a space-like node
     */
    get isSpacelike(): boolean;
    /**
     * @return {boolean}  true if this is a node that supports linebreaks in its children
     */
    get linebreakContainer(): boolean;
    /**
     * @return {boolean}  true if this node contains a line break
     */
    get hasNewLine(): boolean;
    /**
     * @return {number}  The number of children allowed, or Infinity for any number,
     *                   or -1 for when an inferred row is needed for the children.
     *                   Special case is 1, meaning at least one (other numbers
     *                   mean exactly that many).
     */
    get arity(): number;
    /**
     * @return {boolean}  true if this is an inferred mrow
     */
    get isInferred(): boolean;
    /**
     * @return {MmlNode}  The logical parent of this node (skipping over inferred rows
     *                      some other node types)
     */
    get Parent(): MmlNode;
    /**
     * @return {boolean}  true if this is a node that doesn't count as a parent node in Parent()
     */
    get notParent(): boolean;
    /**
     * If there is an inferred row, the the children of that instead
     *
     * @override
     */
    setChildren(children: MmlNode[]): void;
    /**
     * If there is an inferred row, append to that instead.
     * If a child is inferred, append its children instead.
     *
     * @override
     */
    appendChild(child: MmlNode): Node;
    /**
     * If there is an inferred row, remove the child from there
     *
     * @override
     */
    replaceChild(newChild: MmlNode, oldChild: MmlNode): Node;
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
    coreIndex(): number;
    /**
     * @override
     */
    childPosition(): number;
    /**
     * @override
     */
    setTeXclass(prev: MmlNode): MmlNode;
    /**
     * For embellished operators, get the data from the core and clear the core
     *
     * @param {MmlNode} core  The core <mo> for this node
     */
    protected updateTeXclass(core: MmlNode): void;
    /**
     * Get the previous element's texClass and scriptlevel
     *
     * @param {MmlNode} prev  The previous node to this one
     */
    protected getPrevClass(prev: MmlNode): void;
    /**
     * @return {string}  returns the spacing to use before this node
     */
    texSpacing(): string;
    /**
     * @return {boolean}  The core mo element has an explicit 'form' attribute
     */
    hasSpacingAttributes(): boolean;
    /**
     * Sets the inherited propertis for this node, and pushes inherited properties to the children
     *
     *   For each inheritable attribute:
     *     If the node has a default for this attribute, try to inherit it
     *       but check if the noInherit object prevents that.
     *   If the node doesn't have an explicit displaystyle, inherit it
     *   If the node doesn't have an explicit scriptstyle, inherit it
     *   If the prime style is true, set it as a property (it is not a MathML attribute)
     *   Check that the number of children is correct
     *   Finally, push any inherited attributes to teh children.
     *
     * @override
     */
    setInheritedAttributes(attributes?: AttributeList, display?: boolean, level?: number, prime?: boolean): void;
    /**
     * Apply inherited attributes to all children
     * (Some classes override this to handle changes in displaystyle and scriptlevel)
     *
     * @param {AttributeList} attributes  The list of inheritable attributes (with the node kinds
     *                                    from which they came)
     * @param {boolean} display           The displaystyle to inherit
     * @param {number} level              The scriptlevel to inherit
     * @param {boolean} prime             The TeX prime style to inherit (T vs. T', etc).
     */
    protected setChildInheritedAttributes(attributes: AttributeList, display: boolean, level: number, prime: boolean): void;
    /**
     * Used by subclasses to add their own attributes to the inherited list
     * (e.g., mstyle uses this to augment the inherited attibutes)
     *
     * @param {AttributeList} current    The current list of inherited attributes
     * @param {PropertyList} attributes  The new attributes to add into the list
     */
    protected addInheritedAttributes(current: AttributeList, attributes: PropertyList): AttributeList;
    /**
     * Set the nodes inherited attributes based on the attributes of the given node
     *   (used for creating extra nodes in the tree after setInheritedAttributes has already run)
     *
     * @param {MmlNode} node   The node whose attributes are to be used as a template
     */
    inheritAttributesFrom(node: MmlNode): void;
    /**
     * Verify the attributes, and that there are the right number of children.
     * Then verify the children.
     *
     * @param {PropertyList} options   The options telling how much to verify
     */
    verifyTree(options?: PropertyList): void;
    /**
     * Verify that all the attributes are valid (i.e., have defaults)
     *
     * @param {PropertyList} options   The options telling how much to verify
     */
    protected verifyAttributes(options: PropertyList): void;
    /**
     * Verify the children.
     *
     * @param {PropertyList} options   The options telling how much to verify
     */
    protected verifyChildren(options: PropertyList): void;
    /**
     * Replace the current node with an error message (or the name of the node)
     *
     * @param {string} message         The error message to use
     * @param {PropertyList} options   The options telling how much to verify
     * @param {boolean} short          True means use just the kind if not using full errors
     * @return {MmlNode}               The constructed merror
     */
    mError(message: string, options: PropertyList, short?: boolean): MmlNode;
}
/*****************************************************************/
/**
 *  The abstract MmlNode Token node class (extends the AbstractMmlNode)
 */
export declare abstract class AbstractMmlTokenNode extends AbstractMmlNode {
    /**
     * Add the attributes common to all token nodes
     */
    static defaults: PropertyList;
    /**
     * @override
     */
    get isToken(): boolean;
    /**
     * Get the text of the token node (skipping mglyphs, and combining
     *   multiple text nodes)
     */
    getText(): string;
    /**
     * Only inherit to child nodes that are AbstractMmlNodes (not TextNodes)
     *
     * @override
     */
    protected setChildInheritedAttributes(attributes: AttributeList, display: boolean, level: number, prime: boolean): void;
    /**
     * Only step into children that are AbstractMmlNodes (not TextNodes)
     * @override
     */
    walkTree(func: (node: Node, data?: any) => void, data?: any): any;
}
/*****************************************************************/
/**
 *  The abstract MmlNode Layout class (extends the AbstractMmlNode)
 *
 *  These have inferred mrows (so only one child) and can be
 *  spacelike or embellished based on their contents.
 */
export declare abstract class AbstractMmlLayoutNode extends AbstractMmlNode {
    /**
     * Use the same defaults as AbstractMmlNodes
     */
    static defaults: PropertyList;
    /**
     * @override
     */
    get isSpacelike(): boolean;
    /**
     * @override
     */
    get isEmbellished(): boolean;
    /**
     * @override
     */
    get arity(): number;
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
    setTeXclass(prev: MmlNode): MmlNode;
}
/*****************************************************************/
/**
 *  The abstract MmlNode-with-base-node Class (extends the AbstractMmlNode)
 *
 *  These have a base element and other elemetns, (e.g., script elements for msubsup).
 *  They can be embellished (if their base is), and get their TeX classes
 *    from their base with their scripts being handled as separate math lists.
 */
export declare abstract class AbstractMmlBaseNode extends AbstractMmlNode {
    /**
     * Use the same defaults as AbstractMmlNodes
     */
    static defaults: PropertyList;
    /**
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
     * @override
     */
    setTeXclass(prev: MmlNode): MmlNode;
}
/*****************************************************************/
/**
 *  The abstract MmlNode Empty Class (extends AbstractEmptyNode, implements MmlNode)
 *
 *  These have no children and no attributes (TextNode and XMLNode), so we
 *  override all the methods dealing with them, and with the data that usually
 *  goes with an MmlNode.
 */
export declare abstract class AbstractMmlEmptyNode extends AbstractEmptyNode implements MmlNode {
    /**
     *  Parent is an MmlNode
     */
    parent: MmlNode;
    /**
     * @return {boolean}  Not a token element
     */
    get isToken(): boolean;
    /**
     * @return {boolean}  Not embellished
     */
    get isEmbellished(): boolean;
    /**
     * @return {boolean}  Not space-like
     */
    get isSpacelike(): boolean;
    /**
     * @return {boolean}  Not a container of any kind
     */
    get linebreakContainer(): boolean;
    /**
     * @return {boolean}  Does not contain new lines
     */
    get hasNewLine(): boolean;
    /**
     * @return {number}  No children
     */
    get arity(): number;
    /**
     * @return {boolean}  Is not an inferred row
     */
    get isInferred(): boolean;
    /**
     * @return {boolean}  Is not a container element
     */
    get notParent(): boolean;
    /**
     * @return {MmlNode}  Parent is the actual parent
     */
    get Parent(): MmlNode;
    /**
     * @return {number}  No TeX class
     */
    get texClass(): number;
    /**
     * @return {number}  No previous element
     */
    get prevClass(): number;
    /**
     * @return {number}  No previous element
     */
    get prevLevel(): number;
    /**
     * @return {boolean}  The core mo element has an explicit 'form' attribute
     */
    hasSpacingAttributes(): boolean;
    /**
     * return {Attributes}  No attributes, so don't store one
     */
    get attributes(): Attributes;
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
    coreIndex(): number;
    /**
     * @override
     */
    childPosition(): number;
    /**
     * @override
     */
    setTeXclass(prev: MmlNode): MmlNode;
    /**
     * @override
     */
    texSpacing(): string;
    /**
     * No children or attributes, so ignore this call.
     *
     * @override
     */
    setInheritedAttributes(_attributes: AttributeList, _display: boolean, _level: number, _prime: boolean): void;
    /**
     * No children or attributes, so ignore this call.
     *
     * @override
     */
    inheritAttributesFrom(_node: MmlNode): void;
    /**
     * No children or attributes, so ignore this call.
     *
     * @param {PropertyList} options  The options for the check
     */
    verifyTree(_options: PropertyList): void;
    /**
     *  @override
     */
    mError(_message: string, _options: PropertyList, _short?: boolean): MmlNode;
}
/*****************************************************************/
/**
 *  The TextNode Class (extends AbstractMmlEmptyNode)
 */
export declare class TextNode extends AbstractMmlEmptyNode {
    /**
     * The text for this node
     */
    protected text: string;
    /**
     * @override
     */
    get kind(): string;
    /**
     * @return {string}  Return the node's text
     */
    getText(): string;
    /**
     * @param {string} text  The text to use for the node
     * @return {TextNode}  The text node (for chaining of method calls)
     */
    setText(text: string): TextNode;
    /**
     * @override
     */
    copy(): TextNode;
    /**
     * Just use the text
     */
    toString(): string;
}
/*****************************************************************/
/**
 *  The XMLNode Class (extends AbstractMmlEmptyNode)
 */
export declare class XMLNode extends AbstractMmlEmptyNode {
    /**
     * The XML content for this node
     */
    protected xml: Object;
    /**
     * DOM adaptor for the content
     */
    protected adaptor: DOMAdaptor<any, any, any>;
    /**
     * @override
     */
    get kind(): string;
    /**
     * @return {Object}  Return the node's XML content
     */
    getXML(): Object;
    /**
     * @param {object} xml  The XML content to be saved
     * @param {DOMAdaptor} adaptor DOM adaptor for the content
     * @return {XMLNode}  The XML node (for chaining of method calls)
     */
    setXML(xml: Object, adaptor?: DOMAdaptor<any, any, any>): XMLNode;
    /**
     * @return {string}  The serialized XML content
     */
    getSerializedXML(): string;
    /**
     * @override
     */
    copy(): XMLNode;
    /**
     * Just indicate that this is XML data
     */
    toString(): string;
}
