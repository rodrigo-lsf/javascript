var vetor = [8, 1, 7, 4, 2, 9]
console.log(vetor)

vetor.sort()
console.log(vetor)

for (var i = 0; i < vetor.length; i++) {
    console.log(vetor[i])
}

for (var i in vetor) {
    console.log(vetor[i])
} 

console.log(vetor.indexOf(3))