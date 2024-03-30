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
import { SVGmenclose } from './Wrappers/menclose.js';
import * as Notation from '../common/Notation.js';
export * from '../common/Notation.js';
/*******************************************************************/
/**
 * Shorthand for SVGmenclose
 */
export type Menclose = SVGmenclose<any, any, any>;
export type RENDERER<N, T, D> = Notation.Renderer<SVGmenclose<N, T, D>, N>;
export type DEFPAIR<N, T, D> = Notation.DefPair<SVGmenclose<N, T, D>, N>;
/**
 * The kinds of lines that can be drawn
 */
export type LineName = Notation.Side | ('vertical' | 'horizontal' | 'up' | 'down');
/**
 * [x1,y1, x2,y2] endpoints for a line
 */
export type LineData = [number, number, number, number];
/**
 * Functions for computing the line data for each type of line
 */
export declare const computeLineData: {
    [kind: string]: (h: number, d: number, w: number, t: number) => LineData;
};
/**
 * The data for a given line as two endpoints: [x1, y1, x2, y1]
 *
 * @param {Menclose} node   The node whose line is to be drawn
 * @param {LineName} kind   The type of line to draw for the node
 * @param {string} offset   The offset direction, if any
 * @return {LineData}       The coordinates of the two endpoints
 */
export declare const lineData: (node: Menclose, kind: LineName, offset?: string) => LineData;
/**
 * Recenter the line data for vertical and horizontal lines
 *
 * @param {LineData} data   The line endpoints to adjust
 * @param {Menclose} node   The menclose node
 * @param {string} offset   The direction to offset
 */
export declare const lineOffset: (data: LineData, node: Menclose, offset: string) => LineData;
/*******************************************************************/
/**
 * @param {LineName} line  The name of the line to create
 * @return {RENDERER}      The renderer function for the given line
 */
export declare const RenderLine: <N, T, D>(line: LineName, offset?: string) => RENDERER<N, T, D>;
/*******************************************************************/
/**
 * @param {Notation.Side} side   The kind of line (side, diagonal, etc.)
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
/*******************************************************************/
/**
 * @param {LineName} name  The name of the diagonal strike to define
 * @return {DEFPAIR}       The notation definition for the diagonal strike
 */
export declare const DiagonalStrike: <N, T, D>(name: LineName) => DEFPAIR<N, T, D>;
/*******************************************************************/
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
/*******************************************************************/
