let nome1 = "Daniel Rocha"
let idade1 = "37"
console.log("Seu nome é :" + nome1 + "e sua idade é" + idade1)

let rlSync = require('readline-sync');
let nome2 = rlSync.question("Qual é o seu nome?\n")
console.log(`Olá, ${nome2}`)
let idade2 = rlSync.question("Qual é a sua idade?\n")
console.log(`Sua idade é: ${idade2}`)
console.log(`Seu nome é ${nome2} e sua idade é ${idade2}`)
