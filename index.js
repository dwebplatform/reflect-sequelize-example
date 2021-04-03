const { injectionContainer } = require('./injections');


const express = require('express')
const app = express()
const port = 5000;

require('./routes/subway.route')(app);
app.listen(port, () => {
})