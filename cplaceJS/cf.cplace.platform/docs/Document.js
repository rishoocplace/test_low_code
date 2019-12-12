/**
 * {@link CustomEntity} representing a document.
 * @extends CustomEntity
 *
 * @hideconstructor
 */
class Document extends CustomEntity {

    /**
     * Get the UID of the space of this entity
     * @return {string} UID of space of this entity or null if this wrapped entity does not contain a real entity
     *
     * @example
     * // page is a reference to a custom entity of type page
     * var spaceUid = page.getSpaceId(); // Get UID of the page's space. Will be null if page does not reference an existing entity
     */
    getSpaceId() {}


}
