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
 * @fileoverview  Implementation of the Compile function for the MathML input jax
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { MmlFactory } from '../../core/MmlTree/MmlFactory.js';
import { MmlNode } from '../../core/MmlTree/MmlNode.js';
import { OptionList } from '../../util/Options.js';
import { DOMAdaptor } from '../../core/DOMAdaptor.js';
/********************************************************************/
/**
 *  The class for performing the MathML DOM node to
 *  internal MmlNode conversion.
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class MathMLCompile<N, T, D> {
    /**
     *  The default options for this object
     */
    static OPTIONS: OptionList;
    /**
     * The DOMAdaptor for the document being processed
     */
    adaptor: DOMAdaptor<N, T, D>;
    /**
     *  The instance of the MmlFactory object and
     */
    protected factory: MmlFactory;
    /**
     *  The options (the defaults with the user options merged in)
     */
    protected options: OptionList;
    /**
     *  Merge the user options into the defaults, and save them
     *  Create the MmlFactory object
     *
     * @param {OptionList} options  The options controlling the conversion
     */
    constructor(options?: OptionList);
    /**
     * @param{MmlFactory} mmlFactory   The MathML factory to use for new nodes
     */
    setMmlFactory(mmlFactory: MmlFactory): void;
    /**
     * Convert a MathML DOM tree to internal MmlNodes
     *
     * @param {N} node     The <math> node to convert to MmlNodes
     * @return {MmlNode}   The MmlNode at the root of the converted tree
     */
    compile(node: N): MmlNode;
    /**
     * Recursively convert nodes and their children, taking MathJax classes
     * into account.
     *
     *  FIXME: we should use data-* attributes rather than classes for these
     *
     * @param {N} node     The node to convert to an MmlNode
     * @return {MmlNode}   The converted MmlNode
     */
    makeNode(node: N): MmlNode;
    /**
     * Copy the attributes from a MathML node to an MmlNode.
     *
     * @param {MmlNode} mml       The MmlNode to which attributes will be added
     * @param {N} node  The MathML node whose attributes to copy
     */
    protected addAttributes(mml: MmlNode, node: N): void;
    /**
     * Provide a hook for the Safe extension to filter attribute values.
     *
     * @param {string} name   The name of an attribute to filter
     * @param {string} value  The value to filter
     */
    protected filterAttribute(_name: string, value: string): string;
    /**
     * Provide a hook for the Safe extension to filter class names.
     *
     * @param {string[]} list   The list of class names to filter
     */
    protected filterClassList(list: string[]): string[];
    /**
     * Convert the children of the MathML node and add them to the MmlNode
     *
     * @param {MmlNode} mml  The MmlNode to which children will be added
     * @param {N} node       The MathML node whose children are to be copied
     */
    protected addChildren(mml: MmlNode, node: N): void;
    /**
     * Add text to a token node
     *
     * @param {MmlNode} mml  The MmlNode to which text will be added
     * @param {N} child      The text node whose contents is to be copied
     */
    protected addText(mml: MmlNode, child: N): void;
    /**
     * Check for special MJX values in the class and process them
     *
     * @param {MmlNode} mml       The MmlNode to be modified according to the class markers
     * @param {N} node  The MathML node whose class is to be processed
     */
    protected checkClass(mml: MmlNode, node: N): void;
    /**
     * Fix the old incorrect spelling of calligraphic.
     *
     * @param {string} variant  The mathvariant name
     * @return {string}         The corrected variant
     */
    protected fixCalligraphic(variant: string): string;
    /**
     * Check to see if an mrow has delimiters at both ends (so looks like an mfenced structure).
     *
     * @param {MmlNode} mml  The node to check for mfenced structure
     */
    protected markMrows(mml: MmlNode): void;
    /**
     * @param {string} text  The text to have leading/trailing spaced removed
     * @return {string}      The trimmed text
     */
    protected trimSpace(text: string): string;
    /**
     * @param {string} message  The error message to produce
     */
    protected error(message: string): void;
}
