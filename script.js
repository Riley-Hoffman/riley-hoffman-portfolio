// prefers reduced media query.
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
//  Browser User Agent 
const browser = window.navigator.userAgent

// Safari specific control
if (browser.includes('Safari') && !browser.includes('OPR') && !browser.includes('Chrome')) {
  // Skills
const skillsListItems = document.querySelectorAll('.skillsGallery li')
// Turn of rotate animation on skills for Safari user bc it does not render correctly
  skillsListItems.forEach(function (skill) {
  skill.addEventListener('mouseover', function (e) {
  e.target.parentElement.style.animation = 'none'
  })
})
} 

// Controlled smooth scroll on first to sections, no smooth scroll on Skills/Contact to avoid jarring scroll visual.
const selectiveSmoothScroll = function () {
  // Check user has selected Reduce Motion in their own settings.
  if (!reduceMotion || !reduceMotion.matches) {
    $(".aboutLink, .skip-link, .chevronLink").click(function () {
      // slower scroll to About section
      $([document.documentElement, document.body]).animate(
        {
          scrollTop: $("#about").offset().top,
        },
        1500
      );
    });
    // fast scroll to Projects section
    $(".projectsLink").click(function () {
      $([document.documentElement, document.body]).animate(
        {
          scrollTop: $("#projects").offset().top,
        },
        800
      );
    });
  }
};

// Random Stars
const generateStars = function () {
  if (!reduceMotion || !reduceMotion.matches) {
    let $galaxy = $(".galaxy");
    let iterator = 0;

    while (iterator <= 100) {
      let xposition = Math.random();
      let yposition = Math.random();
      let star_type = Math.floor(Math.random() * 3 + 1);
      let position = {
        x: $galaxy.width() * xposition,
        y: $galaxy.height() * yposition,
      };

      $('<div class="star star-type' + star_type + '"></div>')
        .appendTo($galaxy)
        .css({
          top: position.y,
          left: position.x,
        });

      iterator++;
    }
  }
};

generateStars();
selectiveSmoothScroll();