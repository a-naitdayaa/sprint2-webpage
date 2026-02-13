export function initNewsPagination() {
  const cards = document.querySelectorAll('.news-card');
  const loadMoreBtn = document.getElementById('loadMoreBtn');

  if (!cards.length || !loadMoreBtn) return;

  let currentPage = 1;
  const cardsPerPage = 2;

  function render() {
    cards.forEach((card, index) => {
      card.style.display = index < currentPage * cardsPerPage ? 'block' : 'none';
    });

    if (currentPage * cardsPerPage >= cards.length) {
      loadMoreBtn.style.display = 'none';
    }
  }

  loadMoreBtn.addEventListener('click', () => {
    currentPage++;
    render();
  });

  render();
}
