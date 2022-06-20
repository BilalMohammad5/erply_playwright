This Project is built by referring to https://playwright.dev/ official documentation.
---Info on Palywright setup

Test Automation framework details
Coding language - Typescript/Java script
Runner - Playwright default runner- playwright test
Report files  - html ,allure, 
CICD - Integration  - github actions

Under /tests folder we have spec.ts file which contains test steps written in type script.
We will be Transpiling  typescript in to javascript and then .js files will be executed during the test. 
All the ts to js Transpiled files are stored under /javaScriptFiles
All the dependencies are managed using package.json

Test Execution
In the root folder either using command prompt or any IDE preferably (VS CODE) run below command to execute tests on different browsers.
By default the test will run in parallel and headless mode. 
npm i  - to install all the latest npm dependencies 

npm run tcs - code compile
npm run test - To executed tests on both browsers in parallel mode
npm run chrome - To execute tests in chrome alone
npm run report - to generate html test report after test completion
npm run allure - to generate tests with allure reports
Allure serve -  to build generated allure reports 







