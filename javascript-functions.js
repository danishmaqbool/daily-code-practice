// function greet(){
//     console.log("Hello");
// }
// greet();



// function greet(name){
//     console.log("Hello",name);
// }
// greet("Danish");
// greet("Ali");
// greet("Ahmad")


// function mul(a,b){
//     console.log(a*b);
// }
// mul(5,2);



// function minus(a,b){
//     return a-b;
// }
// // minus(5,2); No work
// let min = minus(100,1)
// console.log(min);



// greet();
// function greet(){
//     console.log("Hello");
// }



// sayhi();
// const sayhi = function () {
//     console.log("Hello");
// }


// Normal Function 
// function greet(name){
//     console.log("Name :" + name)
// }
// greet("Hamza")


// Function Expression 
// const greet = function (name="Ahmad"){
//     return "Name:" + name;
// }
// console.log(greet())


// Arrow Function 
// const greet = (name="Hamza") => {
//     console.log("Name " + name)
// }
// greet()


// const saqure = (n) => {
//     // console.log(n*n);
//     return n * n;
// }
// // saqure(9);
// console.log(saqure(9))


// const add = (a,b) => {
//     return a + b;
// }
// console.log(add(5,5))

// Short Form 
// const ad = (a,b) => a + b;
// console.log(ad(5,12))

// const dc =(km) => km*20;
// console.log(dc(2));



// function order(item,quantity=1){
//     console.log(item + " | " + quantity)
// }
// order("Burger",3);
// order("Sandwitch")



// Rest Paramater 
// function greet(...numbers){
//     console.log(numbers)
// }
// greet(4,5,6)


// const greet = (...numbers) => {
//     console.log("Numbers " , numbers)
// }
// console.log(greet(5,4,9,10))


// function totalmarks(...marks){
//     let total=0;

//     for(let mark of marks){
//         total += mark;
//     }
//     return total;
// }
// console.log(totalmarks(5,4,10))




// function addition(...numbers){
//     let addi=0;
//     for(let total of numbers){
//         addi = addi + total;
//     }
//     return addi;
// }
// console.log(addition(5,5,20))

