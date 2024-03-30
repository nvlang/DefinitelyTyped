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
 * @fileoverview  Implements the FontCache object for SVG output
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { SVG } from '../svg.js';
export declare class FontCache<N, T, D> {
    /**
     * The SVG jax that owsn this cache
     */
    protected jax: SVG<N, T, D>;
    /**
     * The cache of font character IDs to their paths
     */
    protected cache: Map<string, string>;
    /**
     * The SVG <defs> element for storing the cache
     */
    protected defs: N;
    /**
     * A string to use to make per-equation cache IDs unique
     */
    protected localID: string;
    /**
     * A number used to make localID values to use for each equation
     */
    protected nextID: number;
    /**
     * @param {SVG} jax  The SVG jax owning this font cache
     */
    constructor(jax: SVG<N, T, D>);
    /**
     * Cache a character from a particular variant and return the cache ID
     *
     * @param {string} variant   The variant name for the character
     * @param {string} C         The character to be cached
     * @param {string} path      The SVG path data for the character
     * @return {string}          The id for the cached <path> element
     */
    cachePath(variant: string, C: string, path: string): string;
    /**
     * Clear the localID value
     */
    clearLocalID(): void;
    /**
     * Use a localID (for font-specific caching), either with a specific string,
     * or from the nextID number.
     */
    useLocalID(id?: string): void;
    /**
     * Clear the cache
     */
    clearCache(): void;
    /**
     * Return the font cache <defs> element
     */
    getCache(): N;
}
