/*
 * Copyright 2019, collaboration Factory AG. All rights reserved.
 */

/**
 * Component which maps a text.
 * @extends Component
 * @since 5.0
 * @hideconstructor
 * @category Office-Reporting
 */
class TextComponent {
    /**
     * Sets up the component with the given configuration.
     * @param {TextConfig} config - The configuration to apply.
     * @return {TextComponent} The component itself.
     */
    withConfig(config) {
    }

    /**
     * Sets the text to display to the given value.
     * @param {string} text - Text to set.
     * @return {TextComponent} The component itself.
     */
    withText(text) {
    }

    /**
     * Sets the color of the displayed text
     * @param {number} r - The red value of the color.
     * @param {number} g - The green value of the color.
     * @param {number} b - The blue value of the color.
     * @return {TextComponent} The component itself.
     */
    withTextColor(r, g, b) {
    }

    /**
     * Sets the color of the displayed text
     * @param {string} color - The string representation of a 24-bit opaque color (e.g. "#FF00AA").
     * @return {TextComponent} The component itself.
     */
    withTextColor(color) {
    }

    /**
     * Truncates the text of the component to a given length. Negative values are invalid for this method. A value greater 0 (zero) will enable truncation.
     *
     * If the component is also set to display a bullet list then every bullet will be truncated separately.
     * @param {number} length - The length after which the text shall be truncated. Truncation will only happen if the given limit is exceeded (exclusive).
     * @return {TextComponent} The component itself.
     * @example
     * component
     *   .withText('Hello there. - General Kenobi.')
     *   .withLimit(11);
     * // 'Hello there...'
     * @example
     * component
     *   .addBullet('Hello there')
     *   .addBullet('General Kenobi')
     *   .asBulletList()
     *   .withLimit(8);
     * // • Hello th...
     * // • General ...
     */
    withLimit(length) {
    }

    /**
     * Sets the font size of the component.
     * @param {number} size - The font size (in the default font size unit, pt).
     * @return {TextComponent} The component itself.
     */
    withFontSize(size) {
    }

    /**
     * Sets the font used by the component.
     * @param {string} fontName - The name of the font to use. Can be null to not overwrite the template font.
     * @return {TextComponent} The component itself.
     */
    withFont(fontName) {
    }

    /**
     * Sets whether the text of the component shall appear bold or not.
     * @param {boolean} [bold=true] - Whether the effect shall be applied or not.
     * @return {TextComponent} The component itself.
     */
    bold(bold) {
    }

    /**
     * Sets whether the text of the component shall appear italic or not.
     * @param {boolean} [italic=true] - Whether the effect shall be applied or not.
     * @return {TextComponent} The component itself.
     */
    italic(italic) {
    }

    /**
     * Sets whether the text of the component shall appear underlined or not.
     * @param {boolean} [underline=true] - Whether the effect shall be applied or not.
     * @return {TextComponent} The component itself.
     */
    underline(underline) {
    }

    /**
     * Sets whether the text of the component shall appear stricken through or not.
     * @param {boolean} [strikeThrough=true] - Whether the effect shall be applied or not.
     * @return {TextComponent} The component itself.
     */
    strikeThrough(strikeThrough) {
    }

    /**
     * Filters the text of the component and removes any HTML from it.
     * @return {TextComponent} The component itself.
     * @example
     * component
     *   .withText('<div><p>Faust: Siehst du den schwarzen Hund durch Saat und Stoppel streifen?</p> <p>Wagner: Ich sah ihn lange schon, nicht wichtig schien er mir.</p></div>');
     * // Faust: Siehst du den schwarzen Hund durch Saat und Stoppel streifen?
     * // Wagner: Ich sah ihn lange schon, nicht wichtig schien er mir.
     */
    filterHtml() {
    }

    /**
     * Adds a bullet point to the component.
     *
     * This implicitly sets the default bullet style if the component is empty, which will render the whole component as a bullet list as a result.
     * @param {string} bulletText - The text of the bullet point to add.
     * @return {TextComponent} The component itself.
     * @example
     * component
     *   .addBullet('Trash panda')
     *   .addBullet('Panda whale')
     *   .addBullet('Fart squirrel');
     *   // • Trash panda
     *   // • Panda whale
     *   // • Fart squirrel
     */
    addBullet(bulletText) {
    }

    /**
     * Renders the component as a bullet list with every paragraph marking a separate bullet point.
     *
     * Note that in powerpoint paragraphs are separated by carriage return (`'\r'`) characters.
     * New line (`"\n"`) will not result in a new bullet point.
     *c
     * Bullets can can have one of the following styles: <br/>
     * &#8226; BULLET <br/>
     * &#8227; TRIANGULAR_BULLET <br/>
     * &#9702; WHITE_BULLET <br/>
     * &#8259; HYPHEN_BULLET <br/>
     * &#8268; BLACK_LEFTWARDS_BULLET <br/>
     * &#8269; BLACK_RIGHTWARDS_BULLET <br/>
     * &#8729; BULLET_OPERATOR <br/>
     *
     * @param {('BULLET'|'TRIANGULAR_BULLET'|'WHITE_BULLET'|'HYPHEN_BULLET'|'BLACK_LEFTWARDS_BULLET'|'BLACK_RIGHTWARDS_BULLET'|'BULLET_OPERATOR')} [style='BULLET'] - The style of the bullets to use. This is case insensitive.
     * @return {TextComponent} The component itself.
     * @example
     * component
     *   .withText('Akatosh\rKynareth\rArkay')
     *   .asBulletList();
     *   // • Akatosh
     *   // • Kynareth
     *   // • Arkay
     * @example
     * component
     *   .asBulletList('BLACK_RIGHTWARDS_BULLET')
     *   .addBullet('Fox McCloud')
     *   .addBullet('Falco Lombardi')
     *   .addBullet('Slippy Toad');
     *   // ⁍ Fox McCloud
     *   // ⁍ Falco Lombardi
     *   // ⁍ Slippy Toad
     */
    asBulletList(style) {
    }
}