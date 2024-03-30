/*************************************************************
 *
 *  Copyright (c) 2021-2022 The MathJax Consortium
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
 * @fileoverview  Auxiliary function for elementary MathML3 support (experimental)
 *                using David Carlisle's XLST transform.
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { MathDocument } from '../../../core/MathDocument.js';
/**
 * Create the transform function that uses Saxon-js to perform the
 *   xslt transformation.
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 *
 * @return {(node: N, doc: MathDocument<N,T,D>) => N)}   The transformation function
 */
export declare function createTransform<N, T, D>(): (node: N, doc: MathDocument<N, T, D>) => N;
