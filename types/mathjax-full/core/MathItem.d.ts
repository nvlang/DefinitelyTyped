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
 * @fileoverview  Implements the interface and abstract class for MathItem objects
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { MathDocument } from './MathDocument.js';
import { InputJax } from './InputJax.js';
import { OptionList } from '../util/Options.js';
import { MmlNode } from './MmlTree/MmlNode.js';
/*****************************************************************/
/**
 *  The Location gives a location of a position in a document
 *  (either a node and character position within it, or
 *  an index into a string array, the character position within
 *  the string, and the delimiter at that location).
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 */
export type Location<N, T> = {
    i?: number;
    n?: number;
    delim?: string;
    node?: N | T;
};
/*****************************************************************/
/**
 *  The Metrics object includes the data needed to typeset
 *  a MathItem.
 */
export type Metrics = {
    em: number;
    ex: number;
    containerWidth: number;
    lineWidth: number;
    scale: number;
};
/*****************************************************************/
/**
 *  The MathItem interface
 *
 *  The MathItem is the object that holds the information about a
 *  particular expression on the page, including pointers to
 *  where it is in the document, its compiled version (in the
 *  internal format), its typeset version, its bounding box,
 *  and so on.
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export interface MathItem<N, T, D> {
    /**
     * The string representing the expression to be processed
     */
    math: string;
    /**
     * The input jax used to process the math
     */
    inputJax: InputJax<N, T, D>;
    /**
     * Whether the math is in display mode or inline mode
     */
    display: boolean;
    /**
     * Whether this item is an escaped character or not
     */
    isEscaped: boolean;
    /**
     * The start and ending locations in the document of
     *   this expression
     */
    start: Location<N, T>;
    end: Location<N, T>;
    /**
     * The internal format for this expression (once compiled)
     */
    root: MmlNode;
    /**
     * The typeset version of the expression (once typeset)
     */
    typesetRoot: N;
    /**
     * The metric information at the location of the math
     * (the em-size, scaling factor, etc.)
     */
    metrics: Metrics;
    /**
     * Extra data needed by the input or output jax, as needed
     */
    inputData: OptionList;
    outputData: OptionList;
    /**
     * Perform the renderActions on the document
     *
     * @param {MathDocument} document  The MathDocument in which the math resides
     */
    render(document: MathDocument<N, T, D>): void;
    /**
     * Rerenders an already rendered item and inserts it into the document
     *
     * @param {MathDocument} document  The MathDocument in which the math resides
     * @param {number=} start          The state to start rerendering at (default = RERENDER)
     */
    rerender(document: MathDocument<N, T, D>, start?: number): void;
    /**
     * Converts the expression by calling the render actions until the state matches the end state
     *
     * @param {MathDocument} document  The MathDocument in which the math resides
     * @param {number=} end            The state to end rerendering at (default = LAST)
     */
    convert(document: MathDocument<N, T, D>, end?: number): void;
    /**
     * Converts the expression into the internal format by calling the input jax
     *
     * @param {MathDocument} document  The MathDocument in which the math resides
     */
    compile(document: MathDocument<N, T, D>): void;
    /**
     * Converts the internal format to the typeset version by calling the output jax
     *
     * @param {MathDocument} document  The MathDocument in which the math resides
     */
    typeset(document: MathDocument<N, T, D>): void;
    /**
     * Inserts the typeset version in place of the original form in the document
     *
     * @param {MathDocument} document  The MathDocument in which the math resides
     */
    updateDocument(document: MathDocument<N, T, D>): void;
    /**
     * Removes the typeset version from the document, optionally replacing the original
     * form of the expression and its delimiters.
     *
     * @param {boolean} restore  True if the original version is to be restored
     */
    removeFromDocument(restore: boolean): void;
    /**
     * Sets the metric information for this expression
     *
     * @param {number} em      The size of 1 em in pixels
     * @param {number} ex      The size of 1 ex in pixels
     * @param {number} cwidth  The container width in pixels
     * @param {number} lwidth  The line breaking width in pixels
     * @param {number} scale   The scaling factor (unitless)
     */
    setMetrics(em: number, ex: number, cwidth: number, lwidth: number, scale: number): void;
    /**
     * Set or return the current processing state of this expression,
     * optionally restoring the document if rolling back an expression
     * that has been added to the document.
     *
     * @param {number} state    The state to set for the expression
     * @param {number} restore  True if the original form should be restored
     *                           to the document when rolling back a typeset version
     * @returns {number}        The current state
     */
    state(state?: number, restore?: boolean): number;
    /**
     * Reset the item to its unprocessed state
     *
     * @param {number} restore  True if the original form should be restored
     *                           to the document when rolling back a typeset version
     */
    reset(restore?: boolean): void;
}
/*****************************************************************/
/**
 *  The ProtoItem interface
 *
 *  This is what is returned by the FindMath class, giving the location
 *  of math within the document, and is used to produce the full
 *  MathItem later (e.g., when the position within a string array
 *  is translated back into the actual node location in the DOM).
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 */
export type ProtoItem<N, T> = {
    math: string;
    start: Location<N, T>;
    end: Location<N, T>;
    open?: string;
    close?: string;
    n?: number;
    display: boolean;
};
/**
 *  Produce a proto math item that can be turned into a MathItem
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 */
export declare function protoItem<N, T>(open: string, math: string, close: string, n: number, start: number, end: number, display?: boolean): ProtoItem<N, T>;
/*****************************************************************/
/**
 *  Implements the MathItem class
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare abstract class AbstractMathItem<N, T, D> implements MathItem<N, T, D> {
    /**
     * The source text for the math (e.g., TeX string)
     */
    math: string;
    /**
     * The input jax associated with this item
     */
    inputJax: InputJax<N, T, D>;
    /**
     * True when this math is in display mode
     */
    display: boolean;
    /**
     * Reference to the beginning of the math in the document
     */
    start: Location<N, T>;
    /**
     * Reference to the end of the math in the document
     */
    end: Location<N, T>;
    /**
     * The compiled internal MathML (result of InputJax)
     */
    root: MmlNode;
    /**
     * The typeset result (result of OutputJax)
     */
    typesetRoot: N;
    /**
     * The metric information about the surrounding environment
     */
    metrics: Metrics;
    /**
     * Data private to the input jax
     */
    inputData: OptionList;
    /**
     * Data private to the output jax
     */
    outputData: OptionList;
    /**
     * The current state of the item (how far in the render actions it has been processed)
     */
    protected _state: number;
    /**
     * @return {boolean}   True when this item is an escaped delimiter
     */
    get isEscaped(): boolean;
    /**
     * @param {string} math      The math expression for this item
     * @param {Inputjax} jax     The input jax to use for this item
     * @param {boolean} display  True if display mode, false if inline
     * @param {Location} start   The starting position of the math in the document
     * @param {Location} end     The ending position of the math in the document
     * @constructor
     */
    constructor(math: string, jax: InputJax<N, T, D>, display?: boolean, start?: Location<N, T>, end?: Location<N, T>);
    /**
     * @override
     */
    render(document: MathDocument<N, T, D>): void;
    /**
     * @override
     */
    rerender(document: MathDocument<N, T, D>, start?: number): void;
    /**
     * @override
     */
    convert(document: MathDocument<N, T, D>, end?: number): void;
    /**
     * @override
     */
    compile(document: MathDocument<N, T, D>): void;
    /**
     * @override
     */
    typeset(document: MathDocument<N, T, D>): void;
    /**
     * @override
     */
    updateDocument(_document: MathDocument<N, T, D>): void;
    /**
     * @override
     */
    removeFromDocument(_restore?: boolean): void;
    /**
     * @override
     */
    setMetrics(em: number, ex: number, cwidth: number, lwidth: number, scale: number): void;
    /**
     * @override
     */
    state(state?: number, restore?: boolean): number;
    /**
     * @override
     */
    reset(restore?: boolean): void;
}
/*****************************************************************/
/**
 * The various states that a MathItem (or MathDocument) can be in
 *   (open-ended so that extensions can add to it)
 */
export declare const STATE: {
    [state: string]: number;
};
/**
 * Allocate a new named state
 *
 * @param {string} name    The name of the new state
 * @param {number} state   The value for the new state
 */
export declare function newState(name: string, state: number): void;
