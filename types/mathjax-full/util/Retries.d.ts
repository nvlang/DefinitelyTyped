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
/*****************************************************************/
/**
 *  Allow us to pass a promise as part of an Error object
 */
export interface RetryError extends Error {
    retry: Promise<any>;
}
/*****************************************************************/
/**
 * A wrapper for actions that may be asynchronous.  This will
 *   rerun the action after the asychronous action completes.
 *   Usually, this is for dynamic loading of files.  Legacy
 *   MathJax does that a lot, so we still need it for now, but
 *   may be able to go without it in the future.
 *
 *   Example:
 *
 *     HandleRetriesFor(() => {
 *
 *         html.findMath()
 *             .compile()
 *             .getMetrics()
 *             .typeset()
 *             .updateDocument();
 *
 *     }).catch(err => {
 *       console.log(err.message);
 *     });
 *
 * @param {Function} code  The code to run that might cause retries
 * @return {Promise}       A promise that is satisfied when the code
 *                         runs completely, and fails if the code
 *                         generates an error (that is not a retry).
 */
export declare function handleRetriesFor(code: Function): Promise<any>;
/*****************************************************************/
/**
 * Tells HandleRetriesFor() to wait for this promise to be fulfilled
 *   before rerunning the code.  Causes an error to be thrown, so
 *   calling this terminates the code at that point.
 *
 * @param {Promise} promise  The promise that must be satisfied before
 *                            actions will continue
 */
export declare function retryAfter(promise: Promise<any>): void;
