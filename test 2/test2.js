// task 1


/* function calculator() {
    let num1 = prompt("San 1 engiz");
    let num2 = prompt("San 2 engiz");
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (num1>num2){
        let kosu = num1 + num2;
        let azaityndy = num1 - num2;
        let kobeitu = num1 * num2;
        let bolu = num1 / num2;
        alert("birinshi san ekinshi sanan ulken: " + '\n' + "Azaityndy: " + azaityndy + '\n' + "Kosyndy: " + kosu + '\n' + "Kobeitu: " + kobeitu + '\n' + "Bolindy: " + bolu);
    }
    else if (num2>num1){
        let kosu2 = num1 + num2;
        let azaityndy2 = num2 - num1;
        let kobeitu2 = num1 * num2;
        let bolu2 = num2 / num1;
        alert("ekinshi san birinshi sanan ulken" + '\n' + "Azaityndy: " + azaityndy2 + '\n' + "Kosyndy: " + kosu2 + '\n' + "Kobeitu: " + kobeitu2 + '\n' + "Bolindy: " + bolu2);
    }
    else if (num1 == num2){
        let kosu2 = num1 + num2;
        let azaityndy2 = num2 - num1;
        let kobeitu2 = num1 * num2;
        let bolu2 = num2 / num1;
        alert("ekinshi san men birinshi san ten: " + '\n' + "Azaityndy: " + azaityndy2 + '\n' + "Kosyndy: " + kosu2 + '\n' + "Kobeitu: " + kobeitu2 + '\n' + "Bolindy: " + bolu2);
    }
    else{
        alert("Kiritken sanдарыңыз durys emes, qayta kiritip koringiz.");
    }
}

calculator(); */


// task 2

/* function supermaket() {
    let baga = +prompt("Бағасын енгізіңіз:");
    let engiz = +prompt("Санын енгізіңіз:");
    let zhalpikuny = engiz * baga;


    if (zhalpikuny > 20000) {
        basi = zhalpikuny - (zhalpikuny * 0.3);
    } else if (zhalpikuny > 10000) {
        basi = zhalpikuny - (zhalpikuny * 0.2);
    } else if (zhalpikuny > 5000) {
        basi = zhalpikuny - (zhalpikuny * 0.1);
    }

    
    alert("tolyk summa:" + zhalpikuny + '\n' + "skidkamen bagasi: " +basi);
}

supermaket(); */

//task 3

/* function tabu(){
    let oi_san = parseInt(Math.random() * 100)
    while(true){
    var san = +prompt("Sandy tap")
    if(oi_san == san){
    return "Durys"
    }
    else if(san - oi_san <= 5  && oi_san - san <= 5){
    alert("Жақын")
    }
    else{
     alert("Алыс")
     }
    }
}

alert(tabu()); */


//kosymsha tapsirma

let num1 = +prompt("Алғашқы санды енгізіңіз:");
let num2 = +prompt("Екінші санды енгізіңіз:");
num1 = num1 + num2; 
num2 = num1 - num2; 
num1 = num1 - num2;
alert("Ауыстырылған сан 1: " + num1);
alert("Ауыстырылған сан 2: " + num2);
