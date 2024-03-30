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
import { CHTMLConstructor } from '../Wrapper.js';
import { StyleList } from '../../../util/StyleList.js';
declare const CHTMLTextNode_base: import("../../common/Wrappers/TextNode.js").TextNodeConstructor & CHTMLConstructor<any, any, any>;
/*****************************************************************/
/**
 *  The CHTMLTextNode wrapper for the TextNode object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class CHTMLTextNode<N, T, D> extends CHTMLTextNode_base {
    /**
     * The TextNode wrapper
     */
    static kind: string;
    /**
     * @override
     */
    static autoStyle: boolean;
    /**
     * @override
     */
    static styles: StyleList;
    /**
     * @override
     */
    toCHTML(parent: N): void;
}
export {};
