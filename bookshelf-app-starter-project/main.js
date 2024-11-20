// Do your work here...
console.log("Hello, world!");
const getCompleteBookList = document.getElementById("completeBookList");
const getInCompleteBookList = document.getElementById("incompleteBookList");
console.log(getCompleteBookList, getInCompleteBookList);
const initArray = JSON.parse(localStorage.getItem("book")) || [];
console.log(initArray);
function addBook(event) {
  const initBookLocal = JSON.parse(localStorage.getItem("book")) || [];
  event.preventDefault();
  const randomID = `ID:${parseInt(1000 + Math.random() * 9000)}`;
  const getTittleValue = document.getElementById("bookFormTitle").value;
  const getAuthorValue = document.getElementById("bookFormAuthor").value;
  const getYearValue = document.getElementById("bookFormYear").value;
  const getCompleteValue =
    document.getElementById("bookFormIsComplete").checked;
  const isDuplikat = initBookLocal.some(
    (book) => book.title === getTittleValue
  );
  if (isDuplikat && initBookLocal.length > 0) {
    alert("Buku Sudah Ada");
  } else if (
    getTittleValue.length > 5 &&
    getAuthorValue.length > 0 &&
    getYearValue > 0
  ) {
    const book = {
      id: randomID,
      title: getTittleValue,
      author: getAuthorValue,
      year: parseInt(getYearValue),
      isComplete:getCompleteValue,
    };
    const arrayStorage = JSON.parse(localStorage.getItem("book")) || [];
    arrayStorage.push(book);
    initArray.push(book);
    console.log(initArray);
    console.log(book);
    localStorage.setItem("book", JSON.stringify(arrayStorage));
    document.dispatchEvent(new CustomEvent("renderBooks"));
  } else {
    alert(
      "Judul Tittle harus lebih dari 5 kata, input Author tidak boleh kosong, tahun tidak boleh 0"
    );
  }
}
function changeStatus(id) {
  const findIndexBook = initArray.find((books) => books.id === id);
  if (findIndexBook) {
    findIndexBook.isComplete = !findIndexBook.isComplete;
    console.log(initArray);
    localStorage.setItem("book", JSON.stringify(initArray));
    renderBooks();
  }
}
function deleteBook(id) {
  const findIndexBook = initArray.find((books) => books.id === id);
  if (findIndexBook) {
    initArray.splice(initArray[0], 1);
    console.log(initArray);
    localStorage.setItem("book", JSON.stringify(initArray));
    renderBooks();
  }
}
function editBook(id) {
  const findIndexBook = initArray.find((books) => books.id === id);
  if (findIndexBook) {
    const screenEdit = document.createElement("div");
    const boxEdit = document.createElement("div");
    const closeButton = document.createElement("button");
    const submitButton = document.createElement("button");
    const titleInput = document.createElement("input");
    const authorInput = document.createElement("input");
    const yearInput = document.createElement("input");
    titleInput.setAttribute("placeholder", "Enter book title");
    authorInput.setAttribute("placeholder", "Enter author name");
    yearInput.setAttribute("placeholder", "Enter publication year (angka)");
    yearInput.setAttribute("type", "number");
    titleInput.setAttribute("type", "text");
    authorInput.setAttribute("type", "text");
    function closeEdit() {
      screenEdit.remove();
    }
    function submitEdit() {
      if(titleInput.value.length>5&&yearInput.value>=0){
      Object.assign(findIndexBook, {
        title: titleInput.value,
        author: authorInput.value,
        year: parseInt(yearInput.value),
      });
      console.log(initArray)
      localStorage.setItem("book", JSON.stringify(initArray));
      closeEdit();
      renderBooks();
      }else{
        alert('title harus lebih dari 5 angka dan year tidak boleh 0 ataupun di bawahnya')
      }
    }
    closeButton.textContent = "Close";
    closeButton.addEventListener("click", () => closeEdit());
    submitButton.textContent = "Submit";
    submitButton.addEventListener("click", () => submitEdit());
    screenEdit.setAttribute("class", "screen-edit");
    boxEdit.setAttribute("class", "box-edit");
    titleInput.setAttribute("class", "input-class");
    authorInput.setAttribute("class", "input-class");
    yearInput.setAttribute("class", "input-class");
    boxEdit.appendChild(closeButton);
    boxEdit.appendChild(submitButton);
    boxEdit.appendChild(yearInput);
    boxEdit.appendChild(authorInput);
    boxEdit.appendChild(titleInput);
    screenEdit.appendChild(boxEdit);
    document.body.appendChild(screenEdit);
  }
}
function renderBooks(items) {
  getCompleteBookList.innerHTML = "";
  getInCompleteBookList.innerHTML = "";
  const itemsIterate = Array.isArray(items) ? items : initArray;
  itemsIterate.forEach((book) => {
    const boxElement = document.createElement("div");
    const tittleBookH3 = document.createElement("h3");
    const authorP = document.createElement("p");
    const yearP = document.createElement("p");
    const listButton = document.createElement("div");
    const buttonSelesai = document.createElement("button");
    const buttonHapus = document.createElement("button");
    const buttonEdit = document.createElement("button");
    buttonSelesai.addEventListener("click", () => changeStatus(book.id));
    buttonHapus.addEventListener("click", () => deleteBook(book.id));
    buttonEdit.addEventListener("click", () => editBook(book.id));
    boxElement.setAttribute("class", "box");
    boxElement.setAttribute("data-bookid", book.id);
    boxElement.setAttribute("data-testid", "bookItem");
    tittleBookH3.textContent = `Tittle: ${book.title}`;
    tittleBookH3.setAttribute("data-testid", "bookItemTitle");
    authorP.textContent = `Author: ${book.author}`;
    authorP.setAttribute("data-testid", "bookItemAuthor");
    yearP.textContent = `Year: ${book.year}`;
    yearP.setAttribute("data-testid", "bookItemYear");
    boxElement.appendChild(tittleBookH3);
    boxElement.appendChild(authorP);
    boxElement.appendChild(yearP);
    buttonSelesai.setAttribute("class", "Selesai-button");
    buttonSelesai.setAttribute("data-testid", "bookItemIsCompleteButton");
    buttonSelesai.textContent = `Status: ${
      book.isComplete ? "Blom Selesai" : "Selesai"
    }`;
    buttonHapus.setAttribute("class", "Hapus-button");
    buttonHapus.setAttribute("data-testid", "bookItemDeleteButton");
    buttonHapus.textContent = "Hapus";
    buttonEdit.setAttribute("class", "Edit-button");
    buttonEdit.setAttribute("data-testid", "bookItemEditButton");
    buttonEdit.textContent = "Edit";
    listButton.appendChild(buttonSelesai);
    listButton.appendChild(buttonHapus);
    listButton.appendChild(buttonEdit);
    boxElement.appendChild(listButton);
    if (book.isComplete) {
      getCompleteBookList.appendChild(boxElement);
    } else if (!book.isComplete) {
      getInCompleteBookList.appendChild(boxElement);
    }
  });
}
function cariBook(event) {
  event.preventDefault();
  const getSearchTittleValue = document.getElementById("searchBookTitle").value;
  const filterArray = initArray.filter(
    (book) => book.title === getSearchTittleValue
  );
  console.log(filterArray.length > 0);
  if (filterArray.length > 0) {
    renderBooks(filterArray);
  } else {
    renderBooks();
    alert("Buku tidak ditemukan");
  }
}
document.addEventListener("renderBooks", renderBooks);
renderBooks();
