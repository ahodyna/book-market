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
    dataBook: books,
    user: req.user
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
    dataBook: books,
    user: req.user
  }); 
})

router.get('/blog', (req, res) => {
  const blogItemsAmount = blogDataStorage.count({});
  const pageNumber = req.query.page? req.query.page: 1

  const posts = blogDataStorage.getPageBlog(pageNumber, itemsPerPage);
  res.render('blog', {
    pagesAmount: Math.ceil(blogItemsAmount / itemsPerPage),
    dataBlog: posts,
    user: req.user
  }); 
})

router.get('/basket', (req, res) => {
  res.render('basket')
})

router.get('/login', (req, res) => {
  res.render('login')
})



export default router