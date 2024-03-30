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
 * @fileoverview Postfilter utility for the Bussproofs package.
 *
 * @author v.sorge@mathjax.org (Volker Sorge)
 */
import ParseOptions from '../ParseOptions.js';
import { MmlNode } from '../../../core/MmlTree/MmlNode.js';
import { Property } from '../../../core/Tree/Node.js';
import { MathItem } from '../../../core/MathItem.js';
import { MathDocument } from '../../../core/MathDocument.js';
type MATHITEM = MathItem<any, any, any>;
type MATHDOCUMENT = MathDocument<any, any, any>;
type FilterData = {
    math: MATHITEM;
    document: MATHDOCUMENT;
    data: ParseOptions;
};
/**
 * Implements the above algorithm.
 * @param {FilterData} arg The parser configuration and mathitem to filter.
 */
export declare let balanceRules: (arg: FilterData) => void;
/**
 * Sets a bussproofs property used for postprocessing and to convey
 * semantics. Uses the bspr prefix.
 * @param {MmlNode} node The node.
 * @param {string} property The property to set.
 * @param {Property} value Its value.
 */
export declare let setProperty: (node: MmlNode, property: string, value: Property) => void;
/**
 * Gets a bussproofs property.
 * @param {MmlNode} node The node.
 * @param {string} property The property to retrieve.
 * @return {Property} The property object.
 */
export declare let getProperty: (node: MmlNode, property: string) => Property;
/**
 * Removes a bussproofs property.
 * @param {MmlNode} node
 * @param {string} property
 */
export declare let removeProperty: (node: MmlNode, property: string) => void;
/**
 * Postprocessor that adds properties as attributes to the nodes, unless they
 * are blacklisted.
 * @param {FilterData} arg The object to post-process.
 */
export declare let makeBsprAttributes: (arg: FilterData) => void;
/**
 * Preprocessor that sets the document and jax for bounding box computations
 * @param {FilterData} arg The object to pre-process.
 */
export declare let saveDocument: (arg: FilterData) => void;
/**
 * Clear the document when we are done
 * @param {FilterData} arg The object to pre-process.
 */
export declare let clearDocument: (_arg: FilterData) => void;
export {};
