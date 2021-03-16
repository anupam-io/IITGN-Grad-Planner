var assert = require('assert');

class Semester{
    // No need to save in the database
    // Can save to load default values
    constructor(_courseList){
        this.courseList = _courseList;
        return this;
    }
}

class Plan{
    // Store this object into the database
    constructor(){
        this.successStatus = "0",
        this.semesters = Semester[8]
    }
    
    setSemData(semNumber, courseList){
        assert(semNumber>=1 && semNumber<=8);
        // Add semester data to appropriate sem nunmber
    }

    validPlan() {
        // Check if this Plan is valid or not     
    }
}