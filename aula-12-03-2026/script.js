// Busca de elemento
let meuElemento = document.getElementById("paragrafo"); // busca pelo ID
console.log(meuElemento);
console.log(meuElemento.textContent);

// Busca de elemento HTML pela Classe
let paragrafo1 = document.getElementsByClassName("paragrafo");
console.log("paragrafo1");
for(let i=0; i<=paragrafo1.length; i++ ){
    console.log(paragrafo1[i].textContent);
}

// Buscar um elemento pela TAG
let paragrafo2 = document.getElementsByTagName("p");

//Criar elemento HTML
let destino = document.getElementById("elemento"); // buscando elemento HTML
let p = document.createElement("p"); // Cria elemento HTML
p.textContent = "Paragrafo criado via JavaScript";
destino.append(p); // Adicionar ao DOM

//criar lista
let lista = document.getElementById("lista"); // Busca elemento HTML
let ul = document.createElement("ul"); // Cria elemento HTML em JS
let itens = ["Arroz", "Feijão"]; // Adiciona os itens
for(let i=0;i>itens.length; i++){
   let li = document.createElement("li"); // Cria o elemento da Lista
   li.textContent = itens[i] ; // Adiciona conteudo da lista no elemento 
   ul.append(li); // Junta LI ou UL
}
lista.append(ul) // Adiciona a UL ao DOM

// Funcao Somar
function somar(){
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let soma = n1 + n2;

    let saida = `Resultado: <b>${soma}</b>`;
    document.getElementById("resultado").innerHTML = saida;
}



// Eventos = Botão
let botao = document.getElementById("botao1");
botao.onclick = function(){
    alert("Clicou!");
    botao.textContent ="Você clicou"
}