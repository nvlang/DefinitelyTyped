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
import { AnyWrapper } from './Wrapper.js';
import { CommonMenclose } from './Wrappers/menclose.js';
/*****************************************************************/
export declare const ARROWX = 4, ARROWDX = 1, ARROWY = 2;
export declare const THICKNESS = 0.067;
export declare const PADDING = 0.2;
export declare const SOLID: string;
/*****************************************************************/
/**
 * Shorthand for CommonMenclose
 */
export type Menclose = CommonMenclose<any, any, any>;
/**
 * Top, right, bottom, left padding data
 */
export type PaddingData = [number, number, number, number];
/**
 * The functions used for notation definitions
 *
 * @templare N  The DOM node class
 */
export type Renderer<W extends AnyWrapper, N> = (node: W, child: N) => void;
export type BBoxExtender<W extends AnyWrapper> = (node: W) => PaddingData;
export type BBoxBorder<W extends AnyWrapper> = (node: W) => PaddingData;
export type Initializer<W extends AnyWrapper> = (node: W) => void;
/**
 * The definition of a notation
 *
 * @template W  The menclose wrapper class
 * @templare N  The DOM node class
 */
export type NotationDef<W extends AnyWrapper, N> = {
    renderer: Renderer<W, N>;
    bbox: BBoxExtender<W>;
    border?: BBoxBorder<W>;
    renderChild?: boolean;
    init?: Initializer<W>;
    remove?: string;
};
/**
 * For defining notation maps
 *
 * @template W  The menclose wrapper class
 * @templare N  The DOM node class
 */
export type DefPair<W extends AnyWrapper, N> = [string, NotationDef<W, N>];
export type DefList<W extends AnyWrapper, N> = Map<string, NotationDef<W, N>>;
export type DefPairF<T, W extends AnyWrapper, N> = (name: T) => DefPair<W, N>;
/**
 * The list of notations for an menclose element
 *
 * @template W  The menclose wrapper class
 * @templare N  The DOM node class
 */
export type List<W extends AnyWrapper, N> = {
    [notation: string]: NotationDef<W, N>;
};
/*****************************************************************/
/**
 * The names and indices of sides for borders, padding, etc.
 */
export declare const sideIndex: {
    top: number;
    right: number;
    bottom: number;
    left: number;
};
export type Side = keyof typeof sideIndex;
export declare const sideNames: ("left" | "top" | "bottom" | "right")[];
/**
 * Common BBox and Border functions
 */
export declare const fullBBox: BBoxExtender<Menclose>;
export declare const fullPadding: BBoxExtender<Menclose>;
export declare const fullBorder: BBoxBorder<Menclose>;
/*****************************************************************/
/**
 * The length of an arrowhead
 */
export declare const arrowHead: (node: Menclose) => number;
/**
 * Adjust short bbox for tall arrow heads
 */
export declare const arrowBBoxHD: (node: Menclose, TRBL: PaddingData) => PaddingData;
/**
 * Adjust thin bbox for wide arrow heads
 */
export declare const arrowBBoxW: (node: Menclose, TRBL: PaddingData) => PaddingData;
/**
 * The data for horizontal and vertical arrow notations
 *   [angle, double, isVertical, remove]
 */
export declare const arrowDef: {
    [name: string]: [number, boolean, boolean, string];
};
/**
 * The data for diagonal arrow notations
 *   [c, pi, double, remove]
 */
export declare const diagonalArrowDef: {
    [name: string]: [number, number, boolean, string];
};
/**
 * The BBox functions for horizontal and vertical arrows
 */
export declare const arrowBBox: {
    [name: string]: BBoxExtender<Menclose>;
};
/*****************************************************************/
/**
 * @param {Renderer} render     The function for adding the border to the node
 * @return {string => DefPair}  The function returingn the notation definition
 *                              for the notation having a line on the given side
 */
export declare const CommonBorder: <W extends Menclose, N>(render: Renderer<W, N>) => DefPairF<Side, W, N>;
/**
 * @param {Renderer} render                    The function for adding the borders to the node
 * @return {(sring, Side, Side) => DefPair}    The function returning the notation definition
 *                                             for the notation having lines on two sides
 */
export declare const CommonBorder2: <W extends Menclose, N>(render: Renderer<W, N>) => (name: string, side1: Side, side2: Side) => DefPair<W, N>;
/*****************************************************************/
/**
 * @param {string => Renderer} render      The function for adding the strike to the node
 * @return {string => DefPair}   The function returning the notation definition for the diagonal strike
 */
export declare const CommonDiagonalStrike: <W extends Menclose, N>(render: (sname: string) => Renderer<W, N>) => DefPairF<string, W, N>;
/*****************************************************************/
/**
 * @param {Renderer} render     The function to add the arrow to the node
 * @return {string => DefPair}  The funciton returning the notation definition for the diagonal arrow
 */
export declare const CommonDiagonalArrow: <W extends Menclose, N>(render: Renderer<W, N>) => DefPairF<string, W, N>;
/**
 * @param {Renderer} render     The function to add the arrow to the node
 * @return {string => DefPair}  The function returning the notation definition for the arrow
 */
export declare const CommonArrow: <W extends Menclose, N>(render: Renderer<W, N>) => DefPairF<string, W, N>;
