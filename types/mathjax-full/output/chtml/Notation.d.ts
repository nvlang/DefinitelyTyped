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
 * @fileoverview  Implements utilities for notations for menclose elements
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { CHTMLmenclose } from './Wrappers/menclose.js';
import * as Notation from '../common/Notation.js';
export * from '../common/Notation.js';
export type RENDERER<N, T, D> = Notation.Renderer<CHTMLmenclose<N, T, D>, N>;
export type DEFPAIR<N, T, D> = Notation.DefPair<CHTMLmenclose<N, T, D>, N>;
/**
 * Create a named element (handled by CSS), and adjust it if thickness is non-standard
 *
 * @param {string} name    The name of the element to create
 * @param {string} offset  The offset direction to adjust if thickness is non-standard
 * @return {RENDERER}      The renderer function for the given element name
 */
export declare const RenderElement: <N, T, D>(name: string, offset?: string) => RENDERER<N, T, D>;
/**
 * @param {Notation.Side} side   The side on which a border should appear
 * @return {DEFPAIR}      The notation definition for the notation having a line on the given side
 */
export declare const Border: <N, T, D>(side: Notation.Side) => DEFPAIR<N, T, D>;
/**
 * @param {string} name    The name of the notation to define
 * @param {Notation.Side} side1   The first side to get a border
 * @param {Notation.Side} side2   The second side to get a border
 * @return {DEFPAIR}       The notation definition for the notation having lines on two sides
 */
export declare const Border2: <N, T, D>(name: string, side1: Notation.Side, side2: Notation.Side) => DEFPAIR<N, T, D>;
/**
 * @param {string} name  The name of the diagonal strike to define
 * @param {number} neg   1 or -1 to use with the angle
 * @return {DEFPAIR}     The notation definition for the diagonal strike
 */
export declare const DiagonalStrike: <N, T, D>(name: string, neg: number) => DEFPAIR<N, T, D>;
/**
 * @param {string} name   The name of the diagonal arrow to define
 * @return {DEFPAIR}      The notation definition for the diagonal arrow
 */
export declare const DiagonalArrow: <N, T, D>(name: string) => DEFPAIR<N, T, D>;
/**
 * @param {string} name   The name of the horizontal or vertical arrow to define
 * @return {DEFPAIR}      The notation definition for the arrow
 */
export declare const Arrow: <N, T, D>(name: string) => DEFPAIR<N, T, D>;
