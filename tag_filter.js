// filter.js

// Function to filter blog posts based on selected tags
function filterProjects(selectedTags) {
    const projects = document.querySelectorAll('.blog');

    projects.forEach(project => {
        const tags = project.dataset.tags.split(' ');

        // Check if any of the selected tags are included in the project's tags
        const isTagIncluded = selectedTags.every(tag => tags.includes(tag) || tag === 'all');

        if (isTagIncluded) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const tags = document.querySelectorAll('.tags a');
    let selectedTags = []; // Array to hold selected tags

    tags.forEach(tag => {
        tag.addEventListener('click', function (event) {
            event.preventDefault();
            const selectedTag = this.textContent.toLowerCase();

            // If tag selected is 'all' remove all other tags from selectedTags array and add 'active' class to 'all' tag
            if (selectedTag === 'all') {
                selectedTags = [];
                tags.forEach(tag => tag.classList.remove('active'));
                this.classList.add('active');
                filterProjects(['all']);
                return;
            }

            // Add or remove tag from selectedTags array
            if (selectedTags.includes(selectedTag)) {
                selectedTags = selectedTags.filter(tag => tag !== selectedTag);
                this.classList.remove('active');
            } else {
                selectedTags.push(selectedTag);
                this.classList.add('active');
            }
            if(selectedTags.length > 0){
                document.getElementById('all').classList.remove('active');
                filterProjects(selectedTags);
            }
            else{
                document.getElementById('all').classList.add('active');
                filterProjects(['all']);
            }

        });
    });

    // Show all projects by default
    filterProjects(['all']);
});