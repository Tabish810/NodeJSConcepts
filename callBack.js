// aesa function jo kisi function mey as an argument pass horaha ho
// aur after some kind of event Invoke hojaye this is called CallBack Function..
//here event is a time eg: 2 seconds

var func = ()=>{
    console.log("queried and delivered to user");
}
console.log("User1 makes request");
setTimeout(func,2000);
console.log("User2 makes request");
setTimeout(func,2000);
console.log("User3 makes request");
setTimeout(func,2000);
