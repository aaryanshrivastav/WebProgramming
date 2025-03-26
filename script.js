// Function to load components dynamically
function loadComponent(id, file) {
    fetch(`components/${file}`)
        .then(response => response.text())
        .then(data => document.getElementById(id).innerHTML = data)
        .catch(error => console.error(`Error loading ${file}:`, error));
}

// Load all components into index.html
document.addEventListener("DOMContentLoaded", function () {
    loadComponent("header", "header.html");
    loadComponent("project-section", "project-section.html");
    loadComponent("about-section", "about-section.html");
    loadComponent("mission-objectives", "mission-objectives.html");
    loadComponent("get-started-section", "get-started-section.html");
    loadComponent("project-gallery", "project-gallery.html");
    loadComponent("footer", "footer.html");

});
