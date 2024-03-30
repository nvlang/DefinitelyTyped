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
 * @fileoverview  An object listing all the MathML node types
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { MmlNodeClass } from './MmlNode.js';
/************************************************************************/
/**
 *  This object collects all the MathML node types together so that
 *  they can be used to seed an MmlNodeFactory.  One could copy this
 *  object to override existing classes with subclasses, or to add new
 *  classes as necessary.
 */
export declare let MML: {
    [kind: string]: MmlNodeClass;
};
