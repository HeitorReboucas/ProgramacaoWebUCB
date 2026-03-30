const precosCombustivel = {
    gasolina: 6.69,
    etanol: 4.30,
    diesel: 6.03
};

const formatarMoeda = (valor) => {
    return "R$ " + valor.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
};

const validarDados = (tipo, litros) => {

    if (!tipo) {
        alert("Escolha um tipo de combustível.");
        return false;
    }

    if (isNaN(litros) || litros === "") {
        alert("Digite um número válido de litros.");
        return false;
    }

    if (litros <= 0) {
        alert("O valor de litros deve ser maior que zero.");
        return false;
    }

    return true;
};

const calcularAbastecimento = (preco, litros) => {

    const resultado = document.getElementById("resultado");
    const total = preco * litros;

    resultado.textContent = formatarMoeda(total);
};

const atualizarValor = (validar = false) => {

    const tipo = document.getElementById("combustivel").value;
    const litrosInput = document.getElementById("litros").value;
    const litros = parseFloat(litrosInput);

    const preco = precosCombustivel[tipo];

    if (validar) {
        if (!validarDados(tipo, litros)) return;
    }

    if (!isNaN(litros) && litros > 0 && preco) {
        calcularAbastecimento(preco, litros);
    }
};

const tipoCombustivel = document.getElementById("combustivel");
const litros = document.getElementById("litros");
tipoCombustivel.addEventListener("change", () => atualizarValor(true));
litros.addEventListener("input", () => atualizarValor(false));
litros.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        atualizarValor(true);
    }
});