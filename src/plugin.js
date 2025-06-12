/**\
 * Dark Mode Plugin for Vue.js
 * This plugin allows toggling dark mode based on user preference or 
system settings.
 * It creates a `dark` class on the document element when the dark mode is 
enabled.
 * Recommended to use with tailwindcss for `dark:` mode classes.
 *
 * Features:
 * - It uses localStorage to remember the user's choice across sessions.
 * - It also respects the user's system preference for dark mode.
 * 
 * Usage:
 * 1. Import and use the plugin in your main.js or main.ts file:
 *    import darkMode from 'vue-plugin-darkmode';
 *    // ...
 *    createApp(App).use(darkMode).mount('#app');
 * 2. Use the provided methods in your components:
 *    this.$darkModeSetup(); // To initialize dark mode on page load
 *    this.$setDarkMode(true); // To enable dark mode
 *    this.$setDarkMode(false); // To disable dark mode
 *    this.$systemMode(); // To respect system preference
 *    this.$isDarkMode(); // To check if dark mode is currently enabled
 * 3. Access the current dark mode state:
 *    this.$darkMode; // Returns a reactive ref indicating if dark mode is 
enabled
 */

import { ref } from 'vue'

const darkMode = ref(isDarkMode());

// Check if dark mode is enabled based on localStorage or OS preference
function isDarkMode() {
    return localStorage.theme === "dark" ||
            (!("theme" in localStorage) && 
window.matchMedia("(prefers-color-scheme: dark)").matches)
}

// On page load or when changing themes, best to add inline in `head` to 
function darkModeSetup(){
    darkMode.value = isDarkMode();
    document.documentElement.classList.toggle(
        "dark",
        darkMode.value
    );
}

// Whenever the user explicitly chooses dark mode
function setDarkMode(enabled){
    console.log("Dark mode set to", enabled);
    localStorage.theme = enabled ? "dark" : "light";
    darkModeSetup();
}

// Whenever the user explicitly chooses to respect the OS preference
function systemMode(){
    localStorage.removeItem("theme");
    darkModeSetup();
}

function install(app, options) {
    // Register the dark mode plugin globally
    app.config.globalProperties.$darkModeSetup = darkModeSetup;
    app.config.globalProperties.$darkMode = darkMode;
    app.config.globalProperties.$isDarkMode = isDarkMode;
    app.config.globalProperties.$setDarkMode = setDarkMode;
    app.config.globalProperties.$systemMode = systemMode;

    // Set current mode on load
    darkModeSetup();
}

export default  {
    install,
    darkModeSetup,
    isDarkMode,
    setDarkMode,
    systemMode
}
