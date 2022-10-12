## Cochrane_project
Exploratory testing on Cochrane's webpage.

|  | Author| 
| -| -----------------| 
| 1|[Md Bakhtiar](https://github.com/Bakhtiar1991)| 

Performed end to end automation testing on login option using page object model. Generated an html report using mochawesome. 

Go to cypress/e2e/login_test.cy.js
- Log in with right username and wrong password and click on my profile button. (it fails due to wrong credential.)
- Log in with wrong username and right password and click on my profile button. (it fails due to wrong credential.)
- Log in with wrong username and wrong password and click on my profile button. (it fails due to wrong credential.)
- Log in with right username and right passwordand click on my profile button. (it passes.)

Go to cypress/e2e/pages/login_page.js to find LoginPage class.

Go to cypress/videos to find the video of the test suit.
Go to cypress/reports to find the html report file including assets.








