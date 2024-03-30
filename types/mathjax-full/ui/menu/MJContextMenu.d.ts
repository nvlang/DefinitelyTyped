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
/**
 * @fileoverview  Implements a subclass of ContextMenu specific to MathJax
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { MathItem } from '../../core/MathItem.js';
import { MmlNode } from '../../core/MmlTree/MmlNode.js';
import { SelectableInfo } from './SelectableInfo.js';
import { ContextMenu } from 'mj-context-menu/js/context_menu.js';
import { SubMenu } from 'mj-context-menu/js/sub_menu.js';
import { Submenu } from 'mj-context-menu/js/item_submenu.js';
import { Item } from 'mj-context-menu/js/item.js';
/**
 * The subclass of ContextMenu that handles the needs of the MathJax
 *   contextual menu (in particular, tying it to a MathItem).
 */
export declare class MJContextMenu extends ContextMenu {
    /**
     * Static map to hold methods for re-computing dynamic submenus.
     * @type {Map<string, (menu: MJContextMenu, sub: Submenu)}
     */
    static DynamicSubmenus: Map<string, (menu: MJContextMenu, sub: Submenu) => SubMenu>;
    /**
     * The MathItem that has posted the menu
     */
    mathItem: MathItem<HTMLElement, Text, Document>;
    /**
     * The annotation selected in the Annotation submenu (neede for the info box to be able to show it)
     */
    annotation: string;
    /**
     * The info box for showing annotations (created by the Menu object that contains this MJContextMenu)
     */
    showAnnotation: SelectableInfo;
    /**
     * The function to copy the selected annotation (set by the containing Menu item)
     */
    copyAnnotation: () => void;
    /**
     * The annotation types to look for in a MathItem
     */
    annotationTypes: {
        [type: string]: string[];
    };
    /**
     * Before posting the menu, set the name for the ShowAs and CopyToClipboard menus,
     *   enable/disable the semantics check item, and get the annotations for the MathItem
     *
     * @override
     */
    post(x?: any, y?: number): void;
    /**
     * Clear the stored MathItem when the menu is removed
     *
     * @override
     */
    unpost(): void;
    /**
     * Find an item in the menu (recursively descending into submenus, if needed)
     *
     * @param {string[]} names   The menu IDs to look for
     * @returns {Item}         The menu item (or null if not found)
     */
    findID(...names: string[]): Item;
    /**
     * Look up the annotations in the MathItem and set the ShowAs and CopyToClipboard menus
     */
    protected getAnnotationMenu(): void;
    /**
     * Find the top-most semantics element that encloses the contents of the expression (if any)
     *
     * @returns {MmlNode | null}   The semantics node that was found (or null)
     */
    protected getSemanticNode(): MmlNode | null;
    /**
     * @param {MmlNode} node           The semantics node whose annotations are to be obtained
     * @returns {[string, string][]}   Array of [type, text] where the type is the annotation type
     *                                   and text is the content of the annotation of that type
     */
    protected getAnnotations(node: MmlNode): [string, string][];
    /**
     * @param {MmlNode} child    The annotation node to check if its encoding is one of the displayable ones
     * @returns {string | null}         The annotation type if it does, or null if it doesn't
     */
    protected annotationMatch(child: MmlNode): string | null;
    /**
     * Create a submenu from the available annotations and attach it to the proper menu item
     *
     * @param {string} id                        The id of the menu to attach to (Show or Copy)
     * @param {[string, string][]} annotations   The annotations to use for the submenu
     * @param {() => void} action                The action to perform when the annotation is selected
     */
    protected createAnnotationMenu(id: string, annotations: [string, string][], action: () => void): void;
    /**
     * Renews the dynamic submenus.
     */
    dynamicSubmenus(): void;
}
