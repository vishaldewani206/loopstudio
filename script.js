let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('nav');
hamburger.addEventListener('click', () => {
  console.log('ucc');
  nav.classList.toggle('active');
});
