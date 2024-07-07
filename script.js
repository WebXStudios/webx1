document.addEventListener("DOMContentLoaded", function() {
  const loadingText = document.getElementById('loading-text');
  const loadingScreen = document.getElementById('loading-screen');
  const pages = document.querySelectorAll('.page');
  const navBar = document.querySelector('.nav-bar');

  setTimeout(function() {
      loadingText.classList.add('shrink');
      loadingScreen.style.opacity = 0;
      pages.forEach(page => page.style.opacity = 1);
      navBar.style.opacity = 1;
      document.body.style.overflow = 'auto';
  }, 4000);
});