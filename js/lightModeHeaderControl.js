// Prevent background "leather" texture to appear before the transparency overlay

lightModeTransparency = () => {  
  const preferLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    // If user prefers light mode
    if (preferLight) {
      $('.lightModeHeaderImage').addClass('lightModeTransparency lightModeHeaderAnimation');
      
      
      // Wait for transparency to load before load background texture
      setTimeout(() => {
          $('header').addClass('lightModeHeaderBackgroundTexture');
        }, 1000)
    }    
}

lightModeTransparency();
