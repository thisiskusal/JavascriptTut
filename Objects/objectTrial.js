let user = {
  name: "John",
  surname: "Smith",
};

document.write("Original: <br>");
printObject(user);

user.name = "Pete";
document.write("<br>After name change: <br>");
printObject(user);

delete user.name;
document.write("<br>After deletion: <br>");
printObject(user);

function printObject(obj){
  for (prop in obj){
    document.write(prop + ": " + obj[prop] + "<br>");
  }
}

function isEmpty(obj){
  return Object.keys(obj).length == 0;
}
