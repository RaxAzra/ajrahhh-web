document.addEventListener("DOMContentLoaded", function() {
  fetch('/components/header.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      document.head.innerHTML += data;
    })
    .catch(error => {
      console.error('There was a problem with loading the header:', error);
    });
});
