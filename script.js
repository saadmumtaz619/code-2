const fs = require("fs");
fs.readFile("saad.txt", "utf8", function (err, data) {
  if (err) return console.error("read error:" + err);
  
 if (!fs.existsSync("chacha.txt")) {
    console.log("chacha.txt pehle exist nahi karti, main nayi bana raha hoon...");
  }

  fs.appendFile("chacha.txt",data, function (err) {
    if (err) console.error("write error:" + err);
    else console.log("done");
  });

});