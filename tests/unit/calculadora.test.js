const calculadora = require("../../models/calculadora");

test("somar 2 + 2 = 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("somar 100 + 5 = 105", () => {
  const resultado = calculadora.somar(100, 5);
  expect(resultado).toBe(105);
});

test("somar banana + 2 = erro", () => {
  const resultado = calculadora.somar("banana", 2);
  expect(resultado).toBe("erro");
});
