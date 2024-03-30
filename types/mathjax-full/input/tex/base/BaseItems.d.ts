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
import { MmlNode } from '../../../core/MmlTree/MmlNode.js';
import StackItemFactory from '../StackItemFactory.js';
import { CheckType, BaseItem, StackItem, EnvList } from '../StackItem.js';
/**
 * Initial item on the stack. It's pushed when parsing begins.
 */
export declare class StartItem extends BaseItem {
    global: EnvList;
    /**
     * @override
     */
    constructor(factory: StackItemFactory, global: EnvList);
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
}
/**
 * Final item on the stack. Errors will be thrown if other items than the start
 * item are still on the stack.
 */
export declare class StopItem extends BaseItem {
    /**
     * @override
     */
    get kind(): string;
    /**
     * @override
     */
    get isClose(): boolean;
}
/**
 * Item indicating an open brace.
 */
export declare class OpenItem extends BaseItem {
    /**
     * @override
     */
    protected static errors: any;
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
}
/**
 * Item indicating a close brace. Collapses stack until an OpenItem is found.
 */
export declare class CloseItem extends BaseItem {
    /**
     * @override
     */
    get kind(): string;
    /**
     * @override
     */
    get isClose(): boolean;
}
/**
 * Item indicating an we are currently dealing with a prime mark.
 */
export declare class PrimeItem extends BaseItem {
    /**
     * @override
     */
    get kind(): string;
    /**
     * @override
     */
    checkItem(item: StackItem): CheckType;
}
/**
 * Item indicating an we are currently dealing with a sub/superscript
 * expression.
 */
export declare class SubsupItem extends BaseItem {
    /**
     * @override
     */
    protected static errors: any;
    /**
     * @override
     */
    get kind(): string;
    /**
     * @override
     */
    checkItem(item: StackItem): CheckType | null;
}
/**
 * Item indicating an we are currently dealing with an \\over command.
 */
export declare class OverItem extends BaseItem {
    /**
     * @override
     */
    constructor(factory: StackItemFactory);
    /**
     * @override
     */
    get kind(): string;
    /**
     * @override
     */
    get isClose(): boolean;
    /**
     * @override
     */
    checkItem(item: StackItem): CheckType;
    /**
     * @override
     */
    toString(): string;
}
/**
 * Item pushed when a \\left opening delimiter has been found.
 */
export declare class LeftItem extends BaseItem {
    /**
     * @override
     */
    protected static errors: any;
    /**
     * @override
     */
    constructor(factory: StackItemFactory, delim: string);
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
}
/**
 * Item pushed when a \\middle delimiter has been found. Stack is
 * collapsed until a corresponding LeftItem is encountered.
 */
export declare class Middle extends BaseItem {
    /**
     * @override
     */
    constructor(factory: StackItemFactory, delim: string, color: string);
    /**
     * @override
     */
    get kind(): string;
    /**
     * @override
     */
    get isClose(): boolean;
}
/**
 * Item pushed when a \\right closing delimiter has been found. Stack is
 * collapsed until a corresponding LeftItem is encountered.
 */
export declare class RightItem extends BaseItem {
    /**
     * @override
     */
    constructor(factory: StackItemFactory, delim: string, color: string);
    /**
     * @override
     */
    get kind(): string;
    /**
     * @override
     */
    get isClose(): boolean;
}
/**
 * Item pushed for opening an environment with \\begin{env}.
 */
export declare class BeginItem extends BaseItem {
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
}
/**
 * Item pushed for closing an environment with \\end{env}. Stack is collapsed
 * until a corresponding BeginItem for 'env' is found. Error is thrown in case
 * other open environments interfere.
 */
export declare class EndItem extends BaseItem {
    /**
     * @override
     */
    get kind(): string;
    /**
     * @override
     */
    get isClose(): boolean;
}
/**
 * Item pushed for remembering styling information.
 */
export declare class StyleItem extends BaseItem {
    /**
     * @override
     */
    get kind(): string;
    /**
     * @override
     */
    checkItem(item: StackItem): CheckType;
}
/**
 * Item pushed for remembering positioning information.
 */
