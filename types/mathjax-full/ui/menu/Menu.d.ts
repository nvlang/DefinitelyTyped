/*************************************************************
 *
 *  Copyright (c) 2019-2022 The MathJax Consortium
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
import { MathItem } from '../../core/MathItem.js';
import { OutputJax } from '../../core/OutputJax.js';
import { OptionList } from '../../util/Options.js';
import { MJContextMenu } from './MJContextMenu.js';
import { MmlVisitor } from './MmlVisitor.js';
import { SelectableInfo } from './SelectableInfo.js';
import { MenuMathDocument } from './MenuHandler.js';
import { Info } from 'mj-context-menu/js/info.js';
/**
 * The various values that are stored in the menu
 */
export interface MenuSettings {
    texHints: boolean;
    semantics: boolean;
    zoom: string;
    zscale: string;
    renderer: string;
    alt: boolean;
    cmd: boolean;
    ctrl: boolean;
    shift: boolean;
    scale: string;
    autocollapse: boolean;
    collapsible: boolean;
    inTabOrder: boolean;
    assistiveMml: boolean;
    backgroundColor: string;
    backgroundOpacity: string;
    braille: boolean;
    explorer: boolean;
    foregroundColor: string;
    foregroundOpacity: string;
    highlight: string;
    locale: string;
    infoPrefix: boolean;
    infoRole: boolean;
    infoType: boolean;
    magnification: string;
    magnify: string;
    speech: boolean;
    speechRules: string;
    subtitles: boolean;
    treeColoring: boolean;
    viewBraille: boolean;
}
export type HTMLMATHITEM = MathItem<HTMLElement, Text, Document>;
/**
 * The Menu object that handles the MathJax contextual menu and its actions
 */
