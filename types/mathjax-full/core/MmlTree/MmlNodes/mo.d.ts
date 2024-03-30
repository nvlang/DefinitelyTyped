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
 * @fileoverview  Implements the MmlMo node
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { PropertyList } from '../../Tree/Node.js';
import { AbstractMmlTokenNode, MmlNode, AttributeList } from '../MmlNode.js';
import { OperatorList } from '../OperatorDictionary.js';
/*****************************************************************/
/**
 *  Implements the MmlMo node class (subclass of AbstractMmlTokenNode)
 */
export declare class MmlMo extends AbstractMmlTokenNode {
    /**
     * @override
     */
    static defaults: PropertyList;
    /**
     * The MathML spacing values for the TeX classes
     */
    static MMLSPACING: number[][];
    /**
     * The Operator Dictionary
     */
    static OPTABLE: {
        [form: string]: OperatorList;
    };
    /**
     * Pattern for matching when the contents is one ore more pseudoscripts
     */
    static pseudoScripts: RegExp;
    /**
     * Pattern for when contents is a collection of primes
     */
    protected static primes: RegExp;
    /**
     * Default map for remapping prime characters
     */
    protected static remapPrimes: {
        [n: number]: number;
    };
    /**
     * Regular expression matching characters that are marked as math accents
     */
    protected static mathaccents: RegExp;
    /**
     * The internal TeX class of the node (for use with getter/setter below)
     */
    _texClass: number;
    /**
     * Use a getter to look up the TeX class from the operator table if it hasn't
     * been set yet (but don't save it in case the form changes when it is in its
     * location).
     */
    get texClass(): number;
    /**
     * Use a setter to store the actual value in _texClass;
     */
    set texClass(value: number);
    /**
     * The default MathML spacing on the left
     */
    lspace: number;
    /**
     * The default MathML spacing on the right
     */
    rspace: number;
    /**
     * @override
     */
    get kind(): string;
    /**
     * All <mo> are considered embellished
     * @override
     */
    get isEmbellished(): boolean;
    /**
     * @return {boolean}  Is <mo> marked as an explicit linebreak?
     */
    get hasNewLine(): boolean;
    /**
     * @return {MmlNode}  The node that is the outermost embellished operator
     *                    with this node as its core
     */
    coreParent(): MmlNode;
    /**
     * @param {MmlNode} parent  The node whose core text is to be obtained
     * @return {string}         The text of the core MO of the given parent element
     */
    coreText(parent: MmlNode): string;
    /**
     * @override
     */
    hasSpacingAttributes(): boolean;
    /**
     * @return {boolean}  True is this mo is an accent in an munderover construction
     */
    get isAccent(): boolean;
    /**
     * Produce the texClass based on the operator dictionary values
     *
     * @override
     */
    setTeXclass(prev: MmlNode): MmlNode;
    /**
     * Follow the TeXBook rules for adjusting the TeX class once its neighbors are known
     *
     * @param {MmlNode} prev  The node appearing before this one in the output
     * @return {MmlNode}      The last node displayed (this node)
     */
    adjustTeXclass(prev: MmlNode): MmlNode;
    /**
     * Do the normal inheritance, then look up the attributes from the operator dictionary.
     * If there is no dictionary entry, get the TeX class from the Unicode range list.
     *
     * @override
     */
    setInheritedAttributes(attributes?: AttributeList, display?: boolean, level?: number, prime?: boolean): void;
    /**
     * Set the attributes from the operator table
     *
     * @param {string} mo   The test of the mo element
     */
    protected checkOperatorTable(mo: string): void;
    /**
     * @return {[string, string, string]}  The list of form attribute values in the
     *                                     order they should be tested, based on the
     *                                     position of the element in its parent.
     */
    getForms(): [string, string, string];
    /**
     * @param {string[]} forms     The three forms in the default order they are to be tested
     * @return {string[]}          The forms in the new order, if there is an explicit form attribute
     */
    protected handleExplicitForm(forms: string[]): string[];
    /**
     * Mark the mo as a pseudoscript if it is one.  True means it is,
     *   false means it is a pseudo-script character, but in an msup (so needs a variant form)
     *
     * @param {string} mo   The test of the mo element
     */
    protected checkPseudoScripts(mo: string): void;
    /**
     * Determine whether the mo consists of primes, and remap them if so.
     *
     * @param {string} mo   The test of the mo element
     */
    protected checkPrimes(mo: string): void;
    /**
     * Determine whether the mo is a mathaccent character
     *
     * @param {string} mo   The test of the mo element
     */
    protected checkMathAccent(mo: string): void;
}
