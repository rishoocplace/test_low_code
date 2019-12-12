/*
 * Copyright 2019, collaboration Factory AG. All rights reserved.
 */

/**
 * Helper component for defining cell formatting rules.
 * @since 5.0
 * @hideconstructor
 * @category Office-Reporting
 */
class CellFormatComponent {

    /**
     * Set all cell styles contained in javascript object. Will not change settings for missing properties (e.g. font config will not be reset when
     * javascript object does not contain a <code>font</code> property)
     * @param {CellStyle} cellStyle - Javascript object containing styling properties.
     * @return {CellFormatComponent} The CellFormatComponent itself.
     */
    withStyle(cellStyle) {
    }

    /**
     * Set list of gradient stops.
     * @param {Array<GradientStop>} gradientStopObj - An array of gradient stops to apply to the component.
     * @return {CellFormatComponent} The CellFormatComponent itself.
     * @example
     * component
     *   .withGradientStops([
     *     {
     *       color   : "#00FF00",
     *       position: 0.5
     *     },
     *     {
     *       color   : "#FFA0A0",
     *       position: 1
     *     }
     *   ]);
     */
    withGradientStops(gradientStopObj) {
    }

    /**
     * Add a new gradient stop to the component style.
     * @param {number} position - A value in the range of [0, 1] describing the gradient stop.
     * @param {string} color - A string that represents a 24-bit opaque color.
     * @return {CellFormatComponent} The CellFormatComponent itself.
     * @example
     * component
     *   .withNewGradientStop(0.13, "#BAEBAE");
     */
    withNewGradientStop(position, color) {
    }

    /**
     * Set the cell background color.
     * @param {string} color - A string that represents a 24-bit opaque color.
     * @return {CellFormatComponent} The CellFormatComponent itself.
     * @example
     * component
     *   .withBackgroundColor("#BEED0E");
     */
    withBackgroundColor(color) {
    }

    /**
     * Set the font for the cell.
     * @param {string} family - The name of the font family to use.
     * @param {number} size - The size of the font to set.
     * @param {string} color - A string that represents a 24-bit opaque color.
     * @param {boolean} [bold=false] - Flag whether the text shall be displayed bold.
     * @param {boolean} [italic=false] - Flag whether the text shall be displayed italic.
     * @param {boolean} [underline=false] - Flag whether the text shall be displayed underlined.
     * @param {boolean} [strikeThrough=false] - Flag whether the text shall be displayed stricken through.
     * @return {CellFormatComponent} The CellFormatComponent itself.
     * @example
     * component
     *   .withFont("Arial", 12);
     * @example
     * component
     *   .withFont("Wingdings", 42, false, false, true, false);
     * @variation 1
     */
    withFont(family, size, color, bold, italic, underline, strikeThrough) {
    }

    /**
     * Set font for cell.
     * When an optional property of the config is not specified, that part of the font format will
     * not be changed from the font format of the report template.
     * @param {FontConfig} fontConfig - The font configuration to apply.
     * @return {CellFormatComponent} The CellFormatComponent itself.
     * @example
     * component
     *   .withFont({
     *     family: "Webdings",
     *     size: 72,
     *     color: "#4A412A",
     *     style: "italic, underline"
     *   });
     * @variation 2
     */
    withFont(fontConfig) {
    }

    /**
     * Sets the fill type for the cell.
     * For fill types `'solid'` and `'pattern'` the configured background color is used. `'gradient'` will
     * use the set gradients.
     *
     * @param {('solid'|'pattern'|'gradient')} fillType -  The fill type to use for the background of the cell. This is case sensitive.
     * @return {CellFormatComponent} The CellFormatComponent itself.
     * @see CellFormatComponent#withBackgroundColor
     * @see CellFormatComponent#withGradientStops
     * @see CellFormatComponent#withNewGradientStop
     */
    withFillType(fillType) {
    }

    /**
     * Set number of cells right to current cells to merge horizontally.
     * @param {number} cells - Number of cells to merge. Has to be greater than 0.
     * @return {CellFormatComponent} The CellFormatComponent itself.
     */
    withCellsToMergeHorizontally(cells) {
    }

    /**
     * Configure whether strings will be trimmed after merging cells.
     * This is best used together with [#withCellsToMergeHorizontally]{@link CellFormatComponent#withCellsToMergeHorizontally}
     *
     * @param {boolean} trim - Flag whether to trim strings after merge.
     * @return {CellFormatComponent} The CellFormatComponent itself.
     */
    withTrimAfterMerge(trim) {
    }

