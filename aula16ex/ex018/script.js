var vetorValores = []
var res = document.getElementById('estatisticas')
var soma = 0

function adicionar() {
    var n = Number(document.getElementById('numero').value)

    if (n < 1 || n > 100 || vetorValores.indexOf(n) !== -1) {
        alert('Valor inválido ou já encontrado na lista.')
    } else {
        res.innerHTML = ''
        soma += n
        vetorValores.push(n)

        var valor = document.createElement('option')
        valor.text = `Valor ${n} adicionado.`
        document.getElementById('valores').add(valor)
        res.innerHTML = ''
    }
    numero.value = ''
    numero.focus()
}

function finalizar() {
    if (vetorValores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        vetorValores.sort()
        res.innerHTML = `
        <p>Ao todo, temos ${vetorValores.length} números cadastrados.</p>
        <p>O maior valor informado foi ${vetorValores[vetorValores.length-1]}.</p>
        <p>O menor valor informado foi ${vetorValores[0]}.</p>
        <p>Somando todos os valores, temos ${soma}.</p>
        <p>A média dos valores digitados é ${(soma / vetorValores.length).toFixed(2)}.</p>    
        `
    }
    
}