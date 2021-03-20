var totalCredits = 0;
var HSECredits = 0;
var BSECredits = 0;
var OPECredits = 0;
var DisciplineCredits = 0;
var ESCredits = 0;
var OtherCredits = 0;

function ExtractMainData(MainData, keyword) {
  console.log("ExtractMainData() called with: ", keyword);
  for (let sem = 0; sem < MainData.length; sem += 1) {
    for (let courses = 0; courses < MainData[sem].length; courses += 1) {
      totalCredits += MainData[sem][courses][2];

      if (MainData[sem][courses][3] === "HS") {
        HSECredits += MainData[sem][courses][2];
      }
      if (MainData[sem][courses][3] === "BS") {
        BSECredits += MainData[sem][courses][2];
      }
      if (MainData[sem][courses][3] === "Open Elective") {
        OPECredits += MainData[sem][courses][2];
      }
      if (MainData[sem][courses][3] === "Discipline Specific") {
        DisciplineCredits += MainData[sem][courses][2];
      }
      if (MainData[sem][courses][3] === "ES") {
        ESCredits += MainData[sem][courses][2];
      }
      if (MainData[sem][courses][3] === "Other"){
        OtherCredits += MainData[sem][courses][2];
      }
    }
  }

  if (keyword === "TC") {
    return totalCreditsCheck({ totalCredits, branch: "CSE" });
  }
  else if (keyword === "HS")
  {
    return HSSCREDITSCHECK({HSECredits});
  }
  else if (keyword === "BS")
  {
    return BSECREITSCHECK({BSECredits});
  }
  else if (keyword === "OP")
  {
    return OPENCREDITSCHECK({});
  }
  else if (keyword === "ES")
  {
    return ESCREDITSCHECK({ESCredits});
  }
  else if (keyword === "D")
  {
    return DISCIPLINECREDITSCHECK({DisciplineCredits});
  }
  else if (keyword === "O")
  {
    return OTHERCREDITSCHECK({OtherCredits});
  }
}

function totalCreditsCheck({ totalCredits, branch }) {
  if (branch === "Electrical Engg" && totalCredits >= 175) {
    return true;
  } else if (totalCredits >= 170) {
    return true;
  }
  return false;
}


function HSSCREDITSCHECK({totalHSECredits})
{
    if (totalHSECredits >= 32)
    {
        return true;
    }
    return false;
}

function BSECREITSCHECK({totalBSEcredits})
{
    if (totalBSEcredits >= 40)
    {
        return true;
    }
    return false;
}

function OPENCREDITSCHECK({totalOPCredits})
{
    if (totalOPCredits >= 16)
    {
        return true;
    }
    return false;
}

function DISCIPLINECREDITSCHECK({totalDisciplineCredits})
{
    if (totalDisciplineCredits >= 48)
    {
        return true;
    }
    return false;
}

function ESCREDITSCHECK({totalES})
{
    if (totalES === 100)
    {
        return true;
    }
    return false;
}

function OTHERCREDITSCHECK({totalOtherCredits})
{
  if (totalOtherCredits >= 5)
  {
    return true;
  }
  return false;
}

module.exports = {
  ExtractMainData,
  totalCreditsCheck,
  HSSCREDITSCHECK,
  BSECREITSCHECK,
  OPENCREDITSCHECK,
  DISCIPLINECREDITSCHECK,
  ESCREDITSCHECK,
  OTHERCREDITSCHECK,
};