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
import ParseOptions from './ParseOptions.js';
declare namespace FilterUtil {
    /**
     * Visitor to set stretchy attributes to false on <mo> elements, if they are
     * not used as delimiters. Also wraps non-stretchy infix delimiters into a
     * TeXAtom.
     * @param {MmlNode} math The node to rewrite.
     * @param {ParseOptions} data The parse options.
     */
    let cleanStretchy: (arg: {
        math: any;
        data: ParseOptions;
    }) => void;
    /**
     * Visitor that removes superfluous attributes from nodes. I.e., if a node has
     * an attribute, which is also an inherited attribute it will be removed. This
     * is necessary as attributes are set bottom up in the parser.
     * @param {ParseOptions} data The parse options.
     */
    let cleanAttributes: (arg: {
        data: ParseOptions;
    }) => void;
    /**
     * Combine adjacent <mo> elements that are relations (since MathML treats the
     * spacing very differently)
     * @param {ParseOptions} data The parse options.
     */
    let combineRelations: (arg: {
        data: ParseOptions;
    }) => void;
    /**
     * Visitor that rewrites incomplete msubsup/munderover elements in the given
     * node into corresponding msub/sup/under/over nodes.
     * @param {MmlNode} math The node to rewrite.
     * @param {ParseOptions} data The parse options.
     */
    let cleanSubSup: (arg: {
        math: any;
        data: ParseOptions;
    }) => void;
    /**
     * Visitor that rewrites in-line munderover elements with movablelimits but bases
     * that are not mo's into explicit msubsup elements.
     *
     * @param {ParseOptions} data  The parse options to use
     */
    let moveLimits: (arg: {
        data: ParseOptions;
    }) => void;
    /**
     * Recursively sets the inherited attributes on the math tree.
     * @param {MmlNode} math The node to rewrite.
     * @param {ParseOptions} data The parse options.
     */
    let setInherited: (arg: {
        math: any;
        data: ParseOptions;
    }) => void;
}
export default FilterUtil;
