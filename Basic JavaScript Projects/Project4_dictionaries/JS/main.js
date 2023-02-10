function Transportation() {
    var civic = {
        maxspeed: 200,
        color: "Red",
        drivetrain: "frontwheel",
        fuel: "gasoline",
        transmission_type: "automatic",
    };
    delete civic.color; // removes the civic.color from the dictionary before getting called
    document.getElementById("Dictionary").innerHTML = civic.color; 
}