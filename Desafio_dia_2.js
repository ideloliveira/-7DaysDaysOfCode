prompt = require('prompt-sync')();

let nome = prompt("qual é seu nome? ");
let idade = prompt("Quantos anos você tem? ")
let linguagem = prompt("Qual linguagem de programação voce está estudando? ");
let i = 0
console.clear();

console.log(`"Olá ${nome} você tem ${idade} anos e já está aprendendo ${linguagem}!"`);

let simNao = prompt("Você gosta de estudar "+ linguagem + "? Responda com o número 1 para Sim ou 2 para Não. ");

while(i == 0){
    
    if(simNao == 1){
        console.log("Muito bom! Continue estudando e você terá muito sucesso.");
        i = 1
    }else if(simNao == 2){
        console.log("Ahh que pena.... Já tentou aprender outras linguagens?");
        i = 1
    }else{
        
        console.log("Há algo errado com sua resposta!");
        simNao = prompt(`"Você gosta de estudar ${linguagem}? Responda com o número 1 para Sim ou 2 para Não."`);
    }
}