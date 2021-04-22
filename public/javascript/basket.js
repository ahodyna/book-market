
const dataKey = 'bookIds';

function addToCart(dataBookElemId) {
   const idsArray = JSON.parse(localStorage.getItem(dataKey))

   let bookIds = new Set(idsArray)
   console.log('bookIds', bookIds)

   bookIds.add(dataBookElemId);
   localStorage.setItem(dataKey, JSON.stringify(Array.from(bookIds)))

   refreshBasketCountNumber()
}

function refreshBasketCountNumber() {
   const bookIds = JSON.parse(localStorage.getItem(dataKey))
   let count = bookIds == null? 0: bookIds.length
   document.getElementById('basketCountNumber').innerText = count
}


refreshBasketCountNumber();
