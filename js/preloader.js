document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("preloader");
  const loaderText = document.querySelector(".loader-text");

  loaderText.textContent = getGreeting();

  const dots = [" ", ".", "..", "...", "..", "."];
  setTimeout(() => {
    let t = 0;
    setInterval(() => {
      loaderText.textContent = "Loading " + dots[t];
      t = (t + 1) % dots.length;
    }, 500);
  }, 3000);

  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.transition = "opacity 0.5s ease";
      setTimeout(() => {
        loader.style.display = "none";
      }, 500);
    }, 1000);
  });
});
