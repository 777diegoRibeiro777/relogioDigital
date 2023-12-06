const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')
const data = document.getElementById('date')
const periodos = document.getElementById('periodo')

function adicionarZero(value) {
    return (value < 10) ? "0" + value : value.toString();
}

function obterDataAtual() {
    // Obter a data atual do sistema
    const dataAtual = new Date().toLocaleDateString();

    // Retornar a data formatada
    return dataAtual;
}


const relogio = () => {
    let dataHoje = new Date();
    let hora = adicionarZero(dataHoje.getHours());
    let minuto = adicionarZero(dataHoje.getMinutes());
    let segundo = adicionarZero(dataHoje.getSeconds());
    let periodo = obterPeriodo(hora);
    
    horas.textContent = hora
    minutos.textContent = minuto
    segundos.textContent = segundo
    periodos.textContent = periodo

}

function obterPeriodo(hora) {
    return hora < 12 ? "AM" : "PM";
}

const calendario = () => {
    let dataAtual = obterDataAtual();
    
    data.textContent = dataAtual
}

setInterval(relogio, 1000);

calendario()
relogio()