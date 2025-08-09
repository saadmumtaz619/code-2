const fs = require("fs");

const filename = "saad.txt"

try {
    fs.rename(filename, "shayan.txt", function (err) {
        if (err) console.error(err);
        else console.log("newfile");
    })

    fs.rename("shayan.txt", "saad.txt")
} catch (error) {
   console.log("an error occur while managing file", error.message)
//    cons
}