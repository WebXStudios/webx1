// Typewriter effect
const words = ["--- design", "--- development", "--- SEO"];
let currentWordIndex = 0;
let currentLetterIndex = 0;
let isDeleting = false;
const typewriterElement = document.getElementById("typewriter");

function type() {
  const currentWord = words[currentWordIndex];
  const currentLetters = isDeleting ? currentWord.slice(0, currentLetterIndex) : currentWord.slice(0, currentLetterIndex + 1);

  typewriterElement.textContent = currentLetters;

  if (!isDeleting && currentLetterIndex < currentWord.length) {
    currentLetterIndex++;
    setTimeout(type, 100); // Faster typing speed, adjust as needed
  } else if (isDeleting && currentLetterIndex > 0) {
    currentLetterIndex--;
    setTimeout(type, 50); // Faster deleting speed, adjust as needed
  } else if (!isDeleting && currentLetterIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 500); // Delay after typing complete, adjust as needed
  } else if (isDeleting && currentLetterIndex === 0) {
    isDeleting = false;
    currentWordIndex = (currentWordIndex + 1) % words.length;
    setTimeout(type, 200); // Delay after deleting complete, adjust as needed
  }
}

// Start typewriter effect on page load
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 500); // Initial delay, adjust as needed
});


// Adjusted showCard function
let currentCard = 1;

function showCard(cardNumber) {
  if (cardNumber === currentCard) return;

  const current = document.getElementById(`card${currentCard}`);
  const next = document.getElementById(`card${cardNumber}`);

  // Determine the direction of the slide
  const direction = cardNumber > currentCard ? 'exit-left' : 'exit-right';
  const enterDirection = cardNumber > currentCard ? 'exit-right' : 'exit-left';

  // Add exit class to current card
  current.classList.add(direction);

  // After transition, remove exit class and hide the current card
  current.addEventListener('transitionend', function handleTransitionEnd() {
    current.classList.remove('active', direction);
    current.removeEventListener('transitionend', handleTransitionEnd);
  });

  // Prepare the next card
  next.classList.add('active');
  next.classList.remove(enterDirection);

  // Update currentCard
  currentCard = cardNumber;
}

// Menu toggle functionality
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const mainNav = document.querySelector(".main-nav");

  menuIcon.addEventListener("click", function () {
    mainNav.classList.toggle("active");
    menuIcon.classList.toggle("active");
  });
});

