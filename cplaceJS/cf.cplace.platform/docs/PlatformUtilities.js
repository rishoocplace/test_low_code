/*
 * Copyright 2019, collaboration Factory AG. All rights reserved.
 */

/**
 * cplaceJS utilities provided by the platform

 * @type {Utilities}
 *
 * @hideconstructor
 */
class PlatformUtilities {
    /**
     * Get the currently logged in user.
     * @return {Person} Current user or null if there is no logged in user
     *
     * @example
     * var currentUser = cplace.utils().getCurrentUser();
     *
     */
    getCurrentUser() {
    }

    /**
     * Find a group by its name
     * @param {string} groupName - name of the group
     * @return {Group} wrapped group or null if not found

     * @example
     * var myGroup = cplace.utils().findGroupByName('myUserGroup');
     */
    findGroupByName(groupName) {
    }

    /**
     * Get the allUsersGroup system group
     * @return {SystemGroup} wrapped system group of allUsersGroup
     *
     * @example
     * var allUsersGroup = cplace.utils().getAllUsersGroup();
     */
    getAllUsersGroup() {
    }

    /**
     * Find a user by login
     * @param {string} login - login of the user
     * @return {Person} wrapped person or null if not found
     *
     * @example
     * var maxMustermann = cplace.utils().findUserByLogin('mustermann@test.tricia');
     */
    findUserByLogin(login) {
    }

    /**
     * Returns spaceUid for provided spaceName
     * @param {string} spaceName - name of space
     * @return {string} spaceUid if space with spaceName is found, null otherwise
     */
    getSpaceIdByName(spaceName) {
    }

    /**
     * Returns all pages for provided pageName.
     * @param {string} pageName - name of page
     * @return {ArrayLike<Page>} - Iterable of pages
     *
     * @example
     * var pages = cplace.utils().getPagesByName('myPageName');
     */
    getPagesByName(pageName) {
    }

    // noinspection JSDuplicatedDeclaration,JSUnusedGlobalSymbols
    /**
     * Returns all pages for provided pageName and options
     * @param {string} pageName - name of page
     * @param {JSON} [options] - options to use when searching pages
     * @return {ArrayLike<Page>} - Iterable of pages
     *
     * @example
     * var pages = cplace.utils().getPagesByName('myPageName', {
     *      space: ['space1uid', 'space2uid'],
     *      customType: ['type1name', 'type2name']
     * });
     *
     * @example
     * // Options must only be provided if results should be filtered by them.
     * // In case of only one space or type, no array is needed.
     * var pages = cplace.utils().getPagesByName('myPageName', {
     *     space: 'space1uid'
     * });
     */
    getPagesByName(pageName, options) {
    }
}
