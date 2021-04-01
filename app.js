import express from 'express';
import path from 'path';

const __dirname = path.resolve();

const app = express()
const port = 3000
app.listen(port)



app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'ejs'))


// routes
app.get('/', (req, res) => {
  res.render('main')
})

app.get('/delivery', (req, res) => {
  res.render('delivery')
})

app.get('/sale', (req, res) => {
  res.render('sale')
})

app.get('/blog', (req, res) => {
  res.render('blog')
})

app.get('/basket', (req, res) => {
  res.render('basket')
})

app.use(express.static(__dirname + '/public'))