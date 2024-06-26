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
 * @fileoverview  Implements the SVGWrapperFactory class
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { SVG } from '../svg.js';
import { CommonWrapperFactory } from '../common/WrapperFactory.js';
import { SVGWrapper, SVGWrapperClass } from './Wrapper.js';
import { SVGCharOptions, SVGDelimiterData, SVGFontData } from './FontData.js';
/*****************************************************************/
export declare class SVGWrapperFactory<N, T, D> extends CommonWrapperFactory<SVG<N, T, D>, SVGWrapper<N, T, D>, SVGWrapperClass, SVGCharOptions, SVGDelimiterData, SVGFontData> {
    /**
     * The default list of wrapper nodes this factory can create
     */
    static defaultNodes: {
        [kind: string]: import("ts/output/common/Wrapper.js").WrapperConstructor;
    };
    /**
     * The CHTML output jax associated with this factory
     */
    jax: SVG<N, T, D>;
}
