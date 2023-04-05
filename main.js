document.addEventListener("click" , showcolor );

document.getElementById("botao").addEventListener("click" , shownome);

document.getElementById("calcular").addEventListener("click" , mostraResultado); 

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

function mostraResultado()
{
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;
    let num3 = parseFloat(num1)+ parseFloat(num2);
    document.getElementById("resultado").innerHTML = "resultado" + num3;
}
