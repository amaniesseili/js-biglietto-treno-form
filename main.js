const userNameInputElement = document.querySelector("[name='username']")
const kmInputElement = document.querySelector("[name='km']")
const ageInputElement = document.querySelector("[name='age']")

const tableTicketElement = document.querySelector(".table")

const btnGenera = document.querySelector(".pulsante-genera");
const btnAnnula = document.querySelector(".pulsante-annula");

const pricePerKm = 0.21;
const finalPrice = kmInputElement * pricePerKm ;

const discount20 =((kmInputElement * pricePerKm) * 20) / 100
const discount40 =((kmInputElement* pricePerKm) * 40) / 100

let discount = 0


document.getElementById("username-input").innerHTML = `${userNameInputElement}`;
document.getElementById("km-input").innerHTML = `${kmInputElement}`;
document.getElementById("age-input").innerHTML = `${ageInputElement}`;



// if (ageInputElement < 18) {
//     document.getElementById("ticket-type").innerHTML = ` Biglietto 20% `;
// } else {
// if ( userAge >= 18 && userAge < 65){
//     document.getElementById("ticket-type").innerHTML = ` Biglietto Standard`;
// } else if ( userAge >= 65){
//     document.getElementById("ticket-type").innerHTML = ` Biglietto 40% `;
// }
// }



btnGenera.addEventListener("click", function(){

    const username = userNameInputElement.value;
    const km = kmInputElement.value;
    const age = ageInputElement.value;


    if (ageInputElement < 18) {
        document.getElementById("ticket-type").innerHTML = ` Biglietto 20% `;
    } else {
    if ( ageInputElement >= 18 && ageInputElement< 65){
        document.getElementById("ticket-type").innerHTML = ` Biglietto Standard`;
    } else if ( ageInputElement >= 65){
        document.getElementById("ticket-type").innerHTML = ` Biglietto 40% `;
    }
    }

})






