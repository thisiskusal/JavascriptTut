"use strict";

let x = +prompt("What is 2 + 2, buddy?");

document.write("<h5>Using if-else-elseif:</h5>");
if (x == 4) {
  document.write("Correct! 2 + 2 is 4");
} else if (x == 5 || x == 3) {
  document.write("Incorrect, but close!");
} else {
  document.write("Go back to school, kid :/");
}

document.write("<br><h5>Using switch</h5>");
switch (x) {
  case 4:
    document.write("Correct! 2 + 2 is 4");
    break;
  case 5:
  case 3:
    document.write("Incorrect, but close!");
    break;
  default:
    document.write("Go back to school, kid :/");
    break;
}