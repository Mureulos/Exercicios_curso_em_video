var horario = new Date()
var hora = horario.getHours() // Salvando o horario na variavel hora

var body = document.querySelector("body")
var subtitulo = document.querySelector(".subtitulo")

var botao1 = document.getElementById("btn1")
var botao2 = document.getElementById("btn2")
var botao3 = document.getElementById("btn3")


if (hora >= 6 && hora <= 12){
    subtitulo.innerHTML = `Bom dia! Agora são: ${hora}`
    body.style.backgroundColor = "#ffc64a"

    botao1.style.backgroundColor = "#ffc64a"
    botao2.style.backgroundColor = "#ffc64a"
    botao3.style.backgroundColor = "#ffc64a"
} 

else if (hora <= 18) {
    subtitulo.innerHTML = `Boa tarde! Agora são: ${hora}`
    body.style.backgroundColor = "#f36d00"

    botao1.style.backgroundColor = "#f36d00"
    botao2.style.backgroundColor = "#f36d00"
    botao3.style.backgroundColor = "#f36d00"
} 

else if (hora < 24 || hora == 0) {
    subtitulo.innerHTML = `Boa noite! Agora são: ${hora}`
    body.style.backgroundColor = "#11052e"

    botao1.style.backgroundColor = "#11052e"
    botao2.style.backgroundColor = "#11052e"
    botao3.style.backgroundColor = "#11052e"
} 

else {
    subtitulo.innerHTML = `Boa madrugada! Agora são: ${hora}`
    body.style.backgroundColor = "#38363b"

    botao1.style.backgroundColor = "#38363b"
    botao2.style.backgroundColor = "#38363b"
    botao3.style.backgroundColor = "#38363b"
}