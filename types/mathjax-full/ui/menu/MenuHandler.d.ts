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
import { MathDocumentConstructor } from '../../core/MathDocument.js';
import { Handler } from '../../core/Handler.js';
import { ComplexityMathDocument, ComplexityMathItem } from '../../a11y/complexity.js';
import { ExplorerMathDocument, ExplorerMathItem } from '../../a11y/explorer.js';
import { AssistiveMmlMathDocument, AssistiveMmlMathItem } from '../../a11y/assistive-mml.js';
import { Menu } from './Menu.js';
/**
 * Generic constructor for Mixins
 */
export type Constructor<T> = new (...args: any[]) => T;
/**
 * Constructor for base MathItem for MenuMathItem
 */
export type A11yMathItemConstructor = {
    new (...args: any[]): ComplexityMathItem<HTMLElement, Text, Document> & ExplorerMathItem & AssistiveMmlMathItem<HTMLElement, Text, Document>;
};
/**
 * Constructor for base document for MenuMathDocument
 */
export type A11yDocumentConstructor = MathDocumentConstructor<ComplexityMathDocument<HTMLElement, Text, Document> & ExplorerMathDocument & AssistiveMmlMathDocument<HTMLElement, Text, Document>>;
/**
 * The new function for MathItem that adds the context menu
 */
export interface MenuMathItem extends ComplexityMathItem<HTMLElement, Text, Document> {
    /**
     * @param {MenuMathDocument} document   The document where the menu is being added
     * @param {boolean} force               True if menu should be added even if enableMenu is false
     */
    addMenu(document: MenuMathDocument, force?: boolean): void;
    /**
     * @param {MenuMathDocument} document   The document to check for if anything is being loaded
     */
    checkLoading(document: MenuMathDocument): void;
}
/**
 * The mixin for adding context menus to MathItems
 *
 * @param {B} BaseMathItem   The MathItem class to be extended
 * @return {MathMathItem}    The extended MathItem class
 *
 * @template B  The MathItem class to extend
 */
export declare function MenuMathItemMixin<B extends A11yMathItemConstructor>(BaseMathItem: B): Constructor<MenuMathItem> & B;
/**
 * The properties needed in the MathDocument for context menus
 */
export interface MenuMathDocument extends ComplexityMathDocument<HTMLElement, Text, Document> {
    /**
     * The menu associated with this document
     */
    menu: Menu;
    /**
     * Add context menus to the MathItems in the MathDocument
     *
     * @return {MenuMathDocument}   The MathDocument (so calls can be chained)
     */
    addMenu(): MenuMathDocument;
    /**
     * Checks if there are files being loaded by the menu, and restarts the typesetting if so
     *
     * @return {MenuMathDocument}   The MathDocument (so calls can be chained)
     */
    checkLoading(): MenuMathDocument;
}
/**
 * The mixin for adding context menus to MathDocuments
 *
 * @param {B} BaseDocument     The MathDocument class to be extended
 * @return {MenuMathDocument}      The extended MathDocument class
 *
 * @template B  The MathDocument class to extend
 */
export declare function MenuMathDocumentMixin<B extends A11yDocumentConstructor>(BaseDocument: B): Constructor<MenuMathDocument> & B;
/**
 * Add context-menu support to a Handler instance
 *
 * @param {Handler} handler   The Handler instance to enhance
 * @return {Handler}          The handler that was modified (for purposes of chaining extensions)
 */
export declare function MenuHandler(handler: Handler<HTMLElement, Text, Document>): Handler<HTMLElement, Text, Document>;
