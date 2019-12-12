/*
 * Copyright 2019, collaboration Factory AG. All rights reserved.
 */

/**
 * cplaceJS actions provided by platform
 *
 * Note:
 * 1. Actions will be executed with write permissions checks suppressed
 * 2. All builtin attributes will be referred by their feature names
 * 3. All references must be provided as UIDs or as entities.
 *
 * @type {Actions}
 *
 * @hideconstructor
 */
class PlatformActions {
    /**
     * Creates a page in the context of user executing the script with provided data and options.
     * For creating a page at least name, customType and space must be provided. If the custom type supports name generation, then name can be omitted but options with setGeneratedName set to true must be provided.
     * @param {PageData} data - information that will be used to create page
     * @param {PageOptions} [options] - options to use when creating page
     * @returns {Page} newly created page
     *
     * @example
     * var page = cplace.actions().createPage({
     *      name: 'Test page'
     *      space: 'pageSpace/iogef7klu9wjdj4l63ne4iyie',
     *      customType: 'my.custom.type',
     *      customAttributes: {
     *          attr1: 'value1',
     *          attr2: 42,
     *          attr3: true,
     *          attr4: ['red', 'green'],
     *          attr5: 'page/uidofsomepage'
     *      },
     *      readers: ['person/uid of person', 'group/uidofgroup']
     * }, {
     *   setGeneratedName: true
     * });
     *
     *
     * @example
     * // For setting permissions we provide an extended API as follows:
     * // Inherit permission from parent. <b>inherited</b> string can be used indicate that this permission should be inherited from its parent.
     *
     * {
     *      ...
     *      readers: 'inherited'
     *      ...
     * }
     *
     * @example
     * // Set permission explicitly. The values must be provided as an array and must only contain either UIDs or instance of person/group
     *
     * {
     *   ...
     *   writers: ['person/uid1', 'group/uid2']
     *   ...
     * }
     *
     * @example
     * // Add/remove permissions seamlessly
     *
     * {
     *   ...
     *   writers: {
     *      'additiveInheritance': true,
     *      '+': [uids...],
     *      '-': [uids...]
     *   }
     *   ...
     * }
     *
     * @example
     * // To find specific users and groups following utility methods can be used
     *
     * cplace.utils().findUserByLogin('email@user'); // returns user with email 'email@user', if exists.
     * cplace.utils().findGroupByName('developers'); // returns group with name 'developers', if it exists.
     * cplace.utils().getAllUsersGroup(); //returns group representing all registered users of cplace.
     *
     */
    createPage(data, options) {
    }

    /**
     * Update a page with provided data and options.
     * @param {Page} page - page that has to be updated
     * @param {PageData} data - information that will be used to update the page.
     * @param {PageOptions} [options] - options to use when updating page
     *
     * @example
     * cplace.actions().updatePage(page, {
     *      layoutName: 'layoutType2',
     *      customAttributes: {
     *          attr2: null, // setting null explicitly removes the value
     *          attr3: false,
     *          attr4: ['yellow']
     *      }
     * }, {
     *   setGeneratedName: true
     * });
     *
     *
     * check createPage action above for further explanation of the API.
     */
    updatePage(page, data, options) {
    }

    /**
     * Delete a page.
     * @param {Page} page - information that will be
     *
     * @example
     * cplace.actions().deletePage(page)
     */
    deletePage(page) {
    }

    /**
     * Dispatches a user notification which will be visible to addressed users immediately.
     * @param {NotificationOptions} options - options to use for creating the notification.
     * @example
     * cplace.actions().sendNotification({
     *     message: {
     *         de: 'Der Kuchen ist ein Schwindel!!',
     *         en: 'The cake is a lie!'
     *     },
     *     title: {
     *         de: 'Achtung',
     *         en: 'Attention'
     *     },
     *     icon: 'fa-birthday-cake',
     *     isCritical: true,
     *     recipients: 'systemGroup/allusers'
     * });
     */
    sendNotification(options) {
    }

