document.addEventListener("DOMContentLoaded", () => {
  const loaderText = document.getElementById("loader-text");
  const curtain = document.querySelector('.curtain');
  const homepage = document.querySelector('.homepage');
  const header = document.getElementById('header');
  const numbers = generateOrderedNumbers(7, [97, 98, 99]);
  let index = 0;
  const duration = 2000;
  const stepTime = duration / numbers.length; 

  function updateLoader() {
    if (index < numbers.length) {
      loaderText.textContent = numbers[index];
      index++;
      setTimeout(updateLoader, stepTime);
    } else {
      loaderText.style.opacity = 0;
      setTimeout(() => {
        document.querySelector('.loader').style.display = 'none';
        curtain.style.transform = 'translateY(-100%)';
        setTimeout(() => {
          homepage.style.opacity = 1;
          header.style.opacity = 1;
        }, 250); 
      }, 250);
    }
  }

  updateLoader();
});

function generateOrderedNumbers(count, includeNumbers) {
  const numbers = new Set();

  while (numbers.size < count - includeNumbers.length) {
    let num = Math.floor(Math.random() * 97); 
    numbers.add(num);
  }

  includeNumbers.forEach(num => numbers.add(num));
  return Array.from(numbers).sort((a, b) => a - b);
}
