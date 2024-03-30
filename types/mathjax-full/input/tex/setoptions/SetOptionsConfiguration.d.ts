/*************************************************************
 *
 *  Copyright (c) 2021-2022 The MathJax Consortium
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
 * @fileoverview Configuration file for the setoptions package.
 *
 * @author dpvc@mathjax.org (Davide P. Cervone)
 */
import { Configuration } from '../Configuration.js';
import TexParser from '../TexParser.js';
export declare const SetOptionsUtil: {
    /**
     * Check if options can be set for a given pacakge, and error otherwise.
     *
     * @param {TexParser} parser   The active tex parser.
     * @param {string} extension   The name of the package whose option is being set.
     * @return {boolean}           True when options can be set for this package.
     */
    filterPackage(parser: TexParser, extension: string): boolean;
    /**
     * Check if an option can be set and error otherwise.
     *
     * @param {TexParser} parser   The active tex parser.
     * @param {string} extension   The name of the package whose option is being set.
     * @param {string} option      The name of the option being set.
     * @return {boolean}           True when the option can be set.
     */
    filterOption(parser: TexParser, extension: string, option: string): boolean;
    /**
     * Verify an option's value before setting it.
     *
     * @param {TexParser} parser   The active tex parser.
     * @param {string} extension   The name of the package whose option this is.
     * @param {string} option      The name of the option being set.
     * @param {string} value       The value to give to the option.
     * @return {string}            The (possibly modified) value for the option
     */
    filterValue(_parser: TexParser, _extension: string, _option: string, value: string): string;
};
export declare const SetOptionsConfiguration: Configuration;
