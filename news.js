const news = [
  "Demon Slayer new season announced!",
  "One Piece breaks streaming records!",
  "Attack on Titan finale trends worldwide!"
];

let container = document.getElementById("news");

news.forEach(n => {
  let p = document.createElement("p");
  p.textContent = n;
  container.appendChild(p);
});

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
