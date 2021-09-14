var Operation = prompt("Select Operation \n 1. Addition \n 2. Subtraction \n 3. Multiplication \n 4. Division ");
var x = parseFloat(prompt("Input first Digit"));
var y = parseFloat(prompt("Input second Digit"));
var result;

switch(Operation){
    case "1":
        result = x + y;
        alert("Result: " + result);
        break;
    case "2":
        result = x - y;
        alert("Result: " + result);
        break;
    case "3":
        result = x * y;
        alert("Result: " + result);
        break;
    case "4":
        result = x / y;
        alert("Result: " + result);
        break;
}

