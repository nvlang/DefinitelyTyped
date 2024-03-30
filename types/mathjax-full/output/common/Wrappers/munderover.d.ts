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
 * @fileoverview  Implements the CommonMunderover wrapper mixin for the MmlMunderover object
 *                and the special cases CommonMunder and CommonMsup
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { AnyWrapper, Constructor } from '../Wrapper.js';
import { CommonScriptbase, ScriptbaseConstructor } from './scriptbase.js';
/*****************************************************************/
/**
 * The CommonMunder interface
 *
 * @template W  The child-node Wrapper class
 */
export interface CommonMunder<W extends AnyWrapper> extends CommonScriptbase<W> {
}
/**
 * Shorthand for the CommonMunder constructor
 *
 * @template W  The child-node Wrapper class
 */
export type MunderConstructor<W extends AnyWrapper> = Constructor<CommonMunder<W>>;
/*****************************************************************/
/**
 * The CommonMunder wrapper mixin for the MmlMunder object
 *
 * @template W  The child-node Wrapper class
 * @template T  The Wrapper class constructor type
 */
export declare function CommonMunderMixin<W extends AnyWrapper, T extends ScriptbaseConstructor<W>>(Base: T): MunderConstructor<W> & T;
/*****************************************************************/
/**
 * The CommonMover interface
 *
 * @template W  The child-node Wrapper class
 */
export interface CommonMover<W extends AnyWrapper> extends CommonScriptbase<W> {
}
/**
 * Shorthand for the CommonMover constructor
 *
 * @template W  The child-node Wrapper class
 */
export type MoverConstructor<W extends AnyWrapper> = Constructor<CommonMover<W>>;
/*****************************************************************/
/**
 * The CommonMover wrapper mixin for the MmlMover object
 *
 * @template W  The child-node Wrapper class
 * @template T  The Wrapper class constructor type
 */
export declare function CommonMoverMixin<W extends AnyWrapper, T extends ScriptbaseConstructor<W>>(Base: T): MoverConstructor<W> & T;
/*****************************************************************/
/**
 * The CommonMunderover interface
 *
 * @template W  The child-node Wrapper class
 */
export interface CommonMunderover<W extends AnyWrapper> extends CommonScriptbase<W> {
    readonly underChild: W;
    readonly overChild: W;
}
/**
 * Shorthand for the CommonMunderover constructor
 *
 * @template W  The child-node Wrapper class
 */
export type MunderoverConstructor<W extends AnyWrapper> = Constructor<CommonMunderover<W>>;
/*****************************************************************/
export declare function CommonMunderoverMixin<W extends AnyWrapper, T extends ScriptbaseConstructor<W>>(Base: T): MunderoverConstructor<W> & T;
