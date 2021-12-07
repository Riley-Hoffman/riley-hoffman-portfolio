// Search Bar

// const searchForm = document.getElementById('searchForm')
const searchButton = document.getElementById('searchButton')
const searchInput = document.getElementById('searchInput')
const searchForm = document.getElementById('searchForm')
const searchIcon = document.getElementById('fa-search')
const searchOpen = document.getElementsByClassName('searchInputOpen')

function formSubmit() {
    // Listen for form submission (search icon click)
    searchForm.addEventListener("submit", function (e) {
        // Stop page refresh
        e.preventDefault()
        
        // If search bar is hidden
        if (!searchInput.classList.contains('searchInputOpen')) {
     
            
            // When magnifying glass is clicked, show search bar
            searchInput.classList.add('searchInputOpen')
            searchButton.classList.add('rotateButton')
            searchInput.disabled = false
           
            // Highlight text on the page matching user input
            queryHighlighter()
            // listen for click on document
            document.addEventListener("click", function (event) {
                
                // if the user clicks outside the form
                if (event.target != searchInput && event.target != searchButton && event.target != searchIcon) {
                    searchInput.classList.remove('searchInputOpen')
                    searchButton.classList.remove('rotateButton')
                    searchInput.disabled = true
                    


                 // if the search button is clicked stop listening for click on document
                } else if (event.target === searchButton || event.target === searchIcon) {
                    event.stopPropagation()
                }
            })
        
        // If search bar is showing 
        } else if (searchInput.classList.contains('searchInputOpen')) {
            searchInput.classList.remove('searchInputOpen')
            searchButton.classList.remove('rotateButton')
            searchInput.disabled = true            
        } 
        
        
    })
}

// Function to hightlist text based on user input
function queryHighlighter () {
    // Listen for keydown on search input
    searchInput.addEventListener('keydown', (keystrokes) => {
        
        // Get users keystrokes
        const searchText = keystrokes.target.value;
        // RegExp based on user query 
        const regex = new RegExp(searchText, 'gi');

        // Search is prevented from hightlighting code by structuring html with all content text contained in an child free element with the class of .indexed
        // Variable contained all 'indexed' text 
        const content = [...document.getElementsByClassName('indexed')]

        // for each 'indexed' element
        content.forEach(function (element, index, theArray) {
            let text = element.innerHTML;
            // Prepare html to hightlight searched text on the page
            text = text.replace(/(<mark class="highlight">|<\/mark>)/gim, '');
             // highlight searched text by adding html around it
            const newText = text.replace(regex, '<mark class="highlight">$&</mark>');
            element.innerHTML = newText;
        }, content);
    });
}

formSubmit()





