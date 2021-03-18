const axios = require('axios')
const endPoint = 'http://localhost:5000/api/plan/add';

export default async (semester, courseCode, courseTitle, courseCredits, courseGrade) => 
{
    await axios
        .post(endPoint, {
            "semester": semester,
            "courseCode": courseCode,
            "courseTitle": courseTitle,
            "courseCredits": courseCredits,
            "courseGrade": courseGrade,
        })
        .then(res => {
            console.log("Success.");
        })
        .catch(error => {
            console.error(error)
        })
}