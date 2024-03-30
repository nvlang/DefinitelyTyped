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
 * @fileoverview  Implements a startup module that allows dynamically
 *                loaded components to register themselves, and then
 *                creates MathJax methods for typesetting and converting
 *                math based on the registered components.
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { MathJaxObject as MJObject, MathJaxConfig as MJConfig } from './global.js';
import { MathDocument } from '../core/MathDocument.js';
import { MmlNode } from '../core/MmlTree/MmlNode.js';
import { Handler } from '../core/Handler.js';
import { InputJax } from '../core/InputJax.js';
import { OutputJax } from '../core/OutputJax.js';
import { CommonOutputJax } from '../output/common/OutputJax.js';
import { DOMAdaptor } from '../core/DOMAdaptor.js';
import { TeX } from '../input/tex.js';
/**
 * Update the configuration structure to include the startup configuration
 */
export interface MathJaxConfig extends MJConfig {
    startup?: {
        input?: string[];
        output?: string;
        handler?: string;
        adaptor?: string;
        document?: any;
        elements?: any[];
        typeset?: boolean;
        ready?: () => void;
        pageReady?: () => void;
        invalidOption?: 'fatal' | 'warn';
        optionError?: (message: string, key: string) => void;
        [name: string]: any;
    };
}
/**
 * Generic types for the standard MathJax objects
 */
export type MATHDOCUMENT = MathDocument<any, any, any>;
export type HANDLER = Handler<any, any, any>;
export type DOMADAPTOR = DOMAdaptor<any, any, any>;
export type INPUTJAX = InputJax<any, any, any>;
export type OUTPUTJAX = OutputJax<any, any, any>;
export type COMMONJAX = CommonOutputJax<any, any, any, any, any, any, any>;
export type TEX = TeX<any, any, any>;
/**
 * A function to extend a handler class
 */
export type HandlerExtension = (handler: HANDLER) => HANDLER;
/**
 * Update the MathJax object to inclide the startup information
 */
export interface MathJaxObject extends MJObject {
    config: MathJaxConfig;
    startup: {
        constructors: {
            [name: string]: any;
        };
        input: INPUTJAX[];
        output: OUTPUTJAX;
        handler: HANDLER;
        adaptor: DOMADAPTOR;
        elements: any[];
        document: MATHDOCUMENT;
        promise: Promise<void>;
        registerConstructor(name: string, constructor: any): void;
        useHandler(name: string, force?: boolean): void;
        useAdaptor(name: string, force?: boolean): void;
        useOutput(name: string, force?: boolean): void;
        useInput(name: string, force?: boolean): void;
        extendHandler(extend: HandlerExtension): void;
        toMML(node: MmlNode): string;
        defaultReady(): void;
        defaultPageReady(): Promise<void>;
        getComponents(): void;
        makeMethods(): void;
        makeTypesetMethods(): void;
        makeOutputMethods(iname: string, oname: string, input: INPUTJAX): void;
        makeMmlMethods(name: string, input: INPUTJAX): void;
        makeResetMethod(name: string, input: INPUTJAX): void;
        getInputJax(): INPUTJAX[];
        getOutputJax(): OUTPUTJAX;
        getAdaptor(): DOMADAPTOR;
        getHandler(): HANDLER;
    };
    [name: string]: any;
}
/**
 * The implementation of the startup module
 */
