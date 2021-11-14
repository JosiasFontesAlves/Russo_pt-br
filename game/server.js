import express from "express";
import { writeFile } from "fs";

const app = express();

app.use(express.static('src'));

app.use(express.json());

app.post('/res', (req, res) => {
    writeFile('./res.json', JSON.stringify(req.body, null, 4), err => err ? console.log(err) : '');
    res.end();
});

app.get('/res', (_req, res) => res.sendFile(`${process.cwd()}/res.json`));

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));