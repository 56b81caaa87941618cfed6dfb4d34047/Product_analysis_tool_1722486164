/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1722486168", {
    template: `
    <div>
        <nav class="bg-white shadow-lg">
            <div class="max-w-6xl mx-auto px-4">
                <div class="flex justify-between">
                    <div class="flex space-x-7">
                        <div>
                            <a href="#" class="flex items-center py-4 px-2">
                                <img src="./images/logo.svg" alt="Logo" class="h-8 w-8 mr-2">
                                <span class="font-semibold text-gray-500 text-lg">ProductScope</span>
                            </a>
                        </div>
                        <div class="hidden md:flex items-center space-x-1">
                            <a href="#" class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Home</a>
                            <a href="#" class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">About</a>
                            <a href="#" class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    <footer id="footer-section" class="flex-1 bg-white dark:bg-gray-800">
            <div id="footer-container" class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
                <hr id="footer-divider" class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                            <img id="footer-logo" src="./images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                            ProductScope - New Product Analytics
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-sm text-center text-gray-500 dark:text-gray-400">
                        Gain valuable insights into new product launches with our cutting-edge data analysis platform. Stay ahead of the competition with ProductScope.
                    </div>
                    </div>
                </div>
                <div class="flex justify-center mt-4">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Hello World
                    </button>
                </div>
            </div>
        </footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
