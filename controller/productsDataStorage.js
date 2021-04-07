const data = [
    {
        id: '1',
        img: '/image/lordoftherings.png',
        name: 'The Lord of the Rings',
        oldPrice: '56$',
        newPrice: '42$',
        description: 'The Lord of the Rings is an epic high fantasy novel by the English author and scholar J. R.R. Tolkien.Continuing the story begun in «The Hobbit», this is the first part of Tolkien’s epic masterpiece, «The Lord of the Rings», featuring a striking black cover based on Tolkien’s own design, the definitive text, and a detailed map of Middle-earth.Sauron, the Dark Lord, has gathered to him all the Rings of Power — the means by which he intends to rule Middle-earth.',
        shortDescription: null
    },
    {
        id: '2',
        img: '/image/lordoftherings.png',
        name: 'The Lord of the Rings',
        oldPrice: null,
        newPrice: '120$',
        description: 'The Lord of the Rings is an epic high fantasy novel by the English author and scholar J. R.R. Tolkien.Continuing the story begun in «The Hobbit», this is the first part of Tolkien’s epic masterpiece, «The Lord of the Rings», featuring a striking black cover based on Tolkien’s own design, the definitive text, and a detailed map of Middle-earth.Sauron, the Dark Lord, has gathered to him all the Rings of Power — the means by which he intends to rule Middle-earth.',
        shortDescription: null
    },
    {
        id: '3',
        img: '/image/lordoftherings.png',
        name: 'The Lord of the Rings',
        oldPrice: null,
        newPrice: '700$',
        description: 'The Lord of the Rings is an epic high fantasy novel by the English author and scholar J. R.R. Tolkien.Continuing the story begun in «The Hobbit», this is the first part of Tolkien’s epic masterpiece, «The Lord of the Rings», featuring a striking black cover based on Tolkien’s own design, the definitive text, and a detailed map of Middle-earth.Sauron, the Dark Lord, has gathered to him all the Rings of Power — the means by which he intends to rule Middle-earth.',
        shortDescription: null
    },
    {
        id: '4',
        img: '/image/lordoftherings.png',
        name: 'The Lord of the Rings',
        oldPrice: '120$',
        newPrice: '56$',
        description: 'The Lord of the Rings is an epic high fantasy novel by the English author and scholar J. R.R. Tolkien.Continuing the story begun in «The Hobbit», this is the first part of Tolkien’s epic masterpiece, «The Lord of the Rings», featuring a striking black cover based on Tolkien’s own design, the definitive text, and a detailed map of Middle-earth.Sauron, the Dark Lord, has gathered to him all the Rings of Power — the means by which he intends to rule Middle-earth.',
        shortDescription: null
    },
]

export default {
    getAll: () => {
        return data
    },
    createProduct: function (product) {
        console.log('product1: ' + product)
        product.id = 'a' + Math.ceil((Math.random() * 1000000))
        data.push(product)
        return product
    }
}