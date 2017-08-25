# John Coombs - Backbase Tech Assessment | HTML with Angular.js

Comments 
------------
1. Reviewers can check the assessment via localhost or 'dist' folder. 
2. 'dist' folder contains compressed javascript for performance. 
3. Gruntfile.js compresses all controllers, directives and services into 1 of each file. This allows developers to write as many files they wish during development. 
4. Here was my strategy for this Tech Assessment. (1) Create Global Variables (2) Write down Mobile Strategy (3) Build out Desktop Architecture (4) Fulfill all Functional Requirements (5) Cleanup visual based on all viewports 
5. I took the desktop application and created a mobile friendly experience for devices below the iPad's resolution. 
6. I use the same angular architecture for hybrid mobile applications. 

Limitations (Notes) 
------------
1. I did not spend time on retrieving transactions.json from a local json file once in 'dist'. 
'Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https.'
2. I kept 'Make a Transfer' header the same height as 'Recent Transactions' for Responsive purposes. 
3. Time was a factor this week due to many conflicts. Below is my timestamp for the project
Monday: 30 minutes
Tuesday: 1 hour
Thursday: 3 hour
Friday: 30 minutes
4. I did not handle 'no results' copy when no transactions after search query. #sad


Requirements
------------
###NodeJS
Server-side JavaScript. Required for build process. [Download]('http://nodejs.org/download/')

###Bower
Dependency manager. Enter the following from the command line to install:
````
npm install -g bower
````
*May require `sudo` command*

###Grunt
Project build process (runs on NodeJS). Enter the following from the command line to install:
````
npm install -g grunt-cli
npm install -g grunt
````
*May require `sudo` command*

###Compass
SASS library/CSS pre-processor (requires [Ruby]('https://www.ruby-lang.org/en/downloads/')). Enter the following from the command line to install:
````
gem update --system
gem install compass
````

Project Setup
-------------
1. Inside the project's root directory, run `npm install && bower install`. The `npm install` command downloads and installs any additional node modules needed to run the Grunt tasks that are required for the build process - defined in **package.json**. The `bower install` command downloads all of the dependencies(ex. jQuery, Angular, Ionic, etc) - defined in **bower.json**.
2. Launch the development server by running `grunt serve` from the project's root directory. This should open a browser window at [http://localhost:9000]('http://localhost:9000') and reload the page any time a change is saved to any html, js, css/sass, or image within the **app** folder.
3. Create the distribution folder by running `grunt build` from the project's root directory. This should compile all **app** code into minified versions and distribute to a **www** folder. This folder is used within the iOS and Android cordova projects




