function Accumulator(startingValue = 0){
  this.value = startingValue;

  this.read = function(){
    this.value += +prompt("Value to add: ", 0);
  }
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert("Current value: " + accumulator.value);
