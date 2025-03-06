import obtenerScore from "./puntaje.js";

describe("Marcador de puntaje de tenis", () => {
  it("Deberia devolver el puntaje de ambos jugadores", () => {
    expect(obtenerScore(0,0)).toEqual("love - love");
  });

  it("Deberia devolver el marador 1-0", () => {
    expect(obtenerScore(1,0)).toEqual("15 - 0");
  });

  it("Deberia devolver el marador 2-0", () => {
    expect(obtenerScore(2,0)).toEqual("30 - 0");
  });
  it("Deberia devolver el marador 3-0", () => {
    expect(obtenerScore(3,0)).toEqual("40 - 0");
  });
  
});
