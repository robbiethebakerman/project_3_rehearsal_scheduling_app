# project_3_rehearsal_scheduling_app

Please note, the following setup steps are verified on MacOS - some commands may differ for other environments.

1 - Clone git repository to get all files
2 - Create a database called rehearsalschedule on your local machine...
    - Open terminal / command line, and (in any location), enter command "dropdb rehearsalschedule", then "createdb rehearsalschedule"
3 - Run the server-side application...
    - In IntelliJ or other java IDE, open the folder Backend/rehearsalschedule
    - In the folder view, locate and run the file src/main/java/com/codeclan/example/rehearsalschedule/RehearsalscheduleApplication.java
    - In the "Run" window, you should see the line "Tomcat started on port(s): 8080 (http) with context path ''"
4 - In terminal / command line, navigate to the cloned project repository, then to Frontend/rehearsalschedule/
5 - Run npm install to install all npm packages required...
    - In terminal / command line, enter "npm install" (this may take a little while)
6 - Run the React.js frontend app
    - In terminal / command line, enter "npm start"
    - This is a process that must be left running - leave it running and open a new terminal window if needed
7 - In your web browser, go to the address: "localhost:3000/"
8 - You will now be running the web app in your browser!

############
DEPENDENCIES
############

The following tools must be installed in order to open this project:

1 - Node.js - Installers available here: https://nodejs.org/en/download/

2 - PostgreSQL - Installers available here https://www.enterprisedb.com/downloads/postgres-postgresql-downloads

3 - IntelliJ, or a similar IDE for java - Installers available here https://www.jetbrains.com/idea/download/
