# TeamProfileGenerator

Project to build Node.js application which takes in command line inputs to dynamically build an HTML file summarizing 3 types of employee: manager, engineer, and intern all implemented as extensions of a base class called "Employee."

Walkthrough video showing both the program passing the required Jest tests as well as usage and sample output is available here:

https://drive.google.com/file/d/1X_32Jc2dtwi4vrsUgDMjI8YsBlbZWNUw/view

Sample Screenshot of HTML Output:

![image](https://user-images.githubusercontent.com/34629779/118412554-e9737500-b657-11eb-9ea2-1f239e2c402d.png)

Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
