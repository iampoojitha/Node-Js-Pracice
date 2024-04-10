const fs = require('fs');

fs.mkdir('./myfolder', err=>{
    if(err){
        console.log(err);
    }
    else {
        console.log("folder created successfully");
    }

})

const data = "hi.. welcome to node js.... i am pooja, learner"

 fs.writeFile('./myfolder/myfile2.txt', data, {flag:'a'} ,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("data written successfully")
    }
})

fs.readFile('./myfolder/myfile2.txt', {encoding:'utf-8'}, (err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data);
    }
})

try{
    fs.writeFileSync('./myfolder/myfilesync1.txt', "synchronous file creation..");
    console.log("data written successfully")

    fs.readFileSync('./myfolder/myfilesync1.txt', {encode:'utf-8'});
    console.log("data read successfully..");

}catch{
    console.log("error occured");
    console.log(err)

}

fs.readdir('./myfolder', (err, files) => {
    if(err){
    	console.log(err);
        return;
    }
    console.log('Directory read successfully! Here are the files:');
    console.log(files);
})

fs.unlink('./myfolder/myfile1.txt', (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("deleted successfully..");
    }
})
