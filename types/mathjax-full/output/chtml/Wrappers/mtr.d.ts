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
 * @fileoverview  Implements the CHTMLmtr wrapper for the MmlMtr object
 *                and CHTMLmlabeledtr for MmlMlabeledtr
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { CHTMLConstructor, Constructor } from '../Wrapper.js';
import { CHTMLmtd } from './mtd.js';
import { StyleList } from '../../../util/StyleList.js';
declare const CHTMLmtr_base: import("../../common/Wrappers/mtr.js").MtrConstructor<CHTMLmtd<any, any, any>> & CHTMLConstructor<any, any, any>;
/*****************************************************************/
/**
 * The CHTMLmtr wrapper for the MmlMtr object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class CHTMLmtr<N, T, D> extends CHTMLmtr_base {
    /**
     * The mtr wrapper
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
declare const CHTMLmlabeledtr_base: import("../../common/Wrappers/mtr.js").MlabeledtrConstructor<CHTMLmtd<any, any, any>> & Constructor<CHTMLmtr<any, any, any>>;
/*****************************************************************/
/**
 * The CHTMLlabeledmtr wrapper for the MmlMlabeledtr object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class CHTMLmlabeledtr<N, T, D> extends CHTMLmlabeledtr_base {
    /**
     * The mlabeledtr wrapper
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
    /**
     * @override
     */
    markUsed(): void;
}
export {};
