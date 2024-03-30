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
import { OptionList } from './Options.js';
/**
 * The type for lists of entities
 */
export type EntityList = {
    [name: string]: string;
};
/**
 *  Options controlling the process of conversion
 */
export declare const options: OptionList;
/**
 *  The entity name-to-value translation table
 *  (basic math entities -- others are loaded from external files)
 */
export declare const entities: EntityList;
/**
 * Used by entity files to add more entities to the table
 *
 * @param {EntityList} additions The entities to add
 * @param {string} file          The name of the file that they came from
 */
export declare function add(additions: EntityList, file: string): void;
/**
 * Used to remove an entity from the list, if needed
 *
 * @param {string} entity  The name of the entity to remove
 */
export declare function remove(entity: string): void;
/**
 * @param {string} text  The text whose entities are to be replaced
 * @return {string}      The text with entries replaced
 */
export declare function translate(text: string): string;
/**
 * @param {string} entity  The character code point as a string
 * @return {string}        The character(s) with the given code point
 */
export declare function numeric(entity: string): string;
