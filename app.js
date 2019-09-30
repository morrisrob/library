let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function clearTable() {
    table = document.getElementById('libraryTable');
    while (table.hasChildNodes()) {
        table.removeChild(table.firstChild);
    }
}

function buildHeader() {
    let header = ['Title', 'Author', 'Pages', 'Read?', "Delete", "Change Status"];
    let table = document.getElementById('libraryTable');
    let row = table.insertRow(-1);
    let columnCount = header.length;

    for (let i = 0; i < columnCount; i++) {
        let headerCell = document.createElement("TH");
        headerCell.innerHTML = header[i];
        row.appendChild(headerCell);
        headerCell.style.width = '150px';
    }
}

function displayBooks() {
    let table = document.getElementById('libraryTable')
    clearTable();
    buildHeader();

    myLibrary.forEach(function (element, i) {
        let propertyNames = (Object.getOwnPropertyNames(myLibrary[0]));
        let columnCount = 4;
        let row = table.insertRow(-1);

        // let cell = row.insertCell();
        // cell.innerHTML = myLibrary[i].recordNum;
        // cell.innerHTML = i;

        for (j = 0; j < columnCount; j++) {
            let cell = row.insertCell(-1);
            cell.innerHTML = myLibrary[i][propertyNames[j]];
            // cell.style.width = '100px';
        }

        cell = row.insertCell();
        let btnDel = document.createElement("BUTTON"); 
        btnDel.innerHTML = "Delete Book";
        let btnDelID = 'delBtn ' + i;
        btnDel.id = btnDelID;
        btnDel.classList.add('delBtn');
        cell.appendChild(btnDel);

        cell = row.insertCell();
        let btnReadStatus = document.createElement("BUTTON");

        if(myLibrary[i].read === 'yes') {
            btnReadStatus.innerHTML = "Change to Unread";
        } else {
            btnReadStatus.innerHTML = "Change to Read";
        }

        let btnReadStatusID = 'btnReadStatus ' + i;
        btnReadStatus.id = btnReadStatusID;
        btnReadStatus.classList.add('btnReadStatus');
        cell.appendChild(btnReadStatus);

        document.getElementById(btnDelID).addEventListener("click", function () {
            deleteBook(i);
        })

        document.getElementById(btnReadStatusID).addEventListener("click", function () {
            changeReadStatus(i);
        })
    })
}

function deleteBook(num) {
    myLibrary.splice(num, 1);
    displayBooks();
}

function recordCounter() {
    return recordNum++;
}

function addBook() {
    event.preventDefault(); 
    let readValue;
    let titleValue = document.getElementById('title').value;
    let authorValue = document.getElementById('author').value;
    let pagesValue = document.getElementById('pages').value;
    if(document.getElementById('readYes').checked == true) {
        readValue = 'yes';
    } else if(document.getElementById('readNo').checked == true) {
        readValue = 'no';
    }
    let newBook = new Book(titleValue, authorValue, pagesValue, readValue);
    myLibrary.push(newBook);    
    displayBooks();
    clearTextBoxes();
    return false;
}

function changeReadStatus(num) {
    if(myLibrary[num].read === 'yes') {
        myLibrary[num].read = 'no';
    } else if (myLibrary[num].read === 'no') {
        myLibrary[num].read = 'yes';
    }
    displayBooks()
}

function clearTextBoxes() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('readYes').checked = true;
    document.getElementById('readNo').checked = false;
}

displayBooks();



