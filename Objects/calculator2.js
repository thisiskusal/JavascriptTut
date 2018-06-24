function Calculator(){
  this.firstNum = 0;
  this.secondNum = 0;

  this.read = function(){
    this.firstNum = +prompt("Enter the first num: ");
    this.secondNum = +prompt("Enter the second num: ");
  }
  this.sum = function(){
    return this.firstNum + this.secondNum;
  }
  this.mul = function(){
    return this.firstNum * this.secondNum;
  }

  return this;
}


let calc = new Calculator();

calc.read();
alert("Sum: " + calc.sum());
alert("Mul: " + calc.mul());
