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
 * @fileoverview Configuration file for the boldsymbol package.
 *
 * @author v.sorge@mathjax.org (Volker Sorge)
 */
import { MmlNode } from '../../../core/MmlTree/MmlNode.js';
import { Configuration } from '../Configuration.js';
import { ParseMethod } from '../Types.js';
import { NodeFactory } from '../NodeFactory.js';
import ParseOptions from '../ParseOptions.js';
export declare let BoldsymbolMethods: Record<string, ParseMethod>;
/**
 * Creates token nodes in bold font if possible.
 * @param {NodeFactory} factory The current node factory.
 * @param {string} kind The type of token node to create.
 * @param {any} def Properties for the node.
 * @param {string} text The text content.
 * @return {MmlNode} The generated token node.
 */
export declare function createBoldToken(factory: NodeFactory, kind: string, def: any, text: string): MmlNode;
/**
 * Postprocessor to rewrite token nodes to bold font, if possible.
 * @param {ParseOptions} data The parse options.
 */
export declare function rewriteBoldTokens(arg: {
    data: ParseOptions;
}): void;
export declare const BoldsymbolConfiguration: Configuration;
