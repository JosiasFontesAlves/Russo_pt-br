import express from 'express';
import { writeFile } from 'fs';

const app = express();

app.use(express.static('src'));
app.use(express.json());

app.put('/tema', (req, res) => {
    writeFile('src/temesc.json', JSON.stringify(req.body, null, 4), err => console.log(err ? err : ''));
    res.end();
});

app.listen(7000, () => console.log('Servidor rodando na porta 7000'));