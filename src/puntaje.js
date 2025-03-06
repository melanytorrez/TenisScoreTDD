// function obtenerScore(jugador1, jugador2) {
//   if (jugador1 === 1 && jugador2 === 0) {
//     return "15 - 0"
//   }
//   if (jugador1 === 2 && jugador2 === 0) {
//     return "30 - 0"
//   }
//   if (jugador1 === 3 && jugador2 === 0) {
//     return "40 - 0"
//   }
//   return "love - love"
// }
function obtenerScore(jugador1, jugador2) {
    if (jugador1==0 &&   jugador2==0) {
      return "love - love";
    }
    const puntuaciones = ["0", "15", "30", "40"];
    return `${puntuaciones[jugador1]} - ${puntuaciones[jugador2]}`;
  }
  

export default obtenerScore;