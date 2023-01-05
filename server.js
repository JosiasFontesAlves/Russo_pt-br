import express from 'express';

const app = express();

app.listen(7000, () => console.log('Servidor rodando na porta 7000'));

app.use(express.static('src'));

app.get('*', (_, res) => res.sendFile(`${process.cwd()}/src/index.html`));