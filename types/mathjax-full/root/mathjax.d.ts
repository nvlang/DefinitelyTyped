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
import { HandlerList } from '../core/HandlerList.js';
import { handleRetriesFor, retryAfter } from '../util/Retries.js';
import { OptionList } from '../util/Options.js';
import { MathDocument } from '../core/MathDocument.js';
/*****************************************************************/
/**
 * The main MathJax global object
 */
export declare const mathjax: {
    /**
     *  The MathJax version number
     */
    version: string;
    /**
     *  The list of registers document handlers
     */
    handlers: HandlerList<any, any, any>;
    /**
     * Creates a MathDocument using a registered handler that knows how to handl it
     *
     * @param {any} document        The document to handle
     * @param {OptionList} options   The options to use for the document (e.g., input and output jax)
     * @return {MathDocument}       The MathDocument to handle the document
     */
    document: (document: any, options: OptionList) => MathDocument<any, any, any>;
    /**
     * The functions for handling retries if a file must be loaded dynamically
     */
    handleRetriesFor: typeof handleRetriesFor;
    retryAfter: typeof retryAfter;
    /**
     * A function for loading external files (can be changed for node/browser use)
     */
    asyncLoad: (file: string) => any;
};
