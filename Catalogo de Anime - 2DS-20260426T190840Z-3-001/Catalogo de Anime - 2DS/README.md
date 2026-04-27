# 🎮 Catálogo de Animes 2026

Jogo interativo de quiz sobre animes com continuação prevista para 2026!

## 🚀 Como usar este projeto

O foco deste projeto agora é o servidor Node.js, conforme pedido do professor.

### Executar com Node.js
```bash
npm install
npm start
```

O servidor rodará em `http://localhost:3000`.

### Rotas implementadas
- `GET /itens` — retorna o array de animes
- `POST /itens` — adiciona um novo anime ao array

### Como funciona
- Ao abrir `http://localhost:3000`, a página `index.html` carrega os itens do servidor automaticamente.
- Use o formulário para enviar novos itens via `POST /itens`.

## 📊 Funcionalidades

- **Quiz interativo**: 4 perguntas sobre animes
- **Sistema de pontuação**: Conta acertos e erros
- **Ranking**: Salve e veja as melhores pontuações
- **Design responsivo**: Funciona em desktop e mobile

## 🎯 Respostas Corretas
- One Piece: Verdadeiro
- Naruto: Falso
- Hell's Paradise: Verdadeiro
- Evangelion: Falso

## 🛠️ Tecnologias
- HTML5
- CSS3
- JavaScript (ES6+)
- Python (servidor simples)
- Node.js + Express (opcional)

## 📁 Estrutura
```
/
├── index.html          # Página inicial
├── verdadeoufalso.html # Pergunta 1
├── verdadeoufalso1.html # Pergunta 2
├── verdadeoufalso3.html # Pergunta 3
├── verdadeoufalso4.html # Pergunta 4
├── resultado.html      # Resultado final
├── style.css          # Estilos
├── server.js          # Servidor Node.js
├── package.json       # Dependências Node.js
└── README.md          # Este arquivo
```