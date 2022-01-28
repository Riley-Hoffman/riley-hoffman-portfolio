// Random Stars
generateStars = () => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (!reduceMotion || !reduceMotion.matches && window.matchMedia || preferDark) {
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