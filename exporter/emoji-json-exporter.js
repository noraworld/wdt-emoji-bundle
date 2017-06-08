const fs = require("fs");
const readline = require("readline-sync");
const clip = require("clipboardy");
const json = JSON.parse(fs.readFileSync("./emoji.json", "utf8"));

const msgColor = "\u001b[36m";
const emphasize = "\u001b[31m";
const reset = "\u001b[0m";

console.log(msgColor + "Type \"exit\" or \"quit\" to exit exporter" + reset);
console.log("");
let found = false;

while (1) {
  found = false;
  shortnames = readline.question("Enter shortnames: ");

  if (shortnames === "exit" || shortnames === "quit") {
    break;
  }

  for (unicode in json) {
    if (json[unicode][3][0] === shortnames) {
      console.log(emphasize +  unicode + reset);
      clip.writeSync(unicode);
      console.log("");
      found = true;
      break;
    }
  }

  if (found === false) {
    console.log("Not found");
    console.log("");
  }
}

console.log("");
console.log(msgColor + "Exit" + reset);
