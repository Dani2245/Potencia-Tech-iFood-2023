partidasRankeadas(120, 9)

function partidasRankeadas(vitorias, derrotas){
  let resultadoPartida = vitorias - derrotas
  

  if (resultadoPartida < 10){
    console.log("Herói tem saldo de " + resultadoPartida + " está no nível de Ferro")
  } else if (resultadoPartida >=11 && resultadoPartida <=20){
    console.log("Herói tem saldo de " + resultadoPartida + " está no nível de bronze")
  } else if(resultadoPartida >=21 && resultadoPartida <=50){
    console.log("Herói tem saldo de " + resultadoPartida + " está no nível de Prata")
  } else if(resultadoPartida >=51 && resultadoPartida <=80){
    console.log("Herói tem saldo de " + resultadoPartida + " está no nível de Ouro");
  } else if (resultadoPartida >=81 && resultadoPartida <= 90){
    console.log("Herói tem saldo de " + resultadoPartida + " está no nível de Diamante")
  }else if (resultadoPartida >=91 && resultadoPartida <= 100){
    console.log("Herói tem saldo de " + resultadoPartida + " está no nível de Lendário")
  }else if (resultadoPartida >= 101){
    console.log("Herói tem saldo de " + resultadoPartida + " está no nível de Imortal")
  }
}