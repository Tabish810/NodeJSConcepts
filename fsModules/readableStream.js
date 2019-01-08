var fs = require('fs');
var read = fs.createReadStream('input.txt');
// read.pipe(write);
read.setEncoding('UTF8');
var data = '';
read.on('data', function (chunks) {
    data += chunks;
})
read.on('end', function () {
    console.log(data);
})
var write = fs.createWriteStream('out.txt');
write.write("It is a test", 'UTF8');
write.end();
write.on('finish', function () {
    console.log("finished")
})

// var readableStream = fs.createReadStream('input.txt');
// var writeableStream = fs.createWriteStream('out.txt');
// readableStream.pipe(writeableStream);