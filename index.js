const express = require("express")
const bodyParser = require('body-parser')
const morgan = require("morgan")
const app = express()

app.use(express.static("build"))

morgan.token('body', function (req, res) { 
    if (req.method === "POST") {
         return JSON.stringify(req.body) 
    } else return "" 
})

app.use(morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms',
      tokens['body'](req,res)
    ].join(' ')
  }))

app.use(bodyParser.json())

let phonebook=[
    { 
    "name": "Arto Hellas", 
    "number": "040-123456",
    "id": 1
    },
    { 
    "name": "Ada Lovelace", 
    "number": "39-44-5323523",
    "id": 2
    },
    { 
    "name": "Dan Abramov", 
    "number": "12-43-234345",
    "id": 3
    },
    { 
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122",
    "id": 4
    }
]

app.get("/api/persons", (req, res) =>  {
    res.json(phonebook)
})

app.post("/api/persons", (req, res) => {
    if (!req.body) {
        res.status(400).json({
            error: 'content missing'
          })
        return
    }
    if (!req.body.number) {
        res.status(400).json({
            error: 'number missing'
          })
        return
    }
    if (!req.body.name) {
        res.status(400).json({
            error: 'name missing'
          })
        return
    }
    if (phonebook.find(person => person.name == req.body.name)) {
        res.status(400).json({
            error: 'name must be unique'
          })
        return
    }
    const newperson = {...req.body, id:Math.floor(Math.random()*1000000)}
    phonebook = phonebook.concat(newperson)
    res.json(newperson)
})

app.get("/api/persons/:id", (req, res) => {
    const id = Number(req.params.id)
    console.log(id)
    const person = phonebook.find(person => person.id === id)
    if (person) {
        res.send(`<p>Name: ${person.name}</p><p>Number: ${person.number}</p>`)
    } else {
        res.status(404).end()
    }
})

app.get("/info", (req, res) => {
    res.send(`Phonebook has info for ${phonebook.length} people<br>${Date()}`)
})

app.delete("/api/persons/:id", (req, res) => {
    const id = Number(req.params.id)
    const person = phonebook.find(person => person.id === id)
    if (person) {
        phonebook = phonebook.filter(person => person.id !== id)
    }
    res.status(204).end()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
