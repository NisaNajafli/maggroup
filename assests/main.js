document.getElementById("year").textContent = new Date().getFullYear();

document.querySelector('.scroll-top').onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const mainButton = document.getElementById("main-button");
mainButton.addEventListener("click", function () {
  this.classList.toggle("open");
});

const modal = document.querySelector(".modal");

// OPEN
document.querySelectorAll("[data-open-modal]").forEach(btn => {
  btn.addEventListener("click", () => {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

// CLOSE
document.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("modal-overlay") ||
    e.target.classList.contains("modal-close")
  ) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
});

// ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
});