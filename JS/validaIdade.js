var btnVerificar = document.getElementById("Verificar")
btnVerificar.addEventListener("click", validaIdade)


function validaIdade(event) {

    event.preventDefault()

    var data = new Date()
        var dataAtual = data.getFullYear()

    var nasc = document.getElementById("inpNasc").value
        var idade = parseInt(dataAtual) - nasc

    var escolha = document.getElementsByClassName("inpSexo");

    
        if (escolha[0].checked) {
            var sexo = "Homem"

            if (idade <= 59) {
                var faixaEtaria = "adulto"
            } else if (idade > 59) {
                var faixaEtaria = "idoso"
            } 

        } else if (escolha[1].checked) {
            var sexo = "Mulher"

            if (idade <= 59) {
                var faixaEtaria = "adulta"
            } else if (idade > 59) {
                var faixaEtaria = "idosa"
            }

        } else {
            var sexo = ""
        }


        if (idade <= 3) {
            var faixaEtaria = "bebê"

        } else if (idade <= 11) {
            var faixaEtaria = "criança"
            
        } else if (idade <= 17) {
            var faixaEtaria = "jovem"

        } else if (sexo == "") {
            faixaEtaria = "erro"

        } 


    var textoForm = document.getElementById("txtForm")
            textoForm.style.textAlign = 'center'

    var img = document.getElementById("imagem")
            img.style.width = "256px"
                img.style.height = "256px"


    if (nasc > dataAtual || nasc == "" || sexo == "" || faixaEtaria == "erro") {
        textoForm.innerHTML = `Preencha os dados acima para ver o resultado!`
            textoForm.style.textAlign = 'left'

                alert("Erro! Verifique os dados e tente novamente.")
        
        img.style.width = "0"
            img.style.height = "0"
    }

    else if (faixaEtaria == "idoso") {
        textoForm.innerHTML = `Detectamos um homem ${faixaEtaria} com ${idade} anos.`
            img.src ='IMG/homem-idoso.jpg'
    }

    else if (faixaEtaria == "idosa") {
        textoForm.innerHTML = `Detectamos uma mulher ${faixaEtaria} com ${idade} anos.`
            img.src ='IMG/mulher-idosa.jpg'
    }
    
    else if (faixaEtaria == "adulto") {
        textoForm.innerHTML = `Detectamos um homem ${faixaEtaria} com ${idade} anos.`
            img.src ='IMG/homem-adulto.jpg'
    }
    
    else if (faixaEtaria == "adulta") {
        textoForm.innerHTML = `Detectamos uma mulher ${faixaEtaria} com ${idade} anos.`
            img.src ='IMG/mulher-adulta.jpg'
    }

    else if (sexo == "Homem" && faixaEtaria == "jovem") {
        textoForm.innerHTML = `Detectamos um ${faixaEtaria} com ${idade} anos.`
            img.src ='IMG/menino-jovem.jpg'
    }

    else if (sexo == "Mulher" && faixaEtaria == "jovem") {
        textoForm.innerHTML = `Detectamos uma ${faixaEtaria} com ${idade} anos.`
            img.src = 'IMG/menina-jovem.jpg'
    }

    else if (faixaEtaria == "criança") {
        textoForm.innerHTML = `Detectamos uma ${faixaEtaria} com ${idade} anos.`
            img.src = 'IMG/crianca.jpg'
    } 
    
    else if (faixaEtaria == "bebê") {
        textoForm.innerHTML = `Detectamos um ${faixaEtaria} com ${idade} anos.`
            img.src = 'IMG/bebe.jpg'
    }
}