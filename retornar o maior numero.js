function maiorvalor(valor1, valor2) {
    if (valor1 > valor2) {
        console.log("O primeiro número é maior que o segundo");
    } else if (valor2 > valor1) {
        console.log("O segundo número é maior que o primeiro");
    } else {
        console.log("Eles são iguais");
    }
    // Retorna os valores para uso posterior
    return [valor1, valor2];
}

// Chama a função com os valores desejados
let resultado = maiorvalor(10, 11);

// Exibe o resultado
console.log(resultado);
