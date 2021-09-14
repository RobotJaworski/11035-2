var limiter = 1;
var array = [];
let x = 0;
var z;
var y;
var flag = 0;
do {
  array[x] = parseInt(prompt("Enter Digit"));
  limiter = parseInt(prompt("1. Add \n 2. Stop"));
  x++;
} while (limiter != 2);

const fiveDetector = (item) => {
  z = item % 10;
  y = item / 10;
  if (z == 5) {
    flag++;
  } else if (y == 5) {
    flag++;
  }
};

array.forEach(fiveDetector);

if (flag > 0) {
  alert("!!!!!!");
} else {
  alert("there is no 5 in the array");
}

console.log(array);
