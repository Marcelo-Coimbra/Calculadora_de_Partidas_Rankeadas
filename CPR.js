
let vitorias = 100
let derrotas = 8

let saldo = rank(vitorias, derrotas)

function rank(vitorias, derrotas){
    return vitorias - derrotas
}

if(saldo < 10){
   nivel = "Ferro"
}
else if(saldo >= 11 && saldo <= 20){
    nivel = "Bronze"
}
else if(saldo >= 21 && saldo <= 50){
    nivel = "Prata"
}
else if(saldo >= 51 && saldo <= 80){
    nivel = "Ouro"
}
else if(saldo >= 81 && saldo <= 90){
    nivel = "Diamante"
}
else if(saldo >= 91 && saldo <= 100){
    nivel = "Lendário"
}
else if(saldo >= 101){
    nivel = "Imortal"
}

console.log("O Herói tem de saldo de " + saldo + ", e está no nível de " + nivel + "!")