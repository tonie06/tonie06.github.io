const element = document.querySelector('.jump');
const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    element.style.transform = 'translateY(0)';
  }
});
observer.observe(element);
