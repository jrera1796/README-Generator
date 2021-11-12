
function rmGenerate(answers){
 
return (`
  # ${answers.proTitle}

  ## Table of Contents
  
  ## Description
  ### ${answers.proDesc}
  ## Installation
  ### ${answers.proInst}
  ## Usage
  ### ${answers.proUsage}
  ## Contributing
  ### ${answers.proContr}
  ## Tests
  ### ${answers.proTestIns}
  ## Questions
  ### Github.com/${answers.proUser}
  With more information ${answers.proQuest}
  ##License ${answers.proLicense}
  
  `);
  
};

module.exports = rmGenerate;