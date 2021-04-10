function addNewBook() {
  let modalAddBook = document.getElementById("modalAddBook");
  modalAddBook.style.display = "block";
}

function closeModalAddBook() {
  let modalAddBook = document.getElementById("modalAddBook");
  modalAddBook.style.display = "none";
}


function createBook() {

  let data =
  {
    img: document.getElementById('inputImgBook').value,
    name: document.getElementById('inputTitleBook').value,
    oldPrice: document.getElementById('inputOldPriceBook').value,
    newPrice: document.getElementById('inputNewPriceBook').value,
    description: document.getElementById('textareaDescriptionBook').value,
    shortDescription: document.getElementById('inputShortDescriptionBook').value
  }

  fetch('/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  })
    .then(() => {
      document.getElementById('inputImgBook').value = '',
        document.getElementById('inputTitleBook').value = '',
        document.getElementById('inputOldPriceBook').value = '',
        document.getElementById('inputNewPriceBook').value = '',
        document.getElementById('textareaDescriptionBook').value = '',
        document.getElementById('inputShortDescriptionBook').value = ''
    })
}

function editBook(id) {

  let modalEdit = document.getElementById("modalEditBook");
  modalEdit.style.display = "block";

  fetch(`/books/${id}`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      document.getElementById('modalEditBook').setAttribute('data-book-id', id);
      document.getElementById('inputImgEditBook').value = data.img;
      document.getElementById('inputTitleEditBook').value = data.name;
      document.getElementById('inputOldPriceEditBook').value = data.oldPrice;
      document.getElementById('inputNewPriceEditBook').value = data.newPrice;
      document.getElementById('textareaDescriptionEditBook').value = data.description;
      document.getElementById('inputShortDescriptionEditBook').value = data.shortDescription
    })

}

function closeModalEditBook() {
  let modalEditBook = document.getElementById("modalEditBook");
  modalEditBook.style.display = "none";
}

window.onclick = function (event) {
  let modalEditBook = document.getElementById("modalEditBook");
  if (event.target == modalEditBook) {
    closeModalEditBook();
  }

  let modalAddBook = document.getElementById("modalAddBook");
  if (event.target == modalAddBook) {
    closeModalAddBook()
  }

}

function updateBook() {
  let bookId = document.getElementById('modalEditBook').getAttribute('data-book-id');
  let data = {
    id: bookId,
    img: document.getElementById('inputImgEditBook').value,
    name: document.getElementById('inputTitleEditBook').value,
    oldPrice: document.getElementById('inputOldPriceEditBook').value,
    newPrice: document.getElementById('inputNewPriceEditBook').value,
    description: document.getElementById('textareaDescriptionEditBook').value,
    shortDescription: document.getElementById('inputShortDescriptionEditBook').value
  }

  fetch(`/books/${bookId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  })
    .then(() => {
      let modalEdit = document.getElementById("modalEditBook");
      modalEdit.style.display = "none";
    })
    .then(() => {
      location.reload()
    })
}

function deleteBook(id) {
  fetch(`/books/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
    .then(() => {
      location.reload()
    })
}