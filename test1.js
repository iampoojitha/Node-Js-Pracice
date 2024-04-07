function test(){
    console.log("test")
}

let name="pooja";

function sum(a,b){
    console.log(a+b)
}
module.exports={
    test,sum
}
module.exports.name=name;