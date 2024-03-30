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
 * @fileoverview  Provides the interface functionality to SRE.
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 * @author v.sorge@mathjax.org (Volker Sorge)
 */
import * as Api from 'speech-rule-engine/js/common/system.js';
import { Walker } from 'speech-rule-engine/js/walker/walker.js';
import * as WalkerFactory from 'speech-rule-engine/js/walker/walker_factory.js';
import * as SpeechGeneratorFactory from 'speech-rule-engine/js/speech_generator/speech_generator_factory.js';
import { ClearspeakPreferences } from 'speech-rule-engine/js/speech_rules/clearspeak_preferences.js';
import { Highlighter } from 'speech-rule-engine/js/highlighter/highlighter.js';
import * as HighlighterFactory from 'speech-rule-engine/js/highlighter/highlighter_factory.js';
import { SpeechGenerator } from 'speech-rule-engine/js/speech_generator/speech_generator.js';
export declare namespace Sre {
    type highlighter = Highlighter;
    type speechGenerator = SpeechGenerator;
    type walker = Walker;
    const locales: Map<string, string>;
    const sreReady: typeof Api.engineReady;
    const setupEngine: typeof Api.setupEngine;
    const engineSetup: typeof Api.engineSetup;
    const toEnriched: typeof Api.toEnriched;
    const toSpeech: typeof Api.toSpeech;
    const clearspeakPreferences: typeof ClearspeakPreferences;
    const getHighlighter: typeof HighlighterFactory.highlighter;
    const getSpeechGenerator: typeof SpeechGeneratorFactory.generator;
    const getWalker: typeof WalkerFactory.walker;
    const clearspeakStyle: () => string;
    /**
     * Loads locales that are already included in the imported MathMaps. Defaults
     * to standard loading if a locale is not yet preloaded.
     */
    const preloadLocales: (locale: string) => Promise<unknown>;
}
/**
 * A promise that resolves when SRE is loaded and ready, and rejects if
 * SRE can't be loaded, or does not become ready within the timout period.
 *
 * @deprecated
 */
export declare const sreReady: typeof Api.engineReady;
export default Sre;
