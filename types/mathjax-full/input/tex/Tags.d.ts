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
import { MmlNode } from '../../core/MmlTree/MmlNode.js';
import { MathItem } from '../../core/MathItem.js';
import { EnvList } from './StackItem.js';
import ParseOptions from './ParseOptions.js';
import { OptionList } from '../../util/Options.js';
/**
 *  Simple class for label objects.
 */
export declare class Label {
    tag: string;
    id: string;
    /**
     * @constructor
     * @param {string=} tag The tag that's displayed.
     * @param {string=} id The id that serves as reference.
     */
    constructor(tag?: string, id?: string);
}
/**
 * A simple class for keeping track of tag information.
 */
export declare class TagInfo {
    readonly env: string;
    readonly taggable: boolean;
    readonly defaultTags: boolean;
    tag: string;
    tagId: string;
    tagFormat: string;
    noTag: boolean;
    labelId: string;
    /**
     * @constructor
     * @param {string} env The environment name (e.g., align).
     * @param {boolean} taggable Environment supports tags (e.g., align* does, but
     *     split does not.)
     * @param {boolean} defaultTags Environment is tagged by default (e.g., align
     *     is, but align* is not).
     * @param {string} tag The tag name (e.g., 1).
     * @param {string} tagId The unique id for that tag (e.g., mjx-eqn:1).
     * @param {string} tagFormat The formatted tag (e.g., "(1)").
     * @param {boolean} noTag A no tagging command has been set (e.g., \notag,
     *     \nonumber).
     * @param {string} labelId The label referring to the tag.
     */
    constructor(env?: string, taggable?: boolean, defaultTags?: boolean, tag?: string, tagId?: string, tagFormat?: string, noTag?: boolean, labelId?: string);
}
export interface Tags {
    /**
     * The global configurations in which the parsing takes place.
     * @type {ParseOptions}
     */
    configuration: ParseOptions;
    /**
     * IDs used in this equation.
     * @type {Object.<boolean>}
     */
    ids: {
        [key: string]: boolean;
    };
    /**
     * IDs used in previous equations.
     * @type {Object.<boolean>}
     */
    allIds: {
        [key: string]: boolean;
    };
    /**
     * Labels in the current equation.
     * @type {Object.<Label>}
     */
    labels: {
        [key: string]: Label;
    };
    /**
     * Labels in previous equations.
     * @type {Object.<Label>}
     */
    allLabels: {
        [key: string]: Label;
    };
    /**
     * The label to use for the next tag.
     * @type {string}
     */
    label: string;
    /**
     * True if the equation contains an undefined label and must be reprocessed later.
     * @type {boolean}
     */
    redo: boolean;
    /**
     * True when recompiling to update undefined references
     * @type {boolean}
     */
    refUpdate: boolean;
    /**
     * The environment that is currently tagged.
     * @type {string}
     */
    env: string;
    /**
     * The currently active tag.
     * @type {TagInfo}
     */
    currentTag: TagInfo;
    /**
     * How to format tags.
     * @param {string} tag The tag string.
     * @return {string} The formatted numbered tag.
     */
    formatTag(tag: string): string;
    /**
     * How to format URLs for references.
     * @param {string} id The reference id.
     * @param {string} base The base URL in the reference.
     * @return {}
     */
    formatUrl(id: string, base: string): string;
    /**
     * Set the tag automatically, by incrementing equation number.
     */
    autoTag(): void;
    /**
     * @return {MmlNode|void} Generates and returns the tag node.
     */
    getTag(): MmlNode | void;
    /**
     * Clears tagging information.
     */
    clearTag(): void;
    /**
     * Resets the tag structure after an expression has been typeset.
     */
    resetTag(): void;
    /**
     * Fully resets the tag structure, in particular all the tagging and label
     * history.
     * @param {number} offset A new offset value to start counting ids from.
     */
    reset(offset?: number): void;
    /**
     * Initialise tagging for a MathItem
     * (clear equation-specific labels and ids, set counter
     * and check for recompile)
     * @param {MathItem} math   The MathItem for the current equation
     */
    startEquation(math: MathItem<any, any, any>): void;
    /**
     * Move equation-specific labels and ids to global ones,
     * save the counter, and mark the MathItem for redos
     */
    finishEquation(math: MathItem<any, any, any>): void;
    /**
     * Finalizes tag creation.
     * @param {MmlNode} node
     * @param {EnvList} env List of environment properties.
     * @return {MmlNode} The newly created tag.
     */
    finalize(node: MmlNode, env: EnvList): MmlNode;
    /**
     * Starts tagging on a given environment.
     * @param {string} env The name of the environment.
     * @param {boolean} taggable True if taggable.
     * @param {boolean} defaultTags True if tagged by default.
     */
    start(env: string, taggable: boolean, defaultTags: boolean): void;
    /**
     * End tagging.
     */
    end(): void;
    /**
     * Computes the next tag.
     * @param {string} tag The tag content.
     * @param {boolean} noFormat True if tag should not be formatted.
     */
    tag(tag: string, noFormat: boolean): void;
    /**
     * Call an explicit no tag.
     */
    notag(): void;
    /**
     * Entag an element by creating a table around it.
     * @param {MmlNode} node The node to be tagged.
     * @param {MmlNode} tag The tag node.
     * @return {MmlNode} The table node containing the original node and tag.
     */
    enTag(node: MmlNode, tag: MmlNode): MmlNode;
}
export declare class AbstractTags implements Tags {
    /**
     * Current equation number.
     * @type {number}
     */
    protected counter: number;
    /**
     * Equation number as equation begins.
     * @type {number}
     */
    protected allCounter: number;
    /**
     * @override
     */
    configuration: ParseOptions;
    /**
     * @override
     */
    ids: {
        [key: string]: boolean;
    };
    /**
     * @override
     */
    allIds: {
        [key: string]: boolean;
    };
    /**
     * @override
     */
    labels: {
        [key: string]: Label;
    };
    /**
     * @override
     */
    allLabels: {
        [key: string]: Label;
    };
    /**
     * @override
     */
    redo: boolean;
    /**
     * @override
     */
    refUpdate: boolean;
    /**
     * @override
     */
    currentTag: TagInfo;
    /**
     * Chronology of all previous tags, in case we need to look something up in
     * the finalize method.
     * @type {TagInfo[]}
     */
    protected history: TagInfo[];
    private stack;
    /**
     * @override
     */
    start(env: string, taggable: boolean, defaultTags: boolean): void;
    get env(): string;
    /**
     * @override
     */
    end(): void;
    /**
     * @override
     */
    tag(tag: string, noFormat: boolean): void;
    /**
     * @override
     */
    notag(): void;
    protected get noTag(): boolean;
    set label(label: string);
    get label(): string;
    /**
     * @override
     */
    formatUrl(id: string, base: string): string;
    /**
     * @override
     */
    formatTag(tag: string): string;
    /**
     * How to format ids for labelling equations.
     * @param {string} id The unique part of the id (e.g., label or number).
     * @return {string} The formatted id.
     */
    protected formatId(id: string): string;
    /**
     * How to format numbers in tags.
     * @param {number} n The tag number.
     * @return {string} The formatted number.
     */
    protected formatNumber(n: number): string;
    /**
     * @override
     */
    autoTag(): void;
    /**
     * @override
     */
    clearTag(): void;
    /**
     * @override
     */
    getTag(force?: boolean): MmlNode;
    /**
     * @override
     */
    resetTag(): void;
    /**
     * @override
     */
    reset(offset?: number): void;
    /**
     * @override
     */
    startEquation(math: MathItem<any, any, any>): void;
    /**
     * @override
     */
    finishEquation(math: MathItem<any, any, any>): void;
    /**
     * @override
     */
    finalize(node: MmlNode, env: EnvList): MmlNode;
    /**
     * @override
     */
    enTag: (node: MmlNode, tag: MmlNode) => MmlNode;
    /**
     * Sets the tag id.
     */
    private makeId;
    /**
     * @return {MmlNode} The actual tag node as an mtd.
     */
    private makeTag;
}
/**
 * No tags, except where explicitly set.
 * @constructor
 * @extends {AbstractTags}
 */
