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
 * @fileoverview  Implements the elementary MathML3 support (experimental)
 *                using David Carlisle's XLST transform.
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { MathItem } from '../../../core/MathItem.js';
import { MathDocument } from '../../../core/MathDocument.js';
import { Handler } from '../../../core/Handler.js';
/**
 * The data for a MathML prefilter.
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export type FILTERDATA<N, T, D> = {
    math: MathItem<N, T, D>;
    document: MathDocument<N, T, D>;
    data: N;
};
/**
 * Class that handles XSLT transform for MathML3 elementary math tags.
 */
export declare class Mml3<N, T, D> {
    /**
     * The XSLT transform as a string;
     */
    static XSLT: string;
    /**
     * The function to convert serialized MathML using the XSLT.
     * (Different for browser and node environments.)
     */
    protected transform: (node: N, doc: MathDocument<N, T, D>) => N;
    /**
     * @param {MathDocument} document   The MathDocument for the transformation
     * @constructor
     */
    constructor(document: MathDocument<N, T, D>);
    /**
     * The mathml filter for the MathML input jax
     *
     * @param {FILTERDATA} args  The data from the pre-filter chain.
     */
    mmlFilter(args: FILTERDATA<N, T, D>): void;
}
/**
 *  Add Mml3 support into the handler.
 */
export declare function Mml3Handler<N, T, D>(handler: Handler<N, T, D>): Handler<N, T, D>;
