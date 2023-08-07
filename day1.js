// word vs keyword
//  word mains that is userdefind like (ram, ankit ,etc tha name which are as initialzing to understand )
// but keyword is an pre defind keywords like (ver, let, const,for etc that mean's it is predefin or meaning in javascript )





// var const let

//  variables and constants
// var (it is not an good prectis) is used befor ES6 new we use Let (it is and good prectis)
 var naam = "Ankit";
 var rollNo = 1;
 console.log("the name is "+naam+ " and"+naam +"'s rollNo is:-"+rollNo);//output the name is Ankit andAnkit's rollNo is:-1
var naam ="ram";
 console.log(naam);// ---output is ram (var use same variable name but dif value it makes confutions) 
 let naam1 ="ankit";
 console.log(naam1);// ---ankit
// --- let naam1 ="rohan";
 //console.log(naam1);//it gives an error becouse it used ( SyntaxError: Identifier 'naam1' has already been declared)
naam1 ="rohan";// as par the variable proparty means that we can chang the value 
console.log(naam1);//  rohan


//  constants 
//  the constants means that we declars once the value is not changed like pi=3.14 it is an univarsal value 

const pi=3.14;
console.log(pi);//3.14

//pi =2.14;   
            // it gives an erorr ( TypeError: Assignment to constant variable.)
//--------------------------------------------------------------------------------------------------------------------//


//  hoisting - variable and functions are hoisted which means there declaration is moved on the top of code

//example 1-- 
// console.log(a);--
// let a;-----------(but it gives an erorr in vs code terminal <--ReferenceError: Cannot access 'a' before initialization-->)
// a=10; ----------- (but in web brouser it gives undefind)


//example 2
let a;//-----------
console.log(a);//--undefined
a=10; //----------- (but in web brouser it gives undefind)

//  but in the case of function ther is no erorr lets see

sum(12,41)// function call befor declayetion and it works the sum of a+b (12+14=53)
function sum(a,b) {
    console.log(a+b);
}



// types in js
//---- primitive and reference lick (),{},and[]

//primitine meabs copy of something like ankit have java book and ram also have a java book
// exampal ---
let ankit ="java book";
let ram =ankit;
console.log(ram);// java book
console.log(ankit);// java book
// but now ram destroy book
ram=ram+"  distroy ";
console.log(ram);// java book distroy
console.log(ankit);// java book (there is no change with ankit's book but chang with ram's book)

//but in// reference  

let rohan =['javaBook','phpBook'];
let rahul =rohan;
console.log(rohan);//javaBook phpBook
console.log(rahul);//javaBook phpBook
//but rahul add C++Book
rahul.push('C++Book');
console.log(rohan);//[ 'javaBook', 'phpBook', 'C++Book' ]
console.log(rahul);//[ 'javaBook', 'phpBook', 'C++Book' ] 
// so in the refrence case there is no copy bothe are reprsenting singal and same things so that mean in the value there is brakets than it is refrence 
