document.getElementById("year").textContent = new Date().getFullYear();

document.querySelector('.scroll-top').onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const mainButton = document.getElementById("main-button");
mainButton.addEventListener("click", function () {
  this.classList.toggle("open");
});