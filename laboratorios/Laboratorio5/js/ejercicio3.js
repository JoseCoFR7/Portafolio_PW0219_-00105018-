var num = [1,2,3,4,5,5,5,5,6,7,8,9];
  
  function ocurrencia(valor, evaluar) {
    let cont = 0;
    for (let i = 0; i < evaluar.length; i++) {
      if (evaluar[i] == valor) {
        cont = cont + 1;
      }
    }
    console.log(`El numero es: ${valor} se repite: ${cont} veces` );
}
ocurrencia(5,num);