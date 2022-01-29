// Prevent background "leather" texture to appear before the transparency overlay

lightModeTransparency = () => {  
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // const lightModeOverlayBox = document.getElementsByClassName('lightModeHeaderImage')

    // If user prefers reduced motion and light mode
    if (!reduceMotion || !reduceMotion.matches && window.matchMedia || !preferDark) {
      $('.lightModeHeaderImage').addClass('lightModeTransparency');

      // Wait for transparency to load before load background texture
      setTimeout(() => {
         if ($('.lightModeTransparency')) {
          $('header').addClass('lightModeHeaderBackgroundTexture');
         }
        }, 1000)
    }
}

lightModeTransparency();
