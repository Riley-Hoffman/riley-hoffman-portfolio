// Prevent background "leather" texture to appear before the transparency overlay

lightModeTransparency = () => {  
  const preferLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  // const lightModeOverlayBox = document.getElementsByClassName('lightModeHeaderImage')

    // If user prefers light mode
    if (preferLight) {
      $('.lightModeHeaderImage').addClass('lightModeTransparency');
      
      // Wait for transparency to load before load background texture
      setTimeout(() => {
          $('header').addClass('lightModeHeaderBackgroundTexture');
        }, 1000)
    }    
}

lightModeTransparency();
