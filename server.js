const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));


const PORT = 3000;

//rota principal
app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, "public", 'index.html'));
});

//rota para a pagina SOBRE
app.get('/sobre', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'sobre.html'));
})

//rota para a pagina CONTATO
app.get('/contato', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'contato.html'));
})

app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta ${PORT}`)
})