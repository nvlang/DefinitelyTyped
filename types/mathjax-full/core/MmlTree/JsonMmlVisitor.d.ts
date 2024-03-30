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
 * @fileoverview  A visitor that produces a JSON version of an MmlNode tree
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { PropertyList } from '../Tree/Node.js';
import { MmlVisitor } from './MmlVisitor.js';
import { MmlNode, TextNode, XMLNode } from './MmlNode.js';
export type MmlNodeJSON = {
    kind: string;
    texClass: number;
    isEmbellished?: boolean;
    isSpacelike?: boolean;
    isInferred?: boolean;
    childNodes: MmlJSON[];
    attributes: PropertyList;
    inherited: PropertyList;
    properties: PropertyList;
};
export type MmlTextJSON = {
    kind: string;
    text: string;
};
export type MmlXmlJSON = {
    kind: string;
    xml: any;
};
export type MmlJSON = MmlNodeJSON | MmlTextJSON | MmlXmlJSON;
/*****************************************************************/
/**
 *  Implements the JsonMmlVisitor (subclass of MmlVisitor)
 */
export declare class JsonMmlVisitor extends MmlVisitor {
    /**
     * Convert the tree rooted at a particular node into a JSON structure
     *
     * @param {MmlNode} node  The node to use as the root of the tree to traverse
     * @return {MmlJSON}      The JSON object representing the internal tree
     */
    visitTree(node: MmlNode): MmlJSON;
    /**
     * @param {TextNode} node   The text node to visit
     * @return {MmlJSON}        The JSON for the text element
     */
    visitTextNode(node: TextNode): MmlTextJSON;
    /**
     * @param {XMLNode} node  The XML node to visit
     * @return {MmlJSON}      The JSON for the XML node
     */
    visitXMLNode(node: XMLNode): MmlXmlJSON;
    /**
     * The generic visiting function:
     *   Create a DOM node of the correct type.
     *   Add its explicit attributes.
     *   Append its children nodes.
     *   Append the new node to the DOM parent.
     *
     * @param {MmlNode} node  The node to visit
     * @return {MmlJSON}      The JSON object representing it
     */
    visitDefault(node: MmlNode): MmlJSON;
    /**
     * @param {MmlNode} node    The node whose children are to be copied
     * @return {MmlJSON[]}      The array of child JSON objects
     */
    getChildren(node: MmlNode): MmlJSON[];
    /**
     * @param {MmlNode} node    The node whose attributes are to be copied
     * @return {PropertyList}   The object containing the attributes;
     */
    getAttributes(node: MmlNode): PropertyList;
    /**
     * @param {MmlNode} node    The node whose inherited attributes are to be copied
     * @return {PropertyList}   The object containing the inherited attributes;
     */
    getInherited(node: MmlNode): PropertyList;
    /**
     * @param {MmlNode} node    The node whose properties are to be copied
     * @return {PropertyList}   The object containing the properties;
     */
    getProperties(node: MmlNode): PropertyList;
}
