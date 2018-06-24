"use strict";

function Calculator(){
  this.methods = {
  }

  this.calculate = function(str){
    let parts = str.split(' ');
    let firstVal = +parts[0];
    let operator = parts[1];
    let secondVal = +parts[2];

    return this.methods[operator](firstVal,secondVal);
  }

  this.addMethod = function(name, func){
    this.methods[name] = func;
  }
}

let powerCalc = new Calculator;
powerCalc.addMethod("+", (a, b) => a + b);
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
alert(powerCalc.calculate("2 ** 3"))
