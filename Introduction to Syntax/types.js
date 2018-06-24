let message = "what";
alert('\'' + message + '\' is a ' + typeof(message));

let inf = Infinity;
alert('\'' + inf + '\' is a ' + typeof(inf));

let obj = []
alert('\'' + obj + '\' is a ' + typeof(obj));

let bool = false;
alert('\'' + bool + '\' is a ' + typeof(bool));

let nothing = null;
alert('\'' + nothing + '\' is a ' + typeof(nothing));

let undef;
alert('\'' + undef + '\' is a ' + typeof(undef));

document.write(
  "<h2>Boolean()<br></h2>" +
  0 + ": " + Boolean(0) + "<br>" +
  undefined + ": " + Boolean(undefined) + '<br>' +
  null + ": " + Boolean(null) + '<br>' +
  NaN + ": " + Boolean(NaN) + '<br>' +
  "\"\"" + ": " + Boolean("") + "<br>" +
  "Everything else is true"
);

document.write(
  "<h2>String()<br></h2>" +
  0 + ": " + String(0) + "<br>" +
  undefined + ": " + String(undefined) + '<br>' +
  null + ": " + String(null) + '<br>' +
  NaN + ": " + String(NaN) + '<br>' +
  "\"\"" + ": " + String("") + "<br>" +
  false + ": " + String(false)
);

document.write(
  "<h2>Number()<br></h2>" +
  0 + ": " + Number(0) + "<br>" +
  undefined + ": " + Number(undefined) + '<br>' +
  null + ": " + Number(null) + '<br>' +
  NaN + ": " + Number(NaN) + '<br>' +
  false + ": " + Number(false) + '<br>' +
  true + ": " + Number(true) + '<br>' +
  "\"\"" + ": " + Number("") + "<br>" +
  "   123   " + ": " + Number("   123   ") + "<br>" +
  "   123  5 " + ": " + Number("   123  5 ") + "<br>" +
  "   123z   " + ": " + Number("   123z   ") + "<br>" +
  "The operator +whatever does the same thing as Number(whatever)"
);

document.write(
  "<h2>Arithmetic between types<br></h2>" +
  "\"\" + 1 + 0" + ": " + ("" + 1 + 0) + "<br>" +
  "\"\" - 1 + 0" + ": " + ("" - 1 + 0) + "<br>" +
  "true + false" + ": " + (true + false) + "<br>" +
  "6 / \"3\"" + ": " + (6 / "3") + "<br>" +
  "\"2\" * \"3\"" + ": " + ("2" * "3") + "<br>" +
  "4 + 5 + \"px\"" + ": " + (4 + 5 + "px") + "<br>" +
  "\"$\" + 4 + 5" + ": " + ("$" + 4 + 5) + "<br>" +
  "\"4\" - 2" + ": " + ("4" - 2) + "<br>" +
  "\"4px\" - 2" + ": " + ("4px" - 2) + "<br>" +
  "7 / 0" + ": " + (7 / 0) + "<br>" +
  "\"  -9\n\" + 5" + ": " + ("  -9\n" + 5) + "<br>" +
  "\"  -9\n\" - 5" + ": " + ("  -9\n" - 5) + "<br>" +
  "null + 1" + ": " + (null + 1) + "<br>" +
  "undefined + 1" + ": " + (undefined + 1)
);