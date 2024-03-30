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
 * @fileoverview  Implements the HTML DOM adaptor
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { OptionList } from '../util/Options.js';
import { AttributeData, AbstractDOMAdaptor, DOMAdaptor } from '../core/DOMAdaptor.js';
/*****************************************************************/
/**
 * The minimum fields needed for a Document
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 */
export interface MinDocument<N, T> {
    documentElement: N;
    head: N;
    body: N;
    title: string;
    doctype: {
        name: string;
    };
    createElement(kind: string): N;
    createElementNS(ns: string, kind: string): N;
    createTextNode(text: string): T;
    querySelectorAll(selector: string): ArrayLike<N>;
}
/*****************************************************************/
/**
 * The minimum fields needed for an HTML Element
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 */
export interface MinHTMLElement<N, T> {
    nodeType: number;
    nodeName: string;
    nodeValue: string;
    textContent: string;
    innerHTML: string;
    outerHTML: string;
    parentNode: N | Node;
    nextSibling: N | T | Node;
    previousSibling: N | T | Node;
    offsetWidth: number;
    offsetHeight: number;
    attributes: AttributeData[] | NamedNodeMap;
    className: string;
    classList: DOMTokenList;
    style: OptionList;
    sheet?: {
        insertRule: (rule: string, index?: number) => void;
    };
    childNodes: (N | T)[] | NodeList;
    firstChild: N | T | Node;
    lastChild: N | T | Node;
    getElementsByTagName(name: string): N[] | HTMLCollectionOf<Element>;
    getElementsByTagNameNS(ns: string, name: string): N[] | HTMLCollectionOf<Element>;
    contains(child: N | T): boolean;
    appendChild(child: N | T): N | T | Node;
    removeChild(child: N | T): N | T | Node;
    replaceChild(nnode: N | T, onode: N | T): N | T | Node;
    insertBefore(nchild: N | T, ochild: N | T): void;
    cloneNode(deep: boolean): N | Node;
    setAttribute(name: string, value: string): void;
    setAttributeNS(ns: string, name: string, value: string): void;
    getAttribute(name: string): string;
    removeAttribute(name: string): void;
    hasAttribute(name: string): boolean;
    getBoundingClientRect(): Object;
    getBBox?(): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
}
/*****************************************************************/
/**
 * The minimum fields needed for a Text element
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 */
export interface MinText<N, T> {
    nodeType: number;
    nodeName: string;
    nodeValue: string;
    parentNode: N | Node;
    nextSibling: N | T | Node;
    previousSibling: N | T | Node;
    splitText(n: number): T;
}
/*****************************************************************/
/**
 * The minimum fields needed for a DOMParser
 *
 * @template D  The Document class
 */
export interface MinDOMParser<D> {
    parseFromString(text: string, format?: string): D;
}
/*****************************************************************/
/**
 * The minimum fields needed for a DOMParser
 *
 * @template N  The HTMLElement node class
 */
export interface MinXMLSerializer<N> {
    serializeToString(node: N): string;
}
/*****************************************************************/
/**
 * The minimum fields needed for a Window
 *
 * @template N  The HTMLElement node class
 * @template D  The Document class
 */
