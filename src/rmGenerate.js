const rmGenerate = (proTitle, proDesc) => {
  return`
  # ${proTitle}

  ## ${proDesc}
  `;
};

module.exports = rmGenerate;