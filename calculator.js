const { questionInt } =require( 'readline-sync' );

var readLineSync= require("readLine-sync")

var firstNum= readLineSync.questionInt (" please enter first number ");

var secondNum= readLineSync.questionInt(" please enter second number ");

var userOperation= readLineSync.question(" please enter operation to perform: ( add, sub, mult, div ");

function add(a,b){
    return a + b
}
function sub(a,b){
    return a - b
}

function div (a,b){
    return  a / b
}
function mult(a,b){
return a * b
}

function myCustomCalculator ( a , b , operation){
    if ( operation== "add"){

    console.log (" adition of two numbers " + add (a , b));
}
    else if (operation =="sub"){
        console.log (" subtraction of two numbers " + sub (a,b))

}
else if ( operation =="div"){
    console.log( " division of two numbers "+ div (a,b))

}
else if  (operation =="mult") {
    console.log ( " multiplication of two numbers " + mult (a,b))

}
else {
    console.log (" invalid operation please try again!")
} }

myCustomCalculator ( firstNum , secondNum , userOperation );