/*************************************************************
 *
 *  Copyright (c) 2020-2022 The MathJax Consortium
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
import { MathDocument, MathDocumentConstructor } from '../../core/MathDocument.js';
import { Handler } from '../../core/Handler.js';
import { Safe } from './safe.js';
/**
 * Generic constructor for Mixins
 */
export type Constructor<T> = new (...args: any[]) => T;
/**
 * The properties needed in the MathDocument for sanitizing the internal MathML
 */
export interface SafeMathDocument<N, T, D> extends MathDocument<N, T, D> {
    /**
     * The Safe object for this document
     */
    safe: Safe<N, T, D>;
}
/**
 * The mixin for adding safe render action to MathDocuments
 *
 * @param {B} BaseDocument             The MathDocument class to be extended
 * @return {SafeMathDocument<N,T,D>}   The extended MathDocument class
 */
export declare function SafeMathDocumentMixin<N, T, D, B extends MathDocumentConstructor<MathDocument<N, T, D>>>(BaseDocument: B): Constructor<SafeMathDocument<N, T, D>> & B;
/**
 * Add context-menu support to a Handler instance
 *
 * @param {Handler} handler   The Handler instance to enhance
 * @return {Handler}          The handler that was modified (for purposes of chaining extensions)
 */
export declare function SafeHandler<N, T, D>(handler: Handler<N, T, D>): Handler<N, T, D>;