export interface MinWindow<N, D> {
    document: D;
    DOMParser: {
        new (): MinDOMParser<D>;
    };
    XMLSerializer: {
        new (): MinXMLSerializer<N>;
    };
    NodeList: any;
    HTMLCollection: any;
    HTMLElement: any;
    DocumentFragment: any;
    Document: any;
    getComputedStyle(node: N): any;
}
/*****************************************************************/
/**
 * The minimum needed for an HTML Adaptor
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export interface MinHTMLAdaptor<N, T, D> extends DOMAdaptor<N, T, D> {
    window: MinWindow<N, D>;
}
/*****************************************************************/
/**
 *  Abstract HTMLAdaptor class for manipulating HTML elements
 *  (subclass of AbstractDOMAdaptor)
 *
 *  N = HTMLElement node class
 *  T = Text node class
 *  D = Document class
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class HTMLAdaptor<N extends MinHTMLElement<N, T>, T extends MinText<N, T>, D extends MinDocument<N, T>> extends AbstractDOMAdaptor<N, T, D> implements MinHTMLAdaptor<N, T, D> {
    /**
     * The window object for this adaptor
     */
    window: MinWindow<N, D>;
    /**
     * The DOMParser used to parse a string into a DOM tree
     */
    parser: MinDOMParser<D>;
    /**
     * @override
     * @constructor
     */
    constructor(window: MinWindow<N, D>);
    /**
     * @override
     */
    parse(text: string, format?: string): D;
    /**
     * @override
     */
    protected create(kind: string, ns?: string): N;
    /**
     * @override
     */
    text(text: string): T;
    /**
     * @override
     */
    head(doc: D): N;
    /**
     * @override
     */
    body(doc: D): N;
    /**
     * @override
     */
    root(doc: D): N;
    /**
     * @override
     */
    doctype(doc: D): string;
    /**
     * @override
     */
    tags(node: N, name: string, ns?: string): N[];
    /**
     * @override
     */
    getElements(nodes: (string | N | N[])[], _document: D): N[];
    /**
     * @override
     */
    contains(container: N, node: N | T): boolean;
    /**
     * @override
     */
    parent(node: N | T): N;
    /**
     * @override
     */
    append(node: N, child: N | T): N | T;
    /**
     * @override
     */
    insert(nchild: N | T, ochild: N | T): void;
    /**
     * @override
     */
    remove(child: N | T): N | T;
    /**
     * @override
     */
    replace(nnode: N | T, onode: N | T): N | T;
    /**
     * @override
     */
    clone(node: N): N;
    /**
     * @override
     */
    split(node: T, n: number): T;
    /**
     * @override
     */
    next(node: N | T): N | T;
    /**
     * @override
     */
    previous(node: N | T): N | T;
    /**
     * @override
     */
    firstChild(node: N): N | T;
    /**
     * @override
     */
    lastChild(node: N): N | T;
    /**
     * @override
     */
    childNodes(node: N): (N | T)[];
    /**
     * @override
     */
    childNode(node: N, i: number): N | T;
    /**
     * @override
     */
    kind(node: N | T): string;
    /**
     * @override
     */
    value(node: N | T): string;
    /**
     * @override
     */
    textContent(node: N): string;
    /**
     * @override
     */
    innerHTML(node: N): string;
    /**
     * @override
     */
    outerHTML(node: N): string;
    serializeXML(node: N): string;
    /**
     * @override
     */
    setAttribute(node: N, name: string, value: string, ns?: string): void;
    /**
     * @override
     */
    getAttribute(node: N, name: string): string;
    /**
     * @override
     */
    removeAttribute(node: N, name: string): void;
    /**
     * @override
     */
    hasAttribute(node: N, name: string): boolean;
    /**
     * @override
     */
    allAttributes(node: N): AttributeData[];
    /**
     * @override
     */
    addClass(node: N, name: string): void;
    /**
     * @override
     */
    removeClass(node: N, name: string): void;
    /**
     * @override
     */
    hasClass(node: N, name: string): boolean;
    /**
     * @override
     */
    setStyle(node: N, name: string, value: string): void;
    /**
     * @override
     */
    getStyle(node: N, name: string): any;
    /**
     * @override
     */
    allStyles(node: N): any;
    /**
     * @override
     */
    insertRules(node: N, rules: string[]): void;
    /**
     * @override
     */
    fontSize(node: N): number;
    /**
     * @override
     */
    fontFamily(node: N): any;
    /**
     * @override
     */
    nodeSize(node: N, em?: number, local?: boolean): [number, number];
    /**
     * @override
     */
    nodeBBox(node: N): {
        left: number;
        right: number;
        top: number;
        bottom: number;
    };
}
