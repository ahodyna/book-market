const data = [

]

for (let i = 1; i <= 40; i++) {
    data.push({
        id: '' + i,
        img: '/image/lordoftherings.png',
        name: 'The Lord of the Rings',
        oldPrice: i % 2 == 0 ? (100 + i * 100) + '$' : null,
        newPrice: (50 + i * 100) + '$',
        description: 'The Lord of the Rings is an epic high fantasy novel by the English author and scholar J. R.R. Tolkien.Continuing the story begun in «The Hobbit», this is the first part of Tolkien’s epic masterpiece, «The Lord of the Rings», featuring a striking black cover based on Tolkien’s own design, the definitive text, and a detailed map of Middle-earth.Sauron, the Dark Lord, has gathered to him all the Rings of Power — the means by which he intends to rule Middle-earth.',
        shortDescription: null
    });
}



export default {
    getAll: () => {
        return data
    },
    getPage: (page, itemsPerPage, filters) => {
        let result = data;
        let arr = []
        if ('discount' in filters) {
            result = result.filter((product) => product.oldPrice != null)
        }

        let firstIndex = itemsPerPage * (page - 1)
        let lastIndex = firstIndex + itemsPerPage - 1

        for (let i = firstIndex; i <= lastIndex && i < result.length; i++) {
            arr.push(result[i])
        }
        return arr;
    },
    createProduct: function (product) {
        product.id = 'a' + Math.ceil((Math.random() * 1000000))
        console.log('product', product)
        data.push(product)
        return product
    },
    getProduct: (id) => {
        return data.find(elem => elem.id === id)
    },
    updateProduct: function (id, product) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                product.id = id;
                data[i] = product
                return data[i]
            }
        }
        return null
    },
    deleteProduct: function (id) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                return data.splice(i, 1)
            }
        }
        return null
    },
    count: function (filters){
        let arr = data;
        if ('discount' in filters) {
            arr = arr.filter((product) => product.oldPrice != null)
        } 
        return arr.length;
    }
}
