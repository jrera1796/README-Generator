let guidelineData = '[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)'
let mediaPath = "";
let media = "";

function rmGenerate(answers){
  let license = "(https://opensource.org/licenses/" + answers.proLicense + ")";

  if(!answers.proContr){ 
    guidelineData = "There is no contributing guidelines available"
  }

  if (answers.proLicense == 'None'){
    license = "(https://unlicense.org)"
  }

  if(answers.proTestIns == false){
    answers.proTestIns2 = "There are no tests for this project."
  }
  
  if(answers.proMedia == true){
    if(answers.proMediaY == true){
      if(answers.proMediaFileRoot){
        mediaPath = "![" + answers.proTitle + "](/" + answers.proMediaFileRoot + ")"
        media = "## Media <br> " + mediaPath
      }
      else{
        console.log("Media selected, yet no file name was given.")
      }
    }
  }
  if(answers.proMedia == true){
    if(answers.proMediaY == false){
      if(answers.proMediaFilePath && answers.proMediaPath){
        mediaPath = "![" + answers.proTitle + "](/" + answers.proMediaPath + "/" + answers.proMediaFilePath + ")"
        media = "## Media <br> " + mediaPath
      }
      else{
        console.log("Media selected, yet no path was given.")
      }
    }
  }

return (`
## [![license](https://img.shields.io/badge/License-${answers.proLicense.split('-')[0]}-yellow.svg)]${license}

  # ${answers.proTitle}
  <br>

  ## Table of Contents
  [Description](#Description)<br>
  [Installation](#Installation)<br>
  [Usage](#Usage)<br>
  [License](#License)<br>
  [Contributing Guidelines](#Contributing-Guidelines)<br>
  [Tests](#Tests)<br>
  [Questions](#Questions)

  <br>

  ## Description
  ### ${answers.proDesc}

  <br>

  ## Installation
  ### ${answers.proInst.replaceAll(",", "<br/>")}

  <br>

  ${media}

  <br>

  ## Usage
  ### ${answers.proUsage}

  <br>

  ## License
  ${answers.proLicense} <br>
  Link: ${license.replace("(", " ").replace(")", " ")}

  <br>

  ## Contributing Guidelines
  ### ${guidelineData}

  <br>

  ## Tests
  ### ${answers.proTestIns2.replaceAll(",", "<br/>")}

  <br>
  
  ## Questions
  For any questions please feel free to contact me via one of the methods below.

  ### Github: Github.com/${answers.proUser}
  ### Email: ${answers.proEmail}
  
  `);
  
};

module.exports = rmGenerate;