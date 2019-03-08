# Burger Meister
A Tracking Application for the Burger Devotee

## Individual Project 12 (Burger) 

The assignment was to implement Node JS, Express JS, MySQL, and Handlebars to create and burger tracking application employing servers to run the app as a website. This is a single page style site wherein the user can add burgers they would like to eat to a list which appears to the left of the add burger text entry area. If the user has eaten a given burger, they can click on the name of the burger and it is transfered to the burgers eaten area on the right side of the burger text entry area. The project follows a Model-View-Controller design pattern and utilizes Object-Relational Mapping (ORM).

## Run App Through Heroku Deployement
Try the [App](https://evening-falls-21823.herokuapp.com/).
 
## Getting Started on Your Own Machine
1. Clone [repo](https://github.com/dtries/burger.git) to your machine. 
1. Navigate to the burger directory on your maching using GitBash or your terminal.
1. Enter 'npm install' in GitBash or your terminal.
   * This will install the proper js package files from a package JSON file.
1. Open the config folder with the main burger folder
1. Open the connection.js file using your code editor.
1. You will manually have to enter to host, user, port, password, and database names in this file in order to connect to the MySql database.
1. The schema and seed scripts to establish and initially establish and populate the database needed are in the db folder within the burger folder.
   
   ## Running on a Local Server
   1. Enter 'node server.js' this will open a local server on your machine. 
   1. Your terminal will display which port the app is using, in this case 8080.
   1. Open up a browser window and type in 'localhost:8080', this will open the homepage for Burger Meister
     * Possible actions:
       1. Add a Burger.       
       1. Eat a Burger.   
        
## Tech Employed
* Node.js - (see below)
* Express.js - https://www.npmjs.com/package/express
* method-override.js - https://www.npmjs.com/package/method-override
* dotenv.js - https://www.npmjs.com/package/dotenv
* Handlebars.js - https://www.npmjs.com/package/handlebars
* Materialize - https://materializecss.com/

## Prerequisites
* Node.js - The latest version of Node is available at: https://nodejs.org/en/

## Built With
VS Code - Text Editor
## Authored and Maintained By:
Dennis Ries

Contact: dtries@gmail.com

© 2019 GitHub, Inc.
Terms
Privacy
Security
Status
