
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

       if (prevBtn && nextBtn) {
      prevBtn.classList.toggle("is-disabled", currentIndex === 0);
      nextBtn.classList.toggle("is-disabled", currentIndex === cards.length - 1);
    }
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
    const links = document.querySelectorAll(".nav__link");

    if (!nav || !toggle) return;

    toggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("nav--open");
        toggle.setAttribute("aria-expanded", String(isOpen));
    });

    links.forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("nav--open");
            toggle.setAttribute("aria-expanded", "false");
        });
    });
});

// scroll to hash custom 
document.addEventListener("click", e => {
  const a = e.target.closest('a[href^="#"]');

  if (!a || a.getAttribute("href").length < 2) return;

  const el = document.querySelector(a.getAttribute("href"));

  if (!el) return;
  e.preventDefault();

  const offset = window.innerWidth < 768 ? -70 : -120;

  window.scrollTo({
    top: el.offsetTop + offset,
    behavior: "smooth"
  });
});