const express = require('express');
const app = express();
const { writeFile } = require('fs');

app.use(express.static('src'));
app.use(express.json());

app.get('/tema', (req, res) => res.sendFile(`${__dirname}/temEsc.json`));

app.post('/tema', (req, res) => {
    writeFile('./temEsc.json', JSON.stringify(req.body, null, 4), err => err ? console.log(err) : '');
    res.end();
});

app.listen(7000, () => console.log('Servidor rodando na porta 7000'));