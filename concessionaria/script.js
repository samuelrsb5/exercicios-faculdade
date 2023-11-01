function calcular(){
    let preçoDeFabrica = Number(document.getElementById("preço_fabrica").value);
    let impostos = 0.4 * preçoDeFabrica;
    let lucroMontadora = 0.45 * preçoDeFabrica;
    let lucroConcessionaria = 0.25 * preçoDeFabrica;

    let valorFinal = preçoDeFabrica + impostos + lucroConcessionaria + lucroMontadora;
    document.getElementById("preço_final").innerHTML = `O valor do carro com impostos é: ${valorFinal}`
    
}

