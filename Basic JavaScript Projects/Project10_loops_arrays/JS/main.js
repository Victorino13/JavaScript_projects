//While loop function
function Call_Loop () {
    var Num = "";
    var A = 1;
    while (A < 11) {
        Num += "<br>" + A;
        A++;
    }
    document.getElementById("Loop").innerHTML = Num;
}

//for loop function
var Instruments = ["Guitar, Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop () {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML  =Content;
}

//Array function
function array_Function () {
    var car_color = [];
    car_color[0] = "red";
    car_color[1] = "blue";
    car_color[2] = "black";
    car_color[3] = "white";
    document.getElementById("Array").innerHTML = "The color of my car is" + car_color[3] + ".";
}

function constant_function () {
    const car = {type:"SUV", brand:"Kia", color:"grey"};
    car.type = "sedan";
    car.price = "$30,000";
    document.getElementById("Constant").innerHTML = "The cost of the " + car.brand + car.type + " was " + car.price;
}

var A = 17;
document.write(A);
{
    let A =21;
    document.write(A);
}
document.write("<br>" + A);

//Object with let keyword
let plane = {
    make: "Boeing ",
    model: "737 ",
    year: "2023 ",
    color: "white ",
    description : function () {
        return "The airplane is a" + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Plane_Object").innerHTML = plane.description();