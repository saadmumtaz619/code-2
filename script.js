
const fs = require("fs");

fs.unlink("chacha.txt", (err) => {
  if (err) {
    if (err.code === 'ENOENT') {
      console.log("File pehle hi delete ho chuki hai ya exist nahi karti.");
    } else {
      console.error(err);
    }
  } else {
    console.log("File delete ho gayi!");
  }
});
