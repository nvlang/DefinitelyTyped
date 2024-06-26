/*************************************************************
 *
 *  Copyright (c) 2017-2022 The MathJax Consortium
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
 * @fileoverview  Implements the HTMLHandler class
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { AbstractHandler } from '../../core/Handler.js';
import { MinHTMLAdaptor } from '../../adaptors/HTMLAdaptor.js';
import { HTMLDocument } from './HTMLDocument.js';
import { OptionList } from '../../util/Options.js';
/*****************************************************************/
/**
 *  Implements the HTMLHandler class (extends AbstractHandler)
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class HTMLHandler<N, T, D> extends AbstractHandler<N, T, D> {
    /**
     * The DOMAdaptor for the document being handled
     */
    adaptor: MinHTMLAdaptor<N, T, D>;
    /**
     * @override
     */
    documentClass: typeof HTMLDocument;
    /**
     * @override
     */
    handlesDocument(document: any): boolean;
    /**
     * If the document isn't already a Document object, create one
     * using the given data
     *
     * @override
     */
    create(document: any, options: OptionList): HTMLDocument<N, T, D>;
}
