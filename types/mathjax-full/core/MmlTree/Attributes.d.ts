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
 * @fileoverview Implements Attribute class for MmlNodes
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { PropertyList, Property } from '../Tree/Node.js';
/**
 * A constant for when a property should be inherited from the global defaults lists
 */
export declare const INHERIT = "_inherit_";
/******************************************************************/
/**
 * Implements the Attributes class for MmlNodes
 *  (These can be set explicitly, inherited from parent nodes,
 *   taken from a default list of values, or taken from global
 *   defaults.)
 */
export declare class Attributes {
    /**
     * The attributes explicitly set on a node
     */
    protected attributes: PropertyList;
    /**
     * The attributes inherited from parent nodes
     */
    protected inherited: PropertyList;
    /**
     * The default attributes for the node type
     */
    protected defaults: PropertyList;
    /**
     * Global attributes from the math node itself
     */
    protected global: PropertyList;
    /**
     * @param {PropertyList} defaults  The defaults for this node type
     * @param {PropertyList} global    The global properties (from the math node)
     *
     * @constructor
     */
    constructor(defaults: PropertyList, global: PropertyList);
    /**
     * @param {string} name     The name of the attribute to set
     * @param {Property} value  The value to give the named attribute
     */
    set(name: string, value: Property): void;
    /**
     * @param {PropertyList} list  An object containing the properties to set
     */
    setList(list: PropertyList): void;
    /**
     * @param {string} name  The name of the attribute whose value is to be returned
     * @return {Property}    The value of the named attribute (including inheritance and defaults)
     */
    get(name: string): Property;
    /**
     * @param {string} name  The value of the attribute whose value is to be returned
     * @return {Property}    The attribute whose name was given if it is explicit on the
     *                       node (not inherited or defaulted), null otherwise
     */
    getExplicit(name: string): Property;
    /**
     * @param {string[]} names  The names of attributes whose values are to be returned
     * @return {PropertyList}   An object containing the attributes and their values
     */
    getList(...names: string[]): PropertyList;
    /**
     * @param {string} name  The name of an inherited attribute to be set
     * @param {Property} value  The value to assign to the named attribute
     */
    setInherited(name: string, value: Property): void;
    /**
     * @param {string} name  The name of an inherited attribute whose value is to be returned
     * @return {Property}    The value of the named attribute if it is inherited, null otherwise
     */
    getInherited(name: string): Property;
    /**
     * @param {string} name  The name of a default attribute whose value is to be returned
     * @return {Property}    The value of the named attribute if a default exists for it, null otherwise
     */
    getDefault(name: string): Property;
    /**
     * @param {string} name  The name of a attribute to check
     * @return {boolean}     True if attribute is set explicitly or inherited
     *                         from an explicit mstyle or math attribute
     */
    isSet(name: string): boolean;
    /**
     * @param {string} name  The name of an attribute to test for the existence of a default
     * @return {boolean}     True of there is a default for the named attribute, false otherwise
     */
    hasDefault(name: string): boolean;
    /**
     * @return {string[]}  The names of all the attributes explicitly set on the node
     */
    getExplicitNames(): string[];
    /**
     * @return {string[]}  The names of all the inherited attributes for the node
     */
    getInheritedNames(): string[];
    /**
     * @return {string[]}  The names of all the default attributes for the node
     */
    getDefaultNames(): string[];
    /**
     * @return {string[]}  The names of all the global attributes
     */
    getGlobalNames(): string[];
    /**
     * @return {PropertyList}  The attribute object
     */
    getAllAttributes(): PropertyList;
    /**
     * @return {PropertyList}  The inherited object
     */
    getAllInherited(): PropertyList;
    /**
     * @return {PropertyList}  The defaults object
     */
    getAllDefaults(): PropertyList;
    /**
     * @return {PropertyList}  The global object
     */
    getAllGlobals(): PropertyList;
}
