const fs = require('fs')
const parse = require('csv-parse')
 
var csvData = []
fs.createReadStream('output.csv')
    .pipe(parse({delimiter: ','}))
    .on('data', function(csvrow) {
        csvData.push(csvrow);
    })
    .on('end',function() {
      console.log(csvData);
    });