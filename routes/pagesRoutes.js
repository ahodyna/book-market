import { Router } from 'express';
import productsDataStorage from '../controller/productsDataStorage.js'
import blogDataStorage from '../controller/blogDataStorage.js'

const router = Router();

router.get('/', (req, res) => {
  res.render('main', { dataBook: productsDataStorage.getAll() })
})

router.get('/delivery', (req, res) => {
  res.render('delivery')
})

router.get('/sale', (req, res) => {
  res.render('sale', { dataBook: productsDataStorage.getAll() })
})

router.get('/blog', (req, res) => {
  res.render('blog', { dataBlog: blogDataStorage.getItemBlog() })
})

router.get('/basket', (req, res) => {
  res.render('basket')
})

router.get('/login', (req, res) => {
  res.render('login')
})


// post

router.post('/books', (req, res) => {
  const item = req.body
  const createdItem = productsDataStorage.createProduct(item)
  res.json(createdItem)

})
router.post('/blog-items', (req, res) => {
  const item = req.body;
  const createdItem = blogDataStorage.createBlogItem(item)
  res.json(createdItem)
})


// get by id

router.get('/books/:id', (req, res) => {
  console.log('req.params.id', req.params.id)
  const product = productsDataStorage.getProduct(req.params.id)
  
  console.log(product)
  res.json(product)
})




export default router