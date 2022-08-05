import express from 'express';
import cors from 'cors';
const app = express()
app.use(cors());
const port = 4000

app.get('/home', (req, res) => {
  res.send('I am home page!')
})


app.get('/profile', (req, res) => {
    res.send('I am profile page!')
  })
  
app.get('/', (req, res) => {
    res.send('I am home page!')
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
