const express = require("express")
const app = express()
app.disable("x-powered-by")
app.use(express.static('public'))

app.get("/api/test", (req, res) => {
  res.send(Math.random().toString())
})

app.listen()