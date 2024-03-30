/*************************************************************
 *
 *  Copyright (c) 2019-2022 The MathJax Consortium
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
 * @fileoverview  Mixin that adds hidden MathML to the output
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { Handler } from '../core/Handler.js';
import { MathDocument, AbstractMathDocument, MathDocumentConstructor } from '../core/MathDocument.js';
import { MathItem, AbstractMathItem } from '../core/MathItem.js';
import { MmlNode } from '../core/MmlTree/MmlNode.js';
import { SerializedMmlVisitor } from '../core/MmlTree/SerializedMmlVisitor.js';
export declare class LimitedMmlVisitor extends SerializedMmlVisitor {
    /**
     * @override
     */
    protected getAttributes(node: MmlNode): string;
}
/**
 * Generic constructor for Mixins
 */
export type Constructor<T> = new (...args: any[]) => T;
/**
 * The functions added to MathItem for assistive MathML
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export interface AssistiveMmlMathItem<N, T, D> extends MathItem<N, T, D> {
    /**
     * @param {MathDocument} document  The document where assistive MathML is being added
     * @param {boolean} force          True to force assistive MathML even if enableAssistiveMml is false
     */
    assistiveMml(document: MathDocument<N, T, D>, force?: boolean): void;
}
/**
 * The mixin for adding assistive MathML to MathItems
 *
 * @param {B} BaseMathItem      The MathItem class to be extended
 * @return {AssistiveMathItem}  The augmented MathItem class
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 * @template B  The MathItem class to extend
 */
export declare function AssistiveMmlMathItemMixin<N, T, D, B extends Constructor<AbstractMathItem<N, T, D>>>(BaseMathItem: B): Constructor<AssistiveMmlMathItem<N, T, D>> & B;
/**
 * The functions added to MathDocument for assistive MathML
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export interface AssistiveMmlMathDocument<N, T, D> extends AbstractMathDocument<N, T, D> {
    /**
     * @param {MmlNode} node   The node to be serializes
     * @return {string}        The serialization of the node
     */
    toMML: (node: MmlNode) => string;
    /**
     * Add assistive MathML to the MathItems in the MathDocument
     *
     * @return {AssistiveMmlMathDocument}   The MathDocument (so calls can be chained)
     */
    assistiveMml(): AssistiveMmlMathDocument<N, T, D>;
}
/**
 * The mixin for adding assistive MathML to MathDocuments
 *
 * @param {B} BaseDocument         The MathDocument class to be extended
 * @return {AssistiveMmlMathDocument}  The Assistive MathML MathDocument class
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 * @template B  The MathDocument class to extend
 */
export declare function AssistiveMmlMathDocumentMixin<N, T, D, B extends MathDocumentConstructor<AbstractMathDocument<N, T, D>>>(BaseDocument: B): MathDocumentConstructor<AssistiveMmlMathDocument<N, T, D>> & B;
/**
 * Add assitive MathML support a Handler instance
 *
 * @param {Handler} handler   The Handler instance to enhance
 * @return {Handler}          The handler that was modified (for purposes of chainging extensions)
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare function AssistiveMmlHandler<N, T, D>(handler: Handler<N, T, D>): Handler<N, T, D>;
