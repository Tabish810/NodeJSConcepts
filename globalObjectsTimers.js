console.log(__dirname);
console.log(__filename);

setTimeout(function(){
    console.log("hello world");
},2000);
setInterval(function(){
    console.log("this comes from regular interval of time");
},2000);