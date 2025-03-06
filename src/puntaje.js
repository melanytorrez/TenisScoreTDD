function obtenerScore(jugador1, jugador2) {
  if (jugador1 === 1 && jugador2 === 0) {
    return "15 - 0"
  }
  if (jugador1 === 2 && jugador2 === 0) {
    return "30 - 0"
  }
  return "love - love"
}


export default obtenerScore;