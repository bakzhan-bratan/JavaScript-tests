/* //Task-1

let num1 = +prompt("Write the number");
switch(num1){
    case 5:
    case 4:
    case 3:
        alert("Spring");
        break;
    case 8:
    case 7:
    case 6:
        alert("Summer");
        break;
    case 9:
    case 10:
    case 11:
        alert("Autumn");
        break;
    case 12:
    case 2:
    case 1:
        alert("Winter");
        break;
} */


/* //Task2

let a = +prompt("Write first number :");
let b = +prompt("Write second number :");

if (a > b) {
    alert(a + " саны " + b + " санынан үлкен" + '\n' + "Осы сандардың орташа мәні : " + ((a+b)/2));
}
else if (a < b) {
    alert(b + " саны " + a + " санынан үлкен" + '\n' + "Осы сандардың орташа мәні : " + ((a+b)/2));
}
else if (a == b) {
    alert(b + " және " + a + " сандары тең " + '\n' + "Осы сандардың орташа мәні : " + ((a+b)/2));
}
else {
    alert("Бөгде зат енгіздіңіз!")
} */



//Task3
let a = +prompt("Бірінші санд ы енгіз : ");
let b = +prompt("Екінші санды енгіз : ");
let c = +prompt("Үшінші санды енгіз : ");

if (a>=b && b>c){
    alert("Ең үлкен сан : " + a + '\n' + "Ең кіші сан : " + c + '\n' + "Ең үлкен және ең кішкентай санның айырмасы: " + (a-c));
}
else if (a>=c && c>b){
    alert("Ең үлкен сан : " + a + '\n' + "Ең кіші сан : " + b + '\n' + "Ең үлкен және ең кішкентай санның айырмасы: " + (a-b));
}
else if (b>=a && a>c){
    alert("Ең үлкен сан : " + b + '\n' + "Ең кіші сан : " + c + '\n' + "Ең үлкен және ең кішкентай санның айырмасы: " + (b-c));
}
else if (b>=c && c>a){
    alert("Ең үлкен сан : " + b + '\n' + "Ең кіші сан : " + a + '\n' + "Ең үлкен және ең кішкентай санның айырмасы: " + (b-a));
}
else if (c>=a && a>b){
    alert("Ең үлкен сан : " + c + '\n' + "Ең кіші сан : " + b + '\n' + "Ең үлкен және ең кішкентай санның айырмасы: " + (c-b));
}
else if (c>=b && b>a){
    alert("Ең үлкен сан : " + c + '\n' + "Ең кіші сан : " + a + '\n' + "Ең үлкен және ең кішкентай санның айырмасы: " + (c-a));
}
else if (a==b && b==c){
    alert("Үш сан бір - біріне тең" + '\n' + "Ең үлкен және ең кішкентай санның айырмасы: " + 0)
}
else{
    alert("Енгізгеніңізде қате бар");
}


