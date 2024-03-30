/*************************************************************
 *
 *  Copyright (c) 2009-2022 The MathJax Consortium
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
 * @fileoverview A namespace for utility functions for the TeX Parser.
 *
 * @author v.sorge@mathjax.org (Volker Sorge)
 */
import { MmlNode } from '../../core/MmlTree/MmlNode.js';
import { EnvList } from './StackItem.js';
import { ArrayItem } from './base/BaseItems.js';
import ParseOptions from './ParseOptions.js';
import TexParser from './TexParser.js';
declare namespace ParseUtil {
    /**
     * Matches for a dimension argument.
     * @param {string} dim The argument.
     * @param {boolean} rest Allow for trailing garbage in the dimension string.
     * @return {[string, string, number]} The match result as (Anglosaxon) value,
     *     unit name, length of matched string. The latter is interesting in the
     *     case of trailing garbage.
     */
    function matchDimen(dim: string, rest?: boolean): [string, string, number];
    /**
     * Convert a dimension string into standard em dimension.
     * @param {string} dim The attribute string.
     * @return {number} The numerical value.
     */
    function dimen2em(dim: string): number;
    /**
     * Turns a number into an em value.
     * @param {number} m The number.
     * @return {string} The em dimension string.
     */
    function Em(m: number): string;
    /**
     * Takes an array of numbers and returns a space-separated string of em values.
     * @param {number[]} W  The widths to be turned into em values
     * @return {string}     The numbers with em units, separated by spaces.
     */
    function cols(...W: number[]): string;
    /**
     * Create an mrow that has stretchy delimiters at either end, as needed
     * @param {ParseOptions} configuration Current parse options.
     * @param {string} open The opening fence.
     * @param {MmlNode} mml The enclosed node.
     * @param {string} close The closing fence.
     * @param {string=} big Bigg command.
     */
    function fenced(configuration: ParseOptions, open: string, mml: MmlNode, close: string, big?: string, color?: string): MmlNode;
    /**
     *  Create an mrow that has \\mathchoice using \\bigg and \\big for the delimiters.
     * @param {ParseOptions} configuration The current parse options.
     * @param {string} open The opening fence.
     * @param {MmlNode} mml The enclosed node.
     * @param {string} close The closing fence.
     * @return {MmlNode} The mrow node.
     */
    function fixedFence(configuration: ParseOptions, open: string, mml: MmlNode, close: string): MmlNode;
    /**
     * Generates a mathchoice element for fences. These will be resolved later,
     * once the position, and therefore size, of the of the fenced expression is
     * known.
     * @param {ParseOptions} configuration The current parse otpions.
     * @param {string} fence The fence.
     * @param {string} side The side of the fence (l or r).
     * @return {MmlNode} The mathchoice node.
     */
    function mathPalette(configuration: ParseOptions, fence: string, side: string): MmlNode;
    /**
     * If the initial child, skipping any initial space or
     * empty braces (TeXAtom with child being an empty inferred row),
     * is an <mo>, precede it by an empty <mi> to force the <mo> to
     * be infix.
     * @param {ParseOptions} configuration The current parse options.
     * @param {MmlNode[]} nodes The row of nodes to scan for an initial <mo>
     */
    function fixInitialMO(configuration: ParseOptions, nodes: MmlNode[]): void;
    /**
     * Break up a string into text and math blocks.
     * @param {TexParser} parser The calling parser.
     * @param {string} text The text in the math expression to parse.
     * @param {number|string=} level The scriptlevel.
     * @param {string} font The mathvariant to use
     * @return {MmlNode[]} The nodes corresponding to the internal math expression.
     */
    function internalMath(parser: TexParser, text: string, level?: number | string, font?: string): MmlNode[];
    /**
     * Parses text internal to boxes or labels.
     * @param {TexParser} parser The current tex parser.
     * @param {string} text The text to parse.
     * @param {EnvList} def The attributes of the text node.
     * @return {MmlNode} The text node.
     */
    function internalText(parser: TexParser, text: string, def: EnvList): MmlNode;
    /**
     * Create an munderover node with the given script position.
     * @param {TexParser} parser   The current TeX parser.
     * @param {MmlNode} base       The base node.
     * @param {MmlNode} script     The under- or over-script.
     * @param {string} pos         Either 'over' or 'under'.
     * @param {boolean} stack      True if super- or sub-scripts should stack.
     * @return {MmlNode}           The generated node (MmlMunderover or TeXAtom)
     */
    function underOver(parser: TexParser, base: MmlNode, script: MmlNode, pos: string, stack: boolean): MmlNode;
    /**
     * Set movablelimits to false if necessary.
     * @param {MmlNode} base   The base node being tested.
     */
    function checkMovableLimits(base: MmlNode): void;
    /**
     * Trim spaces from a string.
     * @param {string} text The string to clean.
     * @return {string} The string with leading and trailing whitespace removed.
     */
    function trimSpaces(text: string): string;
    /**
     * Sets alignment in array definitions.
     * @param {ArrayItem} array The array item.
     * @param {string} align The alignment string.
     * @return {ArrayItem} The altered array item.
     */
    function setArrayAlign(array: ArrayItem, align: string): ArrayItem;
    /**
     * Replace macro parameters with their values.
     * @param {TexParser} parser The current TeX parser.
     * @param {string[]} args A list of arguments for macro parameters.
     * @param {string} str The macro parameter string.
     * @return {string} The string with all parameters replaced by arguments.
     */
    function substituteArgs(parser: TexParser, args: string[], str: string): string;
    /**
     * Adds a new expanded argument to an already macro parameter string.  Makes
     * sure that macros are followed by a space if their names could accidentally
     * be continued into the following text.
     * @param {TexParser} parser The current TeX parser.
     * @param {string} s1 The already expanded string.
     * @param {string} s2 The string to add.
     * @return {string} The combined string.
     */
    function addArgs(parser: TexParser, s1: string, s2: string): string;
    /**
     * Report an error if there are too many macro substitutions.
     * @param {TexParser} parser The current TeX parser.
     * @param {boolean} isMacro  True if we are substituting a macro, false for environment.
     */
    function checkMaxMacros(parser: TexParser, isMacro?: boolean): void;
    /**
     *  Check for bad nesting of equation environments
     */
    function checkEqnEnv(parser: TexParser): void;
    /**
     * Copy an MmlNode and add it (and its children) to the proper lists.
     *
     * @param {MmlNode} node       The MmlNode to copy
     * @param {TexParser} parser   The active tex parser
     * @return {MmlNode}           The duplicate tree
     */
    function copyNode(node: MmlNode, parser: TexParser): MmlNode;
    /**
     * This is a placeholder for future security filtering of attributes.
     * @param {TexParser} parser The current parser.
     * @param {string} name The attribute name.
     * @param {string} value The attribute value to filter.
     * @return {string} The filtered value.
     */
    function MmlFilterAttribute(_parser: TexParser, _name: string, value: string): string;
    /**
     * Initialises an stack environment with current font definition in the parser.
     * @param {TexParser} parser The current tex parser.
     * @return {EnvList} The initialised environment list.
     */
    function getFontDef(parser: TexParser): EnvList;
    /**
     * Splits a package option list of the form [x=y,z=1] into an attribute list
     * of the form {x: y, z: 1}.
     * @param {string} attrib The attributes of the package.
     * @param {{[key: string]: number}?} allowed A list of allowed options. If
     *     given only allowed arguments are returned.
     * @param {boolean?} error If true, raises an exception if not allowed options
     *     are found.
     * @return {EnvList} The attribute list.
     */
    function keyvalOptions(attrib: string, allowed?: {
        [key: string]: number;
    }, error?: boolean): EnvList;
}
export default ParseUtil;
