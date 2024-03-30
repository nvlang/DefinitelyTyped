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
 * The MathJax variable as a configuration object
 */
export interface MathJaxConfig {
    [name: string]: any;
}
/**
 * The object used to store class and other definitions
 * from the various MathJax modules so that they can be shared
 * among the various component webpack files
 */
export interface MathJaxLibrary {
    [name: string]: any;
}
/**
 * The MathJax global object structure
 */
export interface MathJaxObject {
    version: string;
    _: MathJaxLibrary;
    config: MathJaxConfig;
}
/**
 * @param {any} x     An item to test if it is an object
 * @return {boolean}  True if the item is a non-null object
 */
export declare function isObject(x: any): boolean;
/**
 * Combine user-produced configuration with existing defaults.  Values
 * from src will replace those in dst.
 *
 * @param {any} dst      The destination config object (to be merged into)
 * @param {any} src      The source configuration object (to replace defaul values in dst}
 * @return {any}         The resulting (modified) config object
 */
export declare function combineConfig(dst: any, src: any): any;
/**
 * Combine defaults into a configuration that may already have
 * user-provided values.  Values in src only go into dst if
 * there is not already a value for that key.
 *
 * @param {any} dst      The destination config object (to be merged into)
 * @param {string} name  The id of the configuration block to modify (created if doesn't exist)
 * @param {any} src      The source configuration object (to replace defaul values in dst}
 * @return {any}         The resulting (modified) config object
 */
export declare function combineDefaults(dst: any, name: string, src: any): any;
/**
 * Combine configuration or data with the existing MathJax object
 *
 * @param {any} config   The data to be merged into the MathJax object
 */
export declare function combineWithMathJax(config: any): MathJaxObject;
/**
 * Export the global MathJax object for convenience
 */
export declare const MathJax: MathJaxObject;
