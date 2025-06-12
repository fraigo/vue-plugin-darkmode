# vue-plugin-darkmode

Dark Mode Plugin for Vue.js

* This plugin allows toggling dark mode based on user preference or 
system settings.
* It creates a `dark` class on the document element when the dark mode is 
enabled.
* Recommended to use with tailwindcss for `dark:` mode classes.

## Features:
* It uses `localStorage` to remember the user's choice across sessions.
* It also respects the user's system preference for dark mode.

## Usage:
1. Import and use the plugin in your main.js or main.ts file:
```javascript
import darkMode from 'vue-plugin-darkmode'

createApp(App).use(darkMode).mount('#app');
```
2. Use the provided methods in your components:
```javascript
    this.$darkModeSetup(); // To initialize dark mode on page load
    this.$setDarkMode(true); // To enable dark mode
    this.$setDarkMode(false); // To disable dark mode
    this.$systemMode(); // To respect system preference
    this.$isDarkMode(); // To check if dark mode is currently enabled
```
3. Access the current dark mode state:
```javascript
    this.$darkMode; // Returns a reactive ref indicating if dark mode is enabled
```