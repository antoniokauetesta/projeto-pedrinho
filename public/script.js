const btnListar = document.getElementById("btnGet");
const btnPost = document.getElementById("btnPost");
const btnPut = document.getElementById("btnPut");
const btnDelete = document.getElementById("btnDelete");

btnListar.addEventListener("click", async () => {
    const resposta = await fetch("http://localhost:3000/alunos");
    const dados = await resposta.json();
    document.getElementById("lista").textContent = JSON.stringify(dados, null, 2);
});

btnPost.addEventListener("click", async ()=> {
    const resposta = await fetch("http://localhost:3000/alunos";,{
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({
            nome: document.getElementById("nomePost").value,
            email: document.getElementById("emailPost").value,
            senha: document.getElementById("senhaPost").value
        })
    });
    const dados = await resposta.json();
    console.log(dados);
});

