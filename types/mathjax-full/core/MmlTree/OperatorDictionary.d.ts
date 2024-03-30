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
 * @fileoverview  Defines the operator dictionary structure
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { PropertyList } from '../Tree/Node.js';
/**
 * Types needed for the operator dictionary
 */
export type OperatorDef = [number, number, number, PropertyList];
export type OperatorList = {
    [name: string]: OperatorDef;
};
export type RangeDef = [number, number, number, string, string?];
/**
 * @param {number} lspace            The operator's MathML left-hand spacing
 * @param {number} rspace            The operator's MathML right-hand spacing
 * @param {number} texClass          The default TeX class for the operator
 * @param {PropertyList} properties  Any default properties from the operator dictionary
 * @return {OperatorDef}             The operator definition array
 */
export declare function OPDEF(lspace: number, rspace: number, texClass?: number, properties?: PropertyList): OperatorDef;
/**
 *  The various kinds of operators in the dictionary
 */
export declare const MO: {
    ORD: OperatorDef;
    ORD11: OperatorDef;
    ORD21: OperatorDef;
    ORD02: OperatorDef;
    ORD55: OperatorDef;
    NONE: OperatorDef;
    OP: OperatorDef;
    OPFIXED: OperatorDef;
    INTEGRAL: OperatorDef;
    INTEGRAL2: OperatorDef;
    BIN3: OperatorDef;
    BIN4: OperatorDef;
    BIN01: OperatorDef;
    BIN5: OperatorDef;
    TALLBIN: OperatorDef;
    BINOP: OperatorDef;
    REL: OperatorDef;
    REL1: OperatorDef;
    REL4: OperatorDef;
    RELSTRETCH: OperatorDef;
    RELACCENT: OperatorDef;
    WIDEREL: OperatorDef;
    OPEN: OperatorDef;
    CLOSE: OperatorDef;
    INNER: OperatorDef;
    PUNCT: OperatorDef;
    ACCENT: OperatorDef;
    WIDEACCENT: OperatorDef;
};
/**
 *  The default TeX classes for the various unicode blocks, and their names
 */
export declare const RANGES: RangeDef[];
/**
 * Get the Unicode range for the first character of a string
 *
 * @param {string} text      The character to check
 * @return {RangeDef|null}   The range containing that character, or null
 */
export declare function getRange(text: string): RangeDef | null;
/**
 * The default MathML spacing for the various TeX classes.
 */
export declare const MMLSPACING: number[][];
/**
 *  The operator dictionary, with sections for the three forms:  prefix, postfix, and infix
 */
export declare const OPTABLE: {
    [form: string]: OperatorList;
};
