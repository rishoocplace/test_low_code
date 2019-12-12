/**
 * Contains information about changes in a CustomEntity - used in change listeners
 *
 * @hideconstructor
 */
class ChangeEvent {

    /**
     * Get the CustomEntity which was changed
     * @return {CustomEntity} entity which was changed
     *
     * @example
     * // Get the changed page in change listener
     * var page = changeEvent.getEntity();
     * var currentValue = page.get('myAttribute');
     * var oldValue = changeEvent.getOldValues('myAttribute');
     */
    getEntity() {}

    /**
     * Check whether the entity was created in the change
     * @return {boolean} <code>true</code> when the entity was created in the change, <code>false</code> when an
     * existing entity was changed.
     *
     * @example
     * if (changeEvent.isNew()) {
     *     // do something
     * }
     */
    isNew() {}

    /**
     * Returns whether the attribute with the given name was changed.
     * @param {String} attribute Name of the attribute to check
     * @return {boolean} <code>true</code> if the attribute with the given name is among those that were changed
     *
     * @example
     * if (changeEvent.didChange('attribute1')) {
     *     // do something
     * }
     * if (changeEvent.didChange('attribute2')) {
     *     // do something else
     * }
     */
    didChange(attribute) {}

    /**
     * For attributes with single value multiplicity returns object converted to the correct type
     * For attributes with multiple values returns a list of the the old values of the
     * given <code>attribute</code>.
     * If there were no changes for <code>attribute</code> this method returns <code>null</code>.
     * @param {String} attribute Name of the attribute to check
     * @return {Object} old value(s) of the attribute before the change
     *
     * @example
     * // Get the old values of an attribute in change listener
     * var oldValue = changeEvent.getOldValues('myAttribute');
     *
     */
    getOldValues(attribute) {}

    /**
     * Returns a set of names of attributes which were changed.
     * @return Set of names of attributes which were changed
     *
     * @example
     * var changedAttributes = changeEvent.getChangedAttributes();
     *
     */
    getChangedAttributes() {}

}
