// filter.js

// Function to filter blog posts based on selected tag
function filterProjects(tag) {
    const projects = document.querySelectorAll('.blog');

    projects.forEach(project => {
        const tags = project.dataset.tags.split(' ');

        if (tags.includes(tag) || tag === 'all') {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const tags = document.querySelectorAll('.tags a');

    tags.forEach(tag => {
        tag.addEventListener('click', function (event) {
            event.preventDefault();
            const selectedTag = this.textContent.toLowerCase();
            filterProjects(selectedTag);

            // Toggle 'active' class for styling
            tags.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Show all projects by default
    filterProjects('all');
});
