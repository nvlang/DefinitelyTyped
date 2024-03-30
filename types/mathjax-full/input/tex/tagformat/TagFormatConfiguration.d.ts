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
 * @fileoverview    Configuration file for the tagformat package.
 *
 * @author dpvc@mathjax.org (Davide P. Cervone)
 */
import { Configuration, ParserConfiguration } from '../Configuration.js';
import { TeX } from '../../tex.js';
/**
 * Configure a class to use for the tag handler that uses the input jax's options
 *   to control the formatting of the tags
 * @param {Configuration} config   The configuration for the input jax
 * @param {TeX} jax                The TeX input jax
 */
export declare function tagformatConfig(config: ParserConfiguration, jax: TeX<any, any, any>): void;
/**
 * The configuration object for configTags
 */
export declare const TagFormatConfiguration: Configuration;
