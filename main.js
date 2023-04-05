document.addEventListener("click" , showcolor );

document.getElementById("botao").addEventListener("click" , shownome);

function showcolor()
{
    document.body.style.backgroundColor = "red";
}

function shownome()
{
    let usuario = document.getElementById("nome").value;
    document.getElementById("mensagem").innerHTML = "Meu nome é: " + usuario;
    document.getElementById("nome").value = "";
}

