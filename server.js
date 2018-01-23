import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import bodyParser from "body-parser"

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

mongoose.connect("mongodb://localhost/story-api")

mongoose.Promise = Promise

mongoose.connection.on("error", err => console.error("Connection error:", err))
mongoose.connection.once("open", () => console.log("Connected to mongodb"))

const AdminInput = mongoose.model("AdminInput", {
  heading: {
    type: String,
    required: true
  },
  shortText: {
    type: String,
    required: true
  },
  longText: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    required: true
  }
})

app.get("/", (req, res) =>
  res.send("Hello World!"))

app.post("/adminstory", (req, res) => {
  const adminStory = new AdminInput(req.body)

  adminStory.save()
    .then(() => { res.status(201).send({ answer: "Story published!" }) })
    .catch(err => { res.status(400).send(err) })
})

app.get("/adminstory", (req, res) => {
  AdminInput.find().then(allAdminInputs => {
    res.json(allAdminInputs)
  })
})

app.get("/adminstory/latest", (req, res) => {
  // AdminInput.findOne().sort({ created_at: 1 }).limit(1).then(latestAdminInput => {
  AdminInput.findOne().sort({ field: "asc", _id: -1 }).limit(1).then(latestAdminInput => {
    res.json(latestAdminInput)
  })
})

app.listen(8080, () =>
  console.log("Example app listening on port 8080!"))