export declare class NoTags extends AbstractTags {
    /**
     * @override
     */
    autoTag(): void;
    /**
     * @override
     */
    getTag(): MmlNode;
}
/**
 * Tags every display formula. Exceptions are: Environments that explicitly
 * disallow tags, e.g., equation*.
 * @constructor
 * @extends {AbstractTags}
 */
export declare class AllTags extends AbstractTags {
    /**
     * @override
     */
    finalize(node: MmlNode, env: EnvList): MmlNode;
}
/**
 * Class interface for factory.
 * @interface
 */
export interface TagsClass {
    new (): Tags;
}
export declare namespace TagsFactory {
    /**
     * The default options for tagging
     * @type {OptionList}
     */
    let OPTIONS: OptionList;
    /**
     * Add a tagging object.
     * @param {string} name Name of the tagging object.
     * @param {TagsClass} constr The class of the Tagging object.
     */
    let add: (name: string, constr: TagsClass) => void;
    /**
     * Adds a list of tagging objects to the factory.
     * @param {{[name: string]: TagsClass}} tags The list of tagging objects.
     */
    let addTags: (tags: {
        [name: string]: TagsClass;
    }) => void;
    /**
     * Creates a new tagging object.
     * @param {string} name The name of the tagging object.
     * @return {Tags} The newly created object.
     */
    let create: (name: string) => Tags;
    /**
     * Set the name of the default tagging object.
     * @param {string} name The default.
     */
    let setDefault: (name: string) => void;
    /**
     * @return {Tags} The default tagging object.
     */
    let getDefault: () => Tags;
}
