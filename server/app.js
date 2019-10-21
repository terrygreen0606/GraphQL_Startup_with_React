const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//allow cross-origin requests
app.use(cors());

mongoose.connect("mongodb://localhost:27017/graphql");
mongoose.connection.once('open', ()=>{
    console.log("connected to the database");
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));                                                         // Router to use graphql. Inside it, should go schema

app.listen(4000, () => {
    console.log("Listening for requrest on port 4000");
})