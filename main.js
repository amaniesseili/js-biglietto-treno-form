const userNameInputElement = document.querySelector("[name='username']")
const kmInputElement = document.querySelector("[name='km']")
const ageInputElement = document.querySelector("[name='age']")

const tableTicketElement = document.querySelector(".table")

const btnGenera = document.querySelector(".pulsante-genera");
const btnAnnula = document.querySelector(".pulsante-annula");

const pricePerKm = 0.21;
const ticketPrice = kmInputElement * pricePerKm ;


let discount = 0
let discountAmount = (ticketPrice * discount) / 100
const discountedTicketPrice = ticketPrice - discountAmount





document.getElementById("username-input").innerHTML = `${userNameInputElement}`;
document.getElementById("km-input").innerHTML = `${kmInputElement}`;
document.getElementById("age-input").innerHTML = `${ageInputElement}`;





btnGenera.addEventListener("click", function(){

    const username = userNameInputElement.value;
    const km = kmInputElement.value;
    const age = ageInputElement.value;
    const price = parseInt(kmInputElement.value) * 0.21;



    if (age < 18) {
        document.getElementById("ticket-type").innerHTML = ` Biglietto 20% `;
    } else {
    if ( age >= 18 && age < 65){
        document.getElementById("ticket-type").innerHTML = ` Biglietto Standard`;
    } else if ( age >= 65){
        document.getElementById("ticket-type").innerHTML = ` Biglietto 40% `;
    }
    }

    // perche mi da nan
    // ----------------------------
    // costo biglietto
    if (age < 18) {
        discount = 20
        document.getElementById("ticket-price").innerHTML = (price - (price *20) / 100) ;
    } else {
    if ( age >= 18 && age < 65){
        document.getElementById("ticket-price").innerHTML = ticketPrice;
    } else if ( age >= 65){
        discount=40
        document.getElementById("ticket-price").innerHTML = `${discountedTicketPrice.toFixed(2) } `;
    }
    }
// ---------------------------------------
// numero carrozzza "numero random tra 1 e 10 "

var randomNumber =
 Math.floor(Math.random() * 10) + 1;

    if (age < 18) {
        document.getElementById("Carrozza-number").innerHTML =  randomNumber;
    } else {
    if ( age >= 18 && age < 65){
        document.getElementById("Carrozza-number").innerHTML =  randomNumber;
    } else if ( age >= 65){
        document.getElementById("Carrozza-number").innerHTML =  randomNumber;
    }
    }
// ---------------------------------------
// codice cp "numero random tra 1000 e 3000 "
    min=1000
    max=3000
    var randomNumber =
 Math.floor(Math.random() * (max - min + 1)) + min;

    if (age < 18) {
        document.getElementById("codice-cp").innerHTML =  randomNumber;
    } else {
    if ( age >= 18 && age < 65){
        document.getElementById("codice-cp").innerHTML =  randomNumber;
    } else if ( age >= 65){
        document.getElementById("codice-cp").innerHTML =  randomNumber;
    }
    }

})

// ----------------------------







