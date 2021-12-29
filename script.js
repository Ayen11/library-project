
//set up variables
let myLibrary = [];
let titleT = document.querySelector('#titleInput');
let authorT = document.querySelector('#authorInput');
let pagesT = document.querySelector('#pagesInput');
let readT = document.querySelector('#readInput');



//set up page ref
const containerRef = document.querySelector("#container");


let notificationBoxRef = document.querySelector("#absolute");
notificationBoxRef.classList.add('hidden')


//popup block -------------------
const addNewBookBtn = document.querySelector('#addBook'); //button to add books to page
addNewBookBtn.addEventListener('click', () => {
    notificationBoxRef.classList.add('hidden');
    //myLibrary = [];
    bookT = new book(titleT.value, authorT.value, pagesT.value, readT.checked);
    addBookToLibrary(bookT);
    //alert(bookT.read);
    //alert(readT.checked);
    readT.checked
    displayBooks();
    //console.table(bookT);
});
//--------------------------------------------------



const addBoxRef = document.querySelector('#addBookPage'); //button to add box to page
addBoxRef.addEventListener('click', () => {
    notificationBoxRef.classList.remove('hidden');
});




//book constructor - also controls info display!
function book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.index = 0
    this.read = read
    this.info = function() {
        return (title + " by " + author + ", " + pages + " pages.")
        //return (title + " by " + author + ", " + pages + " pages, " + getRead(read))
    }
};


function getRead(readValue) {
    if (readValue === true) {
        return "Read"
    }
    else {
        return "Not read"
    }
};


//test of constructor

const Hobbit = new book('The Hobbit', 'J.R.R. Tolkien', 295, true);
const Hobbit2 = new book('Example - The Hobbit2 - Tokyo Drift', `J.R.R. Tolkien2.0 (He's a robot now!)`, 269, false);


//simple function to push book object into array. call this before display
function addBookToLibrary(bookI) {
    myLibrary.push(bookI);
    bookI.index = myLibrary.length;
    //console.table(myLibrary);
    //alert(myLibrary);
};


//adds the cards to the library and from it to the page with class 
function displayBooks () {
    
    containerRef.innerHTML = '';
    let gridsize = myLibrary.length;
    containerRef.style.gridTemplateRows = `repeat(${gridsize}, 100px)`; //change size of row here

    //containerRef.style.gridTemplateColumns = `repeat(${gridsize}, 1fr)`; --change Columns here 

    for (let i = 0; i < myLibrary.length; i++) { //create card
        

        let readText = function() {
            if (bookRef.read == true) {
                return "Read"
            }
            else if (bookRef.read == false) {
                return "Not read yet"
            }
        };


        let bookRef = myLibrary[i];
        const card = document.createElement('div');
        card.classList.add('card');
        card.textContent = (myLibrary[i].info() + " " + readText())
        containerRef.appendChild(card);
        

        const readCheckbox = document.createElement('input'); //on page stuff
        readCheckbox.type = 'checkbox';
        readCheckbox.name = "readCard";
        readCheckbox.id = 'readcheckbox';
        readCheckbox.checked = bookRef.read;
        

        //console.table(bookRef);



        card.appendChild(readCheckbox);
        readCheckbox.addEventListener('click', () => {
            
            
            myLibrary[i].read = readCheckbox.checked;
            //alert(myLibrary[i].read);
            //bookRef.read = readCheckbox.checked;
            //console.table(bookRef);
            
            displayBooks();
            
        });

        const readLabel = document.createElement('label');
        readLabel.htmlFor = "readcheckbox";
        readLabel.textContent = 'read?';
        //card.appendChild(readLabel);

        const deleteBtn = document.createElement('button'); //add delete button
        deleteBtn.textContent = "delete";
        deleteBtn.classList.add('delete');
        card.appendChild(deleteBtn);
        deleteBtn.addEventListener('click', () => {
            myLibrary.splice(i, 1);
            displayBooks();
        });
    };
};



//run the commands


addBookToLibrary(Hobbit2);
displayBooks();