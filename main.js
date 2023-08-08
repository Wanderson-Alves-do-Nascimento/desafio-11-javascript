function helloWorld(){
  let name = prompt("Qual seu nome?");
  alert(`Olá, jovem ${name}!`);
}

function sum(){
  let firstNumber = Number(prompt("Me fala aí um número qualquer?"));
  let secondNumber = Number(prompt("Beleza, pode me falar mais um?"));

  let result = firstNumber + secondNumber;
  alert(`Tu acredita que se somar os dois dá exatamente ${result}?`);
}
function isANumber(){
  let theNumber = prompt(`Me fala aí um número?`);
  
  if (isNaN(Number(theNumber))){
    alert(`Eita, acho ${theNumber} não é um número não, meu chapa.`);
  }else{
    alert(`Agora sim, meu chapa. ${theNumber} é um número, e um dos bons.`);
  };
}
function isAString(){
  let userInput = prompt(`Me passa um valor ou um texto?`);
  if(isNaN(userInput)){
    alert(`O valor ${userInput} é uma string.`)
  }else{
    alert(`O valor ${userInput} não é uma string.`)
  }
}

function isABoolean(){
  let userInput = true;
  let theType = typeof userInput;
  if(theType == 'boolean'){
    alert(`O valor no código é booleano`);
  }else{
    alert(`O valor no código não é booleano`);
  }

}

function sub(){
  let firstNumber = Number(prompt("Me fala aí um número qualquer?"));
  let secondNumber = Number(prompt("Beleza, pode me falar mais um?"));

  let result = firstNumber - secondNumber;
  alert(`Tu acredita que se subtrair os dois dá exatamente ${result}?`);
}
function multi(){
  let firstNumber = Number(prompt("Me fala aí um número qualquer?"));
  let secondNumber = Number(prompt("Beleza, pode me falar mais um?"));

  let result = firstNumber * secondNumber;
  alert(`Tu acredita que se multiplicar os dois dá exatamente ${result}?`);
}
function div(){
  let firstNumber = Number(prompt("Me fala aí um número qualquer?"));
  let secondNumber = Number(prompt("Beleza, pode me falar mais um?"));

  let result = firstNumber / secondNumber;
  alert(`Tu acredita que se dividir os dois dá exatamente ${result}?`);
}

function isEven(){
  let inputValue = Number(prompt(`Me passa um número?`));
  let isEvenNumber = inputValue % 2;
  if(isEvenNumber == 0){
    alert(`O número informado é par.`);
  }else{
    alert(`O número informado não é par.`);
  }
}
function isOdd(){
  let inputValue = Number(prompt(`Me passa um número?`));
  let isEvenNumber = inputValue % 2;
  if(isEvenNumber != 0){
    alert(`O número informado é ímpar.`);
  }else{
    alert(`O número informado não é ímpar.`);
  }
}