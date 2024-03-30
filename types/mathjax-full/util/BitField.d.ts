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
 * @fileoverview  Implements bit-fields with extendable field names
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
export declare class BitField {
    /**
     * The largest bit available
     */
    protected static MAXBIT: number;
    /**
     * The next bit to be allocated
     */
    protected static next: number;
    /**
     * The map of names to bit positions
     */
    protected static names: Map<string, number>;
    /**
     * The bits that are set
     */
    protected bits: number;
    /**
     * @param {string} names    The names of the bit positions to reserve
     */
    static allocate(...names: string[]): void;
    /**
     * @param {string} name   The name of the bit to check for being defined
     * @return {boolean}      True if the named bit is already allocated
     */
    static has(name: string): boolean;
    /**
     * @param {string} name    The name of the bit position to set
     */
    set(name: string): void;
    /**
     * @param {string} name    The name of the bit position to clear
     */
    clear(name: string): void;
    /**
     * @param {string} name   The name of the bit to check if set
     * @return {boolean}      True if the named bit is set
     */
    isSet(name: string): boolean;
    /**
     * Clear all bits
     */
    reset(): void;
    /**
     * @param {string} name   The name whose bit position is needed (error if not defined)
     * @return {number}       The position of the named bit
     */
    protected getBit(name: string): number;
}
/**
 * @param {string[]} names    The name of the positions to allocate initially
 * @return {typeof AbstractBitField}  The bit-field class with names allocated
 */
export declare function BitFieldClass(...names: string[]): typeof BitField;
