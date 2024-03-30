/*************************************************************
 *  Copyright (c) 2020-2022 MathJax Consortium
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
 * @fileoverview    Configuration file for the mathtools package.
 *
 * @author v.sorge@mathjax.org (Volker Sorge)
 * @author dpvc@mathjax.org (Davide P. Cervone)
 */
import { Configuration } from '../Configuration.js';
import ParseOptions from '../ParseOptions.js';
import './MathtoolsMappings.js';
/**
 * The name of the paried-delimiters command map.
 */
export declare const PAIREDDELIMS = "mathtools-paired-delims";
/**
 * A filter to fix up mmultiscripts elements.
 * @param {ParseOptions} data   The parse options.
 */
export declare function fixPrescripts({ data }: {
    data: ParseOptions;
}): void;
/**
 * The configuration for the mathtools package
 */
export declare const MathtoolsConfiguration: Configuration;
