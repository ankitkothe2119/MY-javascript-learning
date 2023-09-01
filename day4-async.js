// promise 
var ans = new Promise((res, rej)=>{
    if(false){return res();}
    else{ return rej();}
})
ans.
then(()=>{console.log(`resolve  `);})
.catch(()=>{console.log(`reject`);})


// console.log(true+true+2);

// user will ask for a number bettween 0 to 9 and if the number below 5 resolve if not reject

var num= Math.floor(Math.random()*10);
var ansOfQ = new Promise((res,rej)=>{// new ---in this if we remove the new keword from it it will gov an error promise constroctor cannot be invoked
    if(num<5){
        return res();
    }
    else {
        return rej();
    }
})
ansOfQ.then(()=>{
    console.log(`the num ${num} is smaller then 5 `);
})
.catch(()=>{
    console.log(`the num ${num} is biger then 5 `);
})

//async and await ---it use or replace the then keyword

let fatchData =()=>{
 fetch(`https://randomuser.me/api/`)
  .then((raw)=>{return raw.json()})
  .then((data)=>{
    console.log(data);
  })
}
fatchData();

