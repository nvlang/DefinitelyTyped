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
 * @fileoverview  Implement a generic LinkedList object.
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
/*****************************************************************/
/**
 *  A symbol used to mark the special node used to indicate
 *  the start and end of the list.
 */
export declare const END: unique symbol;
/**
 * Shorthand type for the functions used to sort the data items
 *
 * @template DataClass   The type of data stored in the list
 */
export type SortFn<DataClass> = (a: DataClass, b: DataClass) => boolean;
/*****************************************************************/
/**
 *  The ListItem interface (for a specific type of data item)
 *
 *  These are the items in the doubly-linked list.
 *
 * @template DataClass   The type of data stored in the list
 */
export declare class ListItem<DataClass> {
    /**
     * The data for the list item
     */
    data: DataClass | symbol;
    /**
     * Pointers to the next item in the list
     */
    next: ListItem<DataClass>;
    /**
     * Pointers to the previous item in the list
     */
    prev: ListItem<DataClass>;
    /**
     * @param {any} data  The data to be stored in the list item
     * @constructor
     */
    constructor(data?: any);
}
/*****************************************************************/
/**
 *  Implements the generic LinkedList class
 *
 * @template DataClass   The type of data stored in the list
 */
export declare class LinkedList<DataClass> {
    /**
     * The linked list
     */
    protected list: ListItem<DataClass>;
    /**
     *  This.list is a special ListItem whose next property
     *    points to the head of the list and whose prev
     *    property points to the tail.  This lets us relink
     *    the head and tail items in the same way as any other
     *    item in the list, without having to handle special
     *    cases.
     *
     * @param {DataClass[]} args  The data items that form the initial list
     * @constructor
     */
    constructor(...args: DataClass[]);
    /**
     *  Used for sorting and merging lists (Overridden by subclasses)
     *
     * @param {DataClass} a   The first item to compare
     * @param {DataClass} b   The second item to compare
     * @return {boolean}      True if a is before b, false otherwise
     */
    isBefore(a: DataClass, b: DataClass): boolean;
    /**
     * Push items on the end of the list
     *
     * @param {DataClass[]} args   The list of data items to be pushed
     * @return {LinkedList}        The LinkedList object (for chaining)
     */
    push(...args: DataClass[]): LinkedList<DataClass>;
    /**
     * Pop the end item off the list and return its data
     *
     * @return {DataClass}  The data from the last item in the list
     */
    pop(): DataClass;
    /**
     * Push items at the head of the list
     *
     * @param {DataClass[]} args   The list of data items to inserted
     * @return {LinkedList}        The LinkedList object (for chaining)
     */
    unshift(...args: DataClass[]): LinkedList<DataClass>;
    /**
     * Remove an item from the head of the list and return its data
     *
     * @return {DataClass}  The data from the first item in the list
     */
    shift(): DataClass;
    /**
     * Remove items from the list
     *
     * @param {DataClass[]} items   The items to remove
     */
    remove(...items: DataClass[]): void;
    /**
     * Empty the list
     *
     * @return {LinkedList}  The LinkedList object (for chaining)
     */
    clear(): LinkedList<DataClass>;
    /**
     * An iterator for the list in forward order
     *
     * @yield {DataClass} The next item in the iteration sequence
     */
    [Symbol.iterator](): IterableIterator<DataClass>;
    /**
     * An iterator for the list in reverse order
     *
     * @yield {DataClass} The previous item in the iteration sequence
     */
    reversed(): IterableIterator<DataClass>;
    /**
     * Insert a new item into a sorted list in the correct locations
     *
     * @param {DataClass} data   The data item to add
     * @param {SortFn} isBefore   The function used to order the data
     * @param {LinkedList}        The LinkedList object (for chaining)
     */
    insert(data: DataClass, isBefore?: SortFn<DataClass>): this;
    /**
     * Sort the list using an optional sort function
     *
     * @param {SortFn} isBefore  The function used to order the data
     * @return {LinkedList}      The LinkedList object (for chaining)
     */
    sort(isBefore?: SortFn<DataClass>): LinkedList<DataClass>;
    /**
     * Merge a sorted list with another sorted list
     *
     * @param {LinkedList} list  The list to merge into this instance's list
     * @param {SortFn} isBefore  The function used to order the data
     * @return {LinkedList}      The LinkedList instance (for chaining)
     */
    merge(list: LinkedList<DataClass>, isBefore?: SortFn<DataClass>): LinkedList<DataClass>;
}
