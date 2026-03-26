//Trabalhando com eventos

//propriedades
let botao1 = document.getElementById("botao1");

//Manipuladores de eventos
botao1.onclick = function(){
    alert("primeiro evento")
}

//Segunda ação
// botao1.onclick = function(){
//     botao1.textContent = "Texto Alternativo"
// }

let botao2 = document.getElementById("botao2");
botao2.onmouseover = function(){
    botao2.style.backgroundColor = "blue";
};

botao2.onmouseout = function(){
    botao2.style.backgroundColor = "";
};

botao2.ondblclick = function(){
    botao2.textContent = "Duplo Clique"
};

let campoEntrada = document.getElementById("campo");
let resultado = document.getElementById("resultado");

campoEntrada.onkeydown = function(event){
    if(event.key == "Enter"){
        console.log("teste");
    }
}