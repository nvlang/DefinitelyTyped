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
 * @fileoverview Node factory for creating MmlNodes. This allows extension
 *     packages to add node constructors or overwrite existing ones.
 *
 * @author v.sorge@mathjax.org (Volker Sorge)
 */
import { TextNode, MmlNode } from '../../core/MmlTree/MmlNode.js';
import { MmlFactory } from '../../core/MmlTree/MmlFactory.js';
import ParseOptions from './ParseOptions.js';
export type NodeFactoryMethod = (factory: NodeFactory, kind: string, ...rest: any[]) => MmlNode;
export declare class NodeFactory {
    /**
     * Parser configuration that can be used to pass information between node methods.
     * @type {ParseOption}
     */
    configuration: ParseOptions;
    /**
     * The external node factory.
     * @type {MmlFactory}
     */
    protected mmlFactory: MmlFactory;
    /**
     * The factory table populated with some default methods.
     */
    private factory;
    /**
     * Default node generation function.
     * @param {NodeFactory} factory The current node factory.
     * @param {string} kind The type of node to create.
     * @param {MmlNode[]} children Its children.
     * @param {any=} def Its properties.
     * @param {TextNode=} text An optional text node if this is a token.
     * @return {MmlNode} The newly created Mml node.
     */
    static createNode(factory: NodeFactory, kind: string, children?: MmlNode[], def?: any, text?: TextNode): MmlNode;
    /**
     * Default token generation function.
     * @param {NodeFactory} factory The current node factory.
     * @param {string} kind The type of node to create.
     * @param {any} def Its properties.
     * @param {string} text Text of the token.
     * @return {MmlNode} The newly created token node.
     */
    static createToken(factory: NodeFactory, kind: string, def?: any, text?: string): MmlNode;
    /**
     * Default text node generation function.
     * @param {NodeFactory} factory The current node factory.
     * @param {string} text The text for the new node.
     * @return {TextNode} The newly created text node.
     */
    static createText(factory: NodeFactory, text: string): TextNode;
    /**
     * Default error node generation function.
     * @param {NodeFactory} factory The current node factory.
     * @param {string} message The error message.
     * @return {MmlNode} The newly created error node.
     */
    static createError(factory: NodeFactory, message: string): MmlNode;
    /**
     * @param {MmlFactory} mmlFactory   The MmlFactory for the TeX jax to use
     */
    setMmlFactory(mmlFactory: MmlFactory): void;
    /**
     * Adds a method to the factory.
     * @param {string} kind The type of node the method creates.
     * @param {NodeFactoryMethod} func The node creator.
     */
    set(kind: string, func: NodeFactoryMethod): void;
    /**
     * Adds a set of node creators to the factory.
     * @param {Object.<NodeFactoryMethod>} maps The set of functions.
     */
    setCreators(maps: {
        [kind: string]: NodeFactoryMethod;
    }): void;
    /**
     * Creates a node for the internal data structure from the factory.
     * @param {string} kind The type of node to be created.
     * @param {any[]} ...rest The arguments for the node.
     * @return {MmlNode} The created node.
     */
    create(kind: string, ...rest: any[]): MmlNode;
    /**
     * @param {string} kind The method for generating a node of given kind.
     */
    get(kind: string): NodeFactoryMethod;
}
