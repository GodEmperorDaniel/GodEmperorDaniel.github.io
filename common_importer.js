document.addEventListener('DOMContentLoaded', function () {
    fetch('common.html')
        .then(response => response.text())
        .then(data => {
            const headerContainer = document.createElement('div');
            headerContainer.innerHTML = data;
            document.body.insertBefore(headerContainer, document.body.firstChild);
        });
});