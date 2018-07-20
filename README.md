Pre-Install Dependency required
- NPM / NodeJS
- JDK

IDE / Text Editor
- Sublime
- Webstrom

To Execute the Automation

1. clone the project directory
git clone https://github.com/imsiddharth/NodeJSTestFramework.git

2. Install the dependency using NPM
- navigate to project directory using command line ( open two terminal window )
- npm install

3. To execute test cases open two terminal windows
a. First teminal window
   - npm run selenium-postinstall
   - npm run selenium-start
b. Second Terminal window
  i. Execute all test and report will be open by default
    - npm run test
    Note* before every execute, Report repository needs to be deleted, it can't impact the future report result
  ii. Execute on web test
    - npm run web
  iii. Execute only api test
    - npm run api

To view the report ( for individual web test and Api test )
- npm run allure-report


Note* Style Guide https://google.github.io/styleguide/jsguide.html

