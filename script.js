const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    toggle.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
    nav.classList.toggle('is-open', !expanded);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    nav.classList.remove('is-open');
  }));
}

const newsFilters = document.querySelectorAll('.news-filter');
const newsEntries = document.querySelectorAll('.news-entry');
const yearFilter = document.querySelector('#news-year-filter');
let selectedKind = 'all';
function updateNews() {
  if (!newsEntries.length) return;
  const year = yearFilter ? yearFilter.value : 'all';
  let count = 0;
  newsEntries.forEach(entry => {
    const match = (selectedKind === 'all' || entry.dataset.kind === selectedKind) &&
                  (year === 'all' || entry.dataset.year === year);
    entry.hidden = !match;
    if (match) count += 1;
  });
  const empty = document.querySelector('.news-no-results');
  if (empty) empty.hidden = count > 0;
}
newsFilters.forEach(button => button.addEventListener('click', () => {
  selectedKind = button.dataset.filter;
  newsFilters.forEach(item => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  updateNews();
}));
if (yearFilter) yearFilter.addEventListener('change', updateNews);
updateNews();
