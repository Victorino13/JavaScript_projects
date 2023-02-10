//displaying type of 
document.write(typeof false);
document.write(typeof 27.22);

//displaying
document.write("30" + 8);

//displaying positive and negative infinity
function infinity () {
document.getElementById("positive").innerHTML = 2e310;
document.getElementById("negative").innerHTML = -2e310;
}

//boolean sample - true and false
document.write(2 > 1);
document.write(13 < 9);

//Displaying math result in console
console.log(41 + 27);

//Booelan Challenge - console.log method displaying "false"
console.log(100 < 99);

//Double equal sign
document.write(15==15);
document.write(20==15);

//Triple equal sign
document.write(77===77);
document.write("ten"===100);
document.write("six"===6);
document.write(10===21);

//And / OR 
document.write(3>2 && 3<4);
document.write(3>2 || 4<3);

//Not Function
function not_Function () {
    document.getElementById("Not").innerHTML = !(20 > 10);
    document.getElementById("Yes").innerHTML = !(5 > 20);
}

