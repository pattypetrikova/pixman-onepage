document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".testimonials__slider");
  const track = slider?.querySelector(".testimonials__track");
  const cards = track ? Array.from(track.children) : [];
  const prevBtn = slider?.querySelector(".testimonials__nav--prev");
  const nextBtn = slider?.querySelector(".testimonials__nav--next");
  const dots = Array.from(document.querySelectorAll(".slider-dots__dot"));

  if (!slider || !track || !cards.length) return;

  let currentIndex = 0;

  function goTo(index) {
    // udrž index v rozumném rozsahu
    if (index < 0) index = 0;
    if (index > cards.length - 1) index = cards.length - 1;
    currentIndex = index;

    const offset = cards[index].offsetLeft;
    track.style.transform = `translateX(${-offset}px)`;

    // dots
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

  // přepočítat při změně velikosti okna
  window.addEventListener("resize", () => {
    goTo(currentIndex);
  });

  // inicializace
  goTo(0);
});