function checkPrime(n = 0){
  for (let i = 2; i <= Math.sqrt(n); i++){
    if (n % i == 0){
      return false;
    }
  }
  return true;
}


let checkPrimeRecursively = function(n, i = 2){
  return n == NaN || n <= 0 ? undefined:
          i > Math.sqrt(n) ? true :
          n % i == 0 ? false :
          checkPrimeRecursively(n, i+1);
};

let checkPrimeRecursivelyWithArrow = (n, i = 2) =>
        n == NaN || n <= 0 ? undefined:
        i > Math.sqrt(n) ? true :
        n % i == 0 ? false :
        checkPrimeRecursively(n, i+1);

let sum = (a, b) => a + b;

let x;
while (isNaN(+x)){
  x = +prompt("Enter a number to check if its prime: ");
}
document.write("Checking " + x + "...<br>"
                + "Using iteration: " + checkPrime(x)
                + "<br> Using recursion: " + checkPrimeRecursively(x)
                + "<br> Using recursion and arrows: " + checkPrimeRecursivelyWithArrow(x));

document.write("<br><br>A function has type: " + typeof(checkPrime));

//this prints out the code of the function
alert(checkPrime);
