// Show exit animation on 404 page
errorPageExitAnimation = () => {

    $('.homeLink404').mouseover((e) => {
        $('.homeLinkArrow').removeClass('animate__backInLeft');
        $('.homeLinkArrow').addClass('animate__headShake');
    })

    $('.homeLink404').click((e) => {
        e.preventDefault();
        $('.homeLinkArrow').removeClass('animate__headShake');
        $('.homeLinkArrow').addClass('animate__backOutRight');

        setTimeout(() => {
            window.location = 'https://rileyhoffman.com/';
        }, 550);
    })
}

errorPageExitAnimation();