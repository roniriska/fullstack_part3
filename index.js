require("dotenv").config()
const express = require("express")
const bodyParser = require('body-parser')
const morgan = require("morgan")
const app = express()
const Person = require('./models/person')

app.use(express.static("build"))

morgan.token('body', function (req, res) { 
    if (req.method === "POST" || req.method === "PUT") {
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


app.get("/api/persons", (req, res) =>  {
    Person.find({})
    .then(result => {
        res.json(result.map(person => person.toJSON()))
    })
})

app.post("/api/persons", (req, res, next) => {
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
    const person = new Person({"name":req.body.name, "number":req.body.number})
    person.save()
    .then(savedNode => {
        res.json(savedNode.toJSON())
    })
    .catch(error => next(error))
})

app.get("/api/persons/:id", (req, res, next) => {
    const id = req.params.id
    console.log("Id", id)
    Person.findById(req.params.id)
    .then(person => {
      if (person) {
        res.json(person.toJSON())
      } else {
        res.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.put("/api/persons/:id", (req, res, next) => {
    const body = req.body
    const person = {
        number: body.number,
    }

    Person.findByIdAndUpdate(req.params.id, person, { new: true })
    .then(updatedPerson => {
        res.json(updatedPerson.toJSON())
    })
    .catch(error => next(error))
})

app.get("/info", (req, res) => {
    Person.find({})
    .then(result => {
        res.send(`Phonebook has info for ${result.length} people<br>${Date()}`)
    })
})

app.delete("/api/persons/:id", (req, res, next) => {
    const id = req.params.id
    Person.findByIdAndDelete(id)
    .then(result => {
        res.status(204).end()
    })
    .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}
  
app.use(unknownEndpoint)

  
const errorHandler = (error, request, response, next) => {
    console.log(error)
    if (error.name === 'CastError' && error.kind == 'ObjectId') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    }

    next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

