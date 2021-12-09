// Search Bar
// Namespace object
const searchBar = {};

searchBar.searchButton = document.getElementById('searchButton')
searchBar.searchInput = document.getElementById('searchInput')
searchBar.searchForm = document.getElementById('searchForm')
searchBar.searchIcon = document.getElementById('fa-search')
searchBar.modal = document.querySelector(`.modal`);

searchBar.formSubmit = () => {
    // Listen for form submission (search icon click)
    searchBar.searchForm.addEventListener("submit", function (e) {
        // Stop page refresh
        e.preventDefault()
        
        // If search bar is hidden
        if (!searchBar.searchInput.classList.contains('searchInputOpen')) {
            
            // Reference searchButton hover state
            searchBar.searchButtonHover = document.querySelector('.searchButton:hover')
            // Change icon:hover color to avoid seeing it outside the form on some small
            searchBar.searchButtonHover.firstChild.style.color = '#00050f';  
            // enable and focus input
            searchBar.searchInput.disabled = false
            searchBar.searchInput.focus()          
            // When magnifying glass is clicked, show search bar
            searchBar.searchInput.classList.add('searchInputOpen')
            searchBar.searchButton.classList.add('rotateButton')
           
            // Highlight text on the page matching user input
            searchBar.queryHighlighter()
            // give some time for the input to resize
            setTimeout(function () {
                // Return icon:hover color
                searchBar.searchButtonHover.firstChild.style.color = 'initial'; 
            }, 3000);
           
            // listen for click on document
            document.addEventListener("click", function (event) {
                
                // if the user clicks outside the form
                if (event.target != searchBar.searchInput && event.target != searchBar.searchButton && event.target != searchBar.searchIcon && event.target != searchBar.modal) {
                    // hide search bar
                    searchBar.hideSearch()
                    // hide modal
                    searchBar.modal.style.visibility = `hidden`;
                    // reload with delay
                    searchBar.delayedRefresh()
                    
                    
                 // if the search button is clicked stop listening for click on document
                } else if (event.target === searchBar.searchButton || event.target === searchBar.searchIcon) {
                    // Focus input to avoid seeing button outline
                    searchBar.searchInput.focus();
                    // Change icon color to avoid seeing it outside the form
                    searchBar.searchButton.firstChild.style.color = '#00050f';
                    // Hide modal
                    searchBar.modal.style.visibility = `hidden`;
                    
                    // reload with delay
                    searchBar.delayedRefresh();
                }
            })
        
        // If search bar is showing 
        } else if (searchBar.searchInput.classList.contains('searchInputOpen')) {
            searchBar.hideSearch();
        }  
    })
}

searchBar.hideSearch = () => {
    // hide search bar
    searchBar.searchInput.classList.remove('searchInputOpen');
    searchBar.searchButton.classList.remove('rotateButton');
    // clear input
    searchBar.searchInput.value = '';
    // disable input
    searchBar.searchInput.disabled = true;
}

// Function to highlights text based on user input
searchBar.queryHighlighter = () => {
    // Listen for keydown on search input
    searchBar.searchInput.addEventListener('keydown', (keystrokes) => {
        
        // Get users keystrokes
        const searchText = keystrokes.target.value;
        // RegExp based on user query 
        const regex = new RegExp(searchText, 'gi');

        // Search is prevented from hightlighting code by structuring html with all content text contained in an child free element with the class of .indexed
        // Variable contained all 'indexed' text 
        const content = [...document.getElementsByClassName('indexed')]

        // for each 'indexed' element
        content.forEach(function (element) {
            let text = element.innerHTML;
            // Prepare html to hightlight searched text on the page
            text = text.replace(/(<mark class="highlight">|<\/mark>)/gim, '');
             // highlight searched text by adding html around it
            const newText = text.replace(regex, '<mark class="highlight">$&</mark>');
            element.innerHTML = newText;  
            const results = document.querySelectorAll('mark')
 
                // give some time to make sure user is done typing
                setTimeout(function () {
                    // If input contains characters
                    if (searchBar.searchInput.value && searchBar.searchInput.value.replace(/\s/g, '').length != 0) {
                        // Show results modal
                        searchBar.modal.style.display = `block`;

                        // Generate results message
                        searchBar.resultsModal(results)
                    }
                }, 3000);
        }, content);
        
    }); 
   
}

// Modal display search result message handling
searchBar.resultsModal = (query) => {
    if (query.length === 0) {
        searchBar.modal.innerHTML = `
            <p class="message">Sorry the text you entered doesn't appear on this page!</p>
            <button class="modalButton">Close</button>
            `;

        // Close modal window button
        const modalButton = document.querySelector(`.modalButton`);
        modalButton.addEventListener(`click`, function (modalEvent) {
            searchBar.modal.style.visibility = `hidden`;
            // reload with delay
            searchBar.delayedRefresh()
        })
    } else if (query.length) {
        searchBar.modal.innerHTML = `
            <p class="message">The text you entered was found and highlighted on the page!</p>
            <button class="modalButton">Close</button>
            `;

        // Close modal window button
        const modalButton = document.querySelector(`.modalButton`);
        modalButton.addEventListener(`click`, function (modalEvent) {
            searchBar.modal.style.visibility = `hidden`;
            // reload with delay
            searchBar.delayedRefresh()
        })
    }
}

// Function to reload page after giving time for input to resize
// For now this keeep results message display after every search. 
// otherwise it doesn't trigger again after closing
searchBar.delayedRefresh = () => {
    setTimeout(function () {
        window.location.reload();
    }, 900);
}


searchBar.init = () => {
    // Listen for Form Submission
    searchBar.formSubmit()
}

// Initialize 
searchBar.init();






