const form = getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  window.location.href = './order.html'
});
