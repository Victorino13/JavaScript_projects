//Global variable
var A = 21;
function Add_1 () {
    document.write(17 + A + "<br>");
}
function Add_2 () {
    document.write(A + 79);
}
Add_1();
Add_2();

//Local variable
function Subt_1 () {
    var B = 7;
    document.write(10 - B + "<br>");
}
function Subt_2 () {
    document.write(B - 3);
}
Subt_1();
Subt_2();

//Error on console - X not defined
function Add1 () {
    var X = 20
    console.log(10 + X + "<br>");
}
function Add2 () {
    console.log(20 + X);
}
Add1();
Add2();

//Method Assignment
function get_Date () {
    if (new Date().getHours() < 17) {
        document.getElementById("Greeting").innerHTML = "How may I help you?";
    }
}

//If and Else statement assignment
function Bar () {
    var Age
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        document.getElementById("allow").innerHTML = "You are allowed to enter the Bar!";
    }
    else {
        document.getElementById("allow").innerHTML = "Must be at least 18 years old to enter the bar"
    }
}

//ElseIf Assignment
function Time_function () {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time <18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}