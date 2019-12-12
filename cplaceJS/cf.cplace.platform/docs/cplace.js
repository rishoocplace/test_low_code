/**
 * A global object that provides utility methods for cplaceJS.
 * This is available in every cplaceJS script.
 * @namespace
 */
const cplace = {
    /**
     * Logs a message.
     * @param {string} message - the message to log
     *
     * @example
     * cplace.log('A simple log message');
     * @static
     */
    log: (message) => {
    },

    /**
     * Iterates over an array like object and performs a transformation operation on every item.
     * @param {ArrayLike<*>} input - object to iterate over containing items to transform
     * @param {mappingFunction} callback - transformation function to be performed on each item.
     * @returns {ArrayLike<*>} An iterable list containing the transformed objects.
     *
     * @example
     * var arr = [1, 2, 3, 4];
     * var arr2 = cplace.map(arr, function (i) {
     *      return i*2;
     * });
     * // arr2 - [2, 4, 6, 8]
     */
    map: (input, callback) => {
    },

    /**
     * Iterates over an array like object and performs an operation on every item.
     * The loop can be interrupted by returning <code>false</code> from the provided callback function.
     * @param {ArrayLike<*>} input - object to iterate over.
     * @param {iteratingFunction} callback - function to perform on each item.
     *
     * @example
     * var arr = [1, 3, 4, 5];
     * cplace.each(arr, function (i) {
     *     cplace.log(i)
     * });
     * // logs - 1 3 4 5
     *
     * @example
     * var arr = [1, 3, 4, 5];
     * cplace.each(arr, function (i) {
     *      if(i % 2 === 0 ) {
     *        return false;
     *      }
     *      cplace.log(i);
     * });
     * // logs - 1 3
     *
     */
    each: (input, callback) => {
    },

    /**
     * Gets actions provided by specified plugin
     * @param {string} [pluginName] - plugin to get actions for. If plugin name is omitted then actions provided by platform are returned.
     * @returns {Actions} Actions provided by the plugin
     *
     * @example
     * var platformActions = cplace.actions();
     * var platformActions = cplace.actions('cf.cplace.platform');
     *
     * var myPluginActions = cplace.actions('my.awesome.plugin');
     *
     */
    actions: (pluginName) => {
    },

    /**
     * Set a name for subsequent log messages.
     * logName will be added to log messages to make it easier to find and filter logs
     *
     * @param {string} logName - name to be used for log messages
     */
    setLogName: (logName) => {
    },

    /**
     * Log an error  message from cplaceJS script. Error message are also logged to log file. The logged messages are available from admin menu
     * @param {*} obj - an object to be logged. Non-string objects are converted to string.
     */
    error: (obj) => {
    },

    /**
     * Formats a number to the locale of the current session including decimal delimiters and floating point symbols.
     *
     * Formatting changes the type!
     * The result cannot be used for calculations any longer.
     * @param {number} value - number value to format
     * @param {number} [precision] - target precision of the formatted number, this parameter is optional.
     * @returns {string} - the formatted number as a string
     *
     * @static
     */
    formatNumber: (value, precision) => {
    },

    /**
     * Gets utilities provided by specified plugin
     * @param {string} [pluginName] - plugin to get utilities for. If plugin name is omitted then utilities provided by platform are returned.
     * @returns {Utilities} Utilities provided by the plugin
     *
     * @example
     * var platformUtilities = cplace.utils();
     * var platformUtilities = cplace.utils('cf.cplace.platform');
     *
     * var myPluginUtilities = cplace.utils('my.awesome.plugin');
     *
     */
    utils: (pluginName) => {
    }
};

/**
 * Transformation function that maps data.
 * @callback mappingFunction
 * @param {*} item - the item to transform.
 * @return {*} The transformed item.
 */

/**
 * A function that performs an operation on an provided item.
 * Usually used in loops over iterables, e.g. in cplace.each
 * @callback iteratingFunction
 * @param {*} item - an item from to perform the operation on.
 * @return {boolean} <code>false</code> to interrupt the loop <code>undefined</code> else (no return statement is sufficient).
 */

/**
 * Special functions that can be called from cplaceJS code. Actions are generally used to modify an entity in cplace.
 *
 * @see PlatformActions
 * @typedef {Object} Actions
 */

/**
 * Special utility functions that can be called from cplaceJS code. Utilities do NOT modify entities in cplace.
 *
 * @see PlatformUtilities
 * @typedef {Object} Utilities
 */

/**
 * An object containing other objects which can be iterated over.
 * This can be an Array, a List or a Set for example.
 * @typedef {*} ArrayLike
 * @template T
 */
