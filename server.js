require('dotenv-safe').config()

const express = require('express')
const app = express()

app.use(express.static('public'))

app.set('view engine', 'pug')

app.get('/', async (_, res) => {
  const pugdata = {} // await getMaptiles()
  console.info(new Date())
  res.render('index', pugdata)
})

const server = app.listen(process.env.PORT, () => {
  const port = server.address().port
  console.log(`App listening at http://localhost:${port}`)
})
