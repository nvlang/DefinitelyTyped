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
 * @fileoverview  Implements the CHTMLTeXAtom wrapper for the MmlTeXAtom object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { CHTMLConstructor } from '../Wrapper.js';
declare const CHTMLTeXAtom_base: import("../../common/Wrappers/TeXAtom.js").TeXAtomConstructor & CHTMLConstructor<any, any, any>;
/*****************************************************************/
/**
 * The CHTMLTeXAtom wrapper for the TeXAtom object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class CHTMLTeXAtom<N, T, D> extends CHTMLTeXAtom_base {
    /**
     * The TeXAtom wrapper
     */
    static kind: string;
    /**
     * @override
     */
    toCHTML(parent: N): void;
}
export {};
