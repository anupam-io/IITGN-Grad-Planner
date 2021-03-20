function ExtractMainData(MainData){
  var totalCredits = 0;
  var HSECredits = 0;
  var BSECredits = 0;
  var OPCredits = 0;
  var DisciplineCredits = 0;
  var ESCredits = 0;
  var OtherCredits = 0;
  for (let sem = 0; sem < MainData.length; sem += 1) {
    for (let courses = 0; courses < MainData[sem].length; courses += 1) {
      totalCredits += parseInt(MainData[sem][courses][2]);

      if (MainData[sem][courses][3] === "HS") {
        console.log();
        HSECredits += parseInt(MainData[sem][courses][2]);
      }
      if (MainData[sem][courses][3] === "BS") {
        BSECredits += parseInt(MainData[sem][courses][2]);
      }
      if (MainData[sem][courses][3] === "Open Elective") {
        OPCredits += parseInt(MainData[sem][courses][2]);
      }
      if (MainData[sem][courses][3] === "Discipline Specific") {
        DisciplineCredits += parseInt(MainData[sem][courses][2]);
      }
      if (MainData[sem][courses][3] === "ES") {
        ESCredits += parseInt(MainData[sem][courses][2]);
      }
      if (MainData[sem][courses][3] === "Other"){
        OtherCredits += parseInt(MainData[sem][courses][2]);
      }
    }
  }
  return [totalCredits, HSECredits, BSECredits, OPCredits, DisciplineCredits, ESCredits, OtherCredits];
}

function singleQuery(mainData, keyword) {
  const [totalCredits, HSECredits, BSECredits, OPCredits, DisciplineCredits, ESCredits, OtherCredits] = ExtractMainData(mainData);

  if (keyword === "TC") {
    return totalCreditsCheck({ totalCredits, branch: "CSE" });
  }
  else if (keyword === "HS")
  {
    console.log(HSECredits);
    return HSSCREDITSCHECK(HSECredits);
  }
  else if (keyword === "BS")
  {
    return BSECREITSCHECK(BSECredits);
  }
  else if (keyword === "OP")
  {
    return OPENCREDITSCHECK(OPCredits);
  }
  else if (keyword === "ES")
  {
    return ESCREDITSCHECK(ESCredits);
  }
  else if (keyword === "DS")
  {
    return DISCIPLINECREDITSCHECK(DisciplineCredits);
  }
  else if (keyword === "Other")
  {
    return OTHERCREDITSCHECK(OtherCredits);
  }
}

function totalCreditsCheck({ totalCredits, branch}) {
  console.log("Total credits: ", totalCredits);
  if (branch === "Electrical Engg" && totalCredits >= 175) {
    return [true, 'Well Done, Total Credits Checked: '+totalCredits];
  } else if (totalCredits >= 170) {
    return [true, 'Well Done, Total Credits Checked: '+totalCredits];
  }
  return [false, 'Failed Check, Total Credits Checked: '+totalCredits];
}


function HSSCREDITSCHECK(totalHSECredits)
{
  console.log("HSS credits: ", totalHSECredits);
  if (totalHSECredits >= 32)
  {
    return [true, 'Well Done, Total HSS Credits Checked: '+totalHSECredits];
  }
  return [false, 'Failed Check, Total HSS Credits Checked: '+totalHSECredits];
}

function BSECREITSCHECK(totalBSEcredits)
{
  console.log("BSE credits: ", totalBSEcredits);
    if (totalBSEcredits >= 40)
    {
      return [true, 'Well Done, Total BS Credits Checked: '+totalBSEcredits];
    }
    return [false, 'Failed Check, Total Credits Checked: '+totalBSEcredits];
}

function OPENCREDITSCHECK(totalOPCredits)
{
    console.log("Total open elective credits: ", totalOPCredits);
    if (totalOPCredits >= 16)
    {
      return [true, 'Well Done, Total Open Elective Credits Checked: '+totalOPCredits];
    }
    return [false, 'Failed Check, Total Open Elective Credits Checked: '+totalOPCredits];
  }
  
  function DISCIPLINECREDITSCHECK(totalDisciplineCredits)
  {
  console.log("Discripline specific credits: ", totalDisciplineCredits);
  if (totalDisciplineCredits >= 48)
  {
    return [true, 'Well Done, Total Discipline Credits Checked: '+totalDisciplineCredits];
  }else{
    return [false, 'Failed Check, Total Discipline Credits Checked: '+totalDisciplineCredits];
  }
}

function ESCREDITSCHECK(val)
{
  console.log("ES credits: ", val);
  if (val >= 28)
  {
    return [true, 'Well Done, Total ES Credits Checked: '+val];
  }
  return [false, 'Failed Check, Total ES Credits Checked: '+val];
}

function OTHERCREDITSCHECK(val)
{
  console.log("Other credits: ", val);
  if (val >= 5)
  {
    return [true, 'Well Done, Total Other Credits Checked: '+val];
  }
  return [true, 'Failed Check, Total ES Credits Checked: '+val];
}

module.exports = {
  singleQuery
};