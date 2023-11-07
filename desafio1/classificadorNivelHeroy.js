let heroi = [
    ["Lagartixa Sem Capa", 9000]
]

if (heroi[0][1] < 1000) {
    console.log("O Herói de nome " + heroi[0][0] + " está no nível Ferro")
} else if (heroi[0][1] >= 1001 & heroi[0][1] <= 2000) {
    console.log("O Herói de nome " + heroi[0][0] + " está no nível Bronze.")
} else if (heroi[0][1] >= 2001 & heroi[0][1] <= 5000) {
    //aqui creio que há um erro no enunciado, pois há um intervalo -5001 a 6000- sem qualificação.
    console.log("O Herói de nome " + heroi[0][0] + " está no nível Prata.")
} else if (heroi[0][1] >= 6001 & heroi[0][1] <= 7000) {
    console.log("O Herói de nome " + heroi[0][0] + " está no nível Ouro.")
} else if (heroi[0][1] >= 7001 & heroi[0][1] <= 8000) {
    console.log("O Herói de nome " + heroi[0][0] + " está no nível Platina.")
} else if (heroi[0][1] >= 8001 & heroi[0][1] <= 9000) {
    console.log("O Herói de nome " + heroi[0][0] + " está no nível Ascendente.")
} else if (heroi[0][1] >= 9001 & heroi[0][1] <= 10000) {
    console.log("O Herói de nome " + heroi[0][0] + " está no nível Imortal.")
} else {
    console.log("O Herói de nome " + heroi[0][0] + " está no nível Radiante.")
}
