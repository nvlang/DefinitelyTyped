/*************************************************************
 *
 *  Copyright (c) 2009-2022 The MathJax Consortium
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
 * @fileoverview Stack items for parsing the braket package.
 *
 * @author v.sorge@mathjax.org (Volker Sorge)
 */
import { CheckType, BaseItem, StackItem } from '../StackItem.js';
/**
 * A bra-ket command. Collates elements from the opening brace to the closing
 * brace, adding bars to a given maximal number (e.g., only one in case of
 * set). To finalise it adds the surrounding angle brackets or braces.
 */
export declare class BraketItem extends BaseItem {
    /**
     * @override
     */
    get kind(): string;
    /**
     * @override
     */
    get isOpen(): boolean;
    /**
     * @override
     */
    checkItem(item: StackItem): CheckType;
    /**
     * @override
     */
    toMml(): import("../../../core/MmlTree/MmlNode.js").MmlNode;
}
