// JS addition
function addition() {
    var add = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 =" + add;
 }  

 //JS substraction
 function subtraction() {
    var subtract = 5 - 2;
    document.getElementById("Math").innerHTML = "5 - 2 =" + subtract;
 }


// JS multiplication
function multiplication() {
    var multiply = 6 * 8;
    document.getElementById("Math").innerHTML = "6 x 8 = " + multiply;
}

// JS division
function division() {
    var divide = 48 / 6;
    document.getElementById("Math").innerHTML = "48 / 6 = " + divide;
}

// JS multiple operations
function multiple_operation() {
    var multiple = (1 + 2) * 10 /2 - 5;
    document.getElementById("Math").innerHTML = "1 plus 2 multiplied by 10, divided in half and then subtracted by 5 equals " + multiple;
}

// JS modulus operator
function remainder () {
    var modulus = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6, you have a remainder of:" + modulus;
}

// JS unary operator
function unary () {
    var a = 21;
    document.getElementById("Math").innerHTML = "Negation operator" + -a;
}

// JS increment operator
    var b = 15;
    b++;
    document.write(b);

// JS decrement operator
    var c = 10.17;
    c--;
    document.write(c)

// Display random number from 0-1
window.alert(Math.random());

// Display random number from 0-100
window.alert(Math.random() * 100);

// Math object challenge
function object () {
    document.getElementById("Math").innerHTML = Math.PI; // displays PI value
}

// Math.method challenge
function method () {
    document.getElementById("Math").innerHTML = Math.ceil (12.43);
}
