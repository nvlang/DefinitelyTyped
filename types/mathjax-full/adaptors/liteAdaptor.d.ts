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
 * @fileoverview  Implements a lightweight DOM adaptor
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { AbstractDOMAdaptor } from '../core/DOMAdaptor.js';
import { Constructor } from './NodeMixin.js';
import { LiteDocument } from './lite/Document.js';
import { LiteElement, LiteNode } from './lite/Element.js';
import { LiteText, LiteComment } from './lite/Text.js';
import { LiteWindow } from './lite/Window.js';
import { LiteParser } from './lite/Parser.js';
import { OptionList } from '../util/Options.js';
/************************************************************/
/**
 * Implements a lightweight DOMAdaptor on liteweight HTML elements
 */
export declare class LiteBase extends AbstractDOMAdaptor<LiteElement, LiteText, LiteDocument> {
    /**
     * The document in which the HTML nodes will be created
     */
    document: LiteDocument;
    /**
     * The window for the document
     */
    window: LiteWindow;
    /**
     * The parser for serialized HTML
     */
    parser: LiteParser;
    /**
     * @param {OptionList} options  The options for the lite adaptor (e.g., fontSize)
     * @constructor
     */
    constructor();
    /**
     * @override
     */
    parse(text: string, format?: string): LiteDocument;
    /**
     * @override
     */
    protected create(kind: string, _ns?: string): LiteElement;
    /**
     * @override
     */
    text(text: string): LiteText;
    /**
     * @param {string} text   The text of the comment
     * @return {LiteComment}  The comment node
     */
    comment(text: string): LiteComment;
    /**
     * @return {LiteDocument}  A new document element
     */
    createDocument(): LiteDocument;
    /**
     * @override
     */
    head(doc: LiteDocument): LiteElement;
    /**
     * @override
     */
    body(doc: LiteDocument): LiteElement;
    /**
     * @override
     */
    root(doc: LiteDocument): LiteElement;
    /**
     * @override
     */
    doctype(doc: LiteDocument): string;
    /**
     * @override
     */
    tags(node: LiteElement, name: string, ns?: string): LiteElement[];
    /**
     * @param {LiteElement} node   The node to be searched
     * @param {string} id          The id of the node to look for
     * @return {LiteElement}       The child node having the given id
     */
    elementById(node: LiteElement, id: string): LiteElement;
    /**
     * @param {LiteElement} node   The node to be searched
     * @param {string} name        The name of the class to find
     * @return {LiteElement[]}     The nodes with the given class
     */
    elementsByClass(node: LiteElement, name: string): LiteElement[];
    /**
     * @override
     */
    getElements(nodes: (string | LiteElement | LiteElement[])[], document: LiteDocument): LiteElement[];
    /**
     * @override
     */
    contains(container: LiteNode, node: LiteNode | LiteText): boolean;
    /**
     * @override
     */
    parent(node: LiteNode): LiteElement;
    /**
     * @param {LiteNode} node  The node whose index is needed
     * @return {number}        The index of the node it its parent's children array
     */
    childIndex(node: LiteNode): number;
    /**
     * @override
     */
    append(node: LiteElement, child: LiteNode): LiteNode;
    /**
     * @override
     */
    insert(nchild: LiteNode, ochild: LiteNode): void;
    /**
     * @override
     */
    remove(child: LiteNode): LiteNode;
    /**
     * @override
     */
    replace(nnode: LiteNode, onode: LiteNode): LiteNode;
    /**
     * @override
     */
    clone(node: LiteElement): LiteElement;
    /**
     * @override
     */
    split(node: LiteText, n: number): LiteText;
    /**
     * @override
     */
    next(node: LiteNode): LiteNode;
    /**
     * @override
     */
    previous(node: LiteNode): LiteNode;
    /**
     * @override
     */
    firstChild(node: LiteElement): LiteNode;
    /**
     * @override
     */
    lastChild(node: LiteElement): LiteNode;
    /**
     * @override
     */
    childNodes(node: LiteElement): LiteNode[];
    /**
     * @override
     */
    childNode(node: LiteElement, i: number): LiteNode;
    /**
     * @override
     */
    kind(node: LiteNode): string;
    /**
     * @override
     */
    value(node: LiteNode | LiteText): string;
    /**
     * @override
     */
    textContent(node: LiteElement): string;
    /**
     * @override
     */
    innerHTML(node: LiteElement): string;
    /**
     * @override
     */
    outerHTML(node: LiteElement): string;
    /**
     * @override
     */
    serializeXML(node: LiteElement): string;
    /**
     * @override
     */
    setAttribute(node: LiteElement, name: string, value: string | number, ns?: string): void;
    /**
     * @override
     */
    getAttribute(node: LiteElement, name: string): any;
    /**
     * @override
     */
    removeAttribute(node: LiteElement, name: string): void;
    /**
     * @override
     */
    hasAttribute(node: LiteElement, name: string): boolean;
    /**
     * @override
     */
    allAttributes(node: LiteElement): {
        name: string;
        value: string;
    }[];
    /**
     * @override
     */
    addClass(node: LiteElement, name: string): void;
    /**
     * @override
     */
    removeClass(node: LiteElement, name: string): void;
    /**
     * @override
     */
    hasClass(node: LiteElement, name: string): boolean;
    /**
     * @override
     */
    setStyle(node: LiteElement, name: string, value: string): void;
    /**
     * @override
     */
    getStyle(node: LiteElement, name: string): string;
    /**
     * @override
     */
    allStyles(node: LiteElement): any;
    /**
     * @override
     */
    insertRules(node: LiteElement, rules: string[]): void;
    /*******************************************************************/
    /**
     * @override
     */
    fontSize(_node: LiteElement): number;
    /**
     * @override
     */
    fontFamily(_node: LiteElement): string;
    /**
     * @override
     */
    nodeSize(_node: LiteElement, _em?: number, _local?: boolean): [number, number];
    /**
     * @override
     */
    nodeBBox(_node: LiteElement): {
        left: number;
        right: number;
        top: number;
        bottom: number;
    };
}
declare const LiteAdaptor_base: Constructor<LiteBase>;
/**
 * The LiteAdaptor class (add in the NodeMixin methods and options)
 */
export declare class LiteAdaptor extends LiteAdaptor_base {
}
/************************************************************/
/**
 * The function to call to obtain a LiteAdaptor
 *
 * @param {OptionList} options  The options for the adaptor
 * @return {LiteAdaptor}        The newly created adaptor
 */
export declare function liteAdaptor(options?: OptionList): LiteAdaptor;
export {};
