// Modificadores de acesso
class contaBancaria{ 
    #saldo = 0; // Modificador de acesso privado ( # )
    constructor(saldoInicial){
        this.#saldo = saldoInicial; 
    };

    //Metodo
    getSaldo(){
        return this.#saldo;
    };
}

const conta = new contaBancaria(100);
/* console.log(conta.saldo); Erro pq a propriedade é privada */
console.log(conta.getSaldo());

const pessoa2 = []; // array
pessoa2[0] = "Fulano"
console.log(pessoa2);

// Metodos 
pessoa2.push("Ana"); // Push adiciona ao final do Array

pessoa2.unshift("Maria"); // Adiciona ao inicio do Array
console.log(pessoa2);

pessoa2.splice(1, 0, "João");
console.log(pessoa2);

pessoa2.pop(); // Remove o ultimo elemento
console.log(pessoa2);

pessoa2.shift() // Remove o primeiro elemento
console.log(pessoa2);

pessoa2.splice(2,1); // Remover na posição especifica o item
console.log(pessoa2);
