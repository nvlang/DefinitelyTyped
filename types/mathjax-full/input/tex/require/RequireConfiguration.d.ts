/*************************************************************
 *
 *  Copyright (c) 2019-2022 The MathJax Consortium
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
 * @fileoverview    Configuration file for the require package.
 *
 * @author dpvc@mathjax.org (Davide P. Cervone)
 */
import { Configuration } from '../Configuration.js';
import TexParser from '../TexParser.js';
import { ParseMethod } from '../Types.js';
/**
 * Load a required package
 *
 * @param {TexParser} parser   The current tex parser.
 * @param {string} name        The name of the package to load.
 */
export declare function RequireLoad(parser: TexParser, name: string): void;
/**
 * Namespace for \require methods
 */
export declare const RequireMethods: Record<string, ParseMethod>;
/**
 * The options for the require extension
 */
export declare const options: {
    require: {
        allow: any;
        defaultAllow: boolean;
        prefix: string;
    };
};
/**
 * The configuration for the \require macro
 */
export declare const RequireConfiguration: Configuration;
