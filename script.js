let myLibrary = [];
const containerRef = document.querySelector("#container");

function book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return (title + " by " + author + ", " + pages + " pages, " + read)
    }
};


const Hobbit = new book('The Hobbit', 'J.R.R. Tolkien', 295, "not read yet");
const Hobbit2 = new book('The Hobbit2- Tokyo Drift', `J.R.R. Tolkien-2 (He's a robot now!)`, 269, "Read");


function addBookToLibrary(bookI) {
    myLibrary = myLibrary.push(bookI);
};

myLibrary = [Hobbit, Hobbit2]
//trying to create a new div for every card 
function displayBooks () {
    
    let gridsize = myLibrary.length;
    //containerRef.style.gridTemplateColumns = `repeat(${gridsize}, 1fr)`;
    containerRef.style.gridTemplateRows = `repeat(${gridsize}, 100px)`; //change size of row here
    

    for (let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.textContent = myLibrary[i].info();
        containerRef.appendChild(card);
        //console.log('yo' + i);
        console.log(card.classList);
    };
};


//run the commands


//addBookToLibrary(Hobbit);
//console.log(Hobbit.info());
//console.table(myLibrary);
displayBooks();