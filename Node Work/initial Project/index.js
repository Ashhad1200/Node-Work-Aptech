const fs = require("fs");

fs.writeFileSync("./asd.txt","this is the ramdom wrods and this is the word of my life");
const result =  fs.readFileSync("./asd.txt","utf8");

fs.appendFileSync("./asd.txt","asd asd asd asd asd asd asd",(e) => { console.log(e)});

const addedresult =  fs.readFileSync("./asd.txt","utf8");

console.log({result,addedresult})