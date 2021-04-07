function goToBlogPage() {
    window.location = '/blog';
}

function createBlogItem() {

    let itemBlog = {
        title: document.getElementById('inputTitleBlog').value,
        image: document.getElementById('inputImgBlog').value,
        description: document.getElementById('textareaDescriptionBlog').value
    }
    fetch('/blogItem', {
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