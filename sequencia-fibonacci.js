function pertenceFibonacci(numero) {
    let a = 0;
    let b = 1;
  
    while (b <= numero) {
      if (b === numero) {
        return true;
      }
      let temp = b;
      b = a + b;
      a = temp;
    }
  
    return false;
}
  
  let numeroSolicitado;

do {
    numeroSolicitado = parseInt(prompt("Digite um número para verificar se o mesmo está contido na sequência de Fibonacci:"));
    if (isNaN(numeroSolicitado)) {
        alert("Digite um número válido!");
    }
} while (isNaN(numeroSolicitado));

if (pertenceFibonacci(numeroSolicitado)) {
    alert(numeroSolicitado + " está contido na sequência de Fibonacci.");
} else {
    alert(numeroSolicitado + " não está contido na sequência de Fibonacci.");
}