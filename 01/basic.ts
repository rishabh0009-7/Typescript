
// const a:number = 5
// console.log(a);

// type error
// let x:number = 2
//     x="rishabh"
// console.log(x);

// Problem 1 - Hello world
//
// Thing to learn - How to give types to arguments of a function
//Write a function that greets a user given their first name. 
// Argument - firstName
// Logs - Hello {firstName}
// Doesn’t return anything

function greet (firstname:string){
    console.log(`hello ${firstname}`);
    

}

greet("rishabh")

// Problem 2 - Sum function
// 💡
// Thing to learn - How to assign a return type to a function

// Write a function that calculates the sum of two functions


function sum(a:number,b:number) :number{
    return a+b;

}

console.log(sum(1,2))


// Problem 3 - Return true or false based on if a user is 18+
// 💡
// Thing to learn - Type inference


function isLegal(age:number){
    if(age>18){
        return true
    }
    else{
            return false
        }
        
    }


console.log(isLegal(20));



// Problem 4 
// Create a function that takes another function as input, and runs it after 1 second.

function delayedCall(fn:()=>void){
    setTimeout(fn,1000)

}

delayedCall(function(){1
    console.log("hi there ");
    
})