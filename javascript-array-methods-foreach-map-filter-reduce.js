// let array = ["Ali", "Danish", "Ahmad"]
// console.log(array[0]);

// array.push("Hamza")
// console.log(array)
// array.unshift("Aqeel")
// console.log(array)

// array.pop();
// console.log(array)
// array.shift();
// console.log(array)





// let fruits = ["Mango", "Banana", "Orange", "Kiwi"]
// for(let i = 0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }




// ForEach 
// let fruits = ["Mango", "Banana", "Orange", "Kiwi"]
// fruits.forEach(function(value){
//     console.log(value);
// })






// Map 
// let prices = [100, 200, 300, 400]

// let update = prices.map(function(value){
//     return value * 2;
// })

// let update = prices.map( value => {
//     return value * 2;
// })

// console.log(prices);
// console.log(update);






// Filter 
// let age = [12,14,19,20,25,39]

// let adults = age.filter(function(age){
//     return age >= 20;
// })
// console.log(adults)









// Reduce 
let red = [10,20,60]

let value = red.reduce(function(sum,add){
    return sum + add;
},10)
console.log(value)