function setupTagSearch(section) {
    var input = section.querySelector('.search-input');
    var container = section.querySelector('.result-list');
    if (!input || !container) return;

    var items = container.querySelectorAll('a.tag');
    var clearButton = input.parentElement.querySelector('.search-clear');
    var resultMeta = section.querySelector('.search-meta');
    var emptyState = section.querySelector('.search-empty');
    var locale = document.documentElement.lang || 'de';
    var isEnglish = locale.toLowerCase().indexOf('en') === 0;
    var countSingular = section.dataset.countSingular || (isEnglish ? 'result' : 'Eintrag');
    var countPlural = section.dataset.countPlural || (isEnglish ? 'results' : 'Einträge');

    function updateResults() {
        var query = input.value.toLocaleLowerCase(locale).trim();
        var visibleCount = 0;

        items.forEach(function (item) {
            var text = (item.dataset.search || item.textContent).toLocaleLowerCase(locale);
            var isVisible = text.includes(query);
            item.hidden = !isVisible;
            if (isVisible) visibleCount += 1;
        });

        clearButton.hidden = query.length === 0;
        emptyState.hidden = visibleCount !== 0;
        resultMeta.textContent = query
            ? visibleCount + ' ' + (visibleCount === 1 ? countSingular : countPlural)
            : items.length + ' ' + (items.length === 1 ? countSingular : countPlural);
    }

    input.addEventListener('input', updateResults);
    clearButton.addEventListener('click', function () {
        input.value = '';
        input.focus();
        updateResults();
    });

    updateResults();
}

function setupSkillDetails() {
    var detail = document.getElementById('skill-detail');
    if (!detail) return;

    var title = detail.querySelector('.skill-detail-title');
    var text = detail.querySelector('.skill-detail-text');
    var skills = document.querySelectorAll('.skill-badge[data-skill-description]');

    function selectSkill(skill) {
        skills.forEach(function (item) {
            var isSelected = item === skill;
            item.classList.toggle('is-active', isSelected);
            item.setAttribute('aria-expanded', isSelected ? 'true' : 'false');
        });

        title.textContent = skill.dataset.skillTitle;
        text.textContent = skill.dataset.skillDescription;
    }

    skills.forEach(function (skill) {
        skill.addEventListener('mouseenter', function () {
            selectSkill(skill);
        });
        skill.addEventListener('focus', function () {
            selectSkill(skill);
        });
        skill.addEventListener('click', function () {
            selectSkill(skill);
        });
    });
}

function setupCvDetails() {
    document.querySelectorAll('.cv-title-toggle').forEach(function (toggle) {
        var detailId = toggle.getAttribute('aria-controls');
        var detail = document.getElementById(detailId);
        if (!detail) return;

        toggle.addEventListener('click', function () {
            var isOpen = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
            detail.hidden = isOpen;
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('[data-search-section]').forEach(function (section) {
        setupTagSearch(section);
    });

    setupSkillDetails();
    setupCvDetails();

    var yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});
