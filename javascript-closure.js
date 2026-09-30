// Outer Function + Inneer Funciton = Closure

// function outer(){
//     let course = "Mern";

//     function inner(){
//         console.log(course);
//     }
//     inner();
// }
// outer();




// function outter(){
//     let nam = "Ali";

//     function inner(){
//         console.log(nam);
//     }
//     // inner();
//     return inner;
// }
// // outter();
// let n = outter();
// n();




// function CreateBankAccount(){
//     let balance = 1000;

//     return{
//         CheckBalance: function(){
//             return balance;
//         },

//         DepoistBalance:function(amount){
//             balance = balance + amount;
//             return balance;
//         },
//     };
// }
// const DoProcess = CreateBankAccount();

// console.log(DoProcess.CheckBalance());
// console.log(DoProcess.DepoistBalance(500));





// function CreateDiscount(amount){
//     return function(price){
//         return price - (price * amount)/100;
//     }
// }
// const StudentDiscount = CreateDiscount(20);
// const SpecialDiscount = CreateDiscount(40);

// console.log(StudentDiscount(100))
// console.log(SpecialDiscount(100))



// function SButton(message){
//     const button = document.querySelector("#btn")

//     button.addEventListener("click", function(){
//         alert(message);
//     });
// }
// SButton("Danish");



function CreateApi(userbase){
    return function(endpoint){
        return userbase + endpoint;
    }
}

const api = CreateApi("https:user.com")

console.log(api("customer"));