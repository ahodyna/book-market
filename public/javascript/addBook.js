function goToSalePage (){
    window.location = '/sale';
}

function createBook(){
 
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
          .then(()=>{
            document.getElementById('inputImgBook').value = '',
            document.getElementById('inputTitleBook').value = '',
            document.getElementById('inputOldPriceBook').value = '',
            document.getElementById('inputNewPriceBook').value = '',
            document.getElementById('textareaDescriptionBook').value = '',
            document.getElementById('inputShortDescriptionBook').value = ''
          })
}