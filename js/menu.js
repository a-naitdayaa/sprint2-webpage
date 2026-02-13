export function initMobileMenu() {
  document.getElementById('mobile-menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
});
}
