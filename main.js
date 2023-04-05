document.addEventListener("click" , showcolor );

document.getElementById("botao").addEventListener("click" , shownome);

document.getElementById("calcular").addEventListener("click" , mostraResultado); 

document.getElementById("calcular-sub").addEventListener("click" , mostraResultadosub); 

document.getElementById("calcular-mul").addEventListener("click" , mostraResultadomul); 

document.getElementById("calcular-div").addEventListener("click" , mostraResultadodiv); 

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
    let num3 = parseFloat(num1) + parseFloat(num2);
    document.getElementById("resultado").innerHTML = " = " + num3;
}

function mostraResultadosub()
{
    let num4 = document.getElementById("numero4").value;
    let num5 = document.getElementById("numero5").value;
    let num6 = parseFloat(num4) - parseFloat(num5);
    document.getElementById("resultado").innerHTML = " = " - num6;
}

function mostraResultadomul()
{
    let num7 = document.getElementById("numero7").value;
    let num8 = document.getElementById("numero8").value;
    let num9 = parseFloat(num7) * parseFloat(num8);
    document.getElementById("resultado").innerHTML = " = " * num9;
}

function mostraResultadodiv()
{
    let num10 = document.getElementById("numero10").value;
    let num11 = document.getElementById("numero11").value;
    let num12 = parseFloat(num10) / parseFloat(num11);
    document.getElementById("resultado").innerHTML = " = " / num12;
}