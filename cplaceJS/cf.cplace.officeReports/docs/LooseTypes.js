/**
 * Configuration object for text components.
 * @typedef {Object} TextConfig
 * @property {string} text - The text to display on the component
 * @property {number} [limit] - Length after which the text is truncated. This is only applied if the text exceeds the limit.
 * @property {string} [bulletStyle] - Style/glyph to use for list bullets. Text will be rendered as a bullet list. See [TextComponent.asBulletList]{@link TextComponent#asBulletList} for possible values.
 * @property {FontConfig} [font] - Font style to apply to the component.
 * @see TextComponent#asBulletList
 * @since 5.0
 * @category Office-Reporting
 */

/**
 * @typedef {Object} FontConfig
 * @description Although all properties are optional a font config should have at least one meaningful setting.
 * @property {string} [family] - The name of the font family.
 * @property {number} [size] - The size of the text in pt
 * @property {string|number|Array<number>} [color] - The color of the border.
 *     This can be either a string describing a 24-bit opaque color, an array providing byte
 *     values for the color's red, green and blue values or a 24-bit integer.
 * @property {string} [style] - A comma separated list of font styles to apply.
 *     Supported values are `'bold'`, `'italic'`, `'underline'`, and `'strikethrough'`. Unknown strings
 *     are ignored
 * @example
 * {
 *   family: "Wingdings",
 *   size  : 24,
 *   color : "#034FCA",
 *   style : "bold, underline"
 * }
 * @since 5.0
 * @category Office-Reporting
 */

/**
 * @typedef {Object} GradientStop
 * @property {string} color - The string representation of a 24-bit opaque color
 * @property {number|string} position - A value in the range of [0, 1] describing the gradient stop or a percentage string.
 * @example
 * {
 *   color   : "#AFFE00",
 *   position: 0.13
 * }
 * @example
 * {
 *   color   : "#F00BAA",
 *   position: "42%"
 * }
 * @since 5.0
 * @category Office-Reporting
 */

/**
 * @typedef {Object} CellStyle
 * @property {string|number|Array<number>} [color] - The color of the border.
 *     This can be either a string describing a 24-bit opaque color, an array providing byte values
 *     for the color's red, green and blue values or a 24-bit integer.
 * @property {('solid'|'pattern'|'gradient')} fill - The fill type of the cell background.
 * @property {Array<GradientStop>} [gradientStops] - The gradient stops to use when the fill is set to `'gradient'`.
 * @property {FontConfig} [font] - Configuration for the font to use for the cell.
 * @property {number} [cellsToMerge] - Number of cells to the right to merge.
 * @property {boolean} [trimAfterMerge] - Whether string content should be trimmed after merging cells.
 * @property {BorderConfig} [rightBorder] - Configuration for the right cell border.
 * @property {BorderConfig} [leftBorder] - Configuration for the left cell border.
 * @property {BorderConfig} [topBorder] - Configuration for the top cell border.
 * @property {BorderConfig} [bottomBorder] - Configuration for the bottom cell border.
 * @property {ImageAlignment} [imageAlignment] - Alignment for image in cell
 * @property {ImageScaling|string} [imageScaling] - Configuration for scaling of image - if no scaling should be applied, the string "none" muse be
 *     used as value of this property
 * @example
 * {
 *   "color": [0, 255, 0],
 *   "fill": "gradient",
 *   "gradientStops" : [
 *     {
 *       "color" : "#ff000",
 *       "position": 0.5
 *     },
 *     {
 *       "color" : "#cc000",
 *       "position": 1.0
 *     },
 *     {
 *       "color" : "#99330",
 *       "position": 2.0
 *     },
 *     {
 *       "color" : "#66660",
 *       "position": 3
 *     },
 *   ],
 *   "font":
 *   {
 *     "family": "whatever",
 *     "size": 10,
 *     "color": "#ff0000",
 *     "style": "italic, underline"
 *   },
 *   "cellsToMerge" : 1,
 *   "trimAfterMerge": false,
 *   "rightBorder" : {
 *     "color" : "#0000ff",
 *     "width" : 2.5,
 *     "visible" : true
 *   },
 *   "imageAlignment": {
 *     "horizontal": "left",
 *     "vertical": "boTTom"
 *   },
 *   "imageScaling": {
 *     "horizontal": "40%",
 *     "vertical": "70%"
 *   }
 * }
 * @since 5.0
 * @category Office-Reporting
 */
/**
 * @typedef {Object} BorderConfig
 * @description Although a border config should have at least one property all properties are optional.
 * @property {string|number|Array<number>} [color] - The color of the border.
 *     This can be either a string describing a 24-bit opaque color, an array providing byte values
 *     for the color's red, green and blue values or a 24-bit integer.
 * @property {boolean} [visible] - Whether the border should be displayed or not.
 * @property {number} [width] - The width of the border.
 * @example
 * {
 *   color  : "#0120AA",
 *   visible: true,
 *   width  : 2
 * }
 * @example
 * {
 *   color: 0x2365dc, // using a 24-bit integer
 *   width: 12
 * }
 * @example
 * {
 *   color: [0, 128, 255] // using an array for RGB values
 * }
 * @since 5.0
 * @category Office-Reporting
 */

/**
 * @typedef {Object} ImageAlignment
 * @description Although an image alignment config should have at least one property all properties are optional. Default alignment
 *    if none is specified is 'CENTER'
 * @property {string} [horizontal] - The horizontal alignment of the image inside the cell. This must be one of (case-independent)
 *     'LEFT', 'CENTER' or 'RIGHT'
 * @property {string} [vertical] - The vertical alignment of the image inside the cell. This must be one of (case-independent)
 *     'TOP', 'CENTER' or 'BOTTOM'
 * @example
 *  {
 *     "horizontal": "left",
 *     "vertical": "boTTom"
 *   }
 * @since 5.0
 * @category Office-Reporting
 */

/**
 * @typedef {Object} ImageScaling
 * @description Image scaling config to specify size of image relative to cell height and width. If image should not be scaled at all, provide
 *    string "none" instead of this object
 * @property {number|string} [horizontal] - The horizontal scaling factor. Either a number between 0 and 1 or a string containing a percentage
 *    between "0%" and "100%".
 * @property {number|string} [vertical] - The vertical scaling factor. Either a number between 0 and 1 or a string containing a percentage
 *    between "0%" and "100%".
 * @example
 *  {
 *     "horizontal": "60%",
 *     "vertical": 0.8
 *   }
 * @since 5.0
 * @category Office-Reporting
 */