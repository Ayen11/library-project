
//set up variables
let myLibrary = [];
let titleT = document.querySelector('#titleInput');
let authorT = document.querySelector('#authorInput');
let pagesT = 0;
let readT = false;



//set up page ref
const containerRef = document.querySelector("#container");



const addNewBookBtn = document.querySelector('#addBook'); //button to add books to page
addNewBookBtn.addEventListener('click', () => {
    
    displayBooks();
    console.log(titleT.value);
});







//book constructor - also controls info display!
function book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = (function() {
        if (read == true) {
            return read = "Read"
        }
        else {
            return read = "Not read"
        }
    })();
    this.info = function() {
        return (title + " by " + author + ", " + pages + " pages, " + read)
    }
};

//test of constructor
const Hobbit = new book('The Hobbit', 'J.R.R. Tolkien', 295, false);
const Hobbit2 = new book('The Hobbit2- Tokyo Drift', `J.R.R. Tolkien-2 (He's a robot now!)`, 269, "Read");


//simple function to push book object into array. call this before display
function addBookToLibrary(bookI) {
    myLibrary.push(bookI);
};


//adds the cards to the library and from it to the page with class 
function displayBooks () {
    
    
    let gridsize = myLibrary.length;
    containerRef.style.gridTemplateRows = `repeat(${gridsize}, 100px)`; //change size of row here

    //containerRef.style.gridTemplateColumns = `repeat(${gridsize}, 1fr)`; --change Columns here 

    for (let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.textContent = myLibrary[i].info();
        containerRef.appendChild(card);
        console.log(card.classList);
    };
};



//run the commands


addBookToLibrary(Hobbit);
displayBooks();