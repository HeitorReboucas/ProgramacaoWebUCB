//Criar precos combustivel
const precoGasolina = 7.00;
const precoDiesel = 4.30;
const precoEtanol = 6.04;

//Funcao pra atualizar e verificar valor
function atualizarValor(){
    let tipo = document.getElementById("combustivel").value;
    console.log(tipo)
    // Escolha do combustivel
    let precoPorLitro;
    switch (tipo){
        case "gasolina":
            precoPorLitro = precoGasolina;
        break;
        case "diesel":
            precoPorLitro = precoDiesel ;
        break;
        case "etanol":
            precoPorLitro = precoEtanol;
        break;
        default: 
            console.log("Escolhe opcao");
            return;
    }
    let litros = parseFloat(document.getElementById("litros").value);
    calcularValor(precoPorLitro, litros);
}
let tipo = document.getElementById("combustivel");
tipo.addEventListener("change", atualizarValor);

//Funcao q recebe dados do combustivel(tipo e qntd)
function calcularValor(precoCombustivel, litros){
   if(litros<=0 || isNaN(litros)){
    document.getElementById("resultado").textContent = "Insira um valor valido!";
    return;
   } else{
    let valorTotal = precoCombustivel * litros;
    document.getElementById("resultado").textContent = valorTotal;
   }
   return valorTotal;
}
let litros = document.getElementById("litros");
litros.addEventListener("input", atualizarValor)

//Evitar que a pagina seja recarregada
litros.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
    event.preventDefault();
    atualizarValor();
    }
});

// Transformar o valor em R$
