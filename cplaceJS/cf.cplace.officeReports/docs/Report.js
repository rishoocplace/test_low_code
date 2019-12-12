/**
 */

/**
 * An object representing the internal report object.
 * This object is an abstract description of how the final artifact should look like.
 *
 * An instance of this class is accessible as a binding in report scripts.
 * @extends ComponentContainer
 * @since 5.0
 * @hideconstructor
 * @category Office-Reporting
 */
class Report {
    /**
     * Add a new slide to report from template. Slides are added sequentially.
     * Slides can be added in any order, as long as the referenced slide number exists in the template.
     * @param {number} index - The slide number of the slide to create from the template (starting from 1, maximum is the number of slides in the
     *    template)
     * @return {Slide} The created slide.
     * @example
     * var slide = report.addSlide(3);
     * // this will add 3rd slide from template to the report
     */
    addSlide = function (index) {
    };


    /**
     * Add a message to indicate progress of the report generation
     * @param {string} message - message to add
     *
     * @example
     * report.addProgressMessage('Processing project: My project');
     *
     */
    addProgressMessage(message) {

    }
}




