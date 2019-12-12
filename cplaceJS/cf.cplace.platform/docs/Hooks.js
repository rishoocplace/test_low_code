/**
 * The following methods cannot be invoked in cplaceJS but describe methods invoking scripts.
 * This is to help to understand which bindings are provided inside cplaceJS definitions and
 * which types should e returned.
 *
 * @hideconstructor
 * @namespace
 */
class SystemHooks {

    /**
     * Reference for cplaceJS change listeners.
     * This method is not callable by hand, but is called by the system when a change was triggered.
     *
     * For usage and examples see <a href="tutorial-changeListeners.html">here</a>
     * @param {ChangeEvent} changeEvent - Object representing the triggering change.
     */
    changeListener(changeEvent) {
    }

    /**
     * Reference for cplaceJS validator.
     * This method is not callable by hand, but is called by the system when data is validated.
     *
     * For usage and examples see <a href="tutorial-validators.html">here</a>
     * @param {MessageProvider} messages - Provider for messages defined in the validator dialog.
     * @param {Page} page - The page the validator is called for.
     * @return {String} Either a message as a String if the validation failed or null if it passed.
     */
    validator(messages, page) {
    }
}
