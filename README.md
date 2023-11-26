# CampusJobs_Using_Angular
A static website for understanding the use of Client-Side framework- Angular.

• Took one course from YouTube to first learn Angular JS basics- https://www.youtube.com/watch?v=DwTNR3EBSJQ&list=PL4cUxeGkcC9jqhk5RvBiEwHMKSUXPyng

• For working on this project I am using visual studio code. 

• This project requires the Node JS to be installed. In my machine it was already installed
	- To check that we can open the command prompt and need to hit the following command
		○ # node -v
• For installing the angular 2 we need to install it with node package manager.
	- Please use the following command for the same
		○ # npm install -g @angular/cli
	- Using -g we can install it globally on the machine and not just for the specific project
	
• While installing angular-cli, there was some issue with overriding some files as they were already existed solved it by using -force to override files.
	- Error - npm ERR! EEXIST: file already exists, cmd shim 'C:\Users\mayur\AppData\Roaming\npm\node_modules\@angular\cli\bin\ng.js' -> 'C:\Users\mayur\AppData\Roaming\npm\ng.cmd'
	- Used Command: # npm install -g @angular/cli -force

• Following command is used to start the new project:
	- # ng new CampusJobs (Where CampusJobs is name of the project)

• To see the project at the runtime in browser, used the following command after changing the directory to Article-Library
	- # ng serve

• I have referred the learning of the TypeScript from - https://www.w3schools.com/typescript/index.php

• So while working on the idea, first I have created the component structure and then started building on that structure
• Please refer the following structure:
	
	![image](https://github.com/Mayos-py/CampusJobs_Using_Angular/assets/53505680/9f9dc54e-b6c2-4f71-a4c6-96684b4ea56d)

• Structure Summary: There is one root component in that the current time and date is available to show the current status, Then there are two component available under root component- 1. Home - Home component is there to show the details about the job in the form of job cards. 2. Job Post Form - This component will handle the post request of the form to add the new job. Under the home component there are two sub components- 1. Search filter- Search filter is there to search the specific job title, 2. Pagination - Pagination component is used to separate the multiple jobs on separate pages.    
	
• Firstly as app started need to work on root element it has one use case that it shows Date and Time and also that root component gets refreshed every seconds. I have used one function ngOnInit() - This is the lifecycle hook of angular component- This hook is typically used to perform that are related to the initialization of the component such as initializing properties.

• I was taking new Date().toString() to get the date but it was not coming in correct format that's why I asked chat GPT to get it in the HH:MM:SS and DD:MM:YY format and chat GPT gave me below code:

const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
    };
    this.formattedDate = new Intl.DateTimeFormat('en-US', options).format(new Date());


• For creating the new component in the project I used the following command:
	- # ng generate component home (where home is the component name) 

• Once the home component is created I have traced down to its directory and then created the filter and pagination component in it.

• I am using the static JSON to get the data and load it on the home component. I have asked chatGPT to give me the way so that I can design the JSON job list in the form of job-cards. Chat GPT gave me the code for CSS. 

• For the routing purpose for job-cards home page and job-post-form page, I took the references from - https://angular.io/guide/router-tutorial
	- Through this I have used the 'router-outlet' directive to route to specific path after clicking on those specific buttons.
	- I have referred the CSS file for the nav element for the buttons with the route using the same link.
	- Due to the route used for both(Home and Job-post-form) components separately. I was not able to route on the home component in the first load as it is just loading the root component on localhost- I had to click on the button to get to that component- Then I have added one work-around- I have added the router.navigate function in the ngOnInit() hook of the root component to get it loaded every time the root component is getting initialized.

• For job posting form I took the reference from -  https://angular.io/start/start-forms

• While checking thoroughly about the feasibility of updating the local JSON file using Angular, it became evident that the framework itself has limitations on direct file operations due to security restrictions. It was also mentioned in the stack overflow article  - https://stackoverflow.com/questions/59235882/update-a-single-property-of-local-json-file-using-put-call-in-angular-8 - "You can't do any file operation using just angular framework. You need server side implementation to achieve this". This conclusion is aligned with my attempts to update a local JSON file directly from the client side angular.

• So I have added one work around so that when user will click on the post a job button it will download the updated JSON file for the same, to verify that the adding a job functionality is adding the job in the JSON file or not.

![image](https://github.com/Mayos-py/CampusJobs_Using_Angular/assets/53505680/d2c33233-94bb-4f98-b232-dfd001b10a05)
