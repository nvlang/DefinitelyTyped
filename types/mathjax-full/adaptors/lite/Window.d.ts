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
import { LiteElement } from './Element.js';
import { LiteDocument } from './Document.js';
import { LiteList } from './List.js';
import { LiteParser } from './Parser.js';
/************************************************************/
/**
 * Implements a lightweight Window replacement
 */
export declare class LiteWindow {
    /**
     * The window's document instance
     */
    document: LiteDocument;
    /**
     * The DOMParser class
     */
    DOMParser: typeof LiteParser;
    /**
     * The NodeList class
     */
    NodeList: typeof LiteList;
    /**
     * The HTMLCollection class
     */
    HTMLCollection: typeof LiteList;
    /**
     * The HTMLElement class
     */
    HTMLElement: typeof LiteElement;
    /**
     * The DocumentFragment class
     */
    DocumentFragment: typeof LiteList;
    /**
     * The Document class
     */
    Document: typeof LiteDocument;
    /**
     * Create the LiteWindow and its LiteDocument
     */
    constructor();
}
