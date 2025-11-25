function setupTagSearch(inputId, containerSelector) {
    var input = document.getElementById(inputId);
    var container = document.querySelector(containerSelector);
    if (!input || !container) return;

    var items = container.querySelectorAll('a.tag');

    input.addEventListener('input', function (e) {
        var query = e.target.value.toLowerCase().trim();

        console.log("called");

        items.forEach(function (item) {
            var text = (item.dataset.search || item.textContent).toLowerCase();
            item.style.display = text.includes(query) ? '' : 'none';
        });
    });
}

setupTagSearch('project-search', '#project-tags');
setupTagSearch('blog-search', '#blog-tags');

var yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}
