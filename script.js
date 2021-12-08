// Search Bar
// Namespace object
const searchBar = {};

searchBar.searchButton = document.getElementById('searchButton')
searchBar.searchInput = document.getElementById('searchInput')
searchBar.searchForm = document.getElementById('searchForm')
searchBar.searchIcon = document.getElementById('fa-search')

searchBar.formSubmit = () => {
    // Listen for form submission (search icon click)
    searchBar.searchForm.addEventListener("submit", function (e) {
        // Stop page refresh
        e.preventDefault()
        
        // If search bar is hidden
        if (!searchBar.searchInput.classList.contains('searchInputOpen')) {
     
            
            // When magnifying glass is clicked, show search bar
            searchBar.searchInput.classList.add('searchInputOpen')
            searchBar.searchButton.classList.add('rotateButton')
            // enable input
            searchBar.searchInput.disabled = false
            searchBar.searchInput.focus()
           
            // Highlight text on the page matching user input
            searchBar.queryHighlighter()
           
            // listen for click on document
            document.addEventListener("click", function (event) {
                
                // if the user clicks outside the form
                if (event.target != searchBar.searchInput && event.target != searchBar.searchButton && event.target != searchBar.searchIcon) {
                    searchBar.hideSearch()
                    
                 // if the search button is clicked stop listening for click on document
                } else if (event.target === searchBar.searchButton || event.target === searchBar.searchIcon) {
                    event.stopPropagation()
                }
            })
        
        // If search bar is showing 
        } else if (searchBar.searchInput.classList.contains('searchInputOpen')) {
            searchBar.hideSearch()
        }  
    })
}

searchBar.hideSearch = () => {
    // hide search bar
    searchBar.searchInput.classList.remove('searchInputOpen')
    searchBar.searchButton.classList.remove('rotateButton')
    // clear input
    searchBar.searchInput.value = ''
    // disable input
    searchBar.searchInput.disabled = true
}

// Function to hightlist text based on user input
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
        content.forEach(function (element, index) {
            let text = element.innerHTML;
            // Prepare html to hightlight searched text on the page
            text = text.replace(/(<mark class="highlight">|<\/mark>)/gim, '');
             // highlight searched text by adding html around it
            const newText = text.replace(regex, '<mark class="highlight">$&</mark>');
            element.innerHTML = newText;
        
        }, content);
        
    }); 
}


searchBar.init = () => {
    // Listen for Form Submission
    searchBar.formSubmit()
}

// Initialize 
searchBar.init();






