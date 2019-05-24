# AtozPosts

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.9.

To run and modify this project on you local development you need to setup following Enviroment:

# Prequisites:

-	Node Js 
-	Angular CLI
- Latest Google Chrome browser (Recommended)

IDE: Visual Studio (Recommended)

# Steps to run the Project:

## 1. Clone the project from git:
   - Create project folder in you computer
   - Into that folder > open gitbash terminal  
   - Run: `git clone https://github.com/mJay99/AtozPosts.git`
   - Hit Enter
   
## 2. Go into cloned folder:
   - Open any terminal like cmd or gitbash
   - Run: `npm install`
   - Run: `ng serve` (for running on localhost with default port which is 4200)
   - Run: `ng serve --host 0.0.0.0 --port port-number`	(custamized address and port)


  npm install command will automatically install all necessary modules.It may take few minutes depending on 
  your computer configuration,speed and performance.

  ng serve will run the project with http://localhost:4200 by default.

  But in case you need to host it with different address and port number then you must use
  ng serve with --host and --port option. Ex. http://192.168.l.107:8080

  By deault Angular project runs in development mode.To run it on production mode you need to build the package first.
 
 ## 3.To make a build package:
  - Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
	- Use the `--prod` flag for a production build.
  - Run: `ng build --prod`

 After successful package building it will generate dist folder in your project folder.

 Then open index.html file from within the "dist/your-project-name" folder with any browser.
 (google chrome recommended)
    
 You can host the folder itself in your local computer using http-server or any other server.
