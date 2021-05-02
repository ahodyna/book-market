const dataKey = 'bookIds';

function cookieToMap(cookies) {
   if (cookies.length == 0) {
      return new Map();
   }

   let cookiesMap = new Map();

   let arrCookies = cookies.split(';')
   for (let i = 0; i < arrCookies.length; i++) {
      let elem = arrCookies[i];
      elemArr = elem.split('=')
      cookiesMap.set(elemArr[0].trim(), elemArr[1].trim())
   }

   return cookiesMap
} 

function addToCart(productId) {
   const cookiesMap = cookieToMap(document.cookie)
   let booksIdsStr = cookiesMap.get(dataKey)
   
   let booksIds = booksIdsStr == undefined? [] : JSON.parse(booksIdsStr);
   booksIds.push(productId)

   booksIdsStr = JSON.stringify(booksIds)
   document.cookie = `${dataKey}=${booksIdsStr}`;

   refreshBasketCountNumber()
}

function refreshBasketCountNumber() {

   const cookiesMap = cookieToMap(document.cookie)
   let booksIdsStr = cookiesMap.get(dataKey)
   let count = booksIdsStr == undefined? 0: JSON.parse(booksIdsStr).length
   document.getElementById('basketCountNumber').innerText = count
}

refreshBasketCountNumber();