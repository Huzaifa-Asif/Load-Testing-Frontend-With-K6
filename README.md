
# Load Testing Scripts for Frontend Application
This repository contains a collection of browser load testing scripts written in K6 to assess the performance and reliability of your frontend application. Load testing helps identify performance regressions, scalability issues, and bottlenecks, enabling you to build resilient and performant applications that can handle high traffic.

## Why Load Testing?
Load testing is essential to ensure your system can handle the expected workload and provide a seamless experience for your users. It helps in analyzing the system's response under different load scenarios, identifying performance issues, and making informed decisions to optimize your application's performance.

## Installation:
Step 1: Install: Download and install the latest version of k6 from the official website (https://k6.io/docs/get-started/installation/).

## Running Test Cases:
**Step 1:** Clone the Repository: Clone the repository containing the load testing scripts to your local machine.

**Step 2:** Navigate to the Repository Directory: Open a terminal or command prompt and navigate to the directory where you cloned the repository.

**Step 3:** Execute a Test Case: To run a specific test case, use the following command:
```K6_BROWSER_ENABLED=true k6 run path/to/testfile.js  ```
Replace path/to/testfile.js with the relative path to the desired test file from the current directory.
For example, to run the "Stress Test" script, the command would be:
```K6_BROWSER_ENABLED=true k6 run 4-stress-test.js```
K6 will execute the test case and display the test results and relevant metrics.

**Step 4:** Customize Test Execution: K6 provides various options to customize test execution, such as specifying the number of virtual users, test duration, thresholds, and output formats. Refer to the K6 documentation (https://k6.io/docs) for more information on these options and how to use them. 


Congratulations! You have successfully installed K6 and executed a load testing script. Repeat Step 3 for each test case mentioned below, customizing the command as necessary. Analyze the test results to gain insights into your frontend application's performance under different load scenarios.


Here are some example browser test cases for k6:

## Script Details

1. **Load Page Test**
File Name: `1-load-page.js`
Description: Open the browser and navigate to the specified URL. Verify that the HTTP status code is as expected (e.g., 200 OK). It basically verifies that the load testing script functions correctly and test the everything is working smothly without errors.

2. **Redirect Page Test**
File Name: `2-redirect-page.js`
Description: When user click on the specified link. Verify that the browser navigates to the expected destination page.

3. **Login Form Test**
File Name: `3-login-form.js`
Description: Verify that login page is opened in browser and user credentials are typed in the appropriate fields and user is authenticated and redirect to dashboard page.

4. **Stress Test**
File Name: `4-stress-test`
Description: Evaluates how frontend application performs when subjected to high user traffic. It aims to analyze the application’s behavior under extreme conditions.

5. **Login Form Test**
File Name: `5-stress-test-with-report`
Description: Stress test with html report generation when test execution is finished.

6. **Login Form Test**
File Name: `6-device_emulation`
Description: Verify how web application works on mobile device.


> Feel free to explore and modify these load testing scripts according to your specific application requirements.