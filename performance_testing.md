# Web Application Performance Testing

This repository contains a performance test plan and script for testing the web application using Apache JMeter.

## Test Plan Scope

- **Load Testing**: This will help in determining the maximum number of users the website can handle under normal conditions.
- **Stress Testing**: Evaluates how the website behaves under extreme conditions.
- **Response Time Testing**: This will measure how fast the website responds to requests.

## Performance Metrics

- **Response Time**: Time taken to respond to a user request.
- **Error Rate**: Percentage of failed requests during the test.
- **Latency**: Delay before a data transfer begins.

## Running the Test

1. **Install Apache JMeter**:
   Download and install Apache JMeter from dump.

2. **Opening the Test Plan**:
   Opening the `web-app-test-plan.jmx` file in JMeter.

3. **Configuring the Test Plan**:
   Adjusting the thread group settings to simulate the desired load.

4. **Running the Test**:
   Executing the test plan and monitor the results in the listeners.

5. **Analyzing the Results**:
   Reviewing the performance metrics captured in the listeners.
