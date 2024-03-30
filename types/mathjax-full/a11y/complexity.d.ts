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
 * @fileoverview  Mixin that computes complexity of the internal MathML
 *                and optionally marks collapsible items
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { Handler } from '../core/Handler.js';
import { MathDocumentConstructor } from '../core/MathDocument.js';
import { MathML } from '../input/mathml.js';
import { MmlNode } from '../core/MmlTree/MmlNode.js';
import { EnrichedMathItem, EnrichedMathDocument } from './semantic-enrich.js';
/**
 * Generic constructor for Mixins
 */
export type Constructor<T> = new (...args: any[]) => T;
/**
 * Shorthands for constructors
 */
export type EMItemC<N, T, D> = Constructor<EnrichedMathItem<N, T, D>>;
export type CMItemC<N, T, D> = Constructor<ComplexityMathItem<N, T, D>>;
export type EMDocC<N, T, D> = MathDocumentConstructor<EnrichedMathDocument<N, T, D>>;
export type CMDocC<N, T, D> = Constructor<ComplexityMathDocument<N, T, D>>;
/**
 * The functions added to MathItem for complexity
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export interface ComplexityMathItem<N, T, D> extends EnrichedMathItem<N, T, D> {
    /**
     * @param {ComplexityMathDocument} document   The MathDocument for the MathItem
     * @param {boolean} force                     True to force the computation even if enableComplexity is false
     */
    complexity(document: ComplexityMathDocument<N, T, D>, force?: boolean): void;
}
/**
 * The mixin for adding complexity to MathItems
 *
 * @param {B} BaseMathItem       The MathItem class to be extended
 * @param {function(MmlNode): void} computeComplexity Method of complexity computation.
 * @return {ComplexityMathItem}  The complexity MathItem class
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 * @template B  The MathItem class to extend
 */
export declare function ComplexityMathItemMixin<N, T, D, B extends EMItemC<N, T, D>>(BaseMathItem: B, computeComplexity: (node: MmlNode) => void): CMItemC<N, T, D> & B;
/**
 * The functions added to MathDocument for complexity
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export interface ComplexityMathDocument<N, T, D> extends EnrichedMathDocument<N, T, D> {
    /**
     * Perform complexity computations on the MathItems in the MathDocument
     *
     * @return {ComplexityMathDocument}   The MathDocument (so calls can be chained)
     */
    complexity(): ComplexityMathDocument<N, T, D>;
}
/**
 * The mixin for adding complexity to MathDocuments
 *
 * @param {B} BaseDocument     The MathDocument class to be extended
 * @return {EnrichedMathDocument}  The enriched MathDocument class
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 * @template B  The MathDocument class to extend
 */
export declare function ComplexityMathDocumentMixin<N, T, D, B extends EMDocC<N, T, D>>(BaseDocument: B): CMDocC<N, T, D> & B;
/**
 * Add complexity computations a Handler instance
 *
 * @param {Handler} handler   The Handler instance to enhance
 * @param {MathML} MmlJax     The MathML input jax to use for reading the enriched MathML
 * @return {Handler}          The handler that was modified (for purposes of chainging extensions)
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare function ComplexityHandler<N, T, D>(handler: Handler<N, T, D>, MmlJax?: MathML<N, T, D>): Handler<N, T, D>;
