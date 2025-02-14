const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const response = document.getElementById('response');
const defaultGif = document.getElementById('defaultGif');
const yesGif = document.getElementById('yesGif');
const noGif = document.getElementById('noGif');

// Show default GIF initially
defaultGif.classList.add('active');

// Yes Button Click
yesButton.addEventListener('click', () => {
  // Hide default GIF and buttons
  defaultGif.classList.remove('active');
  yesButton.classList.add('hidden');
  noButton.classList.add('hidden');

  // Show "Yes" GIF and response message
  yesGif.classList.add('active');
  response.classList.remove('hidden');
  response.style.opacity = '1';
});

// No Button Hover (Playful Movement)
noButton.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.position = 'absolute';
  noButton.style.left = ${x}px;
  noButton.style.top = ${y}px;
});

// No Button Click
noButton.addEventListener('click', () => {
  // Hide default GIF and buttons
  defaultGif.classList.remove('active');
  yesButton.classList.add('hidden');
  noButton.classList.add('hidden');

  // Show "No" GIF
  noGif.classList.add('active');
});