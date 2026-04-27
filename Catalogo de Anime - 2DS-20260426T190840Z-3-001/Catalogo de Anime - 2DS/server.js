const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname)));

const itens = [
    {
        nome: 'One Piece',
        descricao: 'A jornada dos Chapéu de Palha em busca do tesouro lendário.',
        imagem: 'https://i.imgur.com/KLZ4GzZ.jpg'
    },
    {
        nome: 'Naruto',
        descricao: 'O jovem ninja que sonha em se tornar Hokage.',
        imagem: 'https://i.imgur.com/f4J3Tbg.jpg'
    },
    {
        nome: 'Hell\'s Paradise',
        descricao: 'Um samurai em busca de imortalidade em uma ilha estranha.',
        imagem: 'https://i.imgur.com/25mMmEE.jpg'
    }
];

app.get('/itens', (req, res) => {
    res.json(itens);
});

app.post('/itens', (req, res) => {
    const { nome, descricao, imagem } = req.body;
    if (!nome || !descricao || !imagem) {
        return res.status(400).json({ error: 'Os campos nome, descricao e imagem são obrigatórios.' });
    }

    const novoItem = { nome, descricao, imagem };
    itens.push(novoItem);
    res.status(201).json(novoItem);
});

const scores = [];

app.post('/save-score', (req, res) => {
    const { playerName, score, totalQuestions } = req.body;
    scores.push({
        playerName: playerName || 'Anônimo',
        score,
        totalQuestions,
        date: new Date().toISOString()
    });
    res.json({ success: true, message: 'Pontuação salva!' });
});

app.get('/scores', (req, res) => {
    res.json(scores.sort((a, b) => b.score - a.score).slice(0, 10));
});

app.listen(port, () => {
    console.log(`🎮 Servidor do Catálogo de Animes rodando em http://localhost:${port}`);
    console.log('📡 Rotas disponíveis: GET /itens, POST /itens, GET /scores, POST /save-score');
});