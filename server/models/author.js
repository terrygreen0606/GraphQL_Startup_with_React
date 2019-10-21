const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name: String,
    age: Number,
})

module.exports = mongoose.model("authors", authorSchema)                //"authors" is the name of the collection in the database.