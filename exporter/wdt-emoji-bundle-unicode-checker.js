const fs = require("fs");
const wdtEmojiBundleJson = JSON.parse(fs.readFileSync("./wdt-emoji-bundle.json", "utf8"));
const emojiJson = JSON.parse(fs.readFileSync("./emoji.json", "utf8"));

const successColor = "\u001b[32m";
const failColor = "\u001b[31m";
const resetColor = "\u001b[0m";

const shortnamesFormatLength = 54;
const unicodeFormatLength = 42;
const countFormatLength = 4;

const left = "left";
const right = "right";

let emojiData = [];
for (unicode in emojiJson) {
  emojiData[emojiJson[unicode][3][0]] = unicode;
}

let shortnames = "";
let count = 0;
const max = 1300;
let errorData = [];

var errorDataMaxLen = [];
errorDataMaxLen["shortnames"] = 0;
errorDataMaxLen["now"] = 0;
errorDataMaxLen["actual"] = 0;

for (category in wdtEmojiBundleJson) {
  for (let i = 0; i < wdtEmojiBundleJson[category].length; i++) {
    if (emojiData[wdtEmojiBundleJson[category][i]["short_names"][0]] === wdtEmojiBundleJson[category][i]["unicode"]) {
      count = count + 1;
      console.log(successColor + format(wdtEmojiBundleJson[category][i]["short_names"][0], shortnamesFormatLength, left) + " " + format(wdtEmojiBundleJson[category][i]["unicode"], unicodeFormatLength, left) + " OK, " + format(count, countFormatLength, right) + " / " + max + " passed" + resetColor);
    }
    else {
      errorData[wdtEmojiBundleJson[category][i]["short_names"][0]] = {now: wdtEmojiBundleJson[category][i]["unicode"], actual: emojiData[wdtEmojiBundleJson[category][i]["short_names"][0]]};
      errorDataMaxLength(wdtEmojiBundleJson[category][i]["short_names"][0], wdtEmojiBundleJson[category][i]["unicode"], emojiData[wdtEmojiBundleJson[category][i]["short_names"][0]]);
      console.log(failColor + format(wdtEmojiBundleJson[category][i]["short_names"][0], shortnamesFormatLength, left) + " " + format(wdtEmojiBundleJson[category][i]["unicode"], unicodeFormatLength, left) + " is wrong\nReal unicode name is                                   " + emojiData[wdtEmojiBundleJson[category][i]["short_names"][0]] + resetColor);
    }
  }
}
console.log("");

if (count === max) {
  console.log(successColor + "All checks have passed 🎉" + resetColor);
}
else {
  for (shortnames in errorData) {
    console.log(failColor + format(shortnames, errorDataMaxLen["shortnames"], left) + " is now " + format(errorData[shortnames]["now"], errorDataMaxLen["now"], left) + " but actual one is " + errorData[shortnames]["actual"] + "." + resetColor);
  }
  console.log(failColor + (max - count) + " checks failed." + resetColor);
}

function format(str, width, pos) {
  str = str + "";
  let output = "";

  if (pos === "left") {
    output += str;
  }

  for (let i = 0; i < width - str.length; i++) {
    output += " ";
  }

  if (pos === "right") {
    output += str;
  }

  return output;
}

function errorDataMaxLength(shortnames, now, actual) {
  errorDataMaxLen["shortnames"] = (shortnames.length > errorDataMaxLen["shortnames"]) ? shortnames.length : errorDataMaxLen["shortnames"];
  errorDataMaxLen["now"]        = (now.length        > errorDataMaxLen["now"])        ? now.length        : errorDataMaxLen["now"];
  errorDataMaxLen["actual"]     = (actual.length     > errorDataMaxLen["actual"])     ? actual.length     : errorDataMaxLen["actual"];
}
