fetch('/components/header.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('header-placeholder').outerHTML = html;
  });

const sections = ['profile', 'social', 'badges', 'links', 'footer'];
sections.forEach(id => {
  fetch(`/components/${id}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('preloader');
  const loaderText = document.querySelector('.loader-text');

  function getGreeting() {
    const hour = new Date().getHours();
    if (hour >= 4 && hour < 10) return "Good morning 👏🏻";
    if (hour >= 10 && hour < 15) return "Good afternoon 👏🏻";
    if (hour >= 15 && hour < 18) return "Good evening 👏🏻";
    return "Good night 👏🏻";
  }

  loaderText.textContent = getGreeting();

  const dots = [' ', '.', '..', '...', '..', '.'];
  let index = 0;
  setTimeout(() => {
    loaderText.textContent = "Loading" + dots[index];
    setInterval(() => {
      loaderText.textContent = "Loading " + dots[index];
      index = (index + 1) % dots.length;
    }, 500);
  }, 3000);

  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.transition = "opacity 0.5s ease";
      setTimeout(() => loader.style.display = "none", 500);
    }, 1000);
  });

  document.addEventListener('contextmenu', e => e.preventDefault());
  document.addEventListener('selectstart', e => e.preventDefault());
  document.addEventListener('copy', e => e.preventDefault());
});
