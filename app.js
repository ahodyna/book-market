import express from 'express';
import path from 'path';

const __dirname = path.resolve();

const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'ejs'))

app.get('/', (req, res) => {
  res.render('main')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


app.use(express.static(__dirname + '/public'))
