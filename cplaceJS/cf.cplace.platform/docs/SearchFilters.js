/**
 * Filter for search
 * @typedef {Object} SearchFilter
 * @example
 * var search = new Search();
 * search.add(Filters.space('83ih886l6870t7oj18r9k8hvt'));
 * // this will add a filter to search that will limit the search to provided space id
 */

/**
 * This class provides utility methods to add filters to search
 *
 * @hideconstructor
 */
class Filters {

    /**
     * Search with the conjunction (and-combination) of the given filters.
     * @param {SearchFilter} filters
     * @returns {SearchFilter}
     */
    and(...filters) {
    }

    /**
     * Search with the disjunction (or-combination) of the given filters.
     * @param {SearchFilter} filters
     * @returns {SearchFilter}
     */
    or(...filters) {
    }

    /**
     * Search with the negation of the given filter.
     * @param {SearchFilter} filter
     * @returns {SearchFilter}
     */
    not(filter) {
    }

    /**
     * Search for entities containing the given text.
     * @param {string} text
     * @returns {SearchFilter}
     */
    text(text) {
    }

    /**
     * Search for the entity with the given uid.
     * @param {string} uid
     * @returns {SearchFilter}
     */
    uid(uid) {
    }

    /**
     * Search for the entity with the given uids.
     * @param {string[]} uids
     * @returns {SearchFilter}
     */
    uids(uids) {
    }

    /**
     *  A pseudo filter matching all entries
     *  @returns {SearchFilter}
     */
    all() {
    }

    /**
     * A pseudo filter match <b>no</b> entry
     * @returns {SearchFilter}
     */
    none() {
    }

    /**
     * Search within a space identified by <code>spaceId</code>
     * @param {string} spaceId
     * @return {SearchFilter}
     */
    space(spaceId) {
    }

    /**
     * Search within a list of spaces identified by <code>spaceIds</code>
     * @param {string[]} spaceIds
     * @return {SearchFilter}
     */
    spaces(spaceIds) {
    }

    /**
     * Search within the space of the entity embedding the search.
     * If there is no such space, the filter is ignored.
     * @return {SearchFilter}
     */
    embeddingSpace() {
    }

    /**
     * Restrict search to one or more types
     * @param {string|string[]} typeName Name of type or array of names of types
     * @return {SearchFilter}
     */
    type(typeName) {
    }

    /**
     * Generic search for builtin attributes. Matches any value in collection
     * @param {string} attributeName Attribute name
     * @param {string[]} values Allowed values
     * @return {SearchFilter}
     */
    builtinAttributeIn(attributeName, values) {
    }

    /**
     * Search for entities which have the builtin string attribute with the exact value.
     * @param {string} attributeName Attribute name
     * @param {string} value Allowed value
     * @returns {SearchFilter}
     */
    builtinString(attributeName, value) {
    }

    /**
     * Search for entities which have the builtin boolean attribute with the matching value
     * @param {string} attributeName Attribute name
     * @param {boolean} value Value to which to restric search
     * @returns {SearchFilter}
     */
    builtinBoolean(attributeName, value) {
    }

    /**
     * Search for entities which have the builtin timestamp attribute with the exact value.
     * @param {string} attributeName Attribute name
     * @param {string} value Value to which to restrict search
     * @returns {SearchFilter}
     */
    builtinTimestamp(attributeName) {
    }

    /**
     * Search for entities which have the custom attribute with a nonempty value.
     * @param {string} attributeName Attribute name
     * @returns {SearchFilter}
     */
    customAttributeNonempty(attributeName) {
    }

    /**
     * Search for entities which have no value in the custom attribute.
     * @param {string} attributeName Attribute name
     * @returns {SearchFilter}
     */
    customAttributeEmpty(attributeName) {
    }

    /**
     *  Search filter for custom attributes
     *  @param {string} attributeName Attribute name
     *  @returns {FilterBuilder}
     */
    customAttribute(attributeName) {
    }
}
