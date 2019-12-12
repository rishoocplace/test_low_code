/**
 * Component which maps a table.
 * @extends Component
 * @since 5.0
 * @hideconstructor
 * @category Office-Reporting
 */
class TableComponent {

    /**
     * Allows table to overflow to another slide.
     * The slide that has table will be cloned and overflowing rows will be added to new slide.
     * @return {TableComponent} The component itself.
     */
    allowGrowth() {
    }

    /**
     * First row will be considered as header of the table.
     * Processing of rows will start at 2nd row.
     * @return {TableComponent} The component itself.
     */
    withHeader() {
    }

    /**
     * Add a header row for the component.
     * Processing of rows will start at 2nd row.
     * First row will be considered as header of the table.
     * This method returns a {@link TableRow} object to be able to put substitutions for placeholders in header row of table
     * @return {TableRow} A table row to put substitutions for header row placeholders.
     */
    withHeaderRow() {
    }

    /**
     * Set maximum height of table before starting a new slide for additional data. This implicitly sets [#allowGrowth]{@link TableComponent#allowGrowth} and resets
     * [#withMaximumDataRowsPerSlide]{@link TableComponent#withMaximumDataRowsPerSlide} so that height is taken into account instead of number of rows.
     * @param {number} height - The maximum table height in pt. Has to be greater than 0.
     * @return {TableComponent} The component itself.
     */
    withMaximumHeightPerSlide(height) {
    }

    /**
     * Set maximum number of data rows (i.e. rows excluding header row) of table before starting a new slide for additional data.
     * This implicitly sets [#allowGrowth]{@link TableComponent#allowGrowth}.
     * @param {number} rows - Maximum number of data rows per slide. Has to be greater than 0.
     * @return {TableComponent} The component itself.
     */
    withMaximumDataRowsPerSlide(rows) {
    }

    /**
     * Sets the number of rows per data set.
     * Use this if data sets need more than one row for representation. Each call of [#addRow]{@link TableComponent#addRow} will clone the given
     * amount of rows from the template.
     * @param {number} rows - Number of rows
     */
    withNumberOfTemplateRows(rows) {
    }

    /**
     * Adds a new row to the component. If the number of template rows is greater than 1 the created row will represent multiple actual rows
     * internally.
     * @return {TableRow} The created row.
     * @see #withNumberOfTemplateRows
     */
    addRow() {
    }

    /**
     * Copy a given row and add it to the component.
     * @param {TableRow} originalRow - The row to copy.
     */
    addCopiedRow(originalRow) {
    }
}