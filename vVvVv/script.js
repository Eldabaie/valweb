const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const response = document.getElementById('response');

yesButton.addEventListener('click', () => {
  response.classList.remove('hidden');
  response.style.opacity = '1';
  document.querySelector('.buttons').classList.add('hidden');
});

noButton.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.position = 'absolute';
  noButton.style.left = '${x}px';
  noButton.style.top = '${y}px;'
});