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
 * @fileoverview  Implements the SVGmunderover wrapper for the MmlMunderover object
 *                and the special cases SVGmunder and SVGmsup
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { SVGWrapper, Constructor } from '../Wrapper.js';
import { SVGmsubsup, SVGmsub, SVGmsup } from './msubsup.js';
declare const SVGmunder_base: import("../../common/Wrappers/munderover.js").MunderConstructor<SVGWrapper<any, any, any>> & Constructor<SVGmsub<any, any, any>>;
/*****************************************************************/
/**
 * The SVGmunder wrapper for the MmlMunder object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class SVGmunder<N, T, D> extends SVGmunder_base {
    /**
     * The munder wrapper
     */
    static kind: string;
    /**
     * @override
     */
    toSVG(parent: N): void;
}
declare const SVGmover_base: import("../../common/Wrappers/munderover.js").MoverConstructor<SVGWrapper<any, any, any>> & Constructor<SVGmsup<any, any, any>>;
/*****************************************************************/
/**
 * The SVGmover wrapper for the MmlMover object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class SVGmover<N, T, D> extends SVGmover_base {
    /**
     * The mover wrapper
     */
    static kind: string;
    /**
     * @override
     */
    toSVG(parent: N): void;
}
declare const SVGmunderover_base: import("../../common/Wrappers/munderover.js").MunderoverConstructor<SVGWrapper<any, any, any>> & Constructor<SVGmsubsup<any, any, any>>;
/*****************************************************************/
export declare class SVGmunderover<N, T, D> extends SVGmunderover_base {
    /**
     * The munderover wrapper
     */
    static kind: string;
    /**
     * @override
     */
    toSVG(parent: N): void;
}
export {};
