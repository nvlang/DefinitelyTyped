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
 * @fileoverview Regions for A11y purposes.
 *
 * @author v.sorge@mathjax.org (Volker Sorge)
 */
import { MathDocument } from '../../core/MathDocument.js';
import { CssStyles } from '../../util/StyleList.js';
import Sre from '../sre.js';
export type A11yDocument = MathDocument<HTMLElement, Text, Document>;
export interface Region<T> {
    /**
     * Adds a style sheet for the live region to the document.
     */
    AddStyles(): void;
    /**
     * Adds the region element to the document.
     */
    AddElement(): void;
    /**
     * Shows the live region in the document.
     * @param {HTMLElement} node
     * @param {Sre.highlighter} highlighter
     */
    Show(node: HTMLElement, highlighter: Sre.highlighter): void;
    /**
     * Takes the element out of the document flow.
     */
    Hide(): void;
    /**
     * Clears the content of the region.
     */
    Clear(): void;
    /**
     * Updates the content of the region.
     * @template T
     */
    Update(content: T): void;
}
export declare abstract class AbstractRegion<T> implements Region<T> {
    document: A11yDocument;
    /**
     * CSS Classname of the element.
     * @type {String}
     */
    protected static className: string;
    /**
     * True if the style has already been added to the document.
     * @type {boolean}
     */
    protected static styleAdded: boolean;
    /**
     * The CSS style that needs to be added for this type of region.
     * @type {CssStyles}
     */
    protected static style: CssStyles;
    /**
     * The outer div node.
     * @type {HTMLElement}
     */
    protected div: HTMLElement;
    /**
     * The inner node.
     * @type {HTMLElement}
     */
    protected inner: HTMLElement;
    /**
     * The actual class name to refer to static elements of a class.
     * @type {typeof AbstractRegion}
     */
    protected CLASS: typeof AbstractRegion;
    /**
     * @constructor
     * @param {A11yDocument} document The document the live region is added to.
     */
    constructor(document: A11yDocument);
    /**
     * @override
     */
    AddStyles(): void;
    /**
     * @override
     */
    AddElement(): void;
    /**
     * @override
     */
    Show(node: HTMLElement, highlighter: Sre.highlighter): void;
    /**
     * Computes the position where to place the element wrt. to the given node.
     * @param {HTMLElement} node The reference node.
     */
    protected abstract position(node: HTMLElement): void;
    /**
     * Highlights the region.
     * @param {Sre.highlighter} highlighter The Sre highlighter.
     */
    protected abstract highlight(highlighter: Sre.highlighter): void;
    /**
     * @override
     */
    Hide(): void;
    /**
     * @override
     */
    abstract Clear(): void;
    /**
     * @override
     */
    abstract Update(content: T): void;
    /**
     * Auxiliary position method that stacks shown regions of the same type.
     * @param {HTMLElement} node The reference node.
     */
    protected stackRegions(node: HTMLElement): void;
}
export declare class DummyRegion extends AbstractRegion<void> {
    /**
     * @override
     */
    Clear(): void;
    /**
     * @override
     */
    Update(): void;
    /**
     * @override
     */
    Hide(): void;
    /**
     * @override
     */
    Show(): void;
    /**
     * @override
     */
    AddElement(): void;
    /**
     * @override
     */
    AddStyles(): void;
    /**
     * @override
     */
    position(): void;
    /**
     * @override
     */
    highlight(_highlighter: Sre.highlighter): void;
}
export declare class StringRegion extends AbstractRegion<string> {
    /**
     * @override
     */
    Clear(): void;
    /**
     * @override
     */
    Update(speech: string): void;
    /**
     * @override
     */
    protected position(node: HTMLElement): void;
    /**
     * @override
     */
    protected highlight(highlighter: Sre.highlighter): void;
}
export declare class ToolTip extends StringRegion {
    /**
     * @override
     */
    protected static className: string;
    /**
     * @override
     */
    protected static style: CssStyles;
}
export declare class LiveRegion extends StringRegion {
    document: A11yDocument;
    /**
     * @override
     */
    protected static className: string;
    /**
     * @override
     */
    protected static style: CssStyles;
    /**
     * @constructor
     * @param {A11yDocument} document The document the live region is added to.
     */
    constructor(document: A11yDocument);
}
export declare class HoverRegion extends AbstractRegion<HTMLElement> {
    document: A11yDocument;
    /**
     * @override
     */
    protected static className: string;
    /**
     * @override
     */
    protected static style: CssStyles;
    /**
     * @constructor
     * @param {A11yDocument} document The document the live region is added to.
     */
    constructor(document: A11yDocument);
    /**
     * Sets the position of the region with respect to align parameter.  There are
     * three options: top, bottom and center. Center is the default.
     *
     * @param {HTMLElement} node The node that is displayed.
     */
    protected position(node: HTMLElement): void;
    /**
     * @override
     */
    protected highlight(highlighter: Sre.highlighter): void;
    /**
     * @override
     */
    Show(node: HTMLElement, highlighter: Sre.highlighter): void;
    /**
     * @override
     */
    Clear(): void;
    /**
     * @override
     */
    Update(node: HTMLElement): void;
    /**
     * Clones the node to put into the hover region.
     * @param {HTMLElement} node The original node.
     * @return {HTMLElement} The cloned node.
     */
    private cloneNode;
}
