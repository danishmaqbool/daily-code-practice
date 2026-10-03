// console.log("Start")

// setTimeout(() => {
//     console.log("Data Loaded");
// }, 5000);

// console.log("Done ")






// CallBack Fucntion (We avaoide it in Web Development)
// function data(name,callback){
//     console.log(`Hello ${name}`);
//     callback();
// }

// const callbk = () => {
//     console.log("Call Back Function")
// }

// data("Danish",callbk)







// function sitelogin(login,password){
//     if (login === "admin" && password === "123"){
//         console.log("Login Successful")
//     }
//     else{
//         console.log("Login Fail")
//     }
// }

// sitelogin("admin","123")




// Promise use instead of CallBack 
// function login(user,password){
//     return new Promise((resovle,reject)=>{
//         if(user === "admin" && password === "123"){
//             resovle("Login Successful")
//         }else{
//             reject("Login Faild");
//         }
//     })
// }
// login("admin","123")
// .then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err);
// })











// async function sayhello(params) {
//     return "Hellooooooo";
// }

// const hel = await sayhello();
// console.log(hel)







// function user(){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve("User Loaded");
//         }, 2000);
//     });
// }

// async function loaded(params) {
//     let result = await user();
//     console.log(result);
// }
// console.log("1")
// loaded();
// console.log("2")








async function getposts() {
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await response.json();
        console.log("Data",data);
    } catch (error) {
        console.log(error);
    }
}

getposts();