/**
 * {@link CustomEntity} representing a cplace Page.
 * @extends CustomEntity
 * @hideconstructor
 */
class Page extends CustomEntity {
    // noinspection JSDuplicatedDeclaration
    /**
     * Get incoming pages, i.e. pages which refer to this page.
     * Results will only be taken from this page's space.
     * @param {string} typeName Name of type definition of the attribute which holds reference to this page
     * @param {string} attributeShortName Short name of attribute which holds reference to this page
     * @return {ArrayLike<Page>} Iterable of incoming pages, may be empty
     *
     * @example
     * // page is a reference to a custom entity of type page
     * var incomingPages = page.getIncomingPages('my.type', 'pageReferenceAttribute'); // Get incoming pages
     * cplace.each(incomingPage, function(page) {
     *   cplace.log(page.getName());
     * }
     */
    getIncomingPages(typeName, attributeShortName) {}

    // noinspection JSDuplicatedDeclaration
    /**
     * Get incoming pages, i.e. pages which refer to this page.
     * @param {string} typeName Name of type definition of the attribute which holds reference to this page
     * @param {string} attributeShortName Short name of attribute which holds reference to this page
     * @param {string...} spaceUids the UIDs of spaces the results should be taken from
     * @return {ArrayLike<Page>} Iterable of incoming pages, may be empty
     *
     * @example
     * // page is a reference to a custom entity of type page
     * var incomingPages = page.getIncomingPages('my.type', 'pageReferenceAttribute', page.getSpaceId(), anotherPage.getSpaceId()); // Get incoming pages
     * cplace.each(incomingPage, function(page) {
     *   cplace.log(page.getName());
     * }
     */
    getIncomingPages(typeName, attributeShortName, spaceUids) {
    }

    /**
     * Get incoming pages, i.e. pages which refer to this page.
     * Results will be taken from all spaces.
     * @param {string} typeName Name of type definition of the attribute which holds reference to this page
     * @param {string} attributeShortName Short name of attribute which holds reference to this page
     * @return {ArrayLike<Page>} Iterable of incoming pages, may be empty
     *
     * @example
     * // page is a reference to a custom entity of type page
     * var incomingPages = page.getIncomingPagesFromAllSpaces('my.type', 'pageReferenceAttribute'); // Get incoming pages
     * cplace.each(incomingPage, function(page) {
     *   cplace.log(page.getName());
     * }
     */
    getIncomingPagesFromAllSpaces(typeName, attributeShortName) {
    }

    /**
     * Get the UID of the space of this entity
     * @return {string} UID of space of this entity or null if this wrapped entity does not contain a real entity
     *
     * @example
     * // page is a reference to a custom entity of type page
     * var spaceUid = page.getSpaceId(); // Get UID of the page's space. Will be null if page does not reference an existing entity
     */
    getSpaceId() {}

    /**
     * Get parent page
     * @return {Page} Parent page or <code>null</code> if there is no parent or
     *   if this object does not refer to an existing entity.
     *
     * @example
     * // page is a reference to a custom entity of type page
     * var parentPage = page.getParent();
     *   if (parentPage != null) {
     *     // Do something
     *   }
     * }
     */
    getParent() {}

    /**
     * Get the absolute URL of the page, usable e.g. to send links in mail
     * @return {string} URL of this page or <code>null</code> if this object does not refer to an existing entity.
     *
     * @example
     * // page is a reference to a custom entity of type page
     * var pageUrl = page.getUrl();
     * var test = 'Please take a look at the page on '+pageUrl;
     */
    getUrl() {}

    /**
     * Register a custom attribute of the page for refresh. Useful e.g. when the value of an attribute is updated in
     * a change listener and should be automatically refreshed in the UI.
     * @param {string} attrName Attribute name
     *
     * @example
     * // page is a reference to a custom entity of type page
     * page.registerAttributeForRefresh('attributeToRefresh');
     */
    registerAttributeForRefresh(attrName) {}
}
