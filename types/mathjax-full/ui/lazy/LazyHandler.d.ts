/*************************************************************
 *
 *  Copyright (c) 2021-2022 The MathJax Consortium
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
 * @fileoverview  Mixin that implements lazy typesetting
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { MathDocumentConstructor } from '../../core/MathDocument.js';
import { MathItem } from '../../core/MathItem.js';
import { HTMLMathItem } from '../../handlers/html/HTMLMathItem.js';
import { HTMLDocument } from '../../handlers/html/HTMLDocument.js';
import { HTMLHandler } from '../../handlers/html/HTMLHandler.js';
/**
 * Generic constructor for Mixins
 */
export type Constructor<T> = new (...args: any[]) => T;
/**
 * A set of lazy MathItems
 */
export type LazySet = Set<string>;
/**
 * The data to map expression marker IDs back to their MathItem.
 */
export declare class LazyList<N, T, D> {
    /**
     * The next ID to use
     */
    protected id: number;
    /**
     * The map from IDs to MathItems
     */
    protected items: Map<string, LazyMathItem<N, T, D>>;
    /**
     * Add a MathItem to the list and return its ID
     *
     * @param {LazyMathItem} math   The item to add
     * @return {string}             The id for the newly added item
     */
    add(math: LazyMathItem<N, T, D>): string;
    /**
     * Get the MathItem with the given ID
     *
     * @param {string} id       The ID of the MathItem to get
     * @return {LazyMathItem}   The MathItem having that ID (if any)
     */
    get(id: string): LazyMathItem<N, T, D>;
    /**
     * Remove an item from the map
     *
     * @param {string} id   The ID of the MathItem to remove
     */
    delete(id: string): boolean;
}
/**
 * The attribute to use for the ID on the marker node
 */
export declare const LAZYID = "data-mjx-lazy";
/**
 * The properties added to MathItem for lazy typesetting
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export interface LazyMathItem<N, T, D> extends MathItem<N, T, D> {
    /**
     * True when the MathItem needs to be lazy compiled
     */
    lazyCompile: boolean;
    /**
     * True when the MathItem needs to be lazy displayed
     */
    lazyTypeset: boolean;
    /**
     * The DOM node used to mark the location of the math to be lazy typeset
     */
    lazyMarker: N;
    /**
     * True if this item is a TeX MathItem
     */
    lazyTex: boolean;
}
/**
 * The mixin for adding lazy typesetting to MathItems
 *
 * @param {B} BaseMathItem      The MathItem class to be extended
 * @return {AssistiveMathItem}  The augmented MathItem class
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 * @template B  The MathItem class to extend
 */
export declare function LazyMathItemMixin<N, T, D, B extends Constructor<HTMLMathItem<N, T, D>>>(BaseMathItem: B): Constructor<LazyMathItem<N, T, D>> & B;
/**
 * The properties added to MathDocument for lazy typesetting
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export interface LazyMathDocument<N, T, D> extends HTMLDocument<N, T, D> {
    /**
     * The Intersection Observer used to track the appearance of the expression markers
     */
    lazyObserver: IntersectionObserver;
    /**
     * The mapping of markers to MathItems
     */
    lazyList: LazyList<N, T, D>;
    /**
     * The containers whose contents should always be typeset
     */
    lazyAlwaysContainers: N[];
    /**
     * A function that will typeset all the remaining expressions (e.g., for printing)
     */
    lazyTypesetAll(): Promise<void>;
    /**
     * Mark the math items that are to be always typeset
     */
    lazyAlways(): void;
}
/**
 * The mixin for adding lazy typesetting to MathDocuments
 *
 * @param {B} BaseDocument        The MathDocument class to be extended
 * @return {LazyMathDocument}     The Lazy MathDocument class
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 * @template B  The MathDocument class to extend
 */
export declare function LazyMathDocumentMixin<N, T, D, B extends MathDocumentConstructor<HTMLDocument<N, T, D>>>(BaseDocument: B): MathDocumentConstructor<HTMLDocument<N, T, D>> & B;
/**
 * Add lazy typesetting support to a Handler instance
 *
 * @param {Handler} handler   The Handler instance to enhance
 * @return {Handler}          The handler that was modified (for purposes of chaining extensions)
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare function LazyHandler<N, T, D>(handler: HTMLHandler<N, T, D>): HTMLHandler<N, T, D>;
