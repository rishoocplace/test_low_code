/*
 * Copyright 2019, collaboration Factory AG. All rights reserved.
 */

/**
 * cplaceJS actions provided by workflow plugin
 *
 * Note: These actions can be accessed via <code>cplace.actions('cf.cplace.workflow')</code>.
 *
 * @since 4.57
 * @hideconstructor
 */
class WorkflowActions {

    /**
     * Set target page to be displayed after manual transition. This method should be called only in transition action or entry action
     * scripts, as it will not have any effect elsewhere.
     * @param {Page} targetPage - Target page to be displayed. Must not be null.
     * @param {boolean} [showInNewTab=false] - When set to true, a new browser tab is opened to display the given targetPage
     *
     * @example
     * // Transition action script to create a new page and display this newly created page in a new browser tab after executing transition
     * var newPage = cplace.actions().createPage({
     *     name: 'new page',
     *     space: 'pageSpace/root',
     *     customType: 'mytype'
     * });
     *
     * cplace.actions('cf.cplace.workflow').setTransitionTargetPage(newPage, true);
     *
     * @example
     * // Transition action script which updates the current page and then force the browser tab to be actually reloaded instead of
     * // just refreshing the attributes (needed e.g. when page layout is changed in script)
     * cplace.actions().updatePage(page, {
     *     // ... some options/changes which will only display when page is reloaded
     * });
     * // Force reload of current page in current tab
     * cplace.actions('cf.cplace.workflow').setTransitionTargetPage(page);

     */
    setTransitionTargetPage(targetPage, showInNewTab) {
    }

    /**
     * Set target URL to be displayed after manual transition. This method should be called only in transition action or entry action
     * scripts, as it will not have any effect elsewhere.
     * @param {string} targetUrl Target URL to be displayed. Must be an absolute URL, must not be null, must have protocol http or https.
     * @param {boolean} [showInNewTab=false] - When set to true, a new browser tab is opened to display the given target URL
     *
     * @example
     * // Transition action script which displays some kind of process manual page after executing transition
     * // ...
     * // Display page in new browser tab
     * cplace.actions('cf.cplace.workflow').setTransitionTargetUrl('https://jsdoc.cplace.io/', true);
     */
    setTransitionTargetUrl(targetUrl, showInNewTab) {
    }
}
