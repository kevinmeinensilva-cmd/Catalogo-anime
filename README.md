


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

- Lista itens do servidor Node.js automaticamente
- Adiciona novos animes via formulário
- API REST simples com `GET /itens` e `POST /itens`
- Layout responsivo com cards de anime

## 🛠️ Tecnologias
- HTML5
- CSS3
- JavaScript (ES6+)
- Node.js
- Express

## 📁 Estrutura
```
/
├── index.html      # Página inicial
├── style.css       # Estilos
├── server.js       # Servidor Node.js
├── package.json    # Dependências Node.js
└── README.md       # Este arquivo
```