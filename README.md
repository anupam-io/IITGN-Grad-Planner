# node-react-starter
A simple fullstack starter application using Node.js, Express.js, React.js and MongoDB

To run this project you need to add the backend and frontend dependencies.
In the root of the project run the following command

```
$ npm install
```

Then, navigate to the client directory and run the following command:

```
recommended
$ yarn
```
or
```
npm install
```

### Running the application

*To run this application, you must have MongoDB up and running*

To run the application, use the following command:

```
$ npm run dev
```

## How to test using **course**
 - `node course.schema.test.js`

3. Course and grade Tracker and Planner [S]

	Stakeholders: Vraj Patel and Abhigyan

	Synopsis: 

Your task is to ideate and develop a web portal that provides an efficient and intuitive way to track graduation requirements and grades.

Background
IITGN offers all of its students the freedom to choose their courses and tailor their education during their time here according to their interests but this freedom of choice also complicates the process of tracking the courses that students have already taken and the courses they need to take to complete graduation requirements. 
Currently, most students use spreadsheets to informally keep track of their grades and credit requirements which is not optimal. 

Features
Basic Requirements:
Ability to easily add courses the students wish to take or has already taken along with the requirement they are being counted towards. 
The Requirement Satisfied Field should show options according to the degree being pursued. (ES 654 can count towards Extended Core or Open Elective for CS Majors, CS Minor course for others.)
For example, this is the minimal information that needs to be taken for each course:
Course Code: ES 654
Course Name: Machine Learning
Requirement satisfied: Extended Core (possible for CS Major)/ CS Minor/ Open elective
Credits: 4
Grade: 10
An overall view of Semester-wise CPI and SPI potentially along with pass/fail grade calculator.
Students should be able to select the type of degree they are going for (e.g. Major in Electrical Engineering with a Minor in CSE) and be able to see the credit requirements that are remaining.
Students should be able to create a tentative graduation plan and share it with the Faculty Advisor.

Extra Features:
When adding courses, automatically detect it as a core course and mark it as such instead of taking input from the student. 
Suggestion of order of courses based on prerequisites and semester they are offered in.
Suggestion of courses for minor and honours requirements when creating a graduation plan.

Resources:
Pass/Fail Calculator: This is a nifty tool for calculating the CPI and SPI after using the Pass/Fail option. It can serve as a reference/starting point for your ideation.
Related Advisories for understanding graduation requirements can be found here.


Development resources
We expect you to build a web application preferably. Apart from the below mentioned, you are free to use the tech-stack of your choice.
  
NodeJS, Django, PHP, MongoDB, MySQL (backend & database)
ReactJS, AngularJS, Bootstrap, HTML, CSS (frontend)
Google Firebase (All in one service for faster development)


Have a list, and check different constraints on that.
{List status, List requirements, Suggestions}
Can we just make this app for CSE?
Can we get the data for this? courses, faculty, and students?
Do we have to create the interface for faculty?
Link sharing system
16 total for {pass/fail+online}