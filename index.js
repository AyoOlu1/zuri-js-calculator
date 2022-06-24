alert("Welcome");

// console.log(num1, num2);
while (true) {
  var input = prompt(
    "Select any number corresponding to each operation: \n1. Addition \n2. Subtraction \n3. Multiplication \n4.Division"
  );

  var num1 = prompt("Enter the first number");
  var num2 = prompt("Enter the second number");

  // Select any operations

  // addition
  if (input === "1") {
    var add = parseInt(num1) + parseInt(num2);
    alert(`The result is ${add}`);
  }

  //   subtraction
  else if (input === "2") {
    var subtract = parseInt(num1) - parseInt(num2);
    alert(`The result is ${subtract}`);
  }

  // multiplication
  else if (input === "3") {
    var multiply = parseInt(num1) * parseInt(num2);
    alert(`The result is ${multiply}`);
  }
  //   division
  else if (input === "4") {
    var divide = parseInt(num1) / parseInt(num2);
    alert(`The result is ${divide}`);
  }

  var replay = prompt("Do you want to continue: yes/no");
  if (replay === "yes") {
    continue;
  } else {
    break;
  }
}
