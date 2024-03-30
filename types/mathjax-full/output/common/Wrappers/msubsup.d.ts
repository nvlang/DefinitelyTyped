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
 * @fileoverview  Implements the CommonMsubsup wrapper mixin for the MmlMsubsup object
 *                and the special cases CommonMsub and CommonMsup
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { AnyWrapper, Constructor } from '../Wrapper.js';
import { CommonScriptbase, ScriptbaseConstructor } from './scriptbase.js';
import { BBox } from '../../../util/BBox.js';
/*****************************************************************/
/**
 * The CommonMsub interface
 *
 * @template W  The child-node Wrapper class
 */
export interface CommonMsub<W extends AnyWrapper> extends CommonScriptbase<W> {
}
/**
 * Shorthand for the CommonMsub constructor
 *
 * @template W  The child-node Wrapper class
 */
export type MsubConstructor<W extends AnyWrapper> = Constructor<CommonMsub<W>>;
/*****************************************************************/
/**
 * The CommonMsub wrapper mixin for the MmlMsub object
 *
 * @template W  The child-node Wrapper class
 * @template T  The Wrapper class constructor type
 */
export declare function CommonMsubMixin<W extends AnyWrapper, T extends ScriptbaseConstructor<W>>(Base: T): MsubConstructor<W> & T;
/*****************************************************************/
/**
 * The CommonMsup interface
 *
 * @template W  The child-node Wrapper class
 */
export interface CommonMsup<W extends AnyWrapper> extends CommonScriptbase<W> {
}
/**
 * Shorthand for the CommonMsup constructor
 *
 * @template W  The child-node Wrapper class
 */
export type MsupConstructor<W extends AnyWrapper> = Constructor<CommonMsup<W>>;
/*****************************************************************/
/**
 * The CommonMsup wrapper mixin for the MmlMsup object
 *
 * @template W  The child-node Wrapper class
 * @template T  The Wrapper class constructor type
 */
export declare function CommonMsupMixin<W extends AnyWrapper, T extends ScriptbaseConstructor<W>>(Base: T): MsupConstructor<W> & T;
/*****************************************************************/
/**
 * The CommonMsubsup interface
 *
 * @template W  The child-node Wrapper class
 */
export interface CommonMsubsup<W extends AnyWrapper> extends CommonScriptbase<W> {
    /**
     *  Cached values for the script offsets and separation (so if they are
     *  computed in computeBBox(), they don't have to be recomputed during output)
     */
    UVQ: number[];
    /**
     * The wrapper for the subscript
     */
    readonly subChild: W;
    /**
     * The wrapper for the superscript
     */
    readonly supChild: W;
    /**
     * Get the shift for the scripts and their separation (TeXBook Appendix G 18adef)
     *
     * @param {BBox} subbox     The bounding box of the superscript
     * @param {BBox} supbox     The bounding box of the subscript
     * @return {number[]}       The vertical offsets for super and subscripts, and the space between them
     */
    getUVQ(subbox?: BBox, supbox?: BBox): number[];
}
/**
 * Shorthand for the CommonMsubsup constructor
 *
 * @template W  The child-node Wrapper class
 */
export type MsubsupConstructor<W extends AnyWrapper> = Constructor<CommonMsubsup<W>>;
/*****************************************************************/
/**
 * The CommomMsubsup wrapper for the MmlMsubsup object
 *
 * @template W  The child-node Wrapper class
 * @template T  The Wrapper class constructor type
 */
export declare function CommonMsubsupMixin<W extends AnyWrapper, T extends ScriptbaseConstructor<W>>(Base: T): MsubsupConstructor<W> & T;
