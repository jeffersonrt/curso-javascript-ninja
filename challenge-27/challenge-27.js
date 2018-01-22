(function(){
  'use-strict';



/*
Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
métodos semelhantes aos que existem no array, mas que sirvam para os
elementos do DOM selecionados.
Crie os seguintes métodos:
- forEach, map, filter, reduce, reduceRight, every e some.

Crie também métodos que verificam o tipo do objeto passado por parâmetro.
Esses métodos não precisam depender de criar um novo elmento do DOM, podem
ser métodos estáticos.

Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
no objeto, como nos exemplos abaixo:
DOM.isArray([1, 2, 3]); // true
DOM.isFunction(function() {}); // true
DOM.isNumber('numero'); // false

Crie os seguintes métodos para verificação de tipo:
- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
O método isNull deve retornar `true` se o valor for null ou undefined.
*/



function DOM(element){
  this.element = document.querySelectorAll(element);
}

DOM.prototype.on = function on(myEvent, callback){
  Array.prototype.forEach.call(this.element, function(node){
    node.addEventListener(myEvent, callback, false);
  });
}

DOM.prototype.off = function off(myEvent, callback){
  Array.prototype.forEach.call(this.element, function(node){
    node.removeEventListener(myEvent, callback, false);
  });
}

DOM.prototype.get = function get(){
  return this.element;
}

// DOM.prototype.forEach = function forEach(callback){
//   Array.prototype.forEach.call(this.element, function(current, index, array){
//     return callback(current, index, array );
//   });
// }


DOM.prototype.forEach = function forEach(){
  return Array.prototype.forEach.apply(this.element, arguments);
}

DOM.prototype.map = function map(){
  return Array.prototype.map.apply(this.element, arguments);
}

// DOM.prototype.map = function map(callback){
//   return Array.prototype.map.call(this.element, function(current, index, array){
//     return callback(current, index, array );
//   });
// }

DOM.prototype.filter = function filter(){
  return Array.prototype.filter.apply(this.element, arguments);
}

DOM.prototype.reduce = function reduce(){
  return Array.prototype.reduce.apply(this.element, arguments);
}

DOM.prototype.reduceRight = function reduceRight(){
  return Array.prototype.reduceRight.apply(this.element, arguments);
}

DOM.prototype.some = function some(){
  return Array.prototype.some.apply(this.element, arguments);
}

DOM.prototype.every = function every(){
  return Array.prototype.every.apply(this.element, arguments);
}

DOM.prototype.isArray = function isArray( arg ){
  return Object.prototype.toString.call( arg ) === '[object Array]';
};

DOM.prototype.isObject = function isObject( arg ){
  return Object.prototype.toString.call( arg ) === '[object Object]';
};

DOM.prototype.isFunction = function isFunction( arg ){
  return Object.prototype.toString.call( arg ) === '[object Function]';
};

DOM.prototype.isNumber = function isNumber( arg ){
  return Object.prototype.toString.call( arg ) === '[object Number]';
};

DOM.prototype.isString = function isString( arg ){
  return Object.prototype.toString.call( arg ) === '[object String]';
};

DOM.prototype.isBoolean = function isBoolean( arg ){
  return Object.prototype.toString.call( arg ) === '[object Boolean]';
};

DOM.prototype.isNull = function isNull( arg ){
  return Object.prototype.toString.call( arg ) === '[object Null]' || Object.prototype.toString.call( arg ) === '[object Undefined]';
};


// var dom = new DOM();
// console.log(DOM.prototype.isArray([1,2,3]));
// console.log(dom.isArray([1,2,3]));



// var $a = new DOM('[data-js="link"]');
// $a.forEach(function(current, index, array) {
//   console.log('current: ', current.innerHTML);
//   console.log('index: ', index);
//   console.log('array: ', array);
// });



// var mapReturn = $a.map(function(current, index, array) {
//   console.log('current: ', current.innerHTML);
//   console.log('index: ', index);
//   console.log('array: ', array);
//
//   return current.innerHTML + index;
// });
//
// console.log(mapReturn);


// var filterReturn = $a.filter(function(current, index, array) {
//   return index > 1;
// });
//
// console.log(filterReturn);




})();
