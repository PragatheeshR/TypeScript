
for(let i = 0; i < 5; i++){
    console.log(i);
}

let names: string[] = ["Pragatheesh", "Thanigai", "Raghunath", "Megala"];

names.push("Ragav");

for(let name  of names){
    if(name == "Thanigai"){
        console.log("My Name is "+name);
    }
    else{
        console.log(name);
    }
}