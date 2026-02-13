import { initThemeToggle } from './js/theme.js';
import { initMobileMenu } from './js/menu.js';
import { initCounters } from './js/counters.js';
import { initNewsPagination } from './js/news.js';
import { initFormValidation } from './js/form.js';

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileMenu();
  initCounters();
  initNewsPagination();
  initFormValidation();
});
