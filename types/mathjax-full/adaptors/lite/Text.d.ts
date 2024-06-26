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
 * @fileoverview  Implements a lightweight Text element replacement
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { LiteElement } from './Element.js';
/************************************************************/
/**
 * Implements a lightweight Text node replacement
 */
export declare class LiteText {
    /**
     * The text stored in the node
     */
    value: string;
    /**
     * The parent holding this text
     */
    parent: LiteElement;
    /**
     * The kind of node is #text
     */
    get kind(): string;
    /**
     * @param {string} text  The text for the node
     * @constructor
     */
    constructor(text?: string);
}
/************************************************************/
/**
 * Implements a lightweight Comment node replacement
 */
export declare class LiteComment extends LiteText {
    get kind(): string;
}
