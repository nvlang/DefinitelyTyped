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
import { MmlNode } from '../../core/MmlTree/MmlNode.js';
import { StackItem, EnvList } from './StackItem.js';
import StackItemFactory from './StackItemFactory.js';
export default class Stack {
    private _factory;
    private _env;
    /**
     * @type {EnvList}
     */
    global: EnvList;
    /**
     * The actual stack, a list of stack items.
     * @type {Array.<StackItem>}
     */
    private stack;
    /**
     * @constructor
     * @param {StackItemFactory} factory The stack item factory.
     * @param {EnvList} env The environment.
     * @param {boolean} inner True if parser has been called recursively.
     */
    constructor(_factory: StackItemFactory, _env: EnvList, inner: boolean);
    /**
     * Set the environment of the stack.
     * @param {EnvList} env The new environment.
     */
    set env(env: EnvList);
    /**
     * Retrieves the environment of that stack.
     * @return {EnvList} The current environment.
     */
    get env(): EnvList;
    /**
     * Pushes items or nodes onto stack.
     * @param {...StackItem|MmlNode} args A list of items to push.
     */
    Push(...args: (StackItem | MmlNode)[]): void;
    /**
     * Pop the topmost elements off the stack.
     * @return {StackItem} A stack item.
     */
    Pop(): StackItem;
    /**
     * Lookup the nth elements on the stack without removing them.
     * @param {number=} n Position of element that should be returned. Default 1.
     * @return {StackItem} Nth item on the stack.
     */
    Top(n?: number): StackItem;
    /**
     * Lookup the topmost element on the stack, returning the Mml node in that
     * item. Optionally pops the Mml node from that stack item.
     * @param {boolean=} noPop Pop top item if true.
     * @return {MmlNode} The Mml node in the topmost stack item.
     */
    Prev(noPop?: boolean): MmlNode | void;
    /**
     * @override
     */
    toString(): string;
}
