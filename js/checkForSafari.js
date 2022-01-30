// Check if browser is Safari to remove incompatible animation
checkForSafari = () => {
    const skillsListItems = document.querySelectorAll('.skillsGallery li')
    // Safari specific control
    if (navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('OPR') && !navigator.userAgent.includes('Chrome') && !navigator.userAgent.includes('Android')) {
        // Turn of rotate animation on skills for Safari user bc it does not render correctly
        $.each(skillsListItems, function (index, skill) {
            $(skill).mouseover((e) => {
                $(e.target).addClass('noAnimation').children().addClass('noAnimation');
            })
        });
    }
}

checkForSafari();
