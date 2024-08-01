/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1722486168", {
    template: `
    <section id="cta-component" class="bg-gradient-to-br from-pink-500 to-purple-700 flex-1 min-h-screen flex items-center justify-center">
        <div id="cta-inner-container" class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6 backdrop-blur-md bg-white bg-opacity-20 rounded-xl shadow-lg">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-4 text-4xl font-extrabold leading-tight tracking-tight text-white">Gain Valuable Product Insights</h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-6 font-light text-white text-opacity-90 md:text-lg">Leverage our powerful analytics to uncover trends and opportunities for your new products.</p>
                </div>
                
                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-purple-700 bg-white bg-opacity-80 hover:bg-opacity-100 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-lg px-8 py-3 mr-2 mb-2 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none">Analyze Products Now</a>
                </div>
            </div>
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
