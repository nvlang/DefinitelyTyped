/*************************************************************
 *  Copyright (c) 2021-2022 MathJax Consortium
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
import { ParserConfiguration } from '../Configuration.js';
import { TeX } from '../../tex.js';
import { AbstractTags } from '../Tags.js';
/**
 * The type for the Mathtools tags (including their data).
 */
export type MathtoolsTags = AbstractTags & {
    mtFormats: Map<string, [string, string, string]>;
    mtCurrent: [string, string, string];
};
/**
 * Creates and registers a subclass of the currently configured tag class
 * that handles the formats created by the \newtagform macro.
 */
export declare function MathtoolsTagFormat(config: ParserConfiguration, jax: TeX<any, any, any>): void;
