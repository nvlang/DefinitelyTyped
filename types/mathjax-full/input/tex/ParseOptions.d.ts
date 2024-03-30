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
 * @fileoverview Factory generating maps to keep options for the TeX parser.
 *
 * @author v.sorge@mathjax.org (Volker Sorge)
 */
import StackItemFactory from './StackItemFactory.js';
import { Tags } from './Tags.js';
import { SubHandlers } from './MapHandler.js';
import { NodeFactory } from './NodeFactory.js';
import { MmlNode } from '../../core/MmlTree/MmlNode.js';
import TexParser from './TexParser.js';
import { OptionList } from '../../util/Options.js';
import { ParserConfiguration } from './Configuration.js';
/**
 * @class
 */
export default class ParseOptions {
    /**
     * A set of sub handlers
     * @type {SubHandlers}
     */
    handlers: SubHandlers;
    /**
     * A set of options, mapping names to string or boolean values.
     * @type {OptionList}
     */
    options: OptionList;
    /**
     * The current item factory.
     * @type {StackItemFactory}
     */
    itemFactory: StackItemFactory;
    /**
     * The current node factory.
     * @type {NodeFactory}
     */
    nodeFactory: NodeFactory;
    /**
     * The current tagging object.
     * @type {Tags}
     */
    tags: Tags;
    /**
     * Storage area for parser-specific package data (indexed by package name)
     * @type {Map<string, any>}
     */
    packageData: Map<string, any>;
    /**
     * Stack of previous tex parsers. This is used to keep track of parser
     * settings when expressions are recursively parsed.
     * @type {TexParser[]}
     */
    parsers: TexParser[];
    /**
     * The current root node.
     * @type {MmlNode}
     */
    root: MmlNode;
    /**
     * List of node lists saved with respect to some property or their kind.
     * @type {{[key: string]: MmlNode[]}}
     */
    nodeLists: {
        [key: string]: MmlNode[];
    };
    /**
     * Error state of the parser.
     * @type {boolean}
     */
    error: boolean;
    /**
     * @constructor
     * @param {Configuration} configuration Configuration object of the current
     *     TeX parser.
     * @param {OptionList[]} options   [TeX options, Tag options, {packages}]
     */
    constructor(configuration: ParserConfiguration, options?: OptionList[]);
    /**
     * Pushes a new tex parser onto the stack.
     * @param {TexParser} parser The new parser.
     */
    pushParser(parser: TexParser): void;
    /**
     * Pops a parser of the tex parser stack.
     */
    popParser(): void;
    /**
     * @return {TexParser} The currently active tex parser.
     */
    get parser(): TexParser;
    /**
     * Clears all the ephemeral options.
     */
    clear(): void;
    /**
     * Saves a tree node to a list of nodes for post processing.
     * @param {string} property The property name that will be used for
     *     postprocessing.
     * @param {MmlNode} node The node to save.
     */
    addNode(property: string, node: MmlNode): void;
    /**
     * Gets a saved node list with respect to a given property. It first ensures
     * that all the nodes are "live", i.e., actually live in the current
     * tree. Sometimes nodes are created, saved in the node list but discarded
     * later in the parsing. These will be filtered out here.
     *
     * NB: Do not use this method before the root field of the options is
     * set. Otherwise, your node list will always be empty!
     * @param {string} property The property for which to retrieve the node list.
     */
    getList(property: string): MmlNode[];
    /**
     * Remove a list of nodes from a saved list (e.g., when a filter removes the
     * node from the DOM, like for munderover => munder).
     *
     * @param {string} property The property from which to remove nodes.
     * @param {MmlNode[]} nodes The nodes to remove.
     */
    removeFromList(property: string, nodes: MmlNode[]): void;
    /**
     * Tests if the node is in the tree spanned by the current root node.
     * @param {MmlNode} node The node to test.
     */
    private inTree;
}
