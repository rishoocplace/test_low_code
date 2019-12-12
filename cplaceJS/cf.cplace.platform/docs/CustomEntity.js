/**
 * Base class of all entities with custom attributes.
 *
 * @hideconstructor
 */
class CustomEntity {

    /**
     * Check, whether the entity referenced by this object exists.
     * @return {boolean} <code>true</code> if object references an existing entity, <code>false</code> otherwise
     *
     * @example
     * // page is a reference to a custom entity of type page
     * if (page.exists()) {
     *   // do something
     * }
     */
    exists() {
    }

    /**
     * Get the UID of the entity
     * @return {string} UID of wrapped entity or null if this object does not refer to an existing entity.
     *
     * @example
     * // page is a reference to a custom entity of type page
     * var id = page.getId(); // Get UID of the page. Will be null if page does not reference an existing entity
     */
    getId() {
    }

    /**
     * Get the name of the entity
     * @return {string} name of the entity. <code>null</code> if this object does not refer to an existing entity.
     *
     * @example
     * // page is a reference to a custom entity of type page
     * var name = page.getName(); // Get name of the page. Will be null if page does not reference an existing entity
     */
    getName() {
    }

    /**
     * Get the localized display name of custom attribute in the language of the current session.
     * @param {string} internalName - the internal name of the attribute. If there is an  prefix defined for the containing type this can also
     * be just the suffix.
     * @return {string} Display name of attribute in current language. Will be null if the attribute is not found
     *
     * @example
     * // page is a reference to a custom entity of type page
     * var assignee = page.getAttributeDisplayName('assignee'); // Get display name of attribute 'assignee' in current language
     *
     * // assume the configured prefix is 'cf.cplace.example' both calls will be equivalent:
     * var valueName  = page.getAttributeDisplayName('value');
     * var valueName2 = page.getAttributeDisplayName('cf.cplace.example.value');
     */
    getAttributeDisplayName(internalName) {
    }

    /**
     * Get the current value of a given entity attribute.
     * @param {string} internalName - the internal name of the attribute. If there is an  prefix defined for the containing type this can also
     * be just the suffix.
     * @return {Object} The current value.
     *
     * @example
     * // page is a reference to a custom entity of type page
     * var assignee = page.get('assignee'); // Get value of 'assignee' attribute. Will be null if not found or set
     * if (assignee != null) {
     *   // do something
     * }
     *
     * // assume the configured prefix is 'cf.cplace.example' both calls will be equivalent:
     * var valueName  = page.get('value');
     * var valueName2 = page.get('cf.cplace.example.value');
     */
    get(internalName) {
    }

    /**
     * Get the current value of a given entity attribute.
     *
     * For single reference attributes with a <code>null</code> value, a {@link CustomEntity} object of the
     * correct subtype is returned. As that object does not refer to an existing entity, {@link exists} will always
     * return <code>false</code>, getter methods will always return <code>false</code>.
     *
     * @param {string} internalName - the internal name of the attribute. If there is an  prefix defined for the containing type this can also
     * be just the suffix.
     * @return {Object} Current value of attribute, <code>null</code> if no type or attribute definition for that name is
     *   found or a dummy page if the attribute is an unset single reference.
     *
     * @example
     * // page is a reference to a custom entity of type page
     * var assignee = page.getOptional("assignee"); // Get value of 'assignee' attribute
     * if (assignee.exists()) {                     // Check if assignee is set (i.e. exists)
     *   // do something
     * }
     *
     * // assume the configured prefix is 'cf.cplace.example' both calls will be equivalent:
     * var valueName  = page.getOptional('value');
     * var valueName2 = page.getOptional('cf.cplace.example.value');
     */
    getOptional(internalName) {
    }


    /**
     * Get value of a builtin feature.
     * @param {string} featureName - the name of the builtin feature to get from the entity.
     * @return {boolean|string|Date|number|ArrayLike<CustomEntity>} Current value or <code>null</code>
     *   if this object does not refer to an existing entity.
     *
     * @example
     * // page is a reference to a custom entity of type page
     * var createDate = page.getBuiltinFeatureValue('createdAt'); // Get creation date of page
     */
    getBuiltinFeatureValue(featureName) {
    }

}
