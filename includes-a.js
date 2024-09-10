function contLetrasA(palavraCont) {
    palavraCont = palavraCont.toLowerCase();
    let cont = 0;
  
    for (let i = 0; i < palavraCont.length; i++) {
      if (palavraCont[i] === 'a') {
        cont++;
      }
    }
  
    return cont;
  }
  
  let palavraVerificada;
  do {
    palavraVerificada = prompt("Digite uma palavra (somente letras):");
  
    if (!isNaN(parseInt(palavraVerificada))) {
      alert("Por favor, digite somente letras:");
    }
  } while (!/^\p{L}+$/u.test(palavraVerificada) || !isNaN(parseInt(palavraVerificada)));
  
  const quantA = contLetrasA(palavraVerificada);
  
  if (quantA > 0) {
    alert(`A letra 'a' aparece ${quantA} vezes na palavra ${palavraVerificada}.`);
  } else {
    alert(`A letra 'a' não foi encontrada na palavra ${palavraVerificada}.`);
  }