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
 * Find the script that loaded latest.js
 * If the script is from a known CDN:
 *   Retrieve the cached version (if any)
 *   Load the given version of the file, if the version is cached,
 *   Otherwise find the latest version and load that.
 * Otherwise,
 *   Load using the version where latest.js was loaded.
 */
export declare function loadLatest(): void;
