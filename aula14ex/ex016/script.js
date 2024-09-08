function contar() {
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var resultado = window.document.getElementById('resultado')

    resultado.innerHTML = 'Contando...'

    if (passo == 0) {
        alert('Passo inválido! Considerando PASSO 1')
        passo = 1
    }

    if ((inicio == 0) || (fim == 0)) {
        resultado.innerHTML = 'Impossível contar!'
    } else {
        if (inicio < fim) {
            for (c = inicio; c <= fim; c += passo) {
                resultado.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for (c = inicio; c >= fim; c -= passo)
                resultado.innerHTML += `${c} \u{1F449}`
        }
    }

    resultado.innerHTML += `\u{1F3C1}`
}