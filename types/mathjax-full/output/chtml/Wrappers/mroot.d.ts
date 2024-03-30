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
 * @fileoverview  Implements the CHTMLMroot wrapper for the MmlMroot object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { CHTMLWrapper } from '../Wrapper.js';
import { MrootConstructor } from '../../common/Wrappers/mroot.js';
import { BBox } from '../../../util/BBox.js';
declare const CHTMLmroot_base: MrootConstructor;
/*****************************************************************/
/**
 * The CHTMLmroot wrapper for the MmlMroot object (extends CHTMLmsqrt)
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class CHTMLmroot<N, T, D> extends CHTMLmroot_base {
    /**
     * The mroot wrapper
     */
    static kind: string;
    /**
     * @override
     */
    protected addRoot(ROOT: N, root: CHTMLWrapper<N, T, D>, sbox: BBox, H: number): void;
}
export {};
