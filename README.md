## Cochrane_project
Exploratory testing on Cochrane's webpage.

|  | Author| 
| -| -----------------| 
| 1|[Md Bakhtiar](https://github.com/Bakhtiar1991)| 

Performed end to end automation testing on login option using page object model. Generated an html report using mochawesome. 
#### How to run the test:
- Git clone the repo.
- Install Node.js
- Open the folder on IDE and open terminal and run ```npm init -y```
- Install cypress ```npm install cypress```
- Open cypress ```npx cypress open```
- Select the e2e testing option in cypress
- Select a browser 
- Click on the login_test.cy.js.


#### Otherwise:
- Go to cypress/e2e/login_test.cy.js to find the test suit. I have written 3 invalid test where I provided wrong credential and then click on the my profile button and it fails ( since it could not login, it could not click on the profile button). On last test with right username and right password it passed to click on the my profile button.

- Go to cypress/e2e/pages/login_page.js to find LoginPage class.

- Go to cypress/videos to find the video of the test suit.

- Go to cypress/reports to find the html report file including assets. 










