document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const newsCards = document.querySelectorAll('.news-card');

  function setActiveFilter(button) {
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
  }

  function filterCards(category) {
    newsCards.forEach((card) => {
      const cardCategory = card.dataset.category;
      const isVisible = category === 'all' || cardCategory === category;
      card.style.display = isVisible ? 'flex' : 'none';
    });
  }

  filterButtons.forEach((button) => {
    button.addEventListener('click', function () {
      setActiveFilter(button);
      filterCards(button.dataset.filter);
    });
  });

  document.querySelectorAll('.toggle-details').forEach((button) => {
    button.addEventListener('click', function () {
      const details = button.parentElement.querySelector('.news-details');
      const expanded = button.getAttribute('aria-expanded') === 'true';
      details.classList.toggle('hidden');
      button.setAttribute('aria-expanded', String(!expanded));
      button.textContent = expanded ? 'Read more' : 'Show less';
    });
  });

  document.querySelectorAll('.like-btn').forEach((button) => {
    const countSpan = button.querySelector('.like-count');
    const article = button.closest('.news-card');
    const key = `news-like-${article.dataset.category}-${article.querySelector('h2').textContent}`;
    let count = Number(localStorage.getItem(key) || 0);
    countSpan.textContent = count;

    button.addEventListener('click', function () {
      count += 1;
      countSpan.textContent = count;
      localStorage.setItem(key, count);
    });
  });
});
