require('dotenv').config();
require('./config/database');

const Fighter = require('./models/fighter');

let fighter, fighters;

Fighter.find({}).then(console.log)

console.log('Time to CRUD!');
Fighter.updateMany(
    {},  // Query object determines which docs to update
    function(err, result) {console.log(result)}
);