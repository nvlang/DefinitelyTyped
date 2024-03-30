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
 * @fileoverview StackItems needed for parsing AMS math commands.
 *
 * @author v.sorge@mathjax.org (Volker Sorge)
 */
import { ArrayItem, EqnArrayItem } from '../base/BaseItems.js';
/**
 * Item dealing with multiline environments as a special case of arrays. Note,
 * that all other AMS equation environments (e.g., align, split) can be handled
 * by the regular EqnArrayItem class.
 *
 * Handles tagging information according to the given tagging style.
 */
export declare class MultlineItem extends ArrayItem {
    /**
     * @override
     */
    constructor(factory: any, ...args: any[]);
    /**
     * @override
     */
    get kind(): string;
    /**
     * @override
     */
    EndEntry(): void;
    /**
     * @override
     */
    EndRow(): void;
    /**
     * @override
     */
    EndTable(): void;
}
/**
 * StackItem for handling flalign, xalignat, and xxalignat environments.
 */
export declare class FlalignItem extends EqnArrayItem {
    name: string;
    numbered: boolean;
    padded: boolean;
    center: boolean;
    /**
     * @override
     */
    get kind(): string;
    /**
     * @override
     */
    constructor(factory: any, name: string, numbered: boolean, padded: boolean, center: boolean);
    /**
     * @override
     */
    EndEntry(): void;
    /**
     * @override
     */
    EndRow(): void;
    /**
     * @override
     */
    EndTable(): void;
}