export declare namespace Startup {
    /**
     * The constructors (or other data) registered by the loaded packages
     */
    const constructors: {
        [name: string]: any;
    };
    /**
     * The array of InputJax instances (created after everything is loaded)
     */
    let input: INPUTJAX[];
    /**
     * The OutputJax instance (created after everything is loaded)
     */
    let output: OUTPUTJAX;
    /**
     * The Handler instance (created after everything is loaded)
     */
    let handler: HANDLER;
    /**
     * The DOMAdaptor instance (created after everything is loaded)
     */
    let adaptor: DOMADAPTOR;
    /**
     * The elements to process (set when typeset or conversion method is called)
     */
    let elements: any[];
    /**
     * The MathDocument instance being used (based on the browser DOM or configuration value)
     */
    let document: MATHDOCUMENT;
    /**
     * The function that resolves the first promise defined below
     *   (called in the defaultReady() function when MathJax is finished with
     *    its initial typesetting)
     */
    let promiseResolve: () => void;
    /**
     * The function that rejects the first promise defined below
     *   (called in the defaultReady() function when MathJax's initial
     *    typesetting fails)
     */
    let promiseReject: (reason: any) => void;
    /**
     * The promise for the startup process (the initial typesetting).
     * It is resolves or rejected in the ready() function.
     */
    let promise: Promise<void>;
    /**
     * A promise that is resolved when the page contents are available
     * for processing.
     */
    let pagePromise: Promise<void>;
    /**
     * @param {MmlNode} node   The root of the tree to convert to serialized MathML
     * @return {string}        The serialized MathML from the tree
     */
    function toMML(node: MmlNode): string;
    /**
     * @param {string} name      The identifier for the constructor
     * @param {any} constructor  The constructor function for the named object
     */
    function registerConstructor(name: string, constructor: any): void;
    /**
     * @param {string} name      The identifier for the Handler to use
     * @param {boolean} force    True to force the Handler to be used even if one is already registered
     */
    function useHandler(name: string, force?: boolean): void;
    /**
     * @param {string} name      The identifier for the DOMAdaptor to use
     * @param {boolean} force    True to force the DOMAdaptor to be used even if one is already registered
     */
    function useAdaptor(name: string, force?: boolean): void;
    /**
     * @param {string} name      The identifier for the InputJax to use
     * @param {boolean} force    True to force the InputJax to be used even if the configuration already
     *                             included an array of input jax
     */
    function useInput(name: string, force?: boolean): void;
    /**
     * @param {string} name      The identifier for the OutputJax to use
     * @param {boolean} force    True to force the OutputJax to be used even if one is already registered
     */
    function useOutput(name: string, force?: boolean): void;
    /**
     * @param {HandlerExtension} extend    A function to extend the handler class
     * @param {number} priority            The priority of the extension
     */
    function extendHandler(extend: HandlerExtension, priority?: number): void;
    /**
     * The default ready() function called when all the packages have been loaded,
     * which creates the various objects needed by MathJax, creates the methods
     * based on the loaded components, and does the initial typesetting.
     *
     * Setting MathJax.startup.ready in the configuration will
     * override this, but you can call MathJax.startup.defaultReady()
     * within your own ready function if needed, or can use the
     * individual methods below to perform portions of the default
     * startup actions.
     */
    function defaultReady(): void;
    /**
     * The default pageReady() function called when the page is ready to be processed,
     * which returns the function that performs the initial typesetting, if needed.
     *
     * Setting Mathjax.startup.pageReady in the configuration will override this.
     */
    function defaultPageReady(): Promise<void>;
    /**
     * Create the instances of the registered components
     */
    function getComponents(): void;
    /**
     * Make the typeset and conversion methods based on the registered components
     *
     * If there are both input and output jax,
     *   Make Typeset() and TypesetPromise() methods using the given jax,
     *    and TypesetClear() to clear the existing math items
     * For each input jax
     *   Make input2mml() and input2mmlPromise() conversion methods and inputReset() method
     *   If there is a registered output jax
     *     Make input2output() and input2outputPromise conversion methods and outputStylesheet() method
     */
    function makeMethods(): void;
    /**
     * Create the Typeset(elements?), TypesetPromise(elements?), and TypesetClear() methods.
     *
     * The first two call the document's render() function, the latter
     *   wrapped in handleRetriesFor() and returning the resulting promise.
     *
     * TypeseClear() clears all the MathItems from the document.
     */
    function makeTypesetMethods(): void;
    /**
     * Make the input2output(math, options?) and input2outputPromise(math, options?) methods,
     *   and outputStylesheet() method, where "input" and "output" are replaced by the
     *   jax names (e.g., tex2chtml() and chtmlStyleSheet()).
     *
     * The first two perform the document's convert() call, with the Promise version wrapped in
     *   handlerRetriesFor() and returning the resulting promise.  The return value is the
     *   DOM object for the converted math.  Use MathJax.startup.adaptor.outerHTML(result)
     *   to get the serialized string version of the output.
     *
     * The outputStylesheet() method returns the styleSheet object for the output.
     * Use MathJax.startup.adaptor.innerHTML(MathJax.outputStylesheet()) to get the serialized
     *   version of the stylesheet.
     * The getMetricsFor(node, display) method returns the metric data for the given node
     *
     * @param {string} iname     The name of the input jax
     * @param {string} oname     The name of the output jax
     * @param {INPUTJAX} input   The input jax instance
     */
    function makeOutputMethods(iname: string, oname: string, input: INPUTJAX): void;
    /**
     * Make the input2mml(math, options?) and input2mmlPromise(math, options?) methods,
     *   where "input" is replaced by the name of the input jax (e.g., "tex2mml").
     *
     * These convert the math to its serialized MathML representation.
     *   The second wraps the conversion in handleRetriesFor() and
     *   returns the resulting promise.
     *
     * @param {string} name     The name of the input jax
     * @param {INPUTJAX} input  The input jax itself
     */
    function makeMmlMethods(name: string, input: INPUTJAX): void;
    /**
     * Creates the inputReset() method, where "input" is replaced by the input jax name (e.g., "texReset()).
     *
     * The texReset() method clears the equation numbers and labels
     *
     * @param {string} name     The name of the input jax
     * @param {INPUTJAX} input  The input jax itself
     */
    function makeResetMethod(name: string, input: INPUTJAX): void;
    /**
     * @return {INPUTJAX[]}  The array of instances of the registered input jax
     */
    function getInputJax(): INPUTJAX[];
    /**
     * @return {OUTPUTJAX}   The instance of the registered output jax
     */
    function getOutputJax(): OUTPUTJAX;
    /**
     * @return {DOMADAPTOR}  The instance of the registered DOMAdator (the registered constructor
     *                         in this case is a function that creates the adaptor, not a class)
     */
    function getAdaptor(): DOMADAPTOR;
    /**
     * @return {HANDLER}  The instance of the registered Handler, extended by the registered extensions
     */
    function getHandler(): HANDLER;
    /**
     * Create the document with the given input and output jax
     *
     * @param {any=} root        The Document to use as the root document (or null to use the configured document)
     * @returns {MathDocument}   The MathDocument with the configured input and output jax
     */
    function getDocument(root?: any): MathDocument<any, any, any>;
}
/**
 * Export the global MathJax object for convenience
 */
export declare const MathJax: MathJaxObject;
/**
 * Export the startup configuration for convenience
 */
export declare const CONFIG: {
    [name: string]: any;
    input?: string[];
    output?: string;
    handler?: string;
    adaptor?: string;
    document?: any;
    elements?: any[];
    typeset?: boolean;
    ready?: () => void;
    pageReady?: () => void;
    invalidOption?: 'fatal' | 'warn';
    optionError?: (message: string, key: string) => void;
};
