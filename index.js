const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;


app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const sayHi = (req, res) => {
    res.send("Hi!");
};

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
