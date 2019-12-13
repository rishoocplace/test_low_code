
//Added to test revisions
//added by local
/**
 * This provides methods used for adding components to reports. It's not meant to be used directly.
 * @since 5.0
 * @interface
 * @category Office-Reporting
 */
class ComponentContainer {
    /**
     *
     * @param {string} key - placeholder for a value in template
     * @param {string|number|date|Component} value - value for the key
     * @return {ComponentContainer} The container itself.
     */
    put(key, value) {
    }
}

/**
 * Interface that represents a Component.
 * Components can be substituted for a placeholder in report templates.
 *
 * @interface Component
 * @since 5.0
 */

/**
 * Create a mutable copy of the component.
 *
 * This will copy only the component, not the actual shape in the template.
 *
 * @function
 * @name Component#copy
 * @returns {Component} Mutable copy of the component
 */

/**
 * Sets the background color of the component.
 * @function
 * @name Component#withBackgroundColor(r, g, b)
 * @param {number} r - The red value of the color.
 * @param {number} g - The green value of the color.
 * @param {number} b - The blue value of the color.
 * @return {Component} The component itself.
 * @variation 1
 */

/**
 * Sets the background color of the component.
 * @function
 * @name Component#withBackgroundColor
 * @param {string} color - A string that represents a 24-bit opaque color.
 * @return {Component} The component itself.
 * @variation 2
 */

/**
 * Hides the component.
 * Short for [#withHidden(true)]{@link Component#withHidden}
 * @function
 * @name Component#hide
 * @return {Component} The component itself.
 */

/**
 * Set the visibility of the component.
 * @function
 * @name Component#withHidden
 * @param {boolean} hidden - Whether the component shall be visible or not.
 * @return {Component} The component itself.
 */

/**
 * Sets the border of a component.
 * @function
 * @name Component#withBorder
 * @param {number} thickness - Thickness of the border in
 * @param {number} r - The red value of the border color.
 * @param {number} g - The green value of the border color.
 * @param {number} b - The blue value of the border color.
 * @return {Component} The component itself.
 * @variation 1
 */

/**
 * Sets the border of a component.
 * @function
 * @name Component#withBorder
 * @param {number} thickness - Thickness of the border in
 * @param {string} color - A string that represents a 24-bit opaque color.
 * @return {Component} The component itself.
 * @variation 2
 */

/**
 * Sets the x coordinate of the component on the slide where 0 represents the leftmost border of the visible area.
 * Values may exceed the boundaries (negative & positive) which will result in the component being placed outside the viewport.
 *
 * The used unit may depend on the report type. PowerPoint eg. uses "pt" as the default unit (where 1 pt usually &asymp;1 in).
 * @function
 * @name  Component#withX
 * @param {number} xPosition - The x coordinate of the component. Set to null to unset and use presentation settings.
 * @return {Component} The component itself.
 */

/**
 * Sets the x coordinate of the component on the slide where 0 represents the topmost border of the visible area.
 * Values may exceed the boundaries (negative & positive) which will result in the component being placed outside the viewport.
 *
 * The used unit may depend on the report type. PowerPoint eg. uses "pt" as the default unit (where 1 pt usually &asymp;1 in).
 * @function
 * @name Component#withY
 * @param {number} yPosition - The y coordinate of the component. Set to null to unset and use presentation settings.
 * @return {Component} The component itself.
 */

/**
 * Moves the component on the x axis relative to its current position where a positive number will move to the right and a negative to the left.
 *
 * The used unit may depend on the report type. PowerPoint eg. uses "pt" as the default unit (where 1 pt usually &asymp;1 in).
 * @function
 * @name Component#moveX
 * @param {number} xPosition - The amount to move the component on the x axis. Set to null to unset and use presentation settings.
 * @return {Component} The component itself.
 */

/**
 * Moves the component on the y axis relative to its current position where a positive number will move to the bottom and a negative to the top.
 *
 * The used unit may depend on the report type. PowerPoint eg. uses "pt" as the default unit (where 1 pt usually &asymp;1 in).
 * @function
 * @name Component#moveY
 * @param {number} yPosition - The amount to move the component on the y axis. Set to null to unset and use presentation settings.
 * @return {Component} The component itself.
 */