export declare class PositionItem extends BaseItem {
    /**
     * @override
     */
    get kind(): string;
    /**
     * @override
     */
    checkItem(item: StackItem): CheckType;
}
/**
 * Item indicating a table cell.
 */
export declare class CellItem extends BaseItem {
    /**
     * @override
     */
    get kind(): string;
    /**
     * @override
     */
    get isClose(): boolean;
}
/**
 * Final item for collating Nodes.
 */
export declare class MmlItem extends BaseItem {
    /**
     * @override
     */
    get isFinal(): boolean;
    /**
     * @override
     */
    get kind(): string;
}
/**
 * Item indicating a named function operator (e.g., \\sin) as been encountered.
 */
export declare class FnItem extends BaseItem {
    /**
     * @override
     */
    get kind(): string;
    /**
     * @override
     */
    checkItem(item: StackItem): CheckType;
}
/**
 * Item indicating a \\not has been encountered and needs to be applied to the
 * next operator.
 */
export declare class NotItem extends BaseItem {
    private remap;
    /**
     * @override
     */
    get kind(): string;
    /**
     * @override
     */
    checkItem(item: StackItem): CheckType;
}
/**
 * A StackItem that removes an mspace that follows it (for \nonscript).
 */
export declare class NonscriptItem extends BaseItem {
    /**
     * @override
     */
    get kind(): string;
    /**
     * @override
     */
    checkItem(item: StackItem): CheckType;
}
/**
 * Item indicating a dots command has been encountered.
 */
export declare class DotsItem extends BaseItem {
    /**
     * @override
     */
    get kind(): string;
    /**
     * @override
     */
    checkItem(item: StackItem): CheckType;
}
/**
 * Item indicating an array is assembled. It collates cells, rows and
 * information about column/row separator and framing lines.
 */
export declare class ArrayItem extends BaseItem {
    /**
     * The table as a list of rows.
     * @type {MmlNode[]}
     */
    table: MmlNode[];
    /**
     * The current row as a list of cells.
     * @type {MmlNode[]}
     */
    row: MmlNode[];
    /**
     * Frame specification as a list of strings.
     * @type {string[]}
     */
    frame: string[];
    /**
     * Hfill value.
     * @type {number[]}
     */
    hfill: number[];
    /**
     * Properties for special array definitions.
     * @type {{[key: string]: string|number|boolean}}
     */
    arraydef: {
        [key: string]: string | number | boolean;
    };
    /**
     * True if separators are dashed.
     * @type {boolean}
     */
    dashed: boolean;
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
    get copyEnv(): boolean;
    /**
     * @override
     */
    checkItem(item: StackItem): CheckType;
    /**
     * Create the MathML representation of the table.
     *
     * @return {MmlNode}
     */
    createMml(): MmlNode;
    /**
     * Finishes a single cell of the array.
     */
    EndEntry(): void;
    /**
     * Finishes a single row of the array.
     */
    EndRow(): void;
    /**
     * Finishes the table layout.
     */
    EndTable(): void;
    /**
     * Finishes line layout if not already given.
     */
    checkLines(): void;
    /**
     * Adds a row-spacing to the current row (padding out the rowspacing if needed to get there).
     *
     * @param {string} spacing   The rowspacing to use for the current row.
     */
    addRowSpacing(spacing: string): void;
}
/**
 * Item dealing with equation arrays as a special case of arrays. Handles
 * tagging information according to the given tagging style.
 */
export declare class EqnArrayItem extends ArrayItem {
    /**
     * The length of the longest row.
     */
    maxrow: number;
    /**
     * @override
     */
    constructor(factory: any, ...args: any[]);
    /**
     * @override
     */
    get kind(): string;
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
    EndTable(): void;
    /**
     * Extend a column specification to include a repeating set of values
     *   so that it has enough to match the maximum row length.
     */
    protected extendArray(name: string, max: number): void;
}
/**
 * Item dealing with simple equation environments.  Handles tagging information
 * according to the given tagging style.
 */
export declare class EquationItem extends BaseItem {
    /**
     * @override
     */
    constructor(factory: any, ...args: any[]);
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
}
