// Modal Window for add blog

// Get the modal
let modalAddBlog = document.getElementById("modalAddBlog");

// Get the button that opens the modal
let btnAddNewBlog = document.getElementById("btnAddNewBlog");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btnAddNewBlog.onclick = function() {
  modalAddBlog.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalAddBlog.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalAddBlog) {
    modalAddBlog.style.display = "none";
  }
} 