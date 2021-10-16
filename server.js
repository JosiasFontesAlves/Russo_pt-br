const express = require('express');
const app = express();

app.use(express.static('src'));

app.listen(7000, () => console.log('Servidor rodando na porta 7000'));