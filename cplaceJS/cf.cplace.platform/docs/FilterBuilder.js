/*
 * Copyright 2019, collaboration Factory AG. All rights reserved.
 */

/**
 * This class provides different matchers to build search filters
 *
 * @hideconstructor
 */
class FilterBuilder {

    /**
     * Equals matcher for search filter
     * @param {Date | number | boolean | string} value for matcher
     * @return {SearchFilter} search filter using this matcher.
     */
    eq(value) {
    }

    /**
     * Reference equals matcher for search filter
     * @param {string | CustomEntity} value - uid of an entity or entity itself
     * @return {SearchFilter} search filter using this matcher.
     */
    references(value) {
    }

    /**
     * Less-Than matcher for search filters
     * @param {number | Date} value for matcher
     * @return {SearchFilter} search filter using this matcher.
     */
    lt(value) {
    }

    /**
     * Less-Than-Equals matcher for search filters
     * @param {number | Date} value for matcher
     * @return {SearchFilter} search filter using this matcher.
     */
    lte(value) {
    }

    /**
     * Greater-Than matcher for search filters
     * @param {number | Date} value for matcher
     * @return {SearchFilter} search filter using this matcher.
     */
    gt(value) {
    }

    /**
     * Greater-Than-Equals matcher for search filters
     * @param {number | Date} value for matcher
     * @return {SearchFilter} search filter using this matcher.
     */
    gte(value) {
    }

    /**
     * Starts-With matcher for search filters
     * @param {string} value for matcher
     * @return {SearchFilter} search filter using this matcher.
     */
    startsWith(value) {
    }

    /**
     * In matcher for search filters
     * @param {ArrayLike} values for matcher
     * @return {SearchFilter} search filter using this matcher.
     */
    isIn(values) {
    }

    /**
     * References-In matcher for search filters
     * @param {ArrayLike} values for matcher. Only Uid and customEntity.
     * @return {SearchFilter} search filter using this matcher.
     */
    referenceIn(values) {
    }
}
