function somar(argumento1, argumento2) {
  if (typeof argumento1 !== "number" || typeof argumento2 !== "number") {
    return "erro";
  }
  return argumento1 + argumento2;
}

exports.somar = somar;
