let jogador = {
    nome: "Rodrigo", 
    XP : 0,
};

let nivel = "";

if (jogador.XP <= 1000) {
    nivel = "Ferro";
} else if (jogador.XP <= 2000) {
    nivel = "Bronze";
} else if (jogador.XP <= 5000) {
    nivel = "Prata";
} else if (jogador.XP <= 7000) {
    nivel = "Ouro";
} else if (jogador.XP <= 8000) {
    nivel = "Platina";
} else if (jogador.XP <= 9000) {
    nivel = "Ascendente";
} else if (jogador.XP <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

console.log("O heroi de nome " + jogador.nome + " está no nível de " + nivel);
