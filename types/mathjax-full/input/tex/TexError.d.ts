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
 * @fileoverview Error class for the TeX parser.
 *
 * @author v.sorge@mathjax.org (Volker Sorge)
 */
export default class TexError {
    id: string;
    private static pattern;
    /**
     * Default error message.
     * @type {string}
     */
    message: string;
    /**
     * The old MathJax processing function.
     * @param {string} str The basic error message.
     * @param {string[]} args The arguments to be replaced in the error message.
     * @return {string} The processed error string.
     */
    private static processString;
    /**
     * @constructor
     * @param{string} id        message id (for localization)
     * @param{string} message   text of English message
     * @param{string[]=} rest   any substitution arguments
     */
    constructor(id: string, message: string, ...rest: string[]);
}
