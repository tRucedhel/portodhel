// Tambahkan di script.js
let menuIcon = document.querySelector('#menu-icon');
let navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.getElementById("githubBtn").addEventListener("click", function() {
    window.open("https://github.com/tRucedhel", "_blank");
  });

document.getElementById("logoGit").addEventListener("click", function() {
    window.open("https://github.com/tRucedhel", "_blank");
  });

document.getElementById("logoLink").addEventListener("click", function() {
    window.open("https://www.linkedin.com/in/trucedhel/", "_blank");
  });

document.getElementById("cvBtn").addEventListener("click", function() {
    window.open("https://drive.google.com/file/d/1LHl1yMJJR4JS1HlMUDq55fqYKOJBPox8/view?usp=sharing", "_blank");
  });
  