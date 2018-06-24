let calculator = {
  firstNum : 0,
  secondNum: 0,
  read : function(){
    this.firstNum = +prompt("Enter the first number");
    this.secondNum = +prompt("Enter the second number");
  },
  sum : function(){
    return this.firstNum + this.secondNum;
  },
  mul : function(){
    return this.firstNum * this.secondNum;
  },

}


calculator.read();
alert("sum: " + calculator.sum());
alert("mul: " + calculator.mul());
