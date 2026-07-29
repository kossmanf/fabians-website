function setupTagSearch(section) {
    var input = section.querySelector('.search-input');
    var container = section.querySelector('.result-list');
    if (!input || !container) return;

    var items = container.querySelectorAll('a.tag');
    var clearButton = input.parentElement.querySelector('.search-clear');
    var resultMeta = section.querySelector('.search-meta');
    var emptyState = section.querySelector('.search-empty');

    function updateResults() {
        var query = input.value.toLocaleLowerCase('de').trim();
        var visibleCount = 0;

        items.forEach(function (item) {
            var text = (item.dataset.search || item.textContent).toLocaleLowerCase('de');
            var isVisible = text.includes(query);
            item.hidden = !isVisible;
            if (isVisible) visibleCount += 1;
        });

        clearButton.hidden = query.length === 0;
        emptyState.hidden = visibleCount !== 0;
        resultMeta.textContent = query
            ? visibleCount + ' Treffer'
            : items.length + (items.length === 1 ? ' Eintrag' : ' Einträge');
    }

    input.addEventListener('input', updateResults);
    clearButton.addEventListener('click', function () {
        input.value = '';
        input.focus();
        updateResults();
    });

    updateResults();
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('[data-search-section]').forEach(function (section) {
        setupTagSearch(section);
    });

    var yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});
