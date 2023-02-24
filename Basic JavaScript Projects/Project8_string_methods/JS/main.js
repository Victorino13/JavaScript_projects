// Concatenate
function sentence () {
    var sen1 = "Have";
    var sen2 = " a";
    var sen3 = " good";
    var sen4 = " day!";
    var full = sen1.concat(sen2, sen3, sen4);
    document.getElementById("Concatenate").innerHTML = full;
}

// Slice method
function Slice_method () {
    var Sent = "Love is all that matters"
    var Section = Sent.slice(12, 17);
    document.getElementById("Slice").innerHTML = Section;
}

//toUpperCase() method - converts a string to uppercase letters
function count () {
    var text = " one two three"
    var result = text.toUpperCase();
    document.getElementById("Upper").innerHTML = result;
}

//search() method - matches a string againts a regular expression
function position () {
    var inter = "Hi, my name is Victorino"
    var final = inter.search("Victorino");
    document.getElementById("search").innerHTML = final;
}

//Number method - string method - assignment
function string_Method () {
    var N = 7;
    document.getElementById("Numbers_to_string").innerHTML = N.toString();
}

//To precision method 
function precision_Method () {
    var O = 201.7415865489
    document.getElementById("precision").innerHTML = O.toPrecision(6);
}

//toFixed () Method - converts a number to string. 
//                  - rounds the string to a specified number of decimals.
function fix () {
    var man = 342.4567299328;
    document.getElementById("fixed").innerHTML = man.toFixed(3);
}

//valueOf () Method = returns the primitive value of a string.
//                  - does not change the original string
//                  - can be used to convert a string object into string.
function value_Method () {
    var text22 = "Victorino Palacio";
    var result1 = text22.valueOf();
    doocument.getElementById("return").innerHTML = result1;
}