// dark-mode.js

document.addEventListener('DOMContentLoaded', function () {
    // Wait for the dynamic content to be loaded
    const observer = new MutationObserver(function () {
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        if (darkModeToggle) {
            // Once the button is found, disconnect the observer and proceed
            observer.disconnect();
            initializeDarkModeToggle(darkModeToggle);
        }
    });

    // Start observing changes to the DOM
    observer.observe(document.body, { childList: true, subtree: true });
});

function initializeDarkModeToggle(darkModeToggle) {
    const body = document.body;
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Set initial dark mode state
    if (isDarkMode) {
        enableDarkMode(darkModeToggle);
    } else {
        disableDarkMode(darkModeToggle);
    }

    // Initialize the checkbox showing correct state
    darkModeToggle.checked = isDarkMode;

    // Toggle dark mode on button click
    darkModeToggle.addEventListener('click', function () {
        if (body.classList.contains('dark-mode')) {
            disableDarkMode(darkModeToggle);
        } else {
            enableDarkMode(darkModeToggle);
        }
    });

    function enableDarkMode(darkModeToggle) {
        body.classList.add('dark-mode');
        darkModeToggle.className = "fa-solid fa-sun"; 
        localStorage.setItem('darkMode', 'true');
    }

    function disableDarkMode(darkModeToggle) {
        body.classList.remove('dark-mode');
        darkModeToggle.className = "fa-solid fa-moon";
        localStorage.setItem('darkMode', 'false');
    }
}
