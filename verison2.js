/*

    Applicaton name :- Inch to Feet
    Application Mode :- Beta 
    Author : Yeamin Adib

*/

// Declaring a Function to retun value and find the inch, its more flexible and can be used multiple times
function inchtofeet (inch){
    var feet = inch / 12;
    return feet;
}
// Declaring a Varibale as Result and Calling the function and Logging that result into Console, Here we can observe that multiple values of Consile can be used
var resultcalling1 = inchtofeet(1000);
var resultcalling2 = inchtofeet(1000);
var resultcalling3 = inchtofeet(1000);
var resultcalling4 = inchtofeet(1000);

console.log(resultcalling1);
console.log(resultcalling2);
console.log(resultcalling3);
console.log(resultcalling4);
