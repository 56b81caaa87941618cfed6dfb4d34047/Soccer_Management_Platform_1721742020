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
<h1 class="text-3xl font-bold text-center mb-6 text-purple-600">Welcome to Login Form</h1>

                        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div class="mb-4">
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500" type="text" placeholder="Enter text">
                            </div>
                            <div class="mb-4">
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500" type="text" placeholder="Enter text">
                            </div>
                            <div class="mb-4">
                                <div class="flex items-center">
                                    <input type="radio" id="male" name="gender" value="male" class="mr-2 focus:ring-purple-500 text-purple-600">
                                    <label for="male" class="mr-4 text-gray-700">Male</label>
                                    <input type="radio" id="female" name="gender" value="female" class="mr-2 focus:ring-purple-500 text-purple-600">
                                    <label for="female" class="text-gray-700">Female</label>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <button class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Submit
                                </button>
                            </div>
                        </form>
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
