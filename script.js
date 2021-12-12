// Controlled smooth scroll on first to sections, no smooth scroll on Skills/Contact to avoid jarring scroll visual.

// prefers reduced media query.
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

// Check user has selected Reduce Motion in their own settings.
if (!reduceMotion || !reduceMotion.matches) {
  $(".aboutLink, .skip-link, .chevronLink").click(function () {
    // slower scroll to About section
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#about").offset().top,
      }, 1500);
  });
  // fast scroll to Projects section
  $(".projectsLink").click(function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#projects").offset().top,
      }, 800);
  });
}
