var num = [7, 3, 6, 4];
 

    function promedio(valor) {
        let suma = 0;
        let prom;
        for (let i = 0; i < valor.length; i++) {
          suma = valor[i] + suma;
        }
        prom = suma / valor.length;
        console.log(" la suma es " + suma + " y el promedio es " + prom);
      }

  

  promedio(num);