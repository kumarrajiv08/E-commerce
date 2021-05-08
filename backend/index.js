const express = require('express')
const products = require('./data/products.js')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p._id === req.params.id)
  res.json(product)
})

app.listen(5000, () => {
  console.log(`Example app listening at 5000`)
})
