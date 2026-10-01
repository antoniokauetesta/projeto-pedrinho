<div align="center">

# 🧑‍🎓✨ Treino SAEP — Pedrinho

### 🔗 Frontend + Backend + Banco de dados num CRUD simples de alunos!

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

---

## 💫 Sobre o projeto

**Treino SAEP — Pedrinho** é um projeto simples de treino que demonstra um **CRUD completo** (GET, POST, PUT e DELETE) de alunos, integrando front-end em HTML/JavaScript puro, back-end em Node.js/Express e banco de dados PostgreSQL 🐘.

---

## ✨ Funcionalidades

- 📋 **GET** — listar todos os alunos cadastrados
- ➕ **POST** — cadastrar um novo aluno (nome, email e senha)
- ✏️ **PUT** — atualizar os dados de um aluno
- 🗑️ **DELETE** — remover um aluno
- 🖱️ Interface simples com um botão para cada operação HTTP

---

## 🛠️ Tecnologias

<div align="center">

| Tecnologia | Uso |
|---|---|
| Node.js + Express | API REST |
| pg (node-postgres) | Conexão com o PostgreSQL |
| dotenv | Variáveis de ambiente |
| cors | Liberação de acesso entre front e back |
| nodemon | Reinício automático em desenvolvimento |
| HTML + JavaScript puro | Interface de testes |

</div>

---

## 📁 Estrutura do projeto

```
projeto-pedrinho/
├── public/
│   ├── index.html        # Interface com os botões de teste
│   └── script.js          # Chamadas fetch para a API
├── src/
│   └── server.js           # Servidor Express e rotas da API
├── db.js                    # Configuração da conexão com o PostgreSQL
└── package.json
```

---

## 🚀 Como executar

### ✅ Pré-requisitos
- Node.js
- PostgreSQL

### 🗄️ Banco de dados

Crie o banco `pedrinho` e a tabela `alunos`:

```sql
CREATE DATABASE pedrinho;

CREATE TABLE alunos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL
);
```

> 💡 A conexão em `db.js` está configurada com usuário `postgres`, senha `senai` e banco `pedrinho`. Ajuste conforme o seu ambiente.

### 🖥️ Rodando o projeto

```bash
npm install
npm run dev
```

O servidor sobe em `http://localhost:3000` 🚀, servindo também a interface em `public/index.html`.

---

## 📡 Rotas da API

<div align="center">

| Método | Rota | Descrição |
|:---:|---|---|
| `GET` | `/alunos` | 📋 Lista todos os alunos |
| `POST` | `/alunos` | ➕ Cria um novo aluno |
| `PUT` | `/alunos/:id` | ✏️ Atualiza um aluno |
| `DELETE` | `/alunos/:id` | 🗑️ Remove um aluno |

</div>

---

<div align="center">
Feito como treino de SAEP

</div>
