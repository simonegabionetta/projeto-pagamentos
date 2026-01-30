//imports
const express = require('express');
const cors = require('cors');

//inicializa o servidor

const app = express();

app.use(cors());         // Ativa o CORS para o Frontend conseguir falar com o Backend
app.use(express.json()); // Diz ao servidor para aceitar dados no formato JSON

//Rota de teste
app.get('/', (req, res) => {
  res.send('Servidor de Pagamentos está funcionando!');
});

// Define que o servidor vai rodar na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});