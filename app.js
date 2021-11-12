const fs = require('fs');
const rmGenerate = require('./src/rmGenerate.js');
const inquirer = require('inquirer');

const ipromptQA = ([
{
  type: 'input',
  name: 'proTitle',
  message: 'What is the name of your project?'
},
{
  type: 'input',
  name: 'proDesc',
  message: 'Please write a description about your project?'
},
{
  type: 'input',
  name: 'proInst',
  message: 'Please specify installation instructions?'
},
{
  type: 'input',
  name: 'proUsage',
  message: 'Please describe how your project is used.'
},
{
  type: 'input',
  name: 'proContr',
  message: 'How to contribute'
},
{
  type: 'input',
  name: 'proTestIns',
  message: 'Tests'
},
{
  type: 'input',
  name: 'proUser',
  message: 'Tests'
},
{
  type: 'input',
  name: 'proQuest',
  message: 'Tests'
},
{
  type: 'checkbox',
  name: 'proLicense',
  message: 'What licenses will you be using?',
  choices: ['MIT', 'OSL 3.0', 'MPL 2.0']
}
]);


//Add a forEach that cycles throw the object array or a for loop in another file to store user data and then bring back here
function fileMaker(fileName, answers){
  fs.writeFile(fileName, answers, (err) => {
if(err) throw err;

console.log('Your README file has been created');
});
};

function inquireQA() {
  inquirer.prompt(ipromptQA)
  .then(answers => fileMaker('README.md', rmGenerate(answers)))
  
  .catch((err) => {
    if(err) throw err
  });
};

inquireQA();