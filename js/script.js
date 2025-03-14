// let firstName = "max "
// let lastName = "mustermann"
//
// //funktion der name fullName mit zwei parameter string ergibt die strings verkettet zurück
// function fullName(firstName, lastName) {
//     return firstName + " " + lastName;
// }
//
// let FullName = fullName(firstName, lastName);
// console.log(FullName);
//
// function capitalizeAllLetters(string) {
//     return string.toUpperCase();
// }
// let capitalizedFullName =  capitalizeAllLetters(FullName);
// console.log(capitalizedFullName);
// console.log(capitalizeAllLetters("bAnAnE"));
//
// function countCharacters(string) {
//     return string + " has " + string.length + " characters";
// }
//
// console.log(countCharacters("bAnAnE"));
//
// function formatToCurrency( number) {
//     return number.toFixed(2) + " €";
// }

// console.log(formatToCurrency(3.2));

// document.getElementById("numberOne").innerHTML = '<button id="bb"></button>'
// document.getElementById("bb").innerHTML = "click me"
// document.getElementByTagName("button").innerHTML =

document.getElementById("kekse").setAttribute( 'titel', "kekse" );
document.getElementById("kekse").setAttribute('class', "kekses");

function hideOrShow(id){
    document.getElementById(id).classList.toggle("d_none")
}

function valueOfMyInput(id){
    return console.log( document.getElementById(id).value);
}
valueOfMyInput("myInput")

document.getElementById('myInput').addEventListener("click", hideOrShow);