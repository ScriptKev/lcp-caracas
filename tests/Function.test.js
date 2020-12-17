describe('Pruebas de una funcion de javascript', () => {
  test('Deberia sumar y regresar un numero', () => {
    const sum = (a, b) => a + b

    expect(sum(1, 1)).toBe(2)
  })
});
