require('dotenv').config()
require('./config/database');

const Fighter = require('./models/fighter')

const data = require('./data')

const p1 = Fighter.deleteMany({})

Promise.all([p1])
.then(function(fighters) {
    console.log(fighters)
    return Promise.all([
        Fighter.findOne({name: ''})
    ])
})
.then(function(results) {
    console.log(results)
    process.exit()
})