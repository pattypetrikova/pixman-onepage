
// custom carousel
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".testimonials__slider");
  const track = slider?.querySelector(".testimonials__track");
  const cards = track ? Array.from(track.children) : [];
  const prevBtn = document.querySelector(".testimonials__nav--prev");
  const nextBtn = document.querySelector(".testimonials__nav--next");
  const dots = Array.from(document.querySelectorAll(".slider-dots__dot"));

  let currentIndex = 0;

  function goTo(index) {
    if (index < 0) index = 0;
    if (index > cards.length - 1) index = cards.length - 1;
    currentIndex = index;

    const offset = cards[index].offsetLeft;
    track.style.transform = `translateX(${-offset}px)`;

    dots.forEach((dot, i) => {
      dot.classList.toggle("is-active", i === currentIndex);
    });
  }

  nextBtn?.addEventListener("click", () => {
    goTo(currentIndex + 1);
  });

  prevBtn?.addEventListener("click", () => {
    goTo(currentIndex - 1);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => goTo(i));
  });

  window.addEventListener("resize", () => {
    goTo(currentIndex);
  });

  goTo(0);
});

// Menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav__toggle");

  if (!nav || !toggle) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("nav--open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
});