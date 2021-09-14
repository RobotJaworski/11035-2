
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }




function sum(){
    var x = parseFloat(document.getElementById("firstNumber").value); 
    var y = parseFloat(document.getElementById("secondNumber").value); 
    var result = x + y;
    document.getElementById("result").innerHTML = " Result : "+ String(result);
}

function sub(){
    var x = parseFloat(document.getElementById("firstNumber").value); 
    var y = parseFloat(document.getElementById("secondNumber").value); 
    var result = x - y;
    document.getElementById("result").innerHTML = " Result : "+ String(result);

}

function mult(){
    var x = parseFloat(document.getElementById("firstNumber").value); 
    var y = parseFloat(document.getElementById("secondNumber").value); 
    var result = x * y;
    document.getElementById("result").innerHTML = " Result : "+ String(result);
}

function div(){
    var x = parseFloat(document.getElementById("firstNumber").value); 
    var y = parseFloat(document.getElementById("secondNumber").value); 
    var result = x / y;
    document.getElementById("result").innerHTML = " Result : "+ String(result);
}
