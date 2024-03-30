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
 *  Check if an object is an object literal (as opposed to an instance of a class)
 */
export declare function isObject(obj: any): boolean;
/*****************************************************************/
/**
 * Generic list of options
 */
export type OptionList = {
    [name: string]: any;
};
/*****************************************************************/
/**
 *  Used to append an array to an array in default options
 *  E.g., an option of the form
 *
 *    {
 *      name: {[APPEND]: [1, 2, 3]}
 *    }
 *
 *  where 'name' is an array in the default options would end up with name having its
 *  original value with 1, 2, and 3 appended.
 */
export declare const APPEND = "[+]";
/**
 *  Used to remove elements from an array in default options
 *  E.g., an option of the form
 *
 *    {
 *      name: {[REMOVE]: [2]}
 *    }
 *
 *  where 'name' is an array in the default options would end up with name having its
 *  original value but with any entry of 2 removed  So if the original value was [1, 2, 3, 2],
 *  then the final value will be [1, 3] instead.
 */
export declare const REMOVE = "[-]";
/**
 *  Provides options for the option utlities.
 */
export declare const OPTIONS: {
    invalidOption: "warn" | "fatal";
    /**
     * Function to report messages for invalid options
     *
     * @param {string} message   The message for the invalid parameter.
     * @param {string} key       The invalid key itself.
     */
    optionError: (message: string, _key: string) => void;
};
/**
 * A Class to use for options that should not produce warnings if an undefined key is used
 */
export declare class Expandable {
}
/**
 * Produces an instance of Expandable with the given values (to be used in defining options
 * that can use keys that don't have default values).  E.g., default options of the form:
 *
 *  OPTIONS = {
 *     types: expandable({
 *       a: 1,
 *       b: 2
 *     })
 *  }
 *
 *  would allow user options of
 *
 *  {
 *     types: {
 *       c: 3
 *     }
 *  }
 *
 *  without reporting an error.
 */
export declare function expandable(def: OptionList): any;
/*****************************************************************/
/**
 *  Make sure an option is an Array
 */
export declare function makeArray(x: any): any[];
/*****************************************************************/
/**
 * Get all keys and symbols from an object
 *
 * @param {Optionlist} def        The object whose keys are to be returned
 * @return {(string | symbol)[]}  The list of keys for the object
 */
export declare function keys(def: OptionList): (string | symbol)[];
/*****************************************************************/
/**
 * Make a deep copy of an object
 *
 * @param {OptionList} def  The object to be copied
 * @return {OptionList}     The copy of the object
 */
export declare function copy(def: OptionList): OptionList;
/*****************************************************************/
/**
 * Insert one object into another (with optional warnings about
 * keys that aren't in the original)
 *
 * @param {OptionList} dst  The option list to merge into
 * @param {OptionList} src  The options to be merged
 * @param {boolean} warn    True if a warning should be issued for a src option that isn't already in dst
 * @return {OptionList}     The modified destination option list (dst)
 */
export declare function insert(dst: OptionList, src: OptionList, warn?: boolean): OptionList;
/*****************************************************************/
/**
 * Merge options without warnings (so we can add new default values into an
 * existing default list)
 *
 * @param {OptionList} options  The option list to be merged into
 * @param {OptionList[]} defs   The option lists to merge into the first one
 * @return {OptionList}         The modified options list
 */
export declare function defaultOptions(options: OptionList, ...defs: OptionList[]): OptionList;
/*****************************************************************/
/**
 * Merge options with warnings about undefined ones (so we can merge
 * user options into the default list)
 *
 * @param {OptionList} options  The option list to be merged into
 * @param {OptionList[]} defs   The option lists to merge into the first one
 * @return {OptionList}         The modified options list
 */
export declare function userOptions(options: OptionList, ...defs: OptionList[]): OptionList;
/*****************************************************************/
/**
 * Select a subset of options by key name
 *
 * @param {OptionList} options  The option list from which option values will be taken
 * @param {string[]} keys       The names of the options to extract
 * @return {OptionList}         The option list consisting of only the ones whose keys were given
 */
export declare function selectOptions(options: OptionList, ...keys: string[]): OptionList;
/*****************************************************************/
/**
 * Select a subset of options by keys from an object
 *
 * @param {OptionList} options  The option list from which the option values will be taken
 * @param {OptionList} object   The option list whose keys will be used to select the options
 * @return {OptionList}         The option list consisting of the option values from the first
 *                               list whose keys are those from the second list.
 */
export declare function selectOptionsFromKeys(options: OptionList, object: OptionList): OptionList;
/*****************************************************************/
/**
 *  Separate options into sets: the ones having the same keys
 *  as the second object, the third object, etc, and the ones that don't.
 *  (Used to separate an option list into the options needed for several
 *   subobjects.)
 *
 * @param {OptionList} options    The option list to be split into parts
 * @param {OptionList[]} objects  The list of option lists whose keys are used to break up
 *                                 the original options into separate pieces.
 * @return {OptionList[]}         The option lists taken from the original based on the
 *                                 keys of the other objects.  The first one in the list
 *                                 consists of the values not appearing in any of the others
 *                                 (i.e., whose keys were not in any of the others).
 */
export declare function separateOptions(options: OptionList, ...objects: OptionList[]): OptionList[];
/*****************************************************************/
/**
 *  Look up a value from object literal, being sure it is an
 *  actual property (not inherited), with a default if not found.
 *
 * @param {string} name         The name of the key to look up.
 * @param {OptionList} lookup   The list of options to check.
 * @param {any} def             The default value if the key isn't found.
 */
export declare function lookup(name: string, lookup: OptionList, def?: any): any;
