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
 * @fileoverview  Mixin that implements the Explorer
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { Handler } from '../core/Handler.js';
import { MmlNode } from '../core/MmlTree/MmlNode.js';
import { MathML } from '../input/mathml.js';
import { EnrichedMathItem, EnrichedMathDocument } from './semantic-enrich.js';
import { MathDocumentConstructor } from '../core/MathDocument.js';
import { LiveRegion, ToolTip, HoverRegion } from './explorer/Region.js';
/**
 * Generic constructor for Mixins
 */
export type Constructor<T> = new (...args: any[]) => T;
/**
 * Shorthands for types with HTMLElement, Text, and Document instead of generics
 */
export type HANDLER = Handler<HTMLElement, Text, Document>;
export type HTMLDOCUMENT = EnrichedMathDocument<HTMLElement, Text, Document>;
export type HTMLMATHITEM = EnrichedMathItem<HTMLElement, Text, Document>;
export type MATHML = MathML<HTMLElement, Text, Document>;
/**
 * The properties added to MathItem for the Explorer
 */
export interface ExplorerMathItem extends HTMLMATHITEM {
    /**
     * @param {HTMLDocument} document  The document where the Explorer is being added
     * @param {boolean} force          True to force the explorer even if enableExplorer is false
     */
    explorable(document: HTMLDOCUMENT, force?: boolean): void;
    /**
     * @param {HTMLDocument} document  The document where the Explorer is being added
     */
    attachExplorers(document: HTMLDOCUMENT): void;
}
/**
 * The mixin for adding the Explorer to MathItems
 *
 * @param {B} BaseMathItem      The MathItem class to be extended
 * @param {Function} toMathML   The function to serialize the internal MathML
 * @returns {ExplorerMathItem}  The Explorer MathItem class
 *
 * @template B  The MathItem class to extend
 */
export declare function ExplorerMathItemMixin<B extends Constructor<HTMLMATHITEM>>(BaseMathItem: B, toMathML: (node: MmlNode) => string): Constructor<ExplorerMathItem> & B;
/**
 * The functions added to MathDocument for the Explorer
 */
export interface ExplorerMathDocument extends HTMLDOCUMENT {
    /**
     * The objects needed for the explorer
     */
    explorerRegions: ExplorerRegions;
    /**
     * Add the Explorer to the MathItems in the MathDocument
     *
     * @returns {MathDocument}   The MathDocument (so calls can be chained)
     */
    explorable(): HTMLDOCUMENT;
}
/**
 * The mixin for adding the Explorer to MathDocuments
 *
 * @param {B} BaseDocument      The MathDocument class to be extended
 * @returns {ExplorerMathDocument}  The extended MathDocument class
 */
export declare function ExplorerMathDocumentMixin<B extends MathDocumentConstructor<HTMLDOCUMENT>>(BaseDocument: B): MathDocumentConstructor<ExplorerMathDocument> & B;
/**
 * Add Explorer functions to a Handler instance
 *
 * @param {Handler} handler   The Handler instance to enhance
 * @param {MathML} MmlJax     A MathML input jax to be used for the semantic enrichment
 * @returns {Handler}         The handler that was modified (for purposes of chainging extensions)
 */
export declare function ExplorerHandler(handler: HANDLER, MmlJax?: MATHML): HANDLER;
/**
 * The regions objects needed for the explorers.
 */
export type ExplorerRegions = {
    speechRegion?: LiveRegion;
    brailleRegion?: LiveRegion;
    magnifier?: HoverRegion;
    tooltip1?: ToolTip;
    tooltip2?: ToolTip;
    tooltip3?: ToolTip;
};
/**
 * Sets a list of a11y options for a given document.
 * @param {HTMLDOCUMENT} document The current document.
 * @param {{[key: string]: any}} options Association list for a11y option value pairs.
 */
export declare function setA11yOptions(document: HTMLDOCUMENT, options: {
    [key: string]: any;
}): void;
/**
 * Sets a single a11y option for a menu name.
 * @param {HTMLDOCUMENT} document The current document.
 * @param {string} option The option name in the menu.
 * @param {string|boolean} value The new value.
 */
export declare function setA11yOption(document: HTMLDOCUMENT, option: string, value: string | boolean): void;
