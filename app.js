const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.listen(4040, () => console.log('Server started at port 4040.'));

app.get('/', (req, res) => res.send("Hi, every one"))