const fs = require('fs');
const rmGenerate = require('./src/rmGenerate.js');
const projectData = process.argv.slice(2);

//Convert this into an object array with various inputs
const [proTitle, proDesc] = projectData;
//Add a forEach that cycles throw the object array or a for loop in another file to store user data and then bring back here
fs.writeFile('README.md', rmGenerate(proTitle, proDesc), err => {
if(err) throw err;

console.log('Your README file has been created');
});