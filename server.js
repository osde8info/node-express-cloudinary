require('dotenv-safe').config()

const express = require('express')

const app = express()

app.use(express.static('public'))

app.set('view engine', 'pug')

app.get('/', async (_, res) => {
  const pugdata = {}
  console.info(new Date())
  res.render('index', pugdata)
})

function listenwrap() {
  try {
    const server = app.listen(process.env.PORT, () => {
      const family = server.address().family
      const host = process.env.HOST_ADDRESS
      const port = server.address().port
      console.info(new Date())
      console.log(`App listening at ${family} http://${host}:${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

listenwrap()