export declare class Menu {
    /**
     * The key for the localStorage for the menu settings
     */
    static MENU_STORAGE: string;
    /**
     * The options for the menu, including the default settings, the various output jax
     * and the list of annotation types and their encodings
     */
    static OPTIONS: OptionList;
    /**
     * The number of startup modules that are currently being loaded
     */
    protected static loading: number;
    /**
     * Promises for the loading components
     */
    protected static loadingPromises: Map<string, Promise<void>>;
    /**
     * A promise that is resolved when all components are loaded
     */
    protected static _loadingPromise: Promise<void>;
    /**
     * Function used to resolve the _loadingPromise
     */
    protected static _loadingOK: Function;
    /**
     * Function used to reject the _loadingPromise
     */
    protected static _loadingFailed: Function;
    /**
     * The options for this menu
     */
    options: OptionList;
    /**
     * The current settings for this menu (the variables attached to the menu's pool)
     */
    settings: MenuSettings;
    /**
     * The original settings (with page options factored in) for use with the reset command
     */
    defaultSettings: MenuSettings;
    /**
     * The contextual menu object that is managed by this Menu
     */
    menu: MJContextMenu;
    /**
     * A MathML serializer that has options corresponding to the menu settings
     */
    MmlVisitor: MmlVisitor<HTMLElement, Text, Document>;
    /**
     * The MathDocument in which we are working
     */
    protected document: MenuMathDocument;
    /**
     * Instances of the various output jax that we can switch to
     */
    protected jax: {
        [name: string]: OutputJax<HTMLElement, Text, Document>;
    };
    /**
     * The minium initial state for pending rerender requests (so final rerender gets the right start)
     */
    protected rerenderStart: number;
    /**
     * @returns {boolean}   true when the menu is loading some component
     */
    get isLoading(): boolean;
    /**
     * @returns {Promise}   A promise that is resolved when all pending loads are complete
     */
    get loadingPromise(): Promise<void>;
    /**
     * The "About MathJax" info box
     */
    protected about: Info;
    /**
     * The "MathJax Help" info box
     */
    protected help: Info;
    /**
     * The "Show As MathML" info box
     */
    protected mathmlCode: SelectableInfo;
    /**
     * The "Show As (original form)" info box
     */
    protected originalText: SelectableInfo;
    /**
     * The "Show As Annotation" info box
     */
    protected annotationText: SelectableInfo;
    /**
     * The info box for zoomed expressions
     */
    protected zoomBox: Info;
    /**
     * Accept options in addition to the MathDocument, and set up the menu based
     *  on the defaults, the passed options, and the user's saved settings.
     *
     * @param {MenuMathDocument} document   The MathDcument where this menu will post
     * @param {OptionList} options          The options for the menu
     * @override
     */
    constructor(document: MenuMathDocument, options?: OptionList);
    /**
     * Set up the settings and jax objects, and transfer the output jax name and scale to the settings
     */
    protected initSettings(): void;
    /**
     * Create the menu object, attach the info boxes to it, and output any CSS needed for it
     */
    protected initMenu(): void;
    /**
     * Check whether the startup and loader modules are available, and
     *   if not, disable the a11y modules (since we can't load them
     *   or know if they are available).
     * Otherwise, check if any need to be loaded
     */
    protected checkLoadableItems(): void;
    /**
     * Enable/disable the Explorer submenu items
     *
     * @param {boolean} enable  True to enable, false to disable
     */
    protected enableExplorerItems(enable: boolean): void;
    /**
     * Look up the saved settings from localStorage and merge them into the menu settings
     */
    protected mergeUserSettings(): void;
    /**
     * Save any non-default menu settings in localStorage
     */
    protected saveUserSettings(): void;
    /**
     * Merge menu settings into the a11y document options.
     * @param {[key: string]: any} options The options.
     */
    protected setA11y(options: {
        [key: string]: any;
    }): void;
    /**
     * Get the the value of an a11y option
     * @param {string} option   The name of the ptions to get
     * @return {any}            The value of the option
     */
    protected getA11y(option: string): any;
    /**
     * Do what is needed to apply the initial user settings
     */
    protected applySettings(): void;
    /**
     * @param {string} scale   The new scaling value
     */
    protected setScale(scale: string): void;
    /**
     * If the jax is already on record, just use it, otherwise load the new one
     *
     * @param {string} jax   The name of the jax to switch to
     */
    protected setRenderer(jax: string): void;
    /**
     * Set up the new jax and link it to the document, then rerender the math
     *
     * @param {string} jax   The name of the jax to switch to
     */
    protected setOutputJax(jax: string): void;
    /**
     * @param {boolean} tab   True for including math in the tab order, false for not
     */
    protected setTabOrder(tab: boolean): void;
    /**
     * @param {boolean} mml   True to output hidden Mathml, false to not
     */
    protected setAssistiveMml(mml: boolean): void;
    /**
     * @param {boolean} explore   True to enable the explorer, false to not
     */
    protected setExplorer(explore: boolean): void;
    /**
     * @param {boolean} collapse   True to enable collapsible math, false to not
     */
    protected setCollapsible(collapse: boolean): void;
    /**
     * Request the scaling value from the user and save it in the settings
     */
    protected scaleAllMath(): void;
    /**
     * Reset all menu settings to the (page) defaults
     */
    protected resetDefaults(): void;
    /**
     * Check if a component is loading, and restart if it is
     *
     * @param {string} name        The name of the component to check if it is loading
     */
    checkComponent(name: string): void;
    /**
     * Attempt to load a component and perform a callback when done
     */
    protected loadComponent(name: string, callback: () => void): void;
    /**
     * Attempt to load an a11y component
     *
     * @param {string} component   The name of the a11y component to load
     */
    loadA11y(component: string): void;
    /**
     * @param {MenuMathDocument} document  The original document whose list is to be transferred
     */
    protected transferMathList(document: MenuMathDocument): void;
    /**
     * @param {string} text   The text to be displayed in an Info box
     * @returns {string}      The text with HTML specials being escaped
     */
    protected formatSource(text: string): string;
    /**
     * @param {HTMLMATHITEM} math   The MathItem to serialize as MathML
     * @returns {string}        The serialized version of the internal MathML
     */
    protected toMML(math: HTMLMATHITEM): string;
    /**
     * @param {MouseEvent|null} event   The event triggering the zoom (or null for from a menu pick)
     * @param {string} type             The type of event occurring (click, dblclick)
     * @param {HTMLMATHITEM} math       The MathItem triggering the event
     */
    protected zoom(event: MouseEvent, type: string, math: HTMLMATHITEM): void;
    /**
     * @param {MouseEvent} Event   The event triggering the zoom action
     * @param {string} zoom        The type of event (click, dblclick) that occurred
     * @returns {boolean}          True if the event is the right type and has the needed modifiers
     */
    protected isZoomEvent(event: MouseEvent, zoom: string): boolean;
    /**
     * Rerender the output if we aren't in the middle of loading a new component
     *   (in which case, we will rerender in the callback performed  after it is loaded)
     *
     * @param {number=} start   The state at which to start rerendering
     */
    protected rerender(start?: number): void;
    /**
     * Copy the serialzied MathML to the clipboard
     */
    protected copyMathML(): void;
    /**
     * Copy the original form to the clipboard
     */
    protected copyOriginal(): void;
    /**
     * Copy the original annotation text to the clipboard
     */
    copyAnnotation(): void;
    /**
     * @param {string} text   The text to be copied ot the clopboard
     */
    protected copyToClipboard(text: string): void;
    /**
     * @param {HTMLMATHITEM} math   The math to attach the context menu and zoom triggers to
     */
    addMenu(math: HTMLMATHITEM): void;
    /**
     * Clear the information about stored context menus
     */
    clear(): void;
    /**
     * Create JSON for a variable controlling a menu setting
     *
     * @param {keyof MenuSettings} name   The setting for which to make a variable
     * @param {(T) => void} action        Optional function to perform after setting the value
     * @returns {Object}                  The JSON for the variable
     *
     * @tempate T    The type of variable being defined
     */
    variable<T extends (string | boolean)>(name: keyof MenuSettings, action?: (value: T) => void): Object;
    /**
     * Create JSON for an a11y specific variable.
     *
     * @param {keyof MenuSettings} name   The setting for which to make a variable
     * @returns {Object}                  The JSON for the variable
     *
     * @tempate T    The type of variable being defined
     */
    a11yVar<T extends (string | boolean)>(name: keyof MenuSettings, action?: (value: T) => void): Object;
    /**
     * Create JSON for a submenu item
     *
     * @param {string} id           The id for the item
     * @param {string} content      The content for the item
     * @param {any[]} entries       The JSON for the entries
     * @param {boolean=} disabled   True if this item is diabled initially
     * @returns {Object}            The JSON for the submenu item
     */
    submenu(id: string, content: string, entries?: any[], disabled?: boolean): Object;
    /**
     * Create JSON for a command item
     *
     * @param {string} id           The id for the item
     * @param {string} content      The content for the item
     * @param {() => void} action   The action function for the command
     * @param {Object} other        Other values to include in the generated JSON object
     * @returns {Object}            The JSON for the command item
     */
    command(id: string, content: string, action: () => void, other?: Object): Object;
    /**
     * Create JSON for a checkbox item
     *
     * @param {string} id           The id for the item
     * @param {string} content      The content for the item
     * @param {string} variable     The (pool) variable to attach to this checkbox
     * @param {Object} other        Other values to include in the generated JSON object
     * @returns {Object}            The JSON for the checkbox item
     */
    checkbox(id: string, content: string, variable: string, other?: Object): Object;
    /**
     * Create JSON for a group of connected radio buttons
     *
     * @param {string} variable     The (pool) variable to attach to each radio button
     * @param {string[][]} radios   An array of [string] or [string, string], giving the id and content
     *                                for each radio button (if only one string is given it is used for both)
     * @returns {Object[]}          An array of JSON objects for radion buttons
     */
    radioGroup(variable: string, radios: string[][]): Object[];
    /**
     * Create JSON for a radio button item
     *
     * @param {string} id           The id for the item
     * @param {string} content      The content for the item
     * @param {string} variable     The (pool) variable to attach to this radio button
     * @param {Object} other        Other values to include in the generated JSON object
     * @returns {Object}            The JSON for the radio button item
     */
    radio(id: string, content: string, variable: string, other?: Object): Object;
    /**
     * Create JSON for a label item
     *
     * @param {string} id           The id for the item
     * @param {string} content      The content for the item
     * @returns {Object}            The JSON for the label item
     */
    label(id: string, content: string): Object;
    /**
     * Create JSON for a menu rule
     *
     * @returns {Object}            The JSON for the rule item
     */
    rule(): Object;
}
