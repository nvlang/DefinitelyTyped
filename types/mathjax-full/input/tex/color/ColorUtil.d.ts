/*************************************************************
 *
 *  Copyright (c) 2018-2022 Omar Al-Ithawi and The MathJax Consortium
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
export declare class ColorModel {
    /**
     * User defined colors.
     *
     * This variable is local to the parser, so two parsers in the same
     * JavaScript thread can have two different sets of user-defined colors.
     */
    private userColors;
    /**
     * Converts a color model from string representation to its CSS format `#44ff00`
     *
     * @param {string} model The coloring model type: `rgb` `RGB` or `gray`.
     * @param {string} def The color definition: `0.5,0,1`, `128,0,255`, `0.5`.
     * @return {string} The color definition in CSS format e.g. `#44ff00`.
     */
    private normalizeColor;
    /**
     * Look up a color based on its model and definition.
     *
     * @param {string} model The coloring model type: `named`, `rgb` `RGB` or `gray`.
     * @param {string} def The color definition: `red, `0.5,0,1`, `128,0,255`, `0.5`.
     * @return {string} The color definition in CSS format e.g. `#44ff00`.
     */
    getColor(model: string, def: string): string;
    /**
     * Get a named color.
     *
     * @param {string} name The color name e.g. `darkblue`.
     * @return {string} The color definition in CSS format e.g. `#44ff00`.
     *
     * To retain backward compatilbity with MathJax v2 this method returns
     * unknown as-is, this is useful for both passing through CSS format colors like `#ff0`,
     * or even standard CSS color names that this plugin is unaware of.
     *
     * In TeX format, this would help to let `\textcolor{#f80}{\text{Orange}}` show an
     * orange word.
     */
    private getColorByName;
    /**
     * Create a new user-defined color.
     *
     * This color is local to the parser, so another MathJax parser won't be poluted.
     *
     * @param {string} model The coloring model type: e.g. `rgb`, `RGB` or `gray`.
     * @param {string} name The color name: `darkblue`.
     * @param {string} def The color definition in the color model format: `128,0,255`.
     */
    defineColor(model: string, name: string, def: string): void;
}
