var fs = require('fs')

fs.writeFile('calc1.js','console.log("file creation")', function(err){
    console.log("data saved")
})