    /**
     * Configure the right border of the cell.
     * @param {number} width - The width of the border in px.
     * @param {string} color - A string that represents a 24-bit opaque color.
     * @return {CellFormatComponent} The CellFormatComponent itself.
     * @example
     * component
     *   .withRightBorder(2, "#AA3344");
     * @variation 1
     */
    withRightBorder(width, color) {
    }

    /**
     * Configure the right border of the cell.
     * @param {BorderConfig} borderConfig - Configuration object for the border.
     * @return {CellFormatComponent} The CellFormatComponent itself.
     * @example
     * component
     *   .withRightBorder({
     *     color  : "#FAB100",
     *     visible: true,
     *     width  : 2
     *   });
     * @variation 2
     */
    withRightBorder(borderConfig) {
    }

    /**
     * Configure the left border of the cell.
     * @param {number} width - The width of the border in px.
     * @param {string} color - A string that represents a 24-bit opaque color.
     * @return {CellFormatComponent} The CellFormatComponent itself.
     * @variation 1
     * @see [CellFormatComponent#withRightBorder]{@link CellFormatComponent#withRightBorder(1)} for examples
     */
    withLeftBorder(width, color) {
    }

    /**
     * Configure the left border of the cell.
     * @param {BorderConfig} borderConfig - Configuration object for the border.
     * @return {CellFormatComponent} The CellFormatComponent itself.
     * @variation 2
     * @see [CellFormatComponent#withRightBorder]{@link CellFormatComponent#withRightBorder(2)} for examples
     * */
    withLeftBorder(borderConfig) {
    }

    /**
     * Configure the bottom border of the cell.
     * @param {number} width - The width of the border in px.
     * @param {string} color - A string that represents a 24-bit opaque color.
     * @return {CellFormatComponent} The CellFormatComponent itself.
     * @variation 1
     * @see [CellFormatComponent#withRightBorder]{@link CellFormatComponent#withRightBorder(1)} for examples
     */
    withBottomBorder(width, color) {
    }

    /**
     * Configure the bottom border of the cell.
     * @param {BorderConfig} borderConfig - Configuration object for the border.
     * @return {CellFormatComponent} The CellFormatComponent itself.
     * @variation 2
     * @see [CellFormatComponent#withRightBorder]{@link CellFormatComponent#withRightBorder(2)} for examples
     * */
    withBottomBorder(borderConfig) {
    }

    /**
     * Configure the top border of the cell.
     * @param {number} width - The width of the border in px.
     * @param {string} color - A string that represents a 24-bit opaque color.
     * @return {CellFormatComponent} The CellFormatComponent itself.
     * @variation 1
     * @see [CellFormatComponent#withRightBorder]{@link CellFormatComponent#withRightBorder(1)} for examples
     */
    withTopBorder(width, color) {
    }

    /**
     * Configure the top border of the cell.
     * @param {BorderConfig} borderConfig - Configuration object for the border.
     * @return {CellFormatComponent} The CellFormatComponent itself.
     * @variation 2
     * @see [CellFormatComponent#withRightBorder]{@link CellFormatComponent#withRightBorder(2)} for examples
     * */
    withTopBorder(borderConfig) {
    }

    /**
     * Configure image size as relative fraction of regard to cell size
     * @param {number} horizontalImageFraction - Fraction of cell width to which to scale image horizontally
     *     on the interval [0, 1]. Setting to e.g. 0.5 will scale image to half the width of table cell.
     * @param {number} verticalImageFraction - Fraction of cell width to which to scale image vertically
     *     on the interval [0, 1]. Setting to e.g. 0.5 will scale image to half the height of table cell.
     * @return {CellFormatComponent} The CellFormatComponent itself.
     */
    withImageScaling(horizontalImageFraction, verticalImageFraction) {
    }

    /**
     * Configure image size as unchanged from original image source.
     *
     * Note: When using both this and {@link #withImageScaling(double, double)}, the last method called decides which scaling is applied.
     * @return {CellFormatComponent} The CellFormatComponent itself.
     */
    withoutImageScaling() {
    }
    /**
     * Set the alignment of an image relative to the cell
     * @param {('left'|'center'|'right')} horizontalAlignment - The horizontal alignment of the picture. This is case insensitive.
     * @param {('top'|'center'|'bottom')} verticalAlignment - The vertical alignment of the picture. This is case insensitive.
     * @return {CellFormatComponent} The CellFormatComponent itself.
     */
    withImageAlignment(horizontalAlignment, verticalAlignment) {
    }
}