// Controlled smooth scroll on first to sections, no smooth scroll on last sections

// prefers reduced media query.
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

// Check if the media query matches or is not available.
if (!reduceMotion || !reduceMotion.matches) {
  $(".aboutLink").click(function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#about").offset().top,
      }, 1500);
  });
  $(".projectsLink").click(function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#projects").offset().top,
      }, 800);
  });
}
