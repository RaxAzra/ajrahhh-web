<script>
document.addEventListener("DOMContentLoaded", function () {
  const includes = document.querySelectorAll('[data-include]');
  includes.forEach(async (el) => {
    const file = el.getAttribute("data-include");
    try {
      const res = await fetch(file);
      if (res.ok) {
        const content = await res.text();
        el.innerHTML = content;
      } else {
        el.innerHTML = `<!-- ${file} not found -->`;
      }
    } catch (e) {
      el.innerHTML = `<!-- Error loading ${file} -->`;
    }
  });
});
</script>
