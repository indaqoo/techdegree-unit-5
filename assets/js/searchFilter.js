// Gets input with id search
const search = document.querySelector('#search');

// Get all a tags
const getCaptions = document.querySelectorAll('a');

function searchIt(event) {

    // converts input value to lower case
    const searchTerm = event.target.value.toLowerCase();
    
    // since in array there is more than 1 element than do it for each element
    getCaptions.forEach(caption =>{

        // Gets the caption and converts it to lower case so it maches with search term value
        const captionText = caption.getAttribute('data-caption').toLowerCase();

        // gets the parent element ( link tag )
        const image = caption.parentElement;

        /* 
            if caption text matches with input value then it displays it.
            if it dosent match with image caption then it displays it as none.
        */
        if( captionText.indexOf(searchTerm) > -1 ){
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }

    });

};

// listens to input and waiting for function to run
search.addEventListener('keyup', searchIt);

// hard to explain it all in English :D sorry if you didnt understand what i mean