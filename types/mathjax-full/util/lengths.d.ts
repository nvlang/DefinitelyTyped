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
 * @fileoverview  Utility functions for handling dimensions (lengths)
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
/**
 *  A very large number
 */
export declare const BIGDIMEN = 1000000;
/**
 *  Sizes of various units in pixels
 */
export declare const UNITS: {
    [unit: string]: number;
};
/**
 *  Sizes of various relative units in em's
 */
export declare const RELUNITS: {
    [unit: string]: number;
};
/**
 *  The various named spaces
 */
export declare const MATHSPACE: {
    [name: string]: number;
};
/**
 * @param {string|number} length  A dimension (giving number and units) to be converted to ems
 * @param {number} size           The default size of the dimension (for percentage values)
 * @param {number} scale          The current scaling factor (to handle absolute units)
 * @param {number} em             The size of an em in pixels
 * @return {number}               The dimension converted to ems
 */
export declare function length2em(length: string | number, size?: number, scale?: number, em?: number): number;
/**
 * @param {number} m  A number to be shown as a percent
 * @return {string}   The number m as a percent
 */
export declare function percent(m: number): string;
/**
 * @param {number} m  A number to be shown in ems
 * @return {string}   The number with units of ems
 */
export declare function em(m: number): string;
/**
 * @param {number} m   A number to be shown in ems, but rounded to pixel boundaries
 * @param {number} em  The number of pixels in an em
 * @return {string}    The number with units of em
 */
export declare function emRounded(m: number, em?: number): string;
/**
 * @param {number} m   A number of em's to be shown as pixels
 * @param {number} M   The minimum number of pixels to allow
 * @param {number} em  The number of pixels in an em
 * @return {string}    The number with units of px
 */
export declare function px(m: number, M?: number, em?: number): string;
