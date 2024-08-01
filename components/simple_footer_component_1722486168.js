/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1722486168", {
    template: `
    <div class="bg-gradient-to-br from-pink-500 to-purple-600 min-h-screen">
        <nav class="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg">
            <div class="max-w-6xl mx-auto px-4">
                <div class="flex justify-between">
                    <div class="flex space-x-7">
                        <div>
                            <a href="#" class="flex items-center py-4 px-2">
                                <img src="./images/logo.svg" alt="Logo" class="h-8 w-8 mr-2">
                                <span class="font-semibold text-white text-lg">ProductScope</span>
                            </a>
                        </div>
                        <div class="hidden md:flex items-center space-x-1">
                            <a href="#" class="py-4 px-2 text-white font-semibold hover:text-pink-300 transition duration-300">Home</a>
                            <a href="#" class="py-4 px-2 text-white font-semibold hover:text-pink-300 transition duration-300">About</a>
                            <a href="#" class="py-4 px-2 text-white font-semibold hover:text-pink-300 transition duration-300">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <footer id="footer-section" class="flex-1 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
            <div id="footer-container" class="max-w-screen-xl p-8 py-12 mx-auto lg:py-16">
                <hr id="footer-divider" class="my-8 border-pink-300 border-opacity-50 sm:mx-auto lg:my-12">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-6 text-3xl font-bold text-white">
                            <img id="footer-logo" src="./images/logo.svg" class="h-8 mr-3 sm:h-10" alt="Landwind Logo" />
                            ProductScope - New Product Analytics
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-lg text-center text-white">
                        Gain valuable insights into new product launches with our cutting-edge data analysis platform. Stay ahead of the competition with ProductScope.
                    </div>
                </div>
                <div class="flex justify-center mt-8">
                    <button class="bg-pink-500 bg-opacity-50 hover:bg-opacity-70 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
                        Hello World
                    </button>
                </div>
            </div>
        </footer> 
    </div>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
