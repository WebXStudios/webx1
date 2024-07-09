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

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 500); // Initial delay, adjust as needed
});
