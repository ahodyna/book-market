import {Router} from 'express';
import bookData from '../controller/productsDataStorage.js';
import postData from '../controller/blogDataStorage.js';

const router = Router();


// BOOKS ROUTER
router.post('/books', (req, res) => {
    const item = req.body
    const createdItem = bookData.createProduct(item)
    return res.status(200).json(createdItem)
  
  })

// get by id
router.get('/books/:id', (req, res) => {
  const product = bookData.getProduct(req.params.id)
  res.json(product)
})

// put 
router.put('/books/:id', (req, res) => {
  const updatedItem = bookData.updateProduct(req.params.id, req.body)
  res.json(updatedItem)
})

// delete
router.delete('/books/:id', (req, res) => {
  const deletedItem = bookData.deleteProduct(req.params.id)
  res.json(deletedItem)
})

// BLOG ROUTER
router.post('/blog-items', (req, res) => {
    const item = req.body;
    const createdItem = postData.createBlogItem(item)
    return res.status(200).json(createdItem)
  })

  // put 
router.put('/blogs/:id', (req, res) => {
  const updatedItem = postData.updateBlogItem(req.params.id, req.body)
  return res.status(200).json(updatedItem)
})

// delete
router.delete('/blogs/:id', (req, res) => {
  const deletedItem = postData.deleteBlogItem(req.params.id)
  return res.status(200).json(deletedItem)
})

// get by id
router.get('/blogs/:id', (req, res) => {
  const product = postData.getBlogItem(req.params.id)
  return res.status(200).json(product)
})

  export default router