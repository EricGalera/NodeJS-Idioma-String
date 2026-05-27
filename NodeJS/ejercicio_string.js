const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fraseBase = "Ingresar a Node.js YA";

rl.question(`Ingrese una frase (${fraseBase}): `, (respuesta) => {
  const frase = respuesta.trim() === "" ? fraseBase : respuesta;

  console.log("\nFrase ingresada:", frase);
  console.log("Longitud de la frase:", frase.length);

  console.log("\nCaracteres por posicion:");
  for (let posicion = 0; posicion < frase.length; posicion++) {
    console.log(`Posicion ${posicion}: ${frase.charAt(posicion)}`);
  }

  console.log("\nEjemplos solicitados:");
  console.log("frase.charAt(0):", frase.charAt(0));
  console.log("frase.charAt(1):", frase.charAt(1));
  console.log("frase.charAt(frase.length - 1):", frase.charAt(frase.length - 1));

  rl.close();
});
