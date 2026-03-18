document.getElementById("year").textContent = new Date().getFullYear();

document.querySelector('.scroll-top').onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};