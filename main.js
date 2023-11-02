let listaUtenti = ["luca@mail.it", "fra@mail.it", "marco@mail.it", "lore@mail.it", "pasquale@mail.it"];

const mailUtente = prompt("Inserisci la tua mail");

// variabile globale per non far fare il check ad ogni mail anche dopo aver trovato quella giusta, serve anche per portare dati fuori dal ciclo
let mailTrovata = false;

console.log("Valore iniziale", mailTrovata);

// inizio ciclo
for (let i = 0; i < listaUtenti.length; i++) {
    
    const element = listaUtenti[i];

    if(element == mailUtente) {
        mailTrovata = true;
    }

    console.log(mailTrovata, i);
}

// il true nel mail trovata puoi pure ometterlo, l'if funziona lo stesso

if(mailTrovata == true) {
    alert("Benvenuto, " + mailUtente);
} else {
    alert("Non sei autorizzato, vai via!");
}






















// console.log("Numeri da 1 a 10");

// for (let i = 1; i <=10; i++) {

//     console.log(i);

// }

// console.log("Numeri da 1 a 10 , ma ci fermiamo a 3");

// for (let i = 1; i <=10; i++) {

//     console.log(i);

//     if(i==3) {
//         break;
//     }

// }

// console.log("Numeri da 1 a 10 , ma saltiamo 3,4 e 5");

// for (let i = 1; i <=10; i++) {

//     if(i==3 || i==4 || i==5) {
//         continue;
//     }

//     console.log(i);
// }