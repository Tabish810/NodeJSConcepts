var fs = require('fs'); // file system module
fs.readFile('input.txt', function (err, res) {
    if (err) {
        console.log('error')
    }
    else {
        console.log(res.toString());
    }
});
var data = fs.readFileSync('input.txt');
console.log("Syncronous Data: " + data.toString());