var fs = require('fs')

fs.readFile('calc1.js', function(err,data){
    console.log(data.toString())
})