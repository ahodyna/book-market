import { Router } from 'express';
import productsDataStorage  from '../controller/productsDataStorage.js'

const router = Router();

router.get('/', (req, res) => {
  res.render('main', {dataBook: productsDataStorage.getAll()})
})

router.get('/delivery', (req, res) => {
  res.render('delivery')
})

router.get('/sale', (req, res) => {
  res.render('sale', {dataBook: productsDataStorage.getAll()})
})

router.get('/blog', (req, res) => {
  res.render('blog')
})

router.get('/basket', (req, res) => {
  res.render('basket')
})

router.get('/login', (req, res) => {
  res.render('login')
})

export default router