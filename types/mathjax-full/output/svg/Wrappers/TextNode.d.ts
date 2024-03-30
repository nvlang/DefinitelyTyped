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
import { SVGConstructor } from '../Wrapper.js';
import { StyleList } from '../../../util/StyleList.js';
declare const SVGTextNode_base: import("../../common/Wrappers/TextNode.js").TextNodeConstructor & SVGConstructor<any, any, any>;
/*****************************************************************/
/**
 *  The SVGTextNode wrapper for the TextNode object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class SVGTextNode<N, T, D> extends SVGTextNode_base {
    /**
     * The TextNode wrapper
     */
    static kind: string;
    /**
     * @override
     */
    static styles: StyleList;
    /**
     * @override
     */
    toSVG(parent: N): void;
}
export {};
