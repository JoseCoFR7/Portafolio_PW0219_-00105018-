function palindromo(palabra) {
    palabra = palabra.toLowerCase();
    if(Array.from(palabra).toString()=== Array.from(palabra).reverse().toString()){
        console.log("La palabra es palindrome!");
    }
    else{
        console.log("La palabra no es palindrome :<");
    }

  }

  palindromo("rotomotor");