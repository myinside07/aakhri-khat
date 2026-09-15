function openLetter() {
  const intro = document.querySelector(".intro");

  if (intro) {
    intro.scrollIntoView({
      behavior: "smooth"
    });
  }
}


/* =========================
   SCROLL REVEAL
========================= */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.08
  }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});


/* =========================
   BACK TO TOP BUTTON
========================= */

window.addEventListener("scroll", () => {
  const button = document.querySelector(".top-btn");

  if (!button) return;

  if (window.scrollY > 500) {
    button.style.opacity = "1";
    button.style.pointerEvents = "auto";
  } else {
    button.style.opacity = "0";
    button.style.pointerEvents = "none";
  }
});


/* =========================
   BACK TO TOP
========================= */

function goToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================
   PAGE LOAD
========================= */

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
