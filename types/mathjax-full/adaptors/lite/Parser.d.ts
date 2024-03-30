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
import { MinDOMParser } from '../HTMLAdaptor.js';
import { LiteDocument } from './Document.js';
import { LiteElement } from './Element.js';
import { LiteText, LiteComment } from './Text.js';
import { LiteAdaptor } from '../liteAdaptor.js';
/**
 * Patterns used in parsing serialized HTML
 */
export declare namespace PATTERNS {
    const TAGNAME = "[a-z][^\\s\\n>]*";
    const ATTNAME = "[a-z][^\\s\\n>=]*";
    const VALUE = "(?:'[^']*'|\"[^\"]*\"|[^\\s\\n]+)";
    const VALUESPLIT = "(?:'([^']*)'|\"([^\"]*)\"|([^\\s\\n]+))";
    const SPACE = "(?:\\s|\\n)+";
    const OPTIONALSPACE = "(?:\\s|\\n)*";
    const ATTRIBUTE: string;
    const ATTRIBUTESPLIT: string;
    const TAG: string;
    const tag: RegExp;
    const attr: RegExp;
    const attrsplit: RegExp;
}
/************************************************************/
/**
 * Implements a lightweight DOMParser replacement
 * (Not perfect, but handles most well-formed HTML)
 */
export declare class LiteParser implements MinDOMParser<LiteDocument> {
    /**
     * The list of self-closing tags
     */
    static SELF_CLOSING: {
        [name: string]: boolean;
    };
    /**
     * The list of tags chose content is not parsed (PCDATA)
     */
    static PCDATA: {
        [name: string]: boolean;
    };
    /**
     * The list of attributes that don't get entity translation
     */
    static CDATA_ATTR: {
        [name: string]: boolean;
    };
    /**
     * @override
     */
    parseFromString(text: string, _format?: string, adaptor?: LiteAdaptor): LiteDocument;
    /**
     * @param {LiteAdaptor} adaptor  The adaptor for managing nodes
     * @param {LiteElement} node     The node to add a text element to
     * @param {string} text          The text for the text node
     * @return {LiteText}            The text element
     */
    protected addText(adaptor: LiteAdaptor, node: LiteElement, text: string): LiteText;
    /**
     * @param {LiteAdaptor} adaptor  The adaptor for managing nodes
     * @param {LiteElement} node     The node to add a comment to
     * @param {string} comment       The text for the comment node
     * @return {LiteComment}         The comment element
     */
    protected addComment(adaptor: LiteAdaptor, node: LiteElement, comment: string): LiteComment;
    /**
     * @param {LiteAdaptor} adaptor  The adaptor for managing nodes
     * @param {LiteElement} node     The node to close
     * @param {string} tag           The close tag being processed
     * @return {LiteElement}         The first unclosed parent node
     */
    protected closeTag(adaptor: LiteAdaptor, node: LiteElement, tag: string): LiteElement;
    /**
     * @param {LiteAdaptor} adaptor  The adaptor for managing nodes
     * @param {LiteElement} node     The parent node for the tag
     * @param {string} tag           The tag being processed
     * @param {string[]} parts       The rest of the text/tag array
     * @return {LiteElement}         The node to which the next tag will be added
     */
    protected openTag(adaptor: LiteAdaptor, node: LiteElement, tag: string, parts: string[]): LiteElement;
    /**
     * @param {LiteAdaptor} adaptor  The adaptor for managing nodes
     * @param {LiteElement} node     The node getting the attributes
     * @param {string[]} attributes  The array of space, name, value1, value2, value3
     *                                as described above.
     */
    protected addAttributes(adaptor: LiteAdaptor, node: LiteElement, attributes: string[]): void;
    /**
     * @param {LiteAdaptor} adaptor  The adaptor for managing nodes
     * @param {LiteElement} node     The node whose PCDATA content is being collected
     * @param {string} kind          The tag name being handled
     * @param {string[]} parts       The array of text/tag data for the document
     */
    protected handlePCDATA(adaptor: LiteAdaptor, node: LiteElement, kind: string, parts: string[]): void;
    /**
     * Check the contents of the parsed document and move html, head, and body
     * tags into the document structure.  That way, you can parse fragments or
     * full documents and still get a valid document.
     *
     * @param {LiteAdaptor} adaptor  The adaptor for managing nodes
     * @param {LiteDocument} root    The document being checked
     */
    protected checkDocument(adaptor: LiteAdaptor, root: LiteDocument): void;
    /**
     * Checks if the body has only one element child (as opposed to comments or text nodes)
     * and returns that sole element (or null if none or more than one)
     *
     * @param {LiteAdaptor} adaptor  The adaptor for managing nodes
     * @param {LiteElement} body     The body element being checked
     * @return {LiteElement}         The sole LiteElement child of the body, or null if none or more than one
     */
    protected getOnlyChild(adaptor: LiteAdaptor, body: LiteElement): LiteElement;
    /**
     * @param {LiteAdaptor} adaptor  The adaptor for managing nodes
     * @param {LiteElement} node     The node to serialize
     * @param {boolean} xml          True when producing XML, false for HTML
     * @return {string}              The serialized element (like outerHTML)
     */
    serialize(adaptor: LiteAdaptor, node: LiteElement, xml?: boolean): string;
    /**
     * @param {LiteAdaptor} adaptor  The adaptor for managing nodes
     * @param {LiteElement} node     The node whose innerHTML is needed
     * @return {string}              The serialized element (like innerHTML)
     */
    serializeInner(adaptor: LiteAdaptor, node: LiteElement, xml?: boolean): string;
    /**
     * @param {string} text  The attribute value to be HTML escaped
     * @return {string}      The string with " replaced by entities
     */
    protectAttribute(text: string): string;
    /**
     * @param {string} text  The text to be HTML escaped
     * @return {string}      The string with &, <, and > replaced by entities
     */
    protectHTML(text: string): string;
}
