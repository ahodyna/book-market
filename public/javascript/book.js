
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