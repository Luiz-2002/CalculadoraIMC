const calculo = document.getElementById('calcular');

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');


    if(nome !== '' && altura !== '' && peso !== ''){

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if(valorIMC < 18.5){
            classificacao = 'abaixo do peso: se alimente corretamente !!';
        }else if (valorIMC < 25) {
            classificacao = 'Peso ideal: Parabéns, continue assim!!';
        }else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso: reveja sua alimentação e pratique exercicios fisicos!!';
        }else if (valorIMC < 35) {
            classificacao = 'Obesidade grau I: Faça um regime!!';
        }else if (valorIMC < 40) {
            classificacao = 'Obesidade grau II: Procure um nutricionista!!';
        }else {
            classificacao = 'Obesidade grau  III: Estado Critico, procure ajuda !!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você esta ${classificacao}`;

    }else{
        resultado.textContent = 'Preencha todos os campos !!';
    }

}

calculo.addEventListener('click',imc);