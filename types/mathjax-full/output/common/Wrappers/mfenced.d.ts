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
 * @fileoverview  Implements the CommonMfenced wrapper mixin for the MmlMfenced object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { AnyWrapper, WrapperConstructor, Constructor } from '../Wrapper.js';
import { CommonInferredMrow } from './mrow.js';
import { MmlNode } from '../../../core/MmlTree/MmlNode.js';
/*****************************************************************/
/**
 * The CommonMfenced interface
 */
export interface CommonMfenced extends AnyWrapper {
    /**
     * An mrow to use for the layout of the mfenced
     */
    mrow: CommonInferredMrow;
    /**
     * Creates the mrow wrapper to use for the layout
     */
    createMrow(): void;
    /**
     * Populate the mrow with wrapped mo elements interleaved
     *   with the mfenced children (the mo's are already created
     *   in the mfenced object)
     */
    addMrowChildren(): void;
    /**
     * Wrap an mo element and push it onto the mrow
     *
     * @param {MmlNode} node  The mo element to push on the mrow
     */
    addMo(node: MmlNode): void;
}
/**
 * Shorthand for the CommonMfenced constructor
 */
export type MfencedConstructor = Constructor<CommonMfenced>;
/*****************************************************************/
/**
 * The CommonMfenced wrapper mixin for the MmlMfenced object
 *
 * @template T  The Wrapper class constructor type
 */
export declare function CommonMfencedMixin<T extends WrapperConstructor>(Base: T): MfencedConstructor & T;
