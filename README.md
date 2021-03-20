# Glanner: A graduation planner: build in Hackrush-2021

## Components of the project
 - `MongoDB` online database
 - `Express` server
 - `React` + `react-bootstrap` client
 - Course parser from csv file
## Pages
 - Home page
 - Login Page
 - Logout Page
 - Dashboard
 - Edit Plan
    - Create new plan page
    - Edit plan page(availabe through load plan)
 - Shared plan

## Files & Folders
 - `index.js`: Main server file
 - `models`: Server loading file
 - `initData`: Initial semester & course data
 - `schemas`: Schemas for databases
 - `setDefaultCourses.js`: database initial data
 - `setAllCourses.js`: database initial data
 - `routes`: API routes for end user
 
 - - `client`: Client folder for end user
 - `scrapTimeTable`: scrapping course details from CSV

## How to run?
 - `yarn; cd client; yarn;`: Installing dependencies
 - `yarn c`, `yarn s`, `yarn p`: Setting up the database
 - `yarn start`: starting the server
 - `yarn server`: starting the server in dev mode using `nodemon`
 - `yarn client`: starting the client
 - `yarn dev`: starting both server and client concurrently

### `mongod` for Ubuntu:
 - `sudo service mongod start`
 - `sudo service mongod status`
 - `sudo service mongod stop`
 - `sudo service mongod restart`
### Stopping stucked servers in `Ubuntu`
 - `sudo fuser -k 5000/tcp`
### Stopping stucked servers in `Windows`
 - `netstat -ano | findstr :5000`
 - `taskkill /PID <ProcessId> /F`

## Flow of data
### Database storage
 - Default Sem data
 - All courses data
 - Individual plan data

### User's browser
 - User queries server to:
   - load default course data
   - save plan data
   - load plan data
   - load the list of saved plans
 - Computations are done in user's browser

