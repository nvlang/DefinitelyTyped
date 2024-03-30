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
 * @fileoverview  Implements the SVGms wrapper for the MmlMs object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { SVGConstructor } from '../Wrapper.js';
declare const SVGms_base: import("../../common/Wrappers/ms.js").MsConstructor & SVGConstructor<any, any, any>;
/*****************************************************************/
/**
 * The SVGms wrapper for the MmlMs object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class SVGms<N, T, D> extends SVGms_base {
    /**
     * The ms wrapper
     */
    static kind: string;
}
export {};
