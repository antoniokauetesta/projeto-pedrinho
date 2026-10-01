import pool from "../db.js";
import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

app.get("/alunos", async (req, res) => {
    const alunos = await pool.query('SELECT * FROM alunos');
    res.json(alunos.rows);
});

app.post("/alunos", async (req, res) => {
    const {nome, email, senha} = req.body;
    const novoAluno = await pool.query('INSERT INTO alunos(nome, email, senha) VALUES ( $1, $2, $3)', [nome, email, senha]);
    res.json(novoAluno.rows[0]);
});

app.put("/alunos/:id", async (req, res) => {
    const {id} = req.params;
    const {nome, email, senha} = req.body;
    const atualisarAluno = await pool.query('UPDATE alunos SET nome=$1, email=$2, senha=$3 WHERE id=$4', [nome, email, senha, id]);
    res.json(atualisarAluno.rows[0]);
});

app.delete("/alunos/:id", async (req, res) => {
    const {id} = req.params;
    const deletarAluno = await pool.query('DELETE FROM alunos WHERE id=$1', [id]);
    res.json(deletarAluno.rows[0]);
})

app.listen(PORT, () => {
    console.log("Server rodando")
})