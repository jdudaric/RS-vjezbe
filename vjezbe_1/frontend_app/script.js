let clicks = 0;
const count = document.querySelector('#count');

document.querySelector('#increment').addEventListener('click', () => {
  clicks += 1;
  count.textContent = clicks;
});

document.querySelector('#reset').addEventListener('click', () => {
  clicks = 0;
  count.textContent = clicks;
});
