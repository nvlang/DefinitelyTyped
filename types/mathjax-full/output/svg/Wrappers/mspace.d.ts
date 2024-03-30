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
 * @fileoverview  Implements the SVGmspace wrapper for the MmlMspace object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { SVGConstructor } from '../Wrapper.js';
declare const SVGmspace_base: import("../../common/Wrappers/mspace.js").MspaceConstructor & SVGConstructor<any, any, any>;
/*****************************************************************/
/**
 * The SVGmspace wrapper for the MmlMspace object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class SVGmspace<N, T, D> extends SVGmspace_base {
    /**
     * The mspace wrapper
     */
    static kind: string;
}
export {};
