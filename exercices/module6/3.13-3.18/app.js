const express = require("express")
const app = express()
require('dotenv').config()
const PORT = process.env.PORT

const infosRouter = require('./routes/infos');
const personsRouter = require('./routes/persons');

app.use(express.json());


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

app.use('/api/persons', personsRouter);
app.use('/infos', infosRouter);


module.exports = app;


