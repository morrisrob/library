let myLibrary = [];

function Book(title, author, pages, read) {
    // this.recordNum = recordNum
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
    let header = ['Index', 'Title', 'Author', 'Read?', 'Status'];
    let table = document.getElementById('libraryTable');
    let row = table.insertRow(-1);
    let columnCount = header.length;

    for (let i = 0; i < columnCount; i++) {
        let headerCell = document.createElement("TH");
        headerCell.innerHTML = header[i];
        row.appendChild(headerCell);
    }
}

function displayBooks() {
    let table = document.getElementById('libraryTable')
    clearTable();
    buildHeader();


    myLibrary.forEach(function (element, i) {
        var row = table.insertRow(-1);
        var cell = row.insertCell();
        // cell.innerHTML = myLibrary[i].recordNum;
        cell.innerHTML = i;
        var cell = row.insertCell();
        cell.innerHTML = myLibrary[i].title
        var cell = row.insertCell();
        cell.innerHTML = myLibrary[i].author
        var cell = row.insertCell();
        cell.innerHTML = myLibrary[i].pages
        var cell = row.insertCell();
        cell.innerHTML = myLibrary[i].read
        
        var cell = row.insertCell();
        var btnDel = document.createElement("BUTTON");   // Create a <button> element
        btnDel.innerHTML = "Delete Book";
        let btnDelID = 'delBtn ' + i;
        btnDel.id = btnDelID;
        btnDel.classList.add('delBtn');
        cell.appendChild(btnDel);

        var cell = row.insertCell();
        var btnReadStatus = document.createElement("BUTTON");   // Create a <button> element
        
        if(myLibrary[i].read === 'yes') {
            btnReadStatus.innerHTML = "Change to Unread";
        } else {
            btnReadStatus.innerHTML = "Change to Read";
        }
        
        let btnReadStatusID = 'btnReadStatus ' + i;
        btnReadStatus.id = btnReadStatusID;
        btnReadStatus.classList.add('btnReadStatus');
        cell.appendChild(btnReadStatus);



        // console.log(recordNum2);

        document.getElementById(btnDelID).addEventListener("click", function () {
            deleteBook(i);
            console.log('delete button pressed for btnId ' + btnDelID);
        })

        document.getElementById(btnReadStatusID).addEventListener("click", function () {
            changeReadStatus(i);
            console.log('change status button pressed for btnDelID ' + btnDelID);
        })
    })
}

function deleteBook(num) {
    myLibrary.splice(num, 1);
    // var table = document.getElementById("libraryTable");
    // table.refresh();
    displayBooks();
    console.log('deleted num ' + num);
}

function recordCounter() {
    return recordNum++;
}

function addBook() {
    let readValue;
    // let recordNum = myLibrary.length;
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

    console.log(myLibrary);
    
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



