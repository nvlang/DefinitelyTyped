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
/**
 * @fileoverview  Implements the CHTMLmi wrapper for the MmlMi object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { CHTMLConstructor } from '../Wrapper.js';
declare const CHTMLmi_base: import("../../common/Wrappers/mi.js").MiConstructor & CHTMLConstructor<any, any, any>;
/*****************************************************************/
/**
 *  The CHTMLmi wrapper for the MmlMi object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class CHTMLmi<N, T, D> extends CHTMLmi_base {
    /**
     * The mi wrapper
     */
    static kind: string;
}
export {};
