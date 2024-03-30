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
 * @fileoverview Explorers based on keyboard events.
 *
 * @author v.sorge@mathjax.org (Volker Sorge)
 */
import { A11yDocument, Region } from './Region.js';
import { Explorer, AbstractExplorer } from './Explorer.js';
import Sre from '../sre.js';
/**
 * Interface for keyboard explorers. Adds the necessary keyboard events.
 * @interface
 * @extends {Explorer}
 */
export interface KeyExplorer extends Explorer {
    /**
     * Function to be executed on key down.
     * @param {KeyboardEvent} event The keyboard event.
     */
    KeyDown(event: KeyboardEvent): void;
    /**
     * Function to be executed on focus in.
     * @param {KeyboardEvent} event The keyboard event.
     */
    FocusIn(event: FocusEvent): void;
    /**
     * Function to be executed on focus out.
     * @param {KeyboardEvent} event The keyboard event.
     */
    FocusOut(event: FocusEvent): void;
}
/**
 * @constructor
 * @extends {AbstractExplorer}
 *
 * @template T  The type that is consumed by the Region of this explorer.
 */
export declare abstract class AbstractKeyExplorer<T> extends AbstractExplorer<T> implements KeyExplorer {
    /**
     * Flag indicating if the explorer is attached to an object.
     */
    attached: boolean;
    /**
     * The attached Sre walker.
     * @type {Walker}
     */
    protected walker: Sre.walker;
    private eventsAttached;
    /**
     * @override
     */
    protected events: [string, (x: Event) => void][];
    /**
     * The original tabindex value before explorer was attached.
     * @type {boolean}
     */
    private oldIndex;
    /**
     * @override
     */
    abstract KeyDown(event: KeyboardEvent): void;
    /**
     * @override
     */
    FocusIn(_event: FocusEvent): void;
    /**
     * @override
     */
    FocusOut(_event: FocusEvent): void;
    /**
     * @override
     */
    Update(force?: boolean): void;
    /**
     * @override
     */
    Attach(): void;
    /**
     * @override
     */
    AddEvents(): void;
    /**
     * @override
     */
    Detach(): void;
    /**
     * @override
     */
    Stop(): void;
}
/**
 * Explorer that pushes speech to live region.
 * @constructor
 * @extends {AbstractKeyExplorer}
 */
export declare class SpeechExplorer extends AbstractKeyExplorer<string> {
    document: A11yDocument;
    protected region: Region<string>;
    protected node: HTMLElement;
    private mml;
    private static updatePromise;
    /**
     * The Sre speech generator associated with the walker.
     * @type {SpeechGenerator}
     */
    speechGenerator: Sre.speechGenerator;
    /**
     * The name of the option used to control when this is being shown
     * @type {string}
     */
    showRegion: string;
    private init;
    /**
     * Flag in case the start method is triggered before the walker is fully
     * initialised. I.e., we have to wait for Sre. Then region is re-shown if
     * necessary, as otherwise it leads to incorrect stacking.
     * @type {boolean}
     */
    private restarted;
    /**
     * @constructor
     * @extends {AbstractKeyExplorer}
     */
    constructor(document: A11yDocument, region: Region<string>, node: HTMLElement, mml: string);
    /**
     * @override
     */
    Start(): void;
    /**
     * @override
     */
    Update(force?: boolean): void;
    /**
     * Computes the speech for the current expression once Sre is ready.
     * @param {Walker} walker The sre walker.
     */
    Speech(walker: Sre.walker): void;
    /**
     * @override
     */
    KeyDown(event: KeyboardEvent): void;
    /**
     * Programmatically triggers a link if the focused node contains one.
     * @param {number} code The keycode of the last key pressed.
     */
    protected triggerLink(code: number): boolean;
    /**
     * @override
     */
    Move(key: number): void;
    /**
     * Initialises the Sre walker.
     */
    private initWalker;
    /**
     * Retrieves the speech options to sync with document options.
     * @return {{[key: string]: string}} The options settings for the speech
     *     generator.
     */
    private getOptions;
}
/**
 * Explorer that magnifies what is currently explored. Uses a hover region.
 * @constructor
 * @extends {AbstractKeyExplorer}
 */
export declare class Magnifier extends AbstractKeyExplorer<HTMLElement> {
    document: A11yDocument;
    protected region: Region<HTMLElement>;
    protected node: HTMLElement;
    private mml;
    /**
     * @constructor
     * @extends {AbstractKeyExplorer}
     */
    constructor(document: A11yDocument, region: Region<HTMLElement>, node: HTMLElement, mml: string);
    /**
     * @override
     */
    Update(force?: boolean): void;
    /**
     * @override
     */
    Start(): void;
    /**
     * Shows the nodes that are currently focused.
     */
    private showFocus;
    /**
     * @override
     */
    Move(key: number): void;
    /**
     * @override
     */
    KeyDown(event: KeyboardEvent): void;
}
