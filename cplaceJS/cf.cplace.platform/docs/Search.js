/**
 *
 */
class Search {

    /**
     * Creates a new search object.
     */
    constructor() {
    }

    /**
     * Add a search filter.
     * @param {SearchFilter} filter - filter to add
     * @returns {Search} search object with filter added
     */
    add(filter) {
    }

    /**
     * Add alphabetical sort to this search
     * @param {boolean} descending
     * @returns {Search} search object with sort added
     */
    addAlphabeticalSort(descending) {
    }

    /**
     * Add a sort for custom value to this search
     * @param {string} fieldName - attribute to add sort for
     * @param {boolean} descending
     * @returns {Search} search object with sort added
     */
    addCustomFieldSort(fieldName, descending) {
    }

    /**
     * Executes the search and collects the results. If no filter was set, an <code>all()</code> filter is applied.
     * @returns {ArrayLike<Page>} List of all pages that matches this search.
     */
    findAllPages() {
    }
}

