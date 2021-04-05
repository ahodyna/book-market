import express from 'express';
import path from 'path';
import pagesRouters from './routes/pagesRoutes.js'

const __dirname = path.resolve();

const app = express()
const port = 3000
app.listen(port)



app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'ejs'))


app.use(pagesRouters)
app.use(express.static(__dirname + '/public'))