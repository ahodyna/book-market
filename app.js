import express from 'express';
import path from 'path';
import pagesRouters from './routes/pagesRoutes.js'
import productsDataStorage from './controller/productsDataStorage.js'
import blogDataStorage from './controller/blogDataStorage.js'

const __dirname = path.resolve();

const app = express()
const port = 3000
app.listen(port)

app.use(express.json())
app.use(pagesRouters)
app.use(express.static(__dirname + '/public'))

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'ejs'))
