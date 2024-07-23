/* Summary: The blank component contains the following two parts:
- To the left: There is an empty div with text on top and bottom.
- To the right: There is an empty div.

If the user asks you to insert components left and right of each other, first wrap them into `<div class="grid"> </div` and then use the following syntax:
<div class="grid">
    <!-- these components appear to the left side -->
    <div id="left-side-container" class="flex"> Left side part here </div>

    <!-- these components appear to the right side -->
    <div id="right-side-container" class="flex"> Right side part here</div>
</div>
*/
Vue.component("blank_component_1721742158", {
    template: `
        <div>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
            <section id="blank-section" class="bg-white dark:bg-gray-900 flex-1">
                <div id="blank-container" class="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div class="flex-1">
                        <h2 class="text-4xl font-extrabold text-center mb-12 text-purple-600">Frequently Asked Questions</h2>
                        <div class="space-y-8">
                            <div class="bg-white rounded-lg p-6 shadow-md border-l-4 border-purple-600">
                                <h3 class="text-2xl font-bold text-gray-800 mb-3">What is this platform about?</h3>
                                <p class="text-gray-700">Our platform is designed to revolutionize soccer management, providing comprehensive tools for teams, coaches, and players.</p>
                            </div>
                            <div class="bg-white rounded-lg p-6 shadow-md border-l-4 border-purple-600">
                                <h3 class="text-2xl font-bold text-gray-800 mb-3">How do I create a team?</h3>
                                <p class="text-gray-700">Creating a team is easy! Simply navigate to the 'Teams' section and click on 'Create New Team'. Follow the prompts to set up your team profile.</p>
                            </div>
                            <div class="bg-white rounded-lg p-6 shadow-md border-l-4 border-purple-600">
                                <h3 class="text-2xl font-bold text-gray-800 mb-3">Can I track player statistics?</h3>
                                <p class="text-gray-700">Absolutely! Our platform offers comprehensive player statistics tracking, including goals, assists, playing time, and more.</p>
                            </div>
                            <div class="bg-white rounded-lg p-6 shadow-md border-l-4 border-purple-600">
                                <h3 class="text-2xl font-bold text-gray-800 mb-3">Is there a mobile app available?</h3>
                                <p class="text-gray-700">Yes, we have a mobile app available for both iOS and Android devices. You can download it from the respective app stores.</p>
                            </div>
                            <div class="bg-white rounded-lg p-6 shadow-md border-l-4 border-purple-600">
                                <h3 class="text-2xl font-bold text-gray-800 mb-3">How secure is my data?</h3>
                                <p class="text-gray-700">We take data security very seriously. All your information is encrypted and stored securely on our servers, adhering to the highest industry standards.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
        </div>          
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
