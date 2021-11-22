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
  message: 'Please write a description about your project?',
},
{
  type: 'input',
  name: 'proInst',
  message: 'What are the installation instructions? Please separate new lines with a comma "," '
},
{
  type: 'confirm',
  name: 'proMedia',
  message: 'Will you be adding any media?',
  default: false
},
{
  type: 'confirm',
  name: 'proMediaY',
  message: 'Is your media located in the root directory?',
  when: answers => answers.proMedia === true
},
{
  type: 'input',
  name: 'proMediaFileRoot',
  message: 'What is the name of this file? Please include file type (ie ".img")',
  when: answers => answers.proMediaY ===true
},
{
  type: 'input',
  name: 'proMediaPath',
  message: 'What is the name of the folder that contains your media file? Currently only one adjacent folder containing the media is supported.',
  when: answers => answers.proMediaY === false
},
{
  type: 'input',
  name: 'proMediaFilePath',
  message: 'What is the name of this file? Please include file type (ie ".img")',
  when: answers => answers.proMediaPath
},
{
  type: 'input',
  name: 'proUsage',
  message: 'Please describe how your project is used.'
},
{
  type: 'confirm',
  name: 'proContr',
  message: 'Would you like to add contributing guidelines?'
},
{
  type: 'confirm',
  name: 'proTestIns',
  message: 'Are there any tests that need to be listed?',
  
},
{
  type: 'input',
  name: 'proTestIns2',
  message: 'Please enter your tests and seperate new lines with a comma "," ',
  when: answers => answers.proTestIns === true,
  
  
},
{
  type: 'input',
  name: 'proUser',
  message: 'Please add your github user name'
},
{
  type: 'input',
  name: 'proEmail',
  message: 'Please add your email address'
},
{
  type: 'list',
  name: 'proLicense',
  message: 'What licenses will you be using?',
  choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause', 'None']
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