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
/**
 * @fileoverview    Configuration file for the colortbl package.
 *
 * @author dpvc@mathjax.org (Davide P. Cervone)
 */
import { ArrayItem } from '../base/BaseItems.js';
import { Configuration } from '../Configuration.js';
import { MmlNode } from '../../../core/MmlTree/MmlNode.js';
/**
 * Information about table colors.
 */
export interface ColorData {
    cell: string;
    row: string;
    col: string[];
}
export declare class ColorArrayItem extends ArrayItem {
    /**
     *  Store current color for cell, row, and columns.
     */
    color: ColorData;
    /**
     * True if any cell is colored (we will make sure the edge cells are full sized).
     */
    hasColor: boolean;
    /**
     * @override
     */
    EndEntry(): void;
    /**
     * @override
     */
    EndRow(): void;
    /**
     * @override
     */
    createMml(): MmlNode;
}
export declare const ColortblConfiguration: Configuration;
