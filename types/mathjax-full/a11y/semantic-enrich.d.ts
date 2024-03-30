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
import { Handler } from '../core/Handler.js';
import { MathDocument, AbstractMathDocument, MathDocumentConstructor } from '../core/MathDocument.js';
import { MathItem, AbstractMathItem } from '../core/MathItem.js';
import { MmlNode } from '../core/MmlTree/MmlNode.js';
import { MathML } from '../input/mathml.js';
/**
 * Generic constructor for Mixins
 */
export type Constructor<T> = new (...args: any[]) => T;
/**
 * The functions added to MathItem for enrichment
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export interface EnrichedMathItem<N, T, D> extends MathItem<N, T, D> {
    /**
     * @param {MathDocument} document  The document where enrichment is occurring
     * @param {boolean} force          True to force the enrichment even if not enabled
     */
    enrich(document: MathDocument<N, T, D>, force?: boolean): void;
    /**
     * @param {MathDocument} document  The document where enrichment is occurring
     */
    attachSpeech(document: MathDocument<N, T, D>): void;
}
/**
 * The mixin for adding enrichment to MathItems
 *
 * @param {B} BaseMathItem     The MathItem class to be extended
 * @param {MathML} MmlJax      The MathML input jax used to convert the enriched MathML
 * @param {Function} toMathML  The function to serialize the internal MathML
 * @return {EnrichedMathItem}  The enriched MathItem class
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 * @template B  The MathItem class to extend
 */
export declare function EnrichedMathItemMixin<N, T, D, B extends Constructor<AbstractMathItem<N, T, D>>>(BaseMathItem: B, MmlJax: MathML<N, T, D>, toMathML: (node: MmlNode) => string): Constructor<EnrichedMathItem<N, T, D>> & B;
/**
 * The functions added to MathDocument for enrichment
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export interface EnrichedMathDocument<N, T, D> extends AbstractMathDocument<N, T, D> {
    /**
     * Perform enrichment on the MathItems in the MathDocument
     *
     * @return {EnrichedMathDocument}   The MathDocument (so calls can be chained)
     */
    enrich(): EnrichedMathDocument<N, T, D>;
    /**
     * Attach speech to the MathItems in the MathDocument
     *
     * @return {EnrichedMathDocument}   The MathDocument (so calls can be chained)
     */
    attachSpeech(): EnrichedMathDocument<N, T, D>;
    /**
     * @param {EnrichedMathDocument} doc   The MathDocument for the error
     * @paarm {EnrichedMathItem} math      The MathItem causing the error
     * @param {Error} err                  The error being processed
     */
    enrichError(doc: EnrichedMathDocument<N, T, D>, math: EnrichedMathItem<N, T, D>, err: Error): void;
}
/**
 * The mixin for adding enrichment to MathDocuments
 *
 * @param {B} BaseDocument     The MathDocument class to be extended
 * @param {MathML} MmlJax          The MathML input jax used to convert the enriched MathML
 * @return {EnrichedMathDocument}  The enriched MathDocument class
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 * @template B  The MathDocument class to extend
 */
export declare function EnrichedMathDocumentMixin<N, T, D, B extends MathDocumentConstructor<AbstractMathDocument<N, T, D>>>(BaseDocument: B, MmlJax: MathML<N, T, D>): MathDocumentConstructor<EnrichedMathDocument<N, T, D>> & B;
/**
 * Add enrichment a Handler instance
 *
 * @param {Handler} handler   The Handler instance to enhance
 * @param {MathML} MmlJax     The MathML input jax to use for reading the enriched MathML
 * @return {Handler}          The handler that was modified (for purposes of chainging extensions)
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare function EnrichHandler<N, T, D>(handler: Handler<N, T, D>, MmlJax: MathML<N, T, D>): Handler<N, T, D>;
