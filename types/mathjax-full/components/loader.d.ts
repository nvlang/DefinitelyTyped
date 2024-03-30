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
 * @fileoverview  A dynamic loader for loading MathJax components based
 *                on a user configuration, while handling timing of
 *                dependencies properly
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { MathJaxObject as MJObject, MathJaxLibrary, MathJaxConfig as MJConfig } from './global.js';
import { PackageReady, PackageFailed } from './package.js';
export { Package, PackageError, PackageReady, PackageFailed } from './package.js';
export { MathJaxLibrary } from './global.js';
import { FunctionList } from '../util/FunctionList.js';
/**
 * Function used to determine path to a given package.
 */
export type PathFilterFunction = (data: {
    name: string;
    original: string;
    addExtension: boolean;
}) => boolean;
export type PathFilterList = (PathFilterFunction | [PathFilterFunction, number])[];
/**
 * Update the configuration structure to include the loader configuration
 */
export interface MathJaxConfig extends MJConfig {
    loader?: {
        paths?: {
            [name: string]: string;
        };
        source?: {
            [name: string]: string;
        };
        dependencies?: {
            [name: string]: string[];
        };
        provides?: {
            [name: string]: string[];
        };
        load?: string[];
        ready?: PackageReady;
        failed?: PackageFailed;
        require?: (url: string) => any;
        pathFilters?: PathFilterList;
        versionWarnings?: boolean;
        [name: string]: any;
    };
}
/**
 * Update the MathJax object to inclide the loader information
 */
export interface MathJaxObject extends MJObject {
    _: MathJaxLibrary;
    config: MathJaxConfig;
    loader: {
        ready: (...names: string[]) => Promise<string[]>;
        load: (...names: string[]) => Promise<string>;
        preLoad: (...names: string[]) => void;
        defaultReady: () => void;
        getRoot: () => string;
        checkVersion: (name: string, version: string) => boolean;
        pathFilters: FunctionList;
    };
    startup?: any;
}
/**
 * Functions used to filter the path to a package
 */
export declare const PathFilters: {
    [name: string]: PathFilterFunction;
};
/**
 * The implementation of the dynamic loader
 */
export declare namespace Loader {
    /**
     * The versions of all the loaded extensions.
     */
    const versions: Map<string, string>;
    /**
     * Get a promise that is resolved when all the named packages have been loaded.
     *
     * @param {string[]} names  The packages to wait for
     * @returns {Promise}       A promise that resolves when all the named packages are ready
     */
    function ready(...names: string[]): Promise<string[]>;
    /**
     * Load the named packages and return a promise that is resolved when they are all loaded
     *
     * @param {string[]} names  The packages to load
     * @returns {Promise}       A promise that resolves when all the named packages are ready
     */
    function load(...names: string[]): Promise<void | string[]>;
    /**
     * Indicate that the named packages are being loaded by hand (e.g., as part of a larger package).
     *
     * @param {string[]} names  The packages to load
     */
    function preLoad(...names: string[]): void;
    /**
     * The default function to perform when all the packages are loaded
     */
    function defaultReady(): void;
    /**
     * Get the root location for where the MathJax package files are found
     *
     * @returns {string}   The root location (directory for node.js, URL for browser)
     */
    function getRoot(): string;
    /**
     * Check the version of an extension and report an error if not correct
     *
     * @param {string} name       The name of the extension being checked
     * @param {string} version    The version of the extension to check
     * @param {string} type       The type of extension (future code may use this to check ranges of versions)
     * @return {boolean}          True if there was a mismatch, false otherwise
     */
    function checkVersion(name: string, version: string, _type?: string): boolean;
    /**
     * The filters to use to modify the paths used to obtain the packages
     */
    const pathFilters: FunctionList;
}
/**
 * Export the global MathJax object for convenience
 */
export declare const MathJax: MathJaxObject;
/**
 * Export the loader configuration for convenience
 */
export declare const CONFIG: {
    [name: string]: any;
    paths?: {
        [name: string]: string;
    };
    source?: {
        [name: string]: string;
    };
    dependencies?: {
        [name: string]: string[];
    };
    provides?: {
        [name: string]: string[];
    };
    load?: string[];
    ready?: PackageReady;
    failed?: PackageFailed;
    require?: (url: string) => any;
    pathFilters?: PathFilterList;
    versionWarnings?: boolean;
};
