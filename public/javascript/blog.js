function goToBlogPage() {
    window.location = '/blog';
}

function createBlogItem() {

    let itemBlog = {
        title: document.getElementById('inputTitleBlog').value,
        image: document.getElementById('inputImgBlog').value,
        description: document.getElementById('textareaDescriptionBlog').value
    }
    fetch('/blog-items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(itemBlog)
    })
        .then(() => {
            document.getElementById('inputTitleBlog').value = '';
            document.getElementById('inputImgBlog').value = '';
            document.getElementById('textareaDescriptionBlog').value = ''
        })
}


function addNewBlog() {
    let modalAddBlog = document.getElementById("modalAddBlog");
    modalAddBlog.style.display = "block";
}


function closeModalAddBlog() {
    let modalAddBlog = document.getElementById("modalAddBlog");
  modalAddBlog.style.display = "none";
}


window.onclick = function(event) {
    let modalAddBlog = document.getElementById("modalAddBlog");

  if (event.target == modalAddBlog) {
    modalAddBlog.style.display = "none";
  }
} 

function editBlog(id) {

    let modalEdit = document.getElementById("modalEditBlog");
    modalEdit.style.display = "block";
  
    fetch(`/blogs/${id}`)
      .then((response) => {
        console.log('response', response)
        return response.json()
      })
      .then((blogData) => {
        document.getElementById('modalEditBlog').setAttribute('data-blog-id', id);
        console.log('blogData.image', blogData.image)
        document.getElementById('inputImgEditBlog').value = blogData.image;
        document.getElementById('inputTitleEditBlog').value = blogData.title;
        document.getElementById('textareaDescriptionEditBlog').value = blogData.description
      })
  
  }

  
function closeModalEditBlog() {
    let modalEditBlog = document.getElementById("modalEditBlog");
    modalEditBlog.style.display = "none";
  }
  
  window.onclick = function (event) {
    let modalEditBlog = document.getElementById("modalEditBlog");
    if (event.target == modalEditBlog) {
        closeModalEditBlog();
    }
  }

  
function updateBlog() {
    let blogId = document.getElementById('modalEditBlog').getAttribute('data-blog-id');
    let data = {
      id: blogId,
      image: document.getElementById('inputImgEditBlog').value,
      title: document.getElementById('inputTitleEditBlog').value,
      description: document.getElementById('textareaDescriptionEditBlog').value,
 
    }
  
    fetch(`/blogs/${blogId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    })
      .then(() => {
        let modalEdit = document.getElementById("modalEditBlog");
        modalEdit.style.display = "none";
      })
      .then(() => {
        document.location.reload()
      })
  }
  
  function deleteBlog(id) {
    fetch(`/blogs/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    })
      .then(() => {
        document.location.reload()
      })
  }