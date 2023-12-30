document.addEventListener('DOMContentLoaded', function () {
    fetch('common.html')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const commonDoc = parser.parseFromString(data, 'text/html');

            // Create containers for header and footer
            const headerContainer = document.createElement('div');
            const footerContainer = document.createElement('div');

            // Get header and footer from common.html
            const header = commonDoc.querySelector('header');
            const footer = commonDoc.querySelector('footer');

            // Sticky footer effect! :))
            footerContainer.style = "margin-top: auto;";

            // Add header and footer to their containers
            headerContainer.appendChild(header);
            footerContainer.appendChild(footer);

            // Insert header at the beginning of the body
            document.body.insertBefore(headerContainer, document.body.firstChild);

            // Append footer at the end of the body
            document.body.appendChild(footerContainer);
        });
});