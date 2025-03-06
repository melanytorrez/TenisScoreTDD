import puntuacion from "./puntaje.js";

describe("Marcador de puntaje de tenis", () => {
  it("Deberia devolver el puntaje de ambos jugadores", () => {
    expect(puntuacion(0,0)).toEqual("love - love");
  });
});
