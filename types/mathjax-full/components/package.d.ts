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
 * A map of package names to Package instances
 */
export type PackageMap = Map<string, Package>;
/**
 * An error class that includes the package name
 */
export declare class PackageError extends Error {
    package: string;
    constructor(message: string, name: string);
}
/**
 * Types for ready() and failed() functions and for promises
 */
export type PackageReady = (name: string) => string | void;
export type PackageFailed = (message: PackageError) => void;
export type PackagePromise = (resolve: PackageReady, reject: PackageFailed) => void;
/**
 * The configuration data for a package
 */
export interface PackageConfig {
    ready?: PackageReady;
    failed?: PackageFailed;
    checkReady?: () => Promise<void>;
}
/**
 * The Package class for handling individual components
 */
export declare class Package {
    /**
     * The set of packages being used
     */
    static packages: PackageMap;
    /**
     * The package name
     */
    name: string;
    /**
     * True when the package has been loaded successfully
     */
    isLoaded: boolean;
    /**
     * A promise that resolves when the package is loaded successfully and rejects when it fails to load
     */
    promise: Promise<string>;
    /**
     * True when the package is being loaded but hasn't yet finished loading
     */
    protected isLoading: boolean;
    /**
     * True if the package has failed to load
     */
    protected hasFailed: boolean;
    /**
     * True if this package should be loaded automatically (e.g., it was created in reference
     *   to a MathJax.loader.ready() call when the package hasn't been requested to load)
     */
    protected noLoad: boolean;
    /**
     * The function that resolves the package's promise
     */
    protected resolve: PackageReady;
    /**
     * The function that rejects the package's promise
     */
    protected reject: PackageFailed;
    /**
     * The packages that require this one
     */
    protected dependents: Package[];
    /**
     * The packages that this one depends on
     */
    protected dependencies: Package[];
    /**
     * The number of dependencies that haven't yet been loaded
     */
    protected dependencyCount: number;
    /**
     * The sub-packages that this one provides
     */
    protected provided: Package[];
    /**
     * @return {boolean}  True when the package can be loaded (i.e., its dependencies are all loaded,
     *                    it is allowed to be loaded, isn't already loading, and hasn't failed to load
     *                    in the past)
     */
    get canLoad(): boolean;
    /**
     * Compute the path for a package using the loader's path filters
     *
     * @param {string} name            The name of the package to resolve
     * @param {boolean} addExtension   True if .js should be added automatically
     * @return {string}                The path (file or URL) for this package
     */
    static resolvePath(name: string, addExtension?: boolean): string;
    /**
     * Attempt to load all packages that are ready to be loaded
     * (i.e., that have no unloaded dependencies, and that haven't
     *  already been loaded, and that aren't in process of being
     *  loaded, and that aren't marked as noLoad).
     */
    static loadAll(): void;
    /**
     * @param {string} name        The name of the package
     * @param {boolean} noLoad     True when the package is just for reference, not loading
     */
    constructor(name: string, noLoad?: boolean);
    /**
     * @return {Promise<string>[]}   The array of promises that must be resolved before this package
     *                                 can be loaded
     */
    protected makeDependencies(): Promise<string>[];
    /**
     * @param {Promise<string>[]} promises  The array or promises that must be resolved before
     *                                        this package can load
     */
    protected makePromise(promises: Promise<string>[]): Promise<string>;
    /**
     * Attempt to load this package
     */
    load(): void;
    /**
     * Load using a custom require method (usually the one from node.js)
     */
    protected loadCustom(url: string): void;
    /**
     * Load in a browser by inserting a script to load the proper URL
     */
    protected loadScript(url: string): void;
    /**
     * Called when the package is loaded.
     *
     * Mark it as loaded, and tell its dependents that this package
     *   has been loaded (may cause dependents to load themselves).
     *   Mark any provided packages as loaded.
     * Resolve the promise that says this package is loaded.
     */
    loaded(): void;
    /**
     * Called when the package fails to load for some reason
     *
     * Mark it as failed to load
     * Reject the promise for this package with an error
     *
     * @param {string} message   The error message for a load failure
     */
    protected failed(message: string): void;
    /**
     * Check if a package is really ready to be marked as loaded
     * (When it is loaded, it may set its own checkReady() function
     *  as a means of loading additional packages.  E.g., an output
     *  jax may load a font package, dependent on its configuration.)
     *
     *  The configuration's checkReady() function returns a promise
     *  that allows the loader to wait for addition actions to finish
     *  before marking the file as loaded (or failing to load).
     */
    protected checkLoad(): void;
    /**
     * This is called when a dependency loads.
     *
     * Decrease the dependency count, and try to load this package
     * when the dependencies are all loaded.
     */
    requirementSatisfied(): void;
    /**
     * @param {string[]} names    The names of the packages that this package provides
     */
    provides(names?: string[]): void;
    /**
     * Add a package as a dependent, and if it is not just for reference,
     *   check if we need to change our noLoad status.
     *
     * @param {Package} extension   The package to add as a dependent
     * @param {boolean} noLoad      The noLoad status of the dependent
     */
    addDependent(extension: Package, noLoad: boolean): void;
    /**
     * If this package is marked as noLoad, change that and check all
     *   our dependencies to see if they need to change their noLoad
     *   status as well.
     *
     *  I.e., if there are dependencies that were set up for reference
     *  and a leaf node needs to be loaded, make sure all parent nodes
     *  are marked as needing to be loaded as well.
     */
    checkNoLoad(): void;
}
