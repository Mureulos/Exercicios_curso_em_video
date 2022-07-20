var btnAdicionar = document.getElementById("adicionar")
    btnAdicionar.addEventListener("click", adicionaNumero)

var numerosCadastrados = [] 
    var indice = 0

function adicionaNumero(event) { // Função ao clicar no botão de adicionar
    event.preventDefault()

        var valorDigitado = document.getElementById("inpNumeros") // Valor digitado em string
            var valorNumero = Number(valorDigitado.value) // Valor do numero digitado convertido para number

        var exibir = document.getElementById("areaExibir") // Select
            

        if(valorNumero >= 1 && valorNumero <= 100 && numerosCadastrados.length <= 99) { // Caso o valor do numero esteja entre 1 e 100 e o tamanho do array estja menor que 100
            var validado = numerosCadastrados.includes(valorNumero)
            
            if(validado == false){ // Caso o numero seja valido
                exibir.appendChild(montaOption(`Valor ${valorNumero} adicionado`)) // O exibir ira adicionar como seu filho a função montaOption
        
                numerosCadastrados[indice] = valorNumero // Adiciona no indice que esta vazio o valor do numero digitado
            
                indice++ // Aumenta o valor do indice
                valorDigitado.value = '' // Limpa o input
            } else {
               alert("Erro! Este numero ja existe") 
            }
        }  else {
            alert("Erro! Digite um valor entre 1 e 100!")
        }
}

function montaOption(dado) { // Função para montar o elemento option
    var option = document.createElement("option") // Cria o elemento option
        option.innerHTML = dado // O dado adicionado será o conteudo do option
        
    return option
}