    /**
     * Send an email.
     *
     * @param {SendMailData} data - information to use sending the mail.
     *
     * @example
     * var accepted = true;
     * var mailtopic = "your latest plan";
     *
     * cplace.actions().sendMail({
     *     fromAddress: 'max.meier@test.com',
     *     fromName: 'Max Meier',
     *     to: 'ernst.haft@test.com',
     *     subject: 'About $topic$',
     *     message: 'Hello $name$, this is about $topic$. It is$[condition$ accepted$]condition[$ denied$condition]$! Regards, Max',
     *     substitutions: {
     *         name: 'Ernst',
     *         topic: mailtopic,
     *         condition: accepted
     *     }
     * });
     */
    sendMail(data) {
    }
}

/**
 * An object that defines all the data for a notification
 * @typedef {Object} NotificationOptions
 * @property {string|LocalizedString} message - the message of the notification
 * @property {string|LocalizedString} [title] - the title of the notification. If it is missing the whole header row including the icon won't be displayed.
 * @property {string} [icon] - an icon to display in the header row. Display depends on the presence of the title.
 * @property {boolean} [isCritical=false] - whether the notification is handled and rendered as critical/important. Defaults to <code>false</code>.
 * @property {string|Page} [target] - the page to forward to when the user clicks the notification.
 * @property {string|Person|Group|SystemGroup|Array<string|Person|Group|SystemGroup>} [recipients=current_user] - person or people to receive the notification. If provided as an array tpyes may be mixed e.g. [person, group]. Defaults to current user. Note that for system groups only the "all users" group is supported.
 */

/**
 * A localized string object containing language dependant versions of a string.
 * @typedef {Object} LocalizedString
 * @property {string} de - german translation/version of the string
 * @property {string} en - english translation/version of the string
 */

/**
 * An object that defines all the data for a page.
 * @typedef {Object} PageData
 * @property {string} [name] - name of the page
 * @property {string} [spaceId] - id of the space, in which, the page will be created. Not needed when updating page.
 * @property {string} [type] - custom type of the page. Not needed when updating page.
 * @property {string} [layoutName] - internal name of the layout to set.
 * @property {CustomAttributes} [customAttributes] - custom attributes of the page
 * @property {PagePermissions} permissions
 */

/**
 * Object defines structure of CustomAttributes. Type of value depends on the type of CustomAttribute.
 * Setting null explicitly will remove the value from attribute
 * If an attributes has internal representation of values(Enums workflow states, etc), internal representation must be provided as values.
 * @typedef {{attributeName: string, value: *}} CustomAttributes
 */

/**
 * Object defines structure of PagePermissions. Type of value depends on the type of PagePermissions.
 * @typedef {Object} PagePermissions
 * @property {'inherited'|Array|PermissionsObject} readers
 * @property {'inherited'|Array|Object} writers
 * @property {'inherited'|Array|Object} deputies
 */

/**
 * Structure for providing permissions for pages
 * @typedef {Object} PermissionsObject
 * @property {boolean} [additiveInheritance] - Flag to control additive permission inheritance.
 * @property {Array}  plus - the actual key is '+'. Principals ids to add
 * @property {Array} minus - the actual key is '-'. Principals ids to remove
 *
 */

/**
 * Options for createPage and updatePage actions
 * @typedef {Object} PageOptions
 * @property {boolean} setGeneratedName - generate name of the page using defined name generation pattern
 */

/**
 * An object which defines all data for sending an email
 * @typedef {Object} SendMailData
 * @property {string} [fromAddress] - sender address
 * @property {string} [fromName] - sender name
 * @property {string} to - recipient mail address
 * @property {string} subject - mail subject (can contain placeholders, syntax is cplace template language)
 * @property {string} message - mail message (can contain placeholders, syntax is cplace template language)
 * @property {Object} [substitutions] - substitution values for placeholders in subject and message parameter.
 *    Type of substitution used depends on the type of value:
 *    Values of type boolean will be used as conditional substitution.
 *    Values of type array will be used as list substitution. When the array contains generic Objects, the property
 *    keys of the first element are used as keys for the print substitions of each element. When the array contains
 *    another type of data, the value will be converted to string and be made accessible under key 'value'.
 *    All other values will be used as print substitution.
 *
 */
