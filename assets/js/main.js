function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

console.log(criaHoraDosSegundos(10))

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;

function iniciaRelogio() {
    const timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000)
}

iniciar.addEventListener('click', function(event) {
    iniciaRelogio();
});
pausar.addEventListener('click', function(event) {
    relogio.innerHTML = 'Cliquei no pausar';
});
zerar.addEventListener('click', function(event) {
    relogio.innerHTML = 'Cliquei no zerar';
});