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
 * @fileoverview Explorers based on mouse events.
 *
 * @author v.sorge@mathjax.org (Volker Sorge)
 */
import { A11yDocument, Region } from './Region.js';
import { Explorer, AbstractExplorer } from './Explorer.js';
import '../sre.js';
/**
 * Interface for mouse explorers. Adds the necessary mouse events.
 * @interface
 * @extends {Explorer}
 */
export interface MouseExplorer extends Explorer {
    /**
     * Function to be executed on mouse over.
     * @param {MouseEvent} event The mouse event.
     */
    MouseOver(event: MouseEvent): void;
    /**
     * Function to be executed on mouse out.
     * @param {MouseEvent} event The mouse event.
     */
    MouseOut(event: MouseEvent): void;
}
/**
 * @constructor
 * @extends {AbstractExplorer}
 *
 * @template T  The type that is consumed by the Region of this explorer.
 */
export declare abstract class AbstractMouseExplorer<T> extends AbstractExplorer<T> implements MouseExplorer {
    /**
     * @override
     */
    protected events: [string, (x: Event) => void][];
    /**
     * @override
     */
    MouseOver(_event: MouseEvent): void;
    /**
     * @override
     */
    MouseOut(_event: MouseEvent): void;
}
/**
 * Exploration via hovering.
 * @constructor
 * @extends {AbstractMouseExplorer}
 */
export declare abstract class Hoverer<T> extends AbstractMouseExplorer<T> {
    document: A11yDocument;
    protected region: Region<T>;
    protected node: HTMLElement;
    protected nodeQuery: (node: HTMLElement) => boolean;
    protected nodeAccess: (node: HTMLElement) => T;
    /**
     * Remember the last position to avoid flickering.
     * @type {[number, number]}
     */
    protected coord: [number, number];
    /**
     * @constructor
     * @extends {AbstractMouseExplorer<T>}
     *
     * @param {A11yDocument} document The current document.
     * @param {Region<T>} region A region to display results.
     * @param {HTMLElement} node The node on which the explorer works.
     * @param {(node: HTMLElement) => boolean} nodeQuery Predicate on nodes that
     *    will fire the hoverer.
     * @param {(node: HTMLElement) => T} nodeAccess Accessor to extract node value
     *    that is passed to the region.
     *
     * @template T
     */
    protected constructor(document: A11yDocument, region: Region<T>, node: HTMLElement, nodeQuery: (node: HTMLElement) => boolean, nodeAccess: (node: HTMLElement) => T);
    /**
     * @override
     */
    MouseOut(event: MouseEvent): void;
    /**
     * @override
     */
    MouseOver(event: MouseEvent): void;
    /**
     * Retrieves the closest node on which the node query fires. Thereby closest
     * is defined as:
     * 1. The node or its ancestor on which the query is true.
     * 2. In case 1 does not exist the left-most child on which query is true.
     * 3. Otherwise fails.
     *
     * @param {HTMLElement} node The node on which the mouse event fired.
     * @return {[HTMLElement, T]} Node and output pair if successful.
     */
    getNode(node: HTMLElement): [HTMLElement, T];
}
/**
 * Hoverer that displays information on nodes (e.g., as tooltips).
 * @constructor
 * @extends {Hoverer}
 */
export declare class ValueHoverer extends Hoverer<string> {
}
/**
 * Hoverer that displays node content (e.g., for magnification).
 * @constructor
 * @extends {Hoverer}
 */
export declare class ContentHoverer extends Hoverer<HTMLElement> {
}
/**
 * Highlights maction nodes on hovering.
 * @constructor
 * @extends {Hoverer}
 */
export declare class FlameHoverer extends Hoverer<void> {
    document: A11yDocument;
    protected node: HTMLElement;
    /**
     * @override
     */
    protected constructor(document: A11yDocument, _ignore: any, node: HTMLElement);
}
