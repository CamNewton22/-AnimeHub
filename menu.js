document.querySelector(".nav-toggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("open");
});
``
  if (!navToggle || !navLinks) {
    return;
  }

  navToggle.addEventListener('click', function () {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isExpanded));
    navLinks.classList.toggle('open');
    navToggle.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
});
