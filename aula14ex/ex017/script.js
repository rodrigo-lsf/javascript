function calcular() {
    var numero = Number(document.getElementById('numero').value)
    var tabuada = document.getElementById('tabuada')

    tabuada.innerHTML = ''

    if (numero == 0) {
        alert('Por favor, digite um número!')
    } else {
        for (var c = 1; c <= 10; c++) {
            var option = document.createElement('option')
            option.text = `${numero} x ${c} = ${numero * c}`
            tabuada.add(option)
        }
    }
}