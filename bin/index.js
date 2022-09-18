#! /usr/bin/env node
const fs = require("fs");
const path = require("path");
const args = process.argv.slice(2);
const folderName = args[0] || "react-express-starter";

const copyFolder = (source, target) => {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target);
  }
  fs.readdirSync(source).forEach((file) => {
    const sourceFile = path.join(source, file);
    const targetFile = path.join(target, file);
    if (fs.lstatSync(sourceFile).isDirectory()) {
      copyFolder(sourceFile, targetFile);
    } else {
      fs.copyFileSync(sourceFile, targetFile);
    }
  });
};

copyFolder(path.join(__dirname, "template"), folderName);
console.log(
  "\x1b[36m%s\x1b[0m",
  "👏 Added react-express-tailwind project files 👏"
); //cyan
console.log("\x1b[36m%s\x1b[0m", ""); //cyan
console.log("\x1b[36m%s\x1b[0m", "To run the project:"); //cyan
console.log("\x1b[36m%s\x1b[0m", ""); //cyan
console.log("\x1b[36m%s\x1b[0m", `cd ${folderName}`); //cyan
console.log("\x1b[36m%s\x1b[0m", `npm install`); //cyan
console.log("\x1b[36m%s\x1b[0m", `npm run dev`); //cyan

process.exit(0);
