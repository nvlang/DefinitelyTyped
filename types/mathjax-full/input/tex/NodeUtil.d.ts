/*************************************************************
 *
 *  Copyright (c) 2009-2022 The MathJax Consortium
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
 * @fileoverview Node utility methods.
 *
 * @author v.sorge@mathjax.org (Volker Sorge)
 */
import { TextNode, MMLNODE, MmlNode } from '../../core/MmlTree/MmlNode.js';
import { Property, PropertyList } from '../../core/Tree/Node.js';
import { Args } from './Types.js';
import { OperatorDef } from '../../core/MmlTree/OperatorDictionary.js';
declare namespace NodeUtil {
    /**
     * Creates a single character from a unicode hex string.
     * @param {string} code The code.
     * @return {string} The newly created entity.
     */
    function createEntity(code: string): string;
    /**
     * Get the children of the a node.
     * @param {MmlNode} node The node.
     * @return {MMLNODE[]} Its children.
     */
    function getChildren(node: MmlNode): MMLNODE[];
    /**
     * Get text content of a node.
     * @param {TextNode} node The node.
     * @return {string} Its text content.
     */
    function getText(node: TextNode): string;
    /**
     * Append children to a node.
     * @param {MmlNode} node The node.
     * @param {MMLNODE[]} children A list of new children.
     */
    function appendChildren(node: MmlNode, children: MMLNODE[]): void;
    /**
     * Sets an attribute of a node.
     * @param {MmlNode} node The node.
     * @param {string} attribute An attribute.
     * @param {Args} value The attribute value.
     */
    function setAttribute(node: MmlNode, attribute: string, value: Args): void;
    /**
     * Sets a property of a node.
     * @param {MmlNode} node The node.
     * @param {string} property The property.
     * @param {Args} value The property value.
     */
    function setProperty(node: MmlNode, property: string, value: Args): void;
    /**
     * Sets properties and attributes of a node.
     * @param {MmlNode} node The node.
     * @param {PropertyList} properties A list of property/attribute value pairs.
     */
    function setProperties(node: MmlNode, properties: PropertyList): void;
    /**
     * Returns the property of a node.
     * @param {MmlNode} node The node.
     * @param {string} property A property name.
     * @return {Property} Value of the property.
     */
    function getProperty(node: MmlNode, property: string): Property;
    /**
     * Returns the attribute of a node.
     * @param {MmlNode} node The node.
     * @param {string} attr A attribute name.
     * @return {Property} Value of the attribute.
     */
    function getAttribute(node: MmlNode, attr: string): Property;
    /**
     * Removes a set of properties from a node.
     * @param {MmlNode} node The node.
     * @param {string[]} ...properties  A list of properties.
     */
    function removeProperties(node: MmlNode, ...properties: string[]): void;
    /**
     * Returns a child node at a given position.
     * @param {MmlNode} node The node.
     * @param {number} position The position of the child.
     * @return {MMLNODE} The child node at position.
     */
    function getChildAt(node: MmlNode, position: number): MMLNODE;
    /**
     * Set node child at position.
     * @param {MmlNode} node The node.
     * @param {number} position The position of the new child.
     * @param {MmlNode} child The new child.
     */
    function setChild(node: MmlNode, position: number, child: MmlNode): void;
    /**
     * Copies children between nodes.
     * @param {MmlNode} oldNode The source node.
     * @param {MmlNode} newNode The target node.
     */
    function copyChildren(oldNode: MmlNode, newNode: MmlNode): void;
    /**
     * Copies attributes between nodes.
     * @param {MmlNode} oldNode The source node.
     * @param {MmlNode} newNode The target node.
     */
    function copyAttributes(oldNode: MmlNode, newNode: MmlNode): void;
    /**
     * Checks if node is of a particular type.
     * @param {MmlNode} node The node.
     * @param {string} kind The type to check.
     * @return {boolean} True if node is of the given type.
     */
    function isType(node: MmlNode, kind: string): boolean;
    /**
     * Checks if the node is embellished.
     * @param {MmlNode} node The node.
     * @return {boolean} True if node is embellished.
     */
    function isEmbellished(node: MmlNode): boolean;
    /**
     * Gets the texclass of a node.
     * @param {MmlNode} node The node.
     * @return {number} Its texclass.
     */
    function getTexClass(node: MmlNode): number;
    /**
     * Gets the mo element at the core of the node.
     * @param {MmlNode} node The node.
     * @return {MmlNode} The MO node at the core.
     */
    function getCoreMO(node: MmlNode): MmlNode;
    /**
     * Checks if an object is a node.
     * @param {any} item The object.
     * @return {boolean} True if it is a node.
     */
    function isNode(item: any): boolean;
    /**
     * Checks if the node is an inferred mrow.
     * @param {MmlNode} node The node.
     * @return {boolean} True if the node is an inferred mrow.
     */
    function isInferred(node: MmlNode): boolean;
    /**
     * Gets the operator definition of a node.
     * @param {MmlNode} node The node.
     * @return {OperatorDef} If node is an MO returns the operator definition. O/w
     *    null.
     */
    function getForm(node: MmlNode): OperatorDef;
}
export default NodeUtil;
