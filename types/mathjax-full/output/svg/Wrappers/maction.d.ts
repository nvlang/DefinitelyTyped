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
 * @fileoverview  Implements the SVGmaction wrapper for the MmlMaction object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { SVGWrapper, SVGConstructor } from '../Wrapper.js';
import { EventHandler } from '../../common/Wrappers/maction.js';
import { StyleList } from '../../../util/StyleList.js';
declare const SVGmaction_base: import("../../common/Wrappers/maction.js").MactionConstructor<SVGWrapper<any, any, any>> & SVGConstructor<any, any, any>;
/*****************************************************************/
/**
 * The SVGmaction wrapper for the MmlMaction object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class SVGmaction<N, T, D> extends SVGmaction_base {
    /**
     * The maction wrapper
     */
    static kind: string;
    /**
     * @override
     */
    static styles: StyleList;
    /**
     * The valid action types and their handlers
     */
    static actions: Map<string, [import("../../common/Wrappers/maction.js").ActionHandler<SVGmaction<any, any, any>>, import("../../common/Wrappers/maction.js").ActionData]>;
    /*************************************************************/
    /**
     * @override
     */
    toSVG(parent: N): void;
    /**
     * Add an event handler to the output for this maction
     */
    setEventHandler(type: string, handler: EventHandler): void;
}
export {};
