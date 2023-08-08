// conditional -if else else-if

// conditions it meains what ? --Conditions are statements that are created by the programmer which evaluates( to to study the facts and then form an opinion about something) actions in the program and evaluates if it's true or false

// example
let age =75;
if(age >=70){
console.log("you are too old");
}
else if(age>=18){
    console.log("you are 18+");
}
else{
    console.log("you are aligible");
}


 // loops -for while dowhile 
 //what is loop it means that a process to repeating the task in few lines of code if i want to type 1 to 100000 number so while typing manualy
//   i can use condition with loop
 for (let i = 1; i <=50 ; i++) // new it will gives me 1 to 50 nub
 {
    // console.log(i);  
 } 


//  functions -a line of code which is reuse and parfom a task which have a functionality
 //example

 function sum(x,y) //x and y are parameter --it means the contenar which holde values are given at the time of function call 
  {
    console.log(x+y);
 }
 sum(1,4);//whenevar you call the function the task will exiquted at the time of coling
            //arguments -- a real value is assigning the parameter


//arrays  -- it is an contenner that conten the group of values and we can also do some serten opretions like push, pop,shift etc

let arr= [1,22,333,4444]//os it is an array of 4 elements with index 0 to 3
console.log(arr);//out put [ 1, 22, 333, 4444 ]
console.log(arr.indexOf(22));//  1 is an index value of 22 in array 
// now add the value 55555 in arr
console.log(arr.push(55555));// output 5 --it meains that at the 5 position the value is added in arr
console.log(arr);//out put [ 1, 22, 333, 4444, 55555 ]

// now remove the value 55555 in arr
console.log(arr.pop());
console.log(arr);

// now remove the value from index 0  in arr so use shift
console.log(arr.shift());
console.log(arr);//[ 22, 333, 4444 ]


// now add the value from frist in arr so use unshift
console.log(arr.unshift(0));
console.log(arr);//[ 0, 22, 333, 4444 ]

// now remove the value from mid  in arr so use splice(indexNum,quantity)
//let supos you want to remove 333 in the give array the [ 0, 22, 333, 4444 ] finde index value of 333 in array than give an quantity or values you want to remove in array 
console.log(arr.splice(2));//out put [ 333, 4444 ] it remove the values index 3 to n index 
console.log(arr);//out put [ 0, 22, 333 ]
console.log('---------');
arr.push(333,4444,55555);
console.log(arr.splice(3,1));//out put [ 4444 ] --in this 2 means 3 index and 1 is the vlues that are remove in array
console.log(arr);//out put[ 0, 22, 333, 55555 ]



// objects  -- it is nothing but an key valur pare 
 let car ={
    name:"xyz",
    avrege:45,
    topSpeed:"140"
 }
 console.log(car.avrege);//out put 45
 console.log(car.name);//out put xyz
 console.log(car.topSpeed);//out put 140