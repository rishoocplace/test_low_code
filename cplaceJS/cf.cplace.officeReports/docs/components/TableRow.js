/**
 * Sub-component of the TableComponent to represent a table row.
 * @extends ComponentContainer
 * @see TableComponent
 * @since 5.0
 * @hideconstructor
 * @category Office-Reporting
 */
class TableRow {

    /**
     * Put a component for a placeholder into a table row, using specified table cell styles
     *
     * @param {string} key - Placeholder text in the template
     * @param {Component} component - The component to render into the placeholder
     * @param {CellStyle|CellFormatComponent} cellStyles - Formatting styles for the cell
     * @return {TableRow} The row itself.
     * @variation 1
     */
    put(key, component, cellStyles) {
    }

    /**
     * Put a component for a placeholder into a table row, not using any specific cell style
     * Adds a component to the row cell.
     * @param {string} key - Substitution placeholder under which to add the component.
     * @param {Component} component - The component to add.
     * @return {TableRow} The row itself.
     * @variation 2
     */
    put(key, component) {
    }

    /**
     * Set default cell style for whole row. Can be overridden by setting different style for specific cell.
     * @param {CellStyle} defaultRowCellFormat - Default style for all cells in a row
     * @return {TableRow} The row itself.
     */
    withStyle(defaultRowCellFormat) {
    }

    /**
     * Get default cell style of the row.
     * @return {CellFormatComponent} The default cell format of the row or `null` if it never has been set.
     */
    getDefaultRowCellFormat() {
    }
}