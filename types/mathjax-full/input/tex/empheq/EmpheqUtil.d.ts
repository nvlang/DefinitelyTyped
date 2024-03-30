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
import TexParser from '../TexParser.js';
import { EnvList } from '../StackItem.js';
import { MmlNode } from '../../../core/MmlTree/MmlNode.js';
import { MmlMtable } from '../../../core/MmlTree/MmlNodes/mtable.js';
import { MmlMtd } from '../../../core/MmlTree/MmlNodes/mtd.js';
import { EmpheqBeginItem } from './EmpheqConfiguration.js';
export declare const EmpheqUtil: {
    /**
     * Create the needed envinronment and process it by the give function.
     *
     * @param {TexParser} parser   The active tex parser.
     * @param {string} env         The environment to create.
     * @param {Function} func      A function to process the environment.
     * @param {any[]} args         The arguments for func.
     */
    environment(parser: TexParser, env: string, func: Function, args: any[]): void;
    /**
     * Parse an options string.
     *
     * @param {string} text                   The string to parse.
     * @param {{[key:string]:number} allowed  Object containing options to allow
     * @return {EnvList}                      The parsed keys
     */
    splitOptions(text: string, allowed?: {
        [key: string]: number;
    }): EnvList;
    /**
     * Find the number of columns in the table.
     *
     * @param {MmlMtable} table   The table whose columns to count.
     * @return {number}           The number of columns in the table.
     */
    columnCount(table: MmlMtable): number;
    /**
     * Create an mpadded element with no height and depth, but whose
     *   content is the given TeX code with a phantom that is the height and
     *   depth of the given table.
     *
     * @param {string} tex        The TeX code to put in the box.
     * @param {MmlTable} table    The table used to size the box.
     * @param {TexParser} parser  The active tex parser.
     * @param {string} env        The name of the current environment.
     * @return {MmlNode}          The mpadded element.
     */
    cellBlock(tex: string, table: MmlMtable, parser: TexParser, env: string): MmlNode;
    /**
     * Make a copy of the table with only the first row and create a phantom element
     *   that has its height and depth.
     *
     * @param {MmlMtable} original   The original table.
     * @param {TexParser} parser     The active tex parser.
     * @return {MmlNode}             The resulting mphantom element.
     */
    topRowTable(original: MmlMtable, parser: TexParser): MmlNode;
    /**
     * Add an mpadded element that has zero height and depth but whose content is
     *   the cell block for the given TeX code followed by a struct the size of the top row.
     *
     * @param {MmlMtd} mtd         The mtd to add content to.
     * @param {string} tex         The TeX string to put into the cell.
     * @param {MmlMtable} table    The reference table used for its various heights.
     * @param {TexParser} parser   The active tex parser.
     * @param {srting} env         The current environment.
     */
    rowspanCell(mtd: MmlMtd, tex: string, table: MmlMtable, parser: TexParser, env: string): void;
    /**
     * Add something on the left of the original table.
     *
     * @param {MmlMtable} table     The table to modify.
     * @param {MmlMtable} original  The original table.
     * @param {string} left         The TeX code to add to the left.
     * @param {TexParser} parser    The active tex parser.
     * @param {string} env          The current environment.
     */
    left(table: MmlMtable, original: MmlMtable, left: string, parser: TexParser, env?: string): void;
    /**
     * Add something on the right of the original table.
     *
     * @param {MmlMtable} table     The table to modify.
     * @param {MmlMtable} original  The original table.
     * @param {string} right        The TeX code to add to the right.
     * @param {TexParser} parser    The active tex parser.
     * @param {string} env          The current environment.
     */
    right(table: MmlMtable, original: MmlMtable, right: string, parser: TexParser, env?: string): void;
    /**
     * Add the left- and right-hand material to the table.
     */
    adjustTable(empheq: EmpheqBeginItem, parser: TexParser): void;
    /**
     * The environments allowed to be used in the empheq environment.
     */
    allowEnv: {
        equation: boolean;
        align: boolean;
        gather: boolean;
        flalign: boolean;
        alignat: boolean;
        multline: boolean;
    };
    /**
     * Checks to see if the given environment is one of the allowed ones.
     *
     * @param {string} env   The environment to check.
     * @return {boolean}     True if the environment is allowed.
     */
    checkEnv(env: string): boolean;
};
