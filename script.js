const fs = require("fs");
fs.unlink("chacha.txt",function(err){
    if (err)console.error(err);
    else console.log("removed");
})

