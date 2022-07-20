/*  var sla
    sla.setAttribute ('*nome do atributo*', '*nome para o atributo*')*/ 

var btnFinalizar = document.getElementById("finalizar")
        btnFinalizar.addEventListener("click", analisaNumero) //Quando clica no botão de finalizar

var divResultados = document.getElementById("resultados")

function analisaNumero(event){
    event.preventDefault()
    
        divResultados.disabled = false // Quando a função for iniciado este elemento deixa de estar desabilitado
            divResultados.style.marginTop = "30px" // Adiciona 30px no atributo margin top

    var quantidadeNumeros = numerosCadastrados.length // Retorna o quantidade de numeros no array
        var resultadoQuantidadeNumeros = document.getElementById("resul_quant_num")
                resultadoQuantidadeNumeros.innerHTML = `Ao todo, temos <b>${quantidadeNumeros} numeros cadastrados.</b>`


    var maiorNumero = numerosCadastrados.reduce(function(a, b) { // Retorna o maior numero do array
        return Math.max(a, b);
    }, -Infinity);
            var resultadoMaiorValor = document.getElementById("resul_maior")
                    resultadoMaiorValor.innerHTML = `O <b>maior</b> numero informado foi <b>${maiorNumero}.</b>`


    var menorNumero = numerosCadastrados.reduce(function(a, b) { // Retorna o menor numero do array
        return Math.min(a, b);
    }, +Infinity);
            var resultadoMenorValor = document.getElementById("resul_menor")
                    resultadoMenorValor.innerHTML = `O <b>menor</b> numero informado foi <b>${menorNumero}.</b>`


    var somaNumeros = 0

    for(var i = 0; i < numerosCadastrados.length; i++) { // Soma todos os numeros do array em uma variavel
            somaNumeros += numerosCadastrados[i];
    }
            var resultadoSomaValores = document.getElementById("resul_soma")
                    resultadoSomaValores.innerHTML = `<b>Somando</b> todos os valores, temos <b>${somaNumeros}.</b>`


    var mediaNumeros = somaNumeros / numerosCadastrados.length // Retorna a media dos numeros do array
        var resultadoMediaValores = document.getElementById("resul_media")
                resultadoMediaValores.innerHTML = `A <b>média</b> de todos os valores digitados é <b>${mediaNumeros}.</b>`
}