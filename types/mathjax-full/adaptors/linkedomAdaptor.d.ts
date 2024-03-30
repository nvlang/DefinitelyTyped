/*************************************************************
 *
 *  Copyright (c) 2022-2022 The MathJax Consortium
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
 * @fileoverview  Implements the linkedom DOM adaptor
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { HTMLAdaptor } from './HTMLAdaptor.js';
import { Constructor } from './NodeMixin.js';
import { OptionList } from '../util/Options.js';
/**
 * The constructor for an HTMLAdaptor
 */
export type HTMLAdaptorConstructor = Constructor<HTMLAdaptor<HTMLElement, Text, Document>>;
declare const LinkedomAdaptor_base: HTMLAdaptorConstructor;
/**
 * The LinkedomAdaptor class
 */
export declare class LinkedomAdaptor extends LinkedomAdaptor_base {
    /**
     * @override
     */
    parse(text: string, format?: string): Document;
    /**
     * @override
     *
     * This will do an HTML serialization, which may be good enough, but
     *   won't necessarily close some tags properly.
     */
    serializeXML(node: HTMLElement): string;
}
/**
 * Function for creating an HTML adaptor using linkedom
 *
 * @param {any} parseHTML       The linkedom HTML parser to use for this adaptor
 * @return {LinkeddomAdaptor}   The newly created adaptor
 */
export declare function linkedomAdaptor(parseHTML: any, options?: OptionList): LinkedomAdaptor;
export {};
