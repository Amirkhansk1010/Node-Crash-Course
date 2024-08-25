const speak = ()=>{
    console.log('Hello World!');
}

//speak();

//console.log(global);

// global.setTimeout(()=>{
//     console.log('i am set time out');
// },3000);

function setTimeoutInterval(){
    setTimeout(()=>{
        console.log('I am set time out');
        clearInterval(interval);
    },3000)
    
    const interval = setInterval(()=>{
        console.log('I am set Interval');
    },1000)
}

//setTimeoutInterval();

//console.log(__dirname);
//console.log(__filename);

//console.log(document.querySelector);