let guidelineData = '[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)'

function rmGenerate(answers){
  let license = "(https://opensource.org/licenses/" + answers.proLicense + ")";

  if(!answers.proContr){ 
    guidelineData = "There is no contributing guidelines available"
  };

  if (answers.proLicense == 'None'){
    license = "(https://unlicense.org)"
  }

return (`
## [![license](https://img.shields.io/badge/License-${answers.proLicense.split('-')[0]}-yellow.svg)]${license}

  # ${answers.proTitle}

  ## Table of Contents
  [Description](#Description)<br>
  [Installation](#Installation)<br>
  [Usage](#Usage)<br>
  [Contributing Guidelines](#Contributing-Guidelines)

  ## Description
  ### ${answers.proDesc}

  ## Installation
  ### ${answers.proInst.replaceAll(",", "<br/>")}

  ## Usage
  ### ${answers.proUsage}

  ## License
  ${license.replace("(", " ").replace(")", " ")}

  ## Contributing Guidelines
  ### ${guidelineData}

  ## Tests
  ### ${answers.proTestIns}

  ## Questions
  ### Github.com/${answers.proUser}
  ### Email: ${answers.proEmail}
  
  `);
  
};

module.exports = rmGenerate;