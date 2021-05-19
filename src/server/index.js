const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const fetch = require('node-fetch');
/////////////////////////////////////////////////////////////////////////////////////////////
dotenv.config(); // configure .env.
const app = express(); // new instance from express.
app.use(express.static('dist')); // express static.
app.use(bodyParser.json()); // json parser.
app.use(cors()); // allow the cors.
/////////////////////////////////////////////////////////////////////////////////////////////
app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
    res.sendFile(path.resolve('src/client/views/index.html'))
});
/////////////////////////////////////////////////////////////////////////////////////////////
app.post('/add-url', async function (req, res) {
    const {url} = req.body;
    const {APP_KEY, ENDPOINT} = process.env;

    const response = await fetch(`${ENDPOINT}?key=${APP_KEY}&url=${url}&lang=en`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
    });
    try {
        const result = await response.json();
        const {subjectivity, irony} = result;
        const {text, score_tag, agreement, confidence} = result.sentence_list[0];
        res.send({text, score_tag, agreement, subjectivity, confidence, irony});
    } catch (error) {
        res.send(error)
    }
});
/////////////////////////////////////////////////////////////////////////////////////////////
const PORT = 8081; // app listen to port 8081.
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})
/////////////////////////////////////////////////////////////////////////////////////////////
