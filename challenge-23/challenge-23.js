(function(window, document){
    'use strict';
    /*
    Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
    As regras são:

    - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
    diretamente;
    - O input deve iniciar com valor zero;
    - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
    - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
    multiplicação(x) e divisão(÷);
    - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
    que irá limpar o input, deixando-o com valor 0;

    - A cada número pressionado, o input deve atualizar concatenando cada valor
    digitado, como em uma calculadora real;
    - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
    operação no input. Se o último caractere no input já for um símbolo de alguma
    operação, esse caractere deve ser substituído pelo último pressionado.
    Exemplo:
    - Se o input tem os valores: "1+2+", e for pressionado o botão de
    multiplicação (x), então no input deve aparecer "1+2x".
    - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
    input;
    - Ao pressionar o botão "CE", o input deve ficar zerado.
    */

    var $btnNumbers = document.querySelectorAll('[data-js="numbers"]');
    var $btnOperators = document.querySelectorAll('[data-js="operator"]');
    var $btnCE = document.querySelector('[data-js="ce"]');
    var $btnEqual = document.querySelector('[data-js="result"]');
    var $inputResult = document.querySelector('[type="text"]');
    var operators = [];

    Array.prototype.forEach.call( $btnNumbers, function(button){
      button.addEventListener('click', handleClickNumber);
    });

    Array.prototype.forEach.call( $btnOperators, function(button){
      operators.push(button.innerText);
      button.addEventListener('click', handleClickOperator);
    });

    $btnCE.addEventListener('click', cleanInput);

    $btnEqual.addEventListener('click', handleClickEqual);

    function handleClickNumber(){
      if($inputResult.value === "0")
        $inputResult.value = "";
      $inputResult.value +=  this.innerText;
    }

    function handleClickOperator(){
      removeLastItemOperator($inputResult.value);
      $inputResult.value += this.innerText;
    }

    function isLastItemAnOperator(number){
      var lastItem = getLastItem(number);
      return operators.some(function(operator){
        return operator === lastItem;
      });
    }

    function getLastItem(number){
      return number.split('').pop()
    }

    function removeLastItemOperator(number){
      if(isLastItemAnOperator(number))
        return number.slice(0, -1);
      return number;
    }

    function handleClickEqual(){
      var allValues = $inputResult.value.match(/(\d+)([+x÷\-])?/g);
      calculate(allValues);
    }

    function calculate(values){
      $inputResult.value = values.reduce(function(accumulated, current, index, array){
        var operator = getLastItem(accumulated);
        var firstValue = Number(removeLastItemOperator(accumulated));
        var nextValue = Number(removeLastItemOperator(current));

        return getOperation(operator, firstValue, nextValue);

      });
    }

    function cleanInput(){
      $inputResult.value = 0;
    }

    function getOperation(operator, fisrtValue, nextValue ){
      switch (operator) {
        case "+":
        return fisrtValue + nextValue;
        case "-":
        return fisrtValue - nextValue;
        case "x":
        return fisrtValue * nextValue;
        case "÷":
        return fisrtValue / nextValue;
      }
    }

})(window, document);
