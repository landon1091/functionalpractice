

let foods = [
    {name: 'Toaster Strudel', vegetarian: true, glutenFree: false },
    {name: 'Chicken salad', vegetarian: false, glutenFree: true },
    {name: 'Coffee cake', vegetarian: true, glutenFree: true }
];
function sadness(boo) {
   if (boo.vegetarian === true)
   if (boo.glutenFree === true) {
       return true
   } else {
       return false
   }
}
let spaghetti = foods.filter(sadness).map(namer);
function namer(zero) {
    return zero.name
}
console.log(spaghetti);
let products = [
    {name: 'Soap dispenser', price: 12.45, inStock: true },
    {name: 'Chainsaw blade', price: 41.45, inStock: true },
    {name: 'Bath towel warmer', price: 87.14, inStock: false }
];
function goods(rot) {
    if (rot.inStock === true){
        return true
    } else {
        return false
    }
}
let stocks = products.filter(goods).map(merch);
function merch(blau) {
    return blau.name
}
console.log(stocks);

let nummers = [153];
let digits = nummers.toString().split('');
console.log(digits);
let expo = digits.length;
console.log(expo);
function exponent(digit, expo) {
    return Math.pow(digit, digits.length);
}
let answer = digits.map(exponent);
console.log(answer);
function combine(answer) {
    
}
function checkIt(nummers, answer) {
    if (nummers === answer){ 
    return true
} else {
    return false
}
};
console.log(checkIt(nummers, answer));