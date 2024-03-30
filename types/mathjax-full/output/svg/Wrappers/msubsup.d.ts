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
 * @fileoverview  Implements the SVGmsubsup wrapper for the MmlMsubsup object
 *                and the special cases SVGmsub and SVGmsup
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { SVGWrapper, Constructor } from '../Wrapper.js';
import { SVGscriptbase } from './scriptbase.js';
declare const SVGmsub_base: import("../../common/Wrappers/msubsup.js").MsubConstructor<SVGWrapper<any, any, any>> & Constructor<SVGscriptbase<any, any, any>>;
/*****************************************************************/
/**
 * The SVGmsub wrapper for the MmlMsub object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class SVGmsub<N, T, D> extends SVGmsub_base {
    /**
     * The msub wrapper
     */
    static kind: string;
}
declare const SVGmsup_base: import("../../common/Wrappers/msubsup.js").MsupConstructor<SVGWrapper<any, any, any>> & Constructor<SVGscriptbase<any, any, any>>;
/*****************************************************************/
/**
 * The SVGmsup wrapper for the MmlMsup object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class SVGmsup<N, T, D> extends SVGmsup_base {
    /**
     * The msup wrapper
     */
    static kind: string;
}
declare const SVGmsubsup_base: import("../../common/Wrappers/msubsup.js").MsubsupConstructor<SVGWrapper<any, any, any>> & Constructor<SVGscriptbase<any, any, any>>;
/*****************************************************************/
/**
 * The SVGmsubsup wrapper for the MmlMsubsup object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class SVGmsubsup<N, T, D> extends SVGmsubsup_base {
    /**
     * The msubsup wrapper
     */
    static kind: string;
    /**
     * @override
     */
    toSVG(parent: N): void;
}
export {};
