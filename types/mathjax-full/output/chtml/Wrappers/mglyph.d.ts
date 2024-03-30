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
 * @fileoverview  Implements the CHTMLmglyph wrapper for the MmlMglyph object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { CHTMLConstructor } from '../Wrapper.js';
import { StyleList } from '../../../util/StyleList.js';
declare const CHTMLmglyph_base: import("../../common/Wrappers/mglyph.js").MglyphConstructor & CHTMLConstructor<any, any, any>;
/*****************************************************************/
/**
 * The CHTMLmglyph wrapper for the MmlMglyph object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class CHTMLmglyph<N, T, D> extends CHTMLmglyph_base {
    /**
     * The mglyph wrapper
     */
    static kind: string;
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
