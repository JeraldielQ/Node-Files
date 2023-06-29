const fs = require('fs');
const process = require('process')

function cat(path){
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(`ERROR reading ${path}: ${err}`);
            process.exit(1)
        } else {
        console.log(`Data reading ${path}: ${data}`);
        }
    });
}


cat(process.argv[2])