// var a = 60;  Prints undefined due to hoisting
// let a = 60; ReferenceError: Cannot access 'a' before initialization
    // var a;
    // console.log(a);
    // var a = 60;

// Hoisting is a mechanism where variables and function declarations are moved to the top of their scope before code execution.
// Variables declared with var are hoisted and initialized with undefined.
// Variables declared with let and const are hoisted but not initialized.
// var isn't capable of understanding block scope.
// let and const are capable of understanding block scope.
    // let a = 70;
    // if(a>10){
    //     let a = 300;
    //     console.log("a inside : ", a);
    // }
    // else{
    //     console.log("else");
    // }
    // console.log("a outside : ", a);

// Equality & Template String
    // const myname="Priyanshu";
    // console.log("My name is " + myname);
    // const data=`Hello....${myname}`;
    // console.log(data);

// Function Calling
    // function msg(name){
    //     return "Hello "+name;
    // }
    // const data=msg("Priyanshu");
    // console.log(data);

// Function Expression
    // const data=function msg(name){
    //     return name+" is a good boy";
    // }
    // const msg=data("Priyanshu");
    // console.log(msg);

// Arrow Function
// Can also return the value;
    // const data=()=>{
    //     console.log("hello")
    // }
    // data();

// Arrow Function With Parameter, Without Return Statement
    // const data=msg=>"Hello...."+ msg;
    // console.log(data("Priyanshu"));

// IIFE (Immediately Invoked Function Expression)

    // (function(){
    //     console.log("Hello....");
    // })(); // Restricts Calling the Function Seprately, Once the Pointer reaches here; it invokes the function automatically.

    // (()=>{
    //     console.log("Welcome....");
    // })();


// setTimeout Function

    // setTimeout(()=>{
    //     console.log("Using TimeOut");
    // },1000);

    // setInterval(()=>{
    //     console.log("Using Interval");
    // },5000)

    // function greetings(msg="Welcome"){
    //     console.log("Hii"+msg);
    // }
    // greetings("Hello....");

function selectlanguage(lang){
    let data;
    if(lang=="java"){
        function javaCompiler(){
            return "Java Compiler";
        }
        data=javaCompiler();
    }
    else if(lang=="C"){
        function ccompiler(){
            return "C Compiler";
        }
        data=ccompiler();
    }
    else{
        data="No Compiler Found";
    }
    return data;
}
console.log(selectlanguage("C"));
console.log(selectlanguage("java"));
console.log(selectlanguage("python"));  