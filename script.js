// Namespace Object
const portfolio = {}

// Skills
portfolio.skillsListItems = document.querySelectorAll('.skillsGallery li')
// prefers reduced media query.
portfolio.reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

// Check if browser is Safari to remove incompatible animation
portfolio.checkForSafari = () => {
  // Safari specific control
  if (navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('OPR') && !navigator.userAgent.includes('Chrome') && !navigator.userAgent.includes('Android')) {
    // Turn of rotate animation on skills for Safari user bc it does not render correctly
    portfolio.skillsListItems.forEach((skill) => {
      $(skill).mouseover((e) => {   
        $(e.target).addClass('noAnimation').children().addClass('noAnimation');
      })
    })
  }
}

// Random Stars
portfolio.generateStars = () => {
   
  if (!portfolio.reduceMotion || !portfolio.reduceMotion.matches) {
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

// Controlled smooth scroll on first to sections, no smooth scroll on Skills/Contact to avoid jarring scroll visual.
portfolio.selectiveSmoothScroll = () => {
  // Check user has selected Reduce Motion in their own settings.
  if (!portfolio.reduceMotion || !portfolio.reduceMotion.matches) {
    $(".aboutLink, .skip-link, .chevronLink").click(() => {
      // slower scroll to About section
      $([document.documentElement, document.body]).animate(
        {
          scrollTop: $("#about").offset().top,
        },
        1500
      );
    });
    // fast scroll to Projects section
    $(".projectsLink").click(() => {
      $([document.documentElement, document.body]).animate(
        {
          scrollTop: $("#projects").offset().top,
        },
        800
      );
    });
  }
};

// Show exit animation on 404 page
portfolio.errorPageExitAnimation = () => {
  $('.homeLink404').click((e) => {
  e.preventDefault();
  // $('.homeLinkArrow').removeClass('animate__backInLeft');
  $('.homeLinkArrow').addClass('animate__backOutRight');
       
  setTimeout(() => {
    window.location = 'https://rileyhoffman.com/';
  }, 550);                 
})
}

portfolio.init = () => { 
  portfolio.checkForSafari();
  portfolio.generateStars();
  portfolio.selectiveSmoothScroll();
  portfolio.errorPageExitAnimation();
}

portfolio.init();





