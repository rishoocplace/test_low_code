/*
 * Copyright 2018, collaboration Factory AG. All rights reserved.
 */

/**
 * {@link CustomEntity} representing a person.
 * @extends CustomEntity
 *
 * @hideconstructor
 */
class Person extends CustomEntity {

    /**
     * Test if this person is a member of the given group
     * @param {Group} group - the group to test
     * @return {boolean} whether the person is a member of the given group
     *
     * @example
     * var user = cplace.utils().findUserByLogin('test@test.test');
     * // the cplace default group for administrators is called 'Administratoren'
     * var group = cplace.utils().findGroupByName('Administratoren');
     * var isAdmin = user.isMemberOf(group);
     */
    isMemberOf(group) {}

    /**
     * Test if this person is a member of the group of the given name
     * @param {string} groupName - name of group to test
     * @return {boolean} true if person is member of given group
     *
     * @example
     * var user = cplace.utils().findUserByLogin('test@test.test');
     * var isAdmin = user.isMemberOf('admins');
     */
    isMemberOf(groupName) {}
    /**
     * Get all groups of which this person is a member
     * @return {ArrayLike<Group>} A collection of groups of which this person is a member
     *
     * @example
     * var user = cplace.utils().findUserByLogin('test@test.test');
     * var groups = user.getGroups();
     */
    getGroups() {}

    /**
     * Get users Language, if user has no defined language then get default language for tenant
     * @return {string } language code for user
     *
     * @example
     * var user = cplace.utils().findUserByLogin('test@test.test');
     * var lang = user.getUserLanguage();
     *
     * var currentUser = cplace.utils().getCurrentUser();
     * var currentLanguage = currentUser.getUserLanguage();
     *
     */
    getUserLanguage() {
    }

}
