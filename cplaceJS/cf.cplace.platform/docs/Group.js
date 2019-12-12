/*
 * Copyright 2018, collaboration Factory AG. All rights reserved.
 */

/**
 * {@link CustomEntity} representing a group of persons.
 * @extends CustomEntity
 *
 * @hideconstructor
 */
class Group extends CustomEntity {

    /**
     * Get a flat list of all persons who are directly or transitively members of this group.
     * @return {ArrayLike<Person>} A collections of persons which are members of this group
     *
     * @example
     * var myGroup = cplace.utils().findGroupByName('myUserGroup');
     * if (myGroup) {
     *     var members = myGroup.getAllActiveUsers();
     *     cplace.each(members, function(m) {
     *         cplace.log(m.getName());
     *     })
     *  }
     */
    getAllActiveUsers() {
    }
}
