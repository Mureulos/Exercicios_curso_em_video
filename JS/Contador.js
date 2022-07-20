var btnContador = document.getElementById("Verificar")
btnContador.addEventListener("click", contar)

var textoForm = document.getElementById("txtForm")

var form = document.getElementById("formulario")

/*  var sla
    sla.setAttribute ('*nome do atributo*', '*nome para o atributo*') */ 

function contar(event) {
    event.preventDefault() // Impede o formulario de executar a sua ação padrão (enviar e recarregar a pagina)

    var sInicio = document.getElementById("inpInicio") // Adiciona na variavel o elemento com id: "inpInicio"
        var inicio = Number.parseInt(sInicio.value) // Adiciona adiciona na variavel o valor de "sInicio" convertido para Number (pois era uma String)

    var sFim = document.getElementById("inpFim")
        var fim = Number.parseInt(sFim.value)
    
    var sPasso = document.getElementById("inpPasso")
        var passo = Number.parseInt(sPasso.value)
    
    if (inicio >= 0 && fim >= 0 && passo >= 0) { // Caso os valores de inicio, fim ou passo sejam maiores ou iguais a 0
        textoForm.innerHTML = ""
        
        if (fim > inicio) { // Caso o fim seja maior que o inicio (normal)
            for(var i = inicio; i < fim; i += passo) {
                textoForm.innerHTML += `${i} \u{1F449}` // Concatena no texto do formulario o valor do indice
            }
        } else if (inicio > fim) { // Caso o inicio seja maior que o fim (exceção)
            for(var i = inicio; i > fim; i -= passo) { // Caso o inicio seja maior que o fim (exceção)
                textoForm.innerHTML += `${i} \u{1F449}`
            }
        }
        
        textoForm.innerHTML += "\u{1F3C1}"

    } else { // Caso condição não seja seguida
        alert("Erro! Digite os dados")
    }
   
}