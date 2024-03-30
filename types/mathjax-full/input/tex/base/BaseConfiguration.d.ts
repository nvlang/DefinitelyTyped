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
 * @fileoverview Configuration for the Base LaTeX parser.
 *
 * @author v.sorge@mathjax.org (Volker Sorge)
 */
import { Configuration } from '../Configuration.js';
import TexParser from '../TexParser.js';
import { AbstractTags } from '../Tags.js';
import './BaseMappings.js';
/**
 * Default handling of characters (as <mo> elements).
 * @param {TexParser} parser The calling parser.
 * @param {string} char The character to parse.
 */
export declare function Other(parser: TexParser, char: string): void;
/**
 * @constructor
 * @extends {AbstractTags}
 */
export declare class BaseTags extends AbstractTags {
}
/**
 * The base configuration.
 * @type {Configuration}
 */
export declare const BaseConfiguration: Configuration;
