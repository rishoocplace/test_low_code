/**
 * Object representing image in the report.
 * @extends Component
 * @since 5.0
 * @template T
 * @hideconstructor
 * @category Office-Reporting
 */
class ImageComponent {

    /**
     * Set the given document as the image of the component.
     *
     * @param {Document} document - The cplace document, must be an image.
     * @returns {ImageComponent} The ImageComponent itself.
     */
    withImage(document) {
    }

    /**
     * Set the given user's profile image as the image of the component.
     * If the user hasn't set a custom image the default initials image is used instead.
     *
     * @param {Person} user - The user to get the profile picture from.
     * @returns {ImageComponent} The ImageComponent itself.
     * @example
     * var currentUser = cplace.utils().getCurrentUser();
     * component
     *   .withProfilePicture(currentUser);
     */
    withProfilePicture(user) {
    }

    /**
     * Attaches the the image of an enumeration icon to the component.
     * Only single multiplicity TextEnumeration or NumberEnumeration attributes are supported.
     *
     * @param {Page} page - Page which contains the attribute
     * @param {string} attributeName - Name of the attribute
     * @returns {ImageComponent} The ImageComponent itself.
     * @example
     * component
     *   .withEnumIcon(page, "cf.cplace.statusEnum");
     */
    withEnumIcon(page, attributeName) {
    }


}