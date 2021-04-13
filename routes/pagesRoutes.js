import { Router } from 'express';
import productsDataStorage from '../controller/productsDataStorage.js'
import blogDataStorage from '../controller/blogDataStorage.js'

const router = Router();

const itemsPerPage = 6;

router.get('/', (req, res) => {
  const booksAmount = productsDataStorage.count({});
  const pageNumber = req.query.page? req.query.page: 1
  const filter = { }
  const books = productsDataStorage.getPage(pageNumber, itemsPerPage, filter);
  res.render('main', {
    pagesAmount: Math.ceil(booksAmount / itemsPerPage),
    dataBook: books
  }); 
})

router.get('/delivery', (req, res) => {
  res.render('delivery')
})

router.get('/sale', (req, res) => {
  const booksAmount = productsDataStorage.count({ discount: true });
  const pageNumber = req.query.page? req.query.page: 1
  const filter = { discount: true }
  const books = productsDataStorage.getPage(pageNumber, itemsPerPage, filter);
  console.log('books',books)
  res.render('sale', {
    pagesAmount: Math.ceil(booksAmount / itemsPerPage),
    dataBook: books
  }); 
})

router.get('/blog', (req, res) => {
  res.render('blog', { dataBlog: blogDataStorage.getAllBlog() })
})

router.get('/basket', (req, res) => {
  res.render('basket')
})

router.get('/login', (req, res) => {
  res.render('login')
})

// BOOKS ROUTER
// post

router.post('/books', (req, res) => {
  const item = req.body
  const createdItem = productsDataStorage.createProduct(item)
  res.json(createdItem)

})

// get by id
router.get('/books/:id', (req, res) => {
  const product = productsDataStorage.getProduct(req.params.id)
  res.json(product)
})

// put 
router.put('/books/:id', (req, res) => {
  const updatedItem = productsDataStorage.updateProduct(req.params.id, req.body)
  res.json(updatedItem)
})

// delete
router.delete('/books/:id', (req, res) => {
  const deletedItem = productsDataStorage.deleteProduct(req.params.id)
  res.json(deletedItem)
})


// BLOG ROUTER
// post
router.post('/blog-items', (req, res) => {
  const item = req.body;
  const createdItem = blogDataStorage.createBlogItem(item)
  res.json(createdItem)
})


// get by id
router.get('/blogs/:id', (req, res) => {
  const product = blogDataStorage.getBlogItem(req.params.id)
  res.json(product)
})

// put 
router.put('/blogs/:id', (req, res) => {
  const updatedItem = blogDataStorage.updateBlogItem(req.params.id, req.body)
  res.json(updatedItem)
})

// delete
router.delete('/blogs/:id', (req, res) => {
  const deletedItem = blogDataStorage.deleteBlogItem(req.params.id)
  res.json(deletedItem)
})

export default router