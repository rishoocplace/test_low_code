/**
 * Provides user defined messages to a cplaceJS script so they can be accessed from inside the script.
 *
 * @hideconstructor
 */
class MessageProvider {
    /**
     * Gets the message with the given name and translates it to the language of the executing session.
     * If the message has placeholders and values are provided along with the message name the values are
     * pasted into the message.
     * @param {String} messageName - The name of the message to receive.
     * @param {...*} parameters - Arbitrary list of parameters to put into placeholders in order of appearance.
     * @return {String} The translated message.
     *
     * @example
     * // assume that 'invalidValue' is the name of a message with two placeholders
     * var attributeA = page.get('cf.cplace.attributeA');
     * var myArray = [1, 2, 3];
     * messages.get('invalidValue', attributeA, myArray);
     */
    get(messageName, parameters) {
    }
}
