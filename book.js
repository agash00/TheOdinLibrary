cardHolder = document.querySelector('#cardHolder');
bookForm = document.querySelector('#form');
bookForm.classList.add('bookForm');
newBookBtn = document.querySelector('#newBookBtn');
newBookBtn.classList.add('newBookBtn');
z = 0;
x = 0;
a = 0;
myLibrary = [];
card = [];
cardX = [];
readTogggleBtn = [];

const newBtn = document.querySelector('#newBookBtn');
newBtn.addEventListener('click', () => {newBook();});

const addBtn = document.querySelector('#addBookBtn');
addBtn.addEventListener('click', () => {addBookToLibrary();});

if (bookForm.style.display === 'none') {
	bookForm.style.display = 'block';
}
else {
	bookForm.style.display = 'none';
}

function Book() {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.readStatus = readStatus;
}

function newCard() {
	cardX[x] = document.createElement('div');
	cardX[x].classList.add('card2');
	cardX[x].id = x;
	removeCardBtn = document.createElement('button');
	removeCardBtn.classList.add('remove');
	removeCardBtn.id = x;
	cardX[x].appendChild(removeCardBtn);
	removeCardBtn.addEventListener('click', () => {
		idComp = event.target.id;
		cardHolder.removeChild(cardX[idComp]);
	});
	cardHolder.appendChild(cardX[x]);
	return cardX[x];
}

function newBook() {
	if (bookForm.style.display === 'block' && newBookBtn.style.display === 'none') {
		bookForm.style.display = 'none';
		newBookBtn.style.display = 'block';
	}
	else {
		bookForm.style.display ='block';
		newBookBtn.style.display = 'none';
	}
}


function addBookToLibrary() {
	title = document.querySelector('#book-title').value,
	author = document.querySelector('#book-author').value,
	pages = document.querySelector('#book-pages').value,
	readStatus = document.querySelector('#book-read-status').value
	myLibrary[z] = new Book(title, author, pages, readStatus);
	card[z] = newCard(x);
	showCard = card[z];
	showBook = myLibrary[z];
	console.log(myLibrary);
	bookDisplay(showBook, myLibrary);
	z++;
	newBook();
	clearText();
	x++;
}

function setReadStatusColor() {
	if ((showBook.readStatus).toLowerCase() == 'yes') {
		specReadTogggleBtn.style.backgroundColor = 'green';
	}
	else {
		specReadTogggleBtn.style.backgroundColor = 'red';
	}
}

function toggle() {
	specReadTogggleBtn.addEventListener('click', () => {
		toggleId = event.target.id;
		numbo = toggleId.slice(-1);
		parseInt(numbo);
		newListId = 'list' + numbo;
		showBook = myLibrary[numbo];
		bookReadId = 'bookRead' + numbo;
		if (readTogggleBtn[numbo].style.backgroundColor == 'green') {
			readTogggleBtn[numbo].style.backgroundColor = 'red';
			showBook.readStatus = 'No';
		}
		else if (readTogggleBtn[numbo].style.backgroundColor == 'red') {
			readTogggleBtn[numbo].style.backgroundColor = 'green';
			showBook.readStatus = 'Yes';
		}
		document.getElementById(bookReadId).textContent = 'Read it? ' + showBook.readStatus;
		document.getElementById(bookReadId).appendChild(readTogggleBtn[numbo]);
		document.getElementById(newListId).appendChild(document.getElementById(bookReadId));
	});
}

function bookDisplay() {
	newList = document.createElement('ul');
	newList.classList.add('list');
	newList.id = 'list' + a;
	bookTitle = document.createElement('li');
	bookTitle.classList.add('newDesc');
	bookTitle.textContent = 'Title: ' + showBook.title;
	bookAuthor = document.createElement('li');
	bookAuthor.classList.add('newDesc');
	bookAuthor.textContent = 'Author: ' + showBook.author;
	bookPages = document.createElement('li');
	bookPages.classList.add('newDesc');
	bookPages.textContent = '# of Pages: ' + showBook.pages;
	bookRead = document.createElement('li');
	bookRead.classList.add('newDesc');
	bookRead.id = 'bookRead' + a;
	bookRead.textContent = 'Read it? ' + showBook.readStatus;
	readTogggleBtn[a] = document.createElement('button');
	readTogggleBtn[a].classList.add('toggle');
	readTogggleBtn[a].id = 'toggle' + a;
	specReadTogggleBtn = readTogggleBtn[a];
	setReadStatusColor(showBook.readStatus, specReadTogggleBtn);
	bookRead.appendChild(readTogggleBtn[a]);
	newList.appendChild(bookTitle);
	newList.appendChild(bookAuthor);
	newList.appendChild(bookPages);
	newList.appendChild(bookRead);
	showCard.appendChild(newList);
	toggle(readTogggleBtn);
	a++;
}

function clearText() {
	document.querySelector('#book-title').value='';
	document.querySelector('#book-author').value='';
	document.querySelector('#book-pages').value='';
	document.querySelector('#book-read-status').value='';
}