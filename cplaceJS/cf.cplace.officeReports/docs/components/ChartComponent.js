/**
 * @extends Component
 * @since 5.0
 * @hideconstructor
 * @category Office-Reporting
 */
class ChartComponent {

    /**
     * Adds a new category to the chart.
     * @param {string} categoryLabel - The name of the new category. This will be displayed on the chart.
     * @return {ChartComponent} The ChartComponent itself
     */
    addCategory(categoryLabel) {
    }

    /**
     * Adds a new series to the chart. All series must be of the same length.
     * @param {string} seriesLabel - The name of the new series
     * @param {ArrayLike<*>} seriesValues - The values of the new series. Every series has to have the same length.
     * @return {ChartComponent} The ChartComponent itself
     */
    addSeries(seriesLabel, seriesValues) {
    }
}