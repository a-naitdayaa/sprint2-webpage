export function initThemeToggle() {
  const themeToggleDesktop = document.getElementById('dark-mode-toggle-desktop');
  const themeToggleMobile = document.getElementById('dark-mode-toggle-mobile');
  const html = document.documentElement;

  const currentTheme = localStorage.getItem('theme') || 'light';

  if (currentTheme === 'dark') {
    html.classList.add('dark');
    updateIcons(true);
  }

  function toggleTheme() {
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateIcons(isDark);
  }

  function updateIcons(isDark) {
    const mobileIcon = themeToggleMobile?.querySelector('i');
    if (mobileIcon) {
      mobileIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    }

    if (themeToggleDesktop) {
      themeToggleDesktop.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    }
  }

  themeToggleDesktop?.addEventListener('click', toggleTheme);
  themeToggleMobile?.addEventListener('click', toggleTheme);
}