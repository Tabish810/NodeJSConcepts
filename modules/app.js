function name(name) {
    console.log(name);    
}
function jump(meters) {
    console.log("jump is "+meters+ " Long");
}
module.exports.firstFunc = name;
module.exports.sfunc = jump;