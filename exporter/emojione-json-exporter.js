const fs = require("fs");
const readline = require("readline-sync");
const clip = require("clipboardy");
const json = JSON.parse(fs.readFileSync("./emojione.json", "utf8"));

const emphasize = "\u001b[36m";
const reset = "\u001b[0m";

let shortname = "";

while (1) {
    shortname = readline.question("Enter shortname: ");
    shortname = ":" + shortname + ":";
    if (json[shortname] !== undefined) {
        console.log(emphasize + json[shortname].uc_output + reset);
        clip.writeSync(json[shortname].uc_output);
        console.log("");
    }
    else {
      console.log("Not found");
      console.log("");
    }
}
