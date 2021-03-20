var totalCredits = 0;
var HSECredits = 0;
var BSECredits = 0;
var CompulsoryCredits = 0;
var DisciplineCredits = 0;

function ExtractMainData(MainData, keyword) {
  console.log("ExtractMainData() called with: ", keyword);
    for (let sem = 0; sem < MainData.length; sem += 1) {
    for (let courses = 0; courses < sem.length; courses += 1) {
      totalCredits += MainData[sem[courses[2]]];
      if (MainData[sem[courses[2]]] === "HSE") {
        HSECredits += MainData[sem[courses[2]]];
      }
      if (MainData[sem[courses[2]]] === "BSE") {
        BSECredits += MainData[sem[courses[2]]];
      }
      if (MainData[sem[courses[2]]] === "Compulsory") {
        CompulsoryCredits += MainData[sem[courses[2]]];
      }
      if (MainData[sem[courses[2]]] === "Discipline Specific") {
        DisciplineCredits += MainData[sem[courses[2]]];
      }
    }
  }

  if (keyword === "TC") {
    return totalCreditsCheck({ totalCredits, branch: "CSE" });
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


module.exports = {
    ExtractMainData
}
// function HSECoursesCheck({totalHSECredits})
// {
//     if (totalHSECredits >= 16)
//     {
//         return true;
//     }
//     return false;
// }

// function BSECoursesCheck({totalBSEcredits})
// {
//     if (totalBSEcredits >= 8)
//     {
//         return true;
//     }
//     return false;
// }

// function OpenElectivesCheck({totalOPCredits})
// {
//     if (totalOPCredits >= 16)
//     {
//         return true;
//     }
//     return false;
// }

// function DisciplineCheck({totalDisciplineCredits})
// {
//     if (totalDisciplineCredits >= 48)
//     {
//         return true;
//     }
//     return false;
// }

// function CompulsoryCheck({totalCompulsoryCredits})
// {
//     if (totalCompulsoryCredits === 100)
//     {
//         return true;
//     }
//     return false;
// }

// function AllCheck()
// {
//     if (totalCreditsCheck && CompulsoryCheck && HSECoursesCheck && BSECoursesCheck && DisciplineCheck && OpenElectivesCheck)
//     {
//         return true;
//     }
//     return false;
// }
