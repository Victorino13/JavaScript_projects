//Button with multiple variable
function Button() {
    var str1 = "This is the button text1";
    var str2 = "This is the button text2";
    document.getElementById("Button_Text").innerHTML = str1+str2;
}

function Display() {
    var sentence = "This is my"; //creating and assigning variable
    sentence += "website and thank you for visiting!"; //using += operator to concatenate
    document.getElementById("Website").innerHTML = sentence; //using document.getElementByID()
}

