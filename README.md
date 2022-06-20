
# Playright Test Automation framework

This Project is built by referring to https://playwright.dev/ official documentation.







## Framework Setup
## Test Automation framework details

Coding language - Typescript/Javascript

Runner - Playwright default runner- playwright test

Report files  - html ,allure, 

CICD - Integration  - github actions

Under /tests folder we have spec.ts file which contains test steps written in type script.

We will be Transpiling typescript into javascript and then .js files will be executed during the test.

All the .ts to .js Transpiled files are stored under /javaScriptFiles


All the dependencies are managed using package.json



## Running Tests

To run tests, run the following command

Test Execution
In the root folder, either using a command prompt or any IDE preferably (VS CODE) run the below command to execute tests on different browsers.


By default, the test will run in parallel and headless mode. 

npm i  - to install all the latest npm dependencies 

npm run tsc - code compile

npm run test - To execute tests on both browsers in parallel mode

npm run chrome - To execute tests in chrome alone

npm run report - to generate HTML test report after test completion

npm run allure - to generate tests with allure reports

Allure serve -  to build generated allure reports 

More combinations of executions can be done by adding custom scripts to package.json

## Reports Generation
The playwright offers a variety of reports.
In this framework, both HTML and allure reports can be generated using the commands in the Running tests section.


## CI-CD

The project is CICD integrated using GitHub actions which trigger tests as defined in the .github/workflows.


## Authors

- [@BILAL MOHAMMAD](https://github.com/BilalMohammad5/)

- [Email](BILALROSHAN5@GMAIL.COM)
- [Linkedin](https://www.linkedin.com/in/bilal-mohammad-552b0b159/)
