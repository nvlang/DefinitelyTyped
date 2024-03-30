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
 * @fileoverview  Implements the SVGmo wrapper for the MmlMo object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { SVGConstructor } from '../Wrapper.js';
import { BBox } from '../../../util/BBox.js';
import { SVGCharData } from '../FontData.js';
declare const SVGmo_base: import("../../common/Wrappers/mo.js").MoConstructor & SVGConstructor<any, any, any>;
/*****************************************************************/
/**
 * The SVGmo wrapper for the MmlMo object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class SVGmo<N, T, D> extends SVGmo_base {
    /**
     * The mo wrapper
     */
    static kind: string;
    /**
     * @override
     */
    toSVG(parent: N): void;
    /**
     * Create the SVG for a multi-character stretchy delimiter
     */
    protected stretchSVG(): void;
    /**
     * Get the variant array for the assembly pieces
     */
    protected getStretchVariants(): string[];
    /**
     * @param {number[]} stretch    The characters to use for stretching
     * @param {string[]} variant    The variants for the parts to use for stretching
     * @param {BBox} bbox           The full size of the stretched character
     */
    protected stretchVertical(stretch: number[], variant: string[], bbox: BBox): void;
    /**
     * @param {number[]} stretch    The characters to use for stretching
     * @param {string[]} variant    The variants for the parts to use for stretching
     * @param {BBox} bbox           The full size of the stretched character
     */
    protected stretchHorizontal(stretch: number[], variant: string[], bbox: BBox): void;
    /***********************************************************/
    /**
     * @param {number} n         The number of the character to look up
     * @param {string} variant   The variant for the character to look up
     * @return {SVGCharData}     The full CharData object, with CharOptions guaranteed to be defined
     */
    protected getChar(n: number, variant: string): SVGCharData;
    /**
     * @param {number} n         The character code for the glyph
     * @param {string} variant   The variant for the glyph
     * @param {number} x         The x position of the glyph
     * @param {number} y         The y position of the glyph
     * @param {N} parent         The container for the glyph
     * @return {number}          The width of the character placed
     */
    protected addGlyph(n: number, variant: string, x: number, y: number, parent?: N): number;
    /***********************************************************/
    /**
     * @param {number} n    The character number for the top glyph
     * @param {string} v    The variant for the top glyph
     * @param {number} H    The height of the stretched delimiter
     * @param {number} W    The width of the stretched delimiter
     * @return {number}     The total height of the top glyph
     */
    protected addTop(n: number, v: string, H: number, W: number): number;
    /**
     * @param {number} n    The character number for the extender glyph
     * @param {string} v    The variant for the extender glyph
     * @param {number} H    The height of the stretched delimiter
     * @param {number} D    The depth of the stretched delimiter
     * @param {number} T    The height of the top glyph in the delimiter
     * @param {number} B    The height of the bottom glyph in the delimiter
     * @param {number} W    The width of the stretched delimiter
     */
    protected addExtV(n: number, v: string, H: number, D: number, T: number, B: number, W: number): void;
    /**
     * @param {number} n    The character number for the bottom glyph
     * @param {string} v    The variant for the bottom glyph
     * @param {number} D    The depth of the stretched delimiter
     * @param {number} W    The width of the stretched delimiter
     * @return {number}     The total height of the bottom glyph
     */
    protected addBot(n: number, v: string, D: number, W: number): number;
    /**
     * @param {number} n    The character number for the middle glyph
     * @param {string} v    The variant for the middle glyph
     * @param {number} W    The width of the stretched delimiter
     * @return {[number, number]}   The top and bottom positions of the middle glyph
     */
    protected addMidV(n: number, v: string, W: number): [number, number];
    /***********************************************************/
    /**
     * @param {number} n   The character number for the left glyph of the stretchy character
     * @param {string} v   The variant for the left glyph
     * @return {number}    The width of the left glyph
     */
    protected addLeft(n: number, v: string): number;
    /**
     * @param {number} n   The character number for the extender glyph of the stretchy character
     * @param {string} v   The variant for the extender glyph
     * @param {number} W   The width of the stretched character
     * @param {number} L   The width of the left glyph of the stretchy character
     * @param {number} R   The width of the right glyph of the stretchy character
     * @param {number} x   The x-position of the extender (needed for ones with two extenders)
     */
    protected addExtH(n: number, v: string, W: number, L: number, R: number, x?: number): void;
    /**
     * @param {number} n   The character number for the right glyph of the stretchy character
     * @param {string} v   The variant for the right glyph
     * @param {number} W   The width of the stretched character
     * @return {number}    The width of the right glyph
     */
    protected addRight(n: number, v: string, W: number): number;
    /**
     * @param {number} n   The character number for the middle glyph of the stretchy character
     * @param {string} v   The variant for the middle glyph
     * @param {number} W   The width of the stretched character
     * @return {[number, number]}  The positions of the left and right edges of the middle glyph
     */
    protected addMidH(n: number, v: string, W: number): [number, number];
}
export {};
