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
 * @fileoverview  Implements the SVGsemantics wrapper for the MmlSemantics object
 *                and the associated wrappers for annotations
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */
import { SVGWrapper, SVGConstructor } from '../Wrapper.js';
import { BBox } from '../../../util/BBox.js';
import { StyleList } from '../../../util/StyleList.js';
declare const SVGsemantics_base: import("../../common/Wrappers/semantics.js").SemanticsConstructor & SVGConstructor<any, any, any>;
/*****************************************************************/
/**
 * The SVGsemantics wrapper for the MmlSemantics object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class SVGsemantics<N, T, D> extends SVGsemantics_base {
    /**
     * The semantics wrapper
     */
    static kind: string;
    /**
     * @override
     */
    toSVG(parent: N): void;
}
/*****************************************************************/
/**
 * The SVGannotation wrapper for the MmlAnnotation object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class SVGannotation<N, T, D> extends SVGWrapper<N, T, D> {
    /**
     * The annotation wrapper
     */
    static kind: string;
    /**
     * @override
     */
    toSVG(parent: N): void;
    /**
     * @override
     */
    computeBBox(): BBox;
}
/*****************************************************************/
/**
 * The SVGannotationXML wrapper for the MmlAnnotationXML object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class SVGannotationXML<N, T, D> extends SVGWrapper<N, T, D> {
    /**
     * The annotation-xml wrapper
     */
    static kind: string;
    /**
     * @override
     */
    static styles: StyleList;
}
/*****************************************************************/
/**
 * The SVGxml wrapper for the XMLNode object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export declare class SVGxml<N, T, D> extends SVGWrapper<N, T, D> {
    /**
     * The XMLNode wrapper
     */
    static kind: string;
    /**
     * Don't include inline-block CSS for this element
     */
    static autoStyle: boolean;
    /**
     * @override
     */
    toSVG(parent: N): void;
    /**
     * @override
     */
    computeBBox(bbox: BBox, _recompute?: boolean): void;
    /**
     * @override
     */
    protected getStyles(): void;
    /**
     * @override
     */
    protected getScale(): void;
    /**
     * @override
     */
    protected getVariant(): void;
}
export {};
