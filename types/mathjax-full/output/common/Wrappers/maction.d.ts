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
 * @fileoverview  Implements the CommonMaction wrapper mixin for the MmlMaction object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { AnyWrapper, WrapperConstructor, Constructor, AnyWrapperClass } from '../Wrapper.js';
/*****************************************************************/
/**
 * The types needed to define the actiontypes
 *
 * @template W  The maction wrapper type
 */
export type ActionData = {
    [name: string]: any;
};
export type ActionHandler<W extends AnyWrapper> = (node: W, data?: ActionData) => void;
export type ActionPair<W extends AnyWrapper> = [ActionHandler<W>, ActionData];
export type ActionMap<W extends AnyWrapper> = Map<string, ActionPair<W>>;
export type ActionDef<W extends AnyWrapper> = [string, [ActionHandler<W>, ActionData]];
export type EventHandler = (event: Event) => void;
/**
 * Data used for tooltip actions
 */
export declare const TooltipData: {
    dx: string;
    dy: string;
    postDelay: number;
    clearDelay: number;
    hoverTimer: Map<any, number>;
    clearTimer: Map<any, number>;
    stopTimers: (node: any, data: ActionData) => void;
};
/*****************************************************************/
/**
 * The CommonMaction interface
 *
 * @template W  The maction wrapper type
 */
export interface CommonMaction<W extends AnyWrapper> extends AnyWrapper {
    /**
     * The handler for the specified actiontype
     */
    action: ActionHandler<W>;
    data: ActionData;
    /**
     * Tooltip offsets
     */
    dx: number;
    dy: number;
    /**
     * The selected child wrapper
     */
    readonly selected: W;
}
/**
 * The CommonMaction class interface
 *
 * @template W  The maction wrapper type
 */
export interface CommonMactionClass<W extends AnyWrapper> extends AnyWrapperClass {
    /**
     * The valid action types and their handlers
     */
    actions: ActionMap<W>;
}
/**
 * Shorthand for the CommonMaction constructor
 *
 * @template W  The maction wrapper type
 */
export type MactionConstructor<W extends AnyWrapper> = Constructor<CommonMaction<W>>;
/*****************************************************************/
/**
 * The CommonMaction wrapper mixin for the MmlMaction object
 *
 * @template W  The maction wrapper type
 * @template T  The Wrapper class constructor type
 */
export declare function CommonMactionMixin<W extends AnyWrapper, T extends WrapperConstructor>(Base: T): MactionConstructor<W> & T;
