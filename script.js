document.addEventListener("DOMContentLoaded", function() {
  const loadingText = document.getElementById('loading-text');
  const loadingScreen = document.getElementById('loading-screen');
  const content = document.querySelector('.container');
  const navBar = document.querySelector('.nav-bar');

  setTimeout(function() {
      loadingText.classList.add('shrink');
      loadingScreen.style.opacity = 0;
      content.style.opacity = 1;
      navBar.style.opacity = 1;
      document.body.style.overflow = 'auto';
  }, 2500);
});
