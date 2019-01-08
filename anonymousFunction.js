// var myFunc =  function(value){
//     console.log("Hello "+value)
// }
function anotherFunction(previousFunc,value){
    previousFunc(value);
}
anotherFunction( function(value){
    console.log("Hello "+value)
},"world");