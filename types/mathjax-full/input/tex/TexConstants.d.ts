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
 * @fileoverview Constant definitions for the TeX Parser. These should
 *     eventually be combined with the MathML structure.
 *
 * @author v.sorge@mathjax.org (Volker Sorge)
 */
export declare namespace TexConstant {
    const Variant: {
        NORMAL: string;
        BOLD: string;
        ITALIC: string;
        BOLDITALIC: string;
        DOUBLESTRUCK: string;
        FRAKTUR: string;
        BOLDFRAKTUR: string;
        SCRIPT: string;
        BOLDSCRIPT: string;
        SANSSERIF: string;
        BOLDSANSSERIF: string;
        SANSSERIFITALIC: string;
        SANSSERIFBOLDITALIC: string;
        MONOSPACE: string;
        INITIAL: string;
        TAILED: string;
        LOOPED: string;
        STRETCHED: string;
        CALLIGRAPHIC: string;
        BOLDCALLIGRAPHIC: string;
        OLDSTYLE: string;
        BOLDOLDSTYLE: string;
        MATHITALIC: string;
    };
    const Form: {
        PREFIX: string;
        INFIX: string;
        POSTFIX: string;
    };
    const LineBreak: {
        AUTO: string;
        NEWLINE: string;
        NOBREAK: string;
        GOODBREAK: string;
        BADBREAK: string;
    };
    const LineBreakStyle: {
        BEFORE: string;
        AFTER: string;
        DUPLICATE: string;
        INFIXLINBREAKSTYLE: string;
    };
    const IndentAlign: {
        LEFT: string;
        CENTER: string;
        RIGHT: string;
        AUTO: string;
        ID: string;
        INDENTALIGN: string;
    };
    const IndentShift: {
        INDENTSHIFT: string;
    };
    const LineThickness: {
        THIN: string;
        MEDIUM: string;
        THICK: string;
    };
    const Notation: {
        LONGDIV: string;
        ACTUARIAL: string;
        PHASORANGLE: string;
        RADICAL: string;
        BOX: string;
        ROUNDEDBOX: string;
        CIRCLE: string;
        LEFT: string;
        RIGHT: string;
        TOP: string;
        BOTTOM: string;
        UPDIAGONALSTRIKE: string;
        DOWNDIAGONALSTRIKE: string;
        VERTICALSTRIKE: string;
        HORIZONTALSTRIKE: string;
        NORTHEASTARROW: string;
        MADRUWB: string;
        UPDIAGONALARROW: string;
    };
    const Align: {
        TOP: string;
        BOTTOM: string;
        CENTER: string;
        BASELINE: string;
        AXIS: string;
        LEFT: string;
        RIGHT: string;
    };
    const Lines: {
        NONE: string;
        SOLID: string;
        DASHED: string;
    };
    const Side: {
        LEFT: string;
        RIGHT: string;
        LEFTOVERLAP: string;
        RIGHTOVERLAP: string;
    };
    const Width: {
        AUTO: string;
        FIT: string;
    };
    const Actiontype: {
        TOGGLE: string;
        STATUSLINE: string;
        TOOLTIP: string;
        INPUT: string;
    };
    const Overflow: {
        LINBREAK: string;
        SCROLL: string;
        ELIDE: string;
        TRUNCATE: string;
        SCALE: string;
    };
    const Unit: {
        EM: string;
        EX: string;
        PX: string;
        IN: string;
        CM: string;
        MM: string;
        PT: string;
        PC: string;
    };
}
