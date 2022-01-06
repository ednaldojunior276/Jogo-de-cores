
function Time()
{
let date =  new Date();
let horas = date.getHours()
let minutos = date.getMinutes()
let segundos = date.getSeconds()
let res = document.querySelector('#res')
res.innerHTML = `${horas}: ${minutos}: ${segundos}`
}
    setInterval(Time, 1000)

let vermelho = document.querySelector('#vermelho')
vermelho.addEventListener('click', () => {
    document.body.style.background = "red"
    
    
})

let amarelo = document.querySelector('#amarelo')
amarelo.addEventListener('click', () => {
    document.body.style.background = "yellow"
})

let branco = document.querySelector('#branco')
branco.addEventListener('click', () => {
    document.body.style.background = "white"

})
let preto = document.querySelector('#preto')
preto.addEventListener('click', () => {
    document.body.style.background = "black"

})

let laranha = document.getElementById('laranja')
laranha.addEventListener('click', () => {
    document.body.style.background = "orange"
})

let verde = document.getElementById('verde')
verde.addEventListener('click', () => {
    document.body.style.background = "green"

})