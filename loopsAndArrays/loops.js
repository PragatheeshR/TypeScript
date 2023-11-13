for (var i = 0; i < 5; i++) {
    console.log(i);
}
var names = ["Pragatheesh", "Thanigai", "Raghunath", "Megala"];
names.push("Ragav");
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    if (name_1 == "Thanigai") {
        console.log("My Name is " + name_1);
    }
    else {
        console.log(name_1);
    }
}
