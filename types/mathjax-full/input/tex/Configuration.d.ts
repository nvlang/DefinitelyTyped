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
 * @fileoverview Configuration options for the TexParser.
 *
 * @author v.sorge@mathjax.org (Volker Sorge)
 */
import { HandlerConfig, FallbackConfig } from './MapHandler.js';
import { StackItemClass } from './StackItem.js';
import { TagsClass } from './Tags.js';
import { OptionList } from '../../util/Options.js';
import { SubHandlers } from './MapHandler.js';
import { FunctionList } from '../../util/FunctionList.js';
import { TeX } from '../tex.js';
import { PrioritizedList } from '../../util/PrioritizedList.js';
export type StackItemConfig = {
    [kind: string]: StackItemClass;
};
export type TagsConfig = {
    [kind: string]: TagsClass;
};
export type Processor<T> = [T, number];
export type ProtoProcessor<T> = Processor<T> | T;
export type ProcessorList = Processor<Function>[];
export type ConfigMethod = (c: ParserConfiguration, j: TeX<any, any, any>) => void;
export type InitMethod = (c: ParserConfiguration) => void;
export declare class Configuration {
    readonly name: string;
    readonly handler: HandlerConfig;
    readonly fallback: FallbackConfig;
    readonly items: StackItemConfig;
    readonly tags: TagsConfig;
    readonly options: OptionList;
    readonly nodes: {
        [key: string]: any;
    };
    readonly preprocessors: ProcessorList;
    readonly postprocessors: ProcessorList;
    readonly initMethod: Processor<InitMethod>;
    readonly configMethod: Processor<ConfigMethod>;
    priority: number;
    readonly parser: string;
    /**
     * Creates a function priority pair.
     * @param {ProtoProcessor<T>} func The function or processor.
     * @param {number} priority The default priority.
     * @return {Processor} The processor pair.
     * @template T
     */
    private static makeProcessor;
    /**
     * Creates a configuration for a package.
     * @param {string} name The package name or empty string.
     * @param {Object} config See `create` method.
     * @return {Configuration} The newly generated configuration.
     */
    private static _create;
    /**
     * Creator pattern for creating a named package configuration. This will be
     * administered in the configuration handler and can be retrieved again.
     * @param {string} name The package name.
     * @param {Object} config The configuration parameters:
     * Configuration for the TexParser consist of the following:
     *  * _handler_  configuration mapping handler types to lists of symbol mappings.
     *  * _fallback_ configuration mapping handler types to fallback methods.
     *  * _items_ for the StackItem factory.
     *  * _tags_ mapping tagging configurations to tagging objects.
     *  * _options_ parse options for the packages.
     *  * _nodes_ for the Node factory.
     *  * _preprocessors_ list of functions for preprocessing the LaTeX
     *      string wrt. to given parse options. Can contain a priority.
     *  * _postprocessors_ list of functions for postprocessing the MmlNode
     *      wrt. to given parse options. Can contain a priority.
     *  * _init_ init method and optionally its priority.
     *  * _config_ config method and optionally its priority.
     *  * _priority_ default priority of the configuration.
     *  * _parser_ the name of the parser that this configuration targets.
     * @return {Configuration} The newly generated configuration.
     */
    static create(name: string, config?: {
        handler?: HandlerConfig;
        fallback?: FallbackConfig;
        items?: StackItemConfig;
        tags?: TagsConfig;
        options?: OptionList;
        nodes?: {
            [key: string]: any;
        };
        preprocessors?: ProtoProcessor<Function>[];
        postprocessors?: ProtoProcessor<Function>[];
        init?: ProtoProcessor<InitMethod>;
        config?: ProtoProcessor<ConfigMethod>;
        priority?: number;
        parser?: string;
    }): Configuration;
    /**
     * Creates an unnamed, ephemeral package configuration. It will not added to
     * the configuration handler.
     * @param {Object} config See `create` method.
     * @return {Configuration} The ephemeral package configuration.
     */
    static local(config?: {
        handler?: HandlerConfig;
        fallback?: FallbackConfig;
        items?: StackItemConfig;
        tags?: TagsConfig;
        options?: OptionList;
        nodes?: {
            [key: string]: any;
        };
        preprocessors?: ProtoProcessor<Function>[];
        postprocessors?: ProtoProcessor<Function>[];
        init?: ProtoProcessor<InitMethod>;
        config?: ProtoProcessor<ConfigMethod>;
        priority?: number;
        parser?: string;
    }): Configuration;
    /**
     * @constructor
     */
    private constructor();
    /**
     * The init method.
     * @type {Function}
     */
    get init(): InitMethod;
    /**
     * The config method to call once jax is ready.
     * @type {FunctionList}
     */
    get config(): ConfigMethod;
}
export declare namespace ConfigurationHandler {
    /**
     * Adds a new configuration to the handler overwriting old ones.
     *
     * @param {string} name The name of the configuration.
     * @param {Configuration} map The configuration mapping.
     */
    let set: (name: string, map: Configuration) => void;
    /**
     * Looks up a configuration.
     *
     * @param {string} name The name of the configuration.
     * @return {Configuration} The configuration with the given name or null.
     */
    let get: (name: string) => Configuration;
    /**
     * @return {string[]} All configurations in the handler.
     */
    let keys: () => IterableIterator<string>;
}
/**
 * Parser configuration combines the configurations of the currently selected
 * packages.
 * @constructor
 */
export declare class ParserConfiguration {
    /**
     * Priority list of init methods.
     * @type {FunctionList}
     */
    protected initMethod: FunctionList;
    /**
     * Priority list of init methods to call once jax is ready.
     * @type {FunctionList}
     */
    protected configMethod: FunctionList;
    /**
     * An ordered list of cofigurations.
     * @type {PrioritizedList<Configuration>}
     */
    protected configurations: PrioritizedList<Configuration>;
    /**
     * The list of parsers this configuration targets
     */
    protected parsers: string[];
    /**
     * The subhandlers for this configuration.
     * @type {SubHandlers}
     */
    handlers: SubHandlers;
    /**
     * The collated stack items.
     * @type {StackItemConfig}
     */
    items: StackItemConfig;
    /**
     * The collated tag configurations.
     * @type {TagsConfig}
     */
    tags: TagsConfig;
    /**
     * The collated options.
     * @type {OptionList}
     */
    options: OptionList;
    /**
     * The collated node creators.
     * @type {{[key: string]: any}}
     */
    nodes: {
        [key: string]: any;
    };
    /**
     * @constructor
     * @param {(string|[string,number])[]} packages A list of packages with
     *     optional priorities.
     * @parm {string[]} parsers   The names of the parsers this package targets
     */
    constructor(packages: (string | [string, number])[], parsers?: string[]);
    /**
     * Init method for the configuration;
     */
    init(): void;
    /**
     * Init method for when the jax is ready
     * @param {TeX} jax The TeX jax for this configuration
     */
    config(jax: TeX<any, any, any>): void;
    /**
     * Retrieves and adds configuration for a package with priority.
     * @param {(string | [string, number]} pkg Package with priority.
     */
    addPackage(pkg: (string | [string, number])): void;
    /**
     * Adds a configuration after the input jax is created.  (Used by \require.)
     * Sets items, nodes and runs configuration method explicitly.
     *
     * @param {string} name            The name of the package to add
     * @param {TeX} jax                The TeX jax where it is being registered
     * @param {OptionList=} options    The options for the configuration.
     */
    add(name: string, jax: TeX<any, any, any>, options?: OptionList): void;
    /**
     * Find a package and check that it is for the targeted parser
     *
     * @param {string} name       The name of the package to check
     * @return {Configuration}    The configuration for the package
     */
    protected getPackage(name: string): Configuration;
    /**
     * Appends a configuration to the overall configuration object.
     * @param {Configuration} config A configuration.
     * @param {number} priority The configurations optional priority.
     */
    append(config: Configuration, priority?: number): void;
    /**
     * Adds pre- and postprocessor as filters to the jax.
     * @param {TeX<any} jax The TeX Jax.
     * @param {Configuration} config The configuration whose processors are added.
     */
    private addFilters;
}
