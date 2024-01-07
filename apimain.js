express = require("express")
app = express()
port = 8080

app.use(express.json())

app.get("/hello", (req, res) => {
  res.status(200).send({
    msg: "Hi",
    amiokay: "Yes"
  })
  console.log("GET /hello and replied with "+JSON.stringify({
    msg: "Hi",
    amiokay: "Yes"
  }))
})
app.post("/text/:id", (req, res) => {
  const { id } = req.params
  const { text } = req.body
  if (!text){
    res.status(418).send({ message: "No Text Found" })
  }
  res.send({
    text: `Sent text with your "${text}" payload with id ${id}`
  })
  console.log(`POST /text/${id} with data ${text}`)
})


app.listen(
  port,
  () => {
    console.log(`its alive at https://127.0.0.1:${port}`); 
  }
)
