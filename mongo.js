const mongoose = require('mongoose')

if ( process.argv.length<3 ) {
    console.log('give password name and number as arguments')
    process.exit(1)
}

const password = process.argv[2]

const url =
    `mongodb+srv://fullstack:${password}@cluster0-6isae.mongodb.net/puhelinluettelo?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true , useUnifiedTopology: true }).catch(console.log)

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Person = mongoose.model('Person', personSchema)


if (process.argv.length === 3) {
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(person)
        })
        mongoose.connection.close()
    })
} else {

    if (process.argv.length !== 5) {
        console.log('give passwd name and number')
        process.exit(1)
    }
    const person = new Person({
        name: process.argv[3],
        number: process.argv[4]
    })

    person.save().then(function() {
        console.log(`added ${process.argv[3]} number ${process.argv[4]} to the phonebook!`)
        mongoose.connection.close()
    }).catch(console.log)
}
