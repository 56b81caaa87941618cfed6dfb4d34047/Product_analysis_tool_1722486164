/* Summary: Contains a section with:
- A title for the table
- A table with 6 rows and 2 columns. The first column of each row contains the item name on top and description under it. The second column of each row contains the item's price.
- If the user hovers over a price, it shows a blue button on the row labelled "Details"
*/

Vue.component("items_table_component_1722490602", {
    template: `
    <section id="items-table-component" class="py-8 bg-gradient-to-br from-pink-400 to-purple-600 rounded-3xl shadow-2xl backdrop-blur-lg bg-opacity-30">
        <h2 id="costs-title" class="text-2xl font-bold mb-5 text-white text-center">New Product Analysis</h2>
        <div id="costs-table-container" class="overflow-x-auto px-6">
            <table id="costs-table" class="table-auto w-full text-sm bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-xl">
                <thead id="costs-table-header" class="text-white">
                    <tr>
                        <th id="description-header" class="px-4 py-3 text-left">Description</th>
                        <th id="cost-header" scope="col" class="px-4 py-3 text-right">Cost</th>
                    </tr>
                </thead>
                <tbody id="costs-table-body">
                    <tr class="group transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-20" id="costs-row-1">
                        <th scope="row" class="relative text-left font-normal px-4 py-5 text-white" id="costs-cell-description-1">
                            <div class="font-semibold mb-0.5" id="costs-link-1">
                                <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg hover:text-pink-300 transition-colors duration-300" href="details.html">
                                    Market Research Report
                                </a>
                            </div>
                            <p class="text-purple-200" id="costs-description-1">In-depth report on target markets and demand</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 text-white group-hover:text-pink-300 transition-colors duration-300" id="costs-cell-cost-1">
                            <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" tabindex="-1">$7,500</a>
                        </td>
                    </tr>
                    <tr class="group transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-20" id="costs-row-2">
                        <th scope="row" class="relative text-left font-normal px-4 py-5 text-white" id="costs-cell-description-2">
                            <div class="font-semibold mb-0.5" id="costs-link-2">
                                <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg hover:text-pink-300 transition-colors duration-300" href="details.html">
                                    Competitor Analysis
                                </a>
                            </div>
                            <p class="text-purple-200" id="costs-description-2">Detailed breakdown of competitor offerings and strengths</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 text-white group-hover:text-pink-300 transition-colors duration-300" id="costs-cell-cost-2">
                            <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" tabindex="-1">$4,200</a>
                        </td>
                    </tr>
                    <tr class="group transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-20" id="costs-row-3">
                        <th scope="row" class="relative text-left font-normal px-4 py-5 text-white" id="costs-cell-description-3">
                            <div class="font-semibold mb-0.5" id="costs-link-3">
                                <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg hover:text-pink-300 transition-colors duration-300" href="details.html">Consumer Insights Study</a>
                            </div>
                            <p class="text-purple-200" id="costs-description-3">Qualitative and quantitative consumer data analysis</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 text-white group-hover:text-pink-300 transition-colors duration-300" id="costs-cell-cost-3">
                            <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" tabindex="-1">$9,800</a>
                        </td>
                    </tr>
                    <tr class="group transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-20" id="costs-row-4">
                        <th scope="row" class="relative text-left font-normal px-4 py-5 text-white" id="costs-cell-description-4">
                            <div class="font-semibold mb-0.5" id="costs-link-4">
                                <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg hover:text-pink-300 transition-colors duration-300" href="details.html">Pricing Strategy Review</a>
                            </div>
                            <p class="text-purple-200" id="costs-description-4">Recommendations for optimal pricing tiers and positioning</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 text-white group-hover:text-pink-300 transition-colors duration-300" id="costs-cell-cost-4">
                            <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" tabindex="-1">$3,600</a>
                        </td>
                    </tr>
                    <tr class="group transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-20" id="costs-row-5">
                        <th scope="row" class="relative text-left font-normal px-4 py-5 text-white" id="costs-cell-description-5">
                            <div class="font-semibold mb-0.5" id="costs-link-5">
                                <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg hover:text-pink-300 transition-colors duration-300" href="details.html">Advertising Campaign Plan</a>
                            </div>
                            <p class="text-purple-200" id="costs-description-5">Multi-channel advertising strategy and budget allocation</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 text-white group-hover:text-pink-300 transition-colors duration-300" id="costs-cell-cost-5">
                            <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" tabindex="-1">$11,000</a>
                        </td>
                    </tr>
                    <tr class="group transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-20" id="costs-row-6">
                        <th scope="row" class="relative text-left font-normal px-4 py-5 text-white" id="costs-cell-description-6">
                            <div class="font-semibold mb-0.5" id="costs-link-6">
                                <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg hover:text-pink-300 transition-colors duration-300" href="details.html">Product Launch Roadmap</a>
                            </div>
                            <p class="text-purple-200" id="costs-description-6">Actionable timeline for product rollout and go-to-market</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 text-white group-hover:text-pink-300 transition-colors duration-300" id="costs-cell-cost-6">
                            <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" tabindex="-1">$6,700</a>
                        </td>
                    </tr>
                </tbody>
                <tfoot id="costs-table-footer">
                    <tr>
                        <th id="total-description" scope="row" class="relative text-left font-normal px-4 py-5 text-white">
                            <p id="total-description-text" class="italic text-purple-200">TOTAL in USD</p>
                        </th>
                        <td id="total-cost" class="relative font-bold text-right text-xl px-4 py-5 text-pink-300">$42,800</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </section>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
