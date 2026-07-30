1. Performance Testing Types
Baseline Test: Performed under a very low load (often a single user) to establish a "normal" performance mark. we use this to compare future tests against.
Load Test: Checks how the system behaves under expected "normal" and "peak" conditions (e.g., testing with 50 virtual users as suggested in your plan).
Stress Test: Pushes the system beyond its intended capacity to find the "breaking point" where it fails.
Spike Test: Simulates a sudden, massive increase in users to see how the system handles a burst of traffic.
Endurance (Soak) Test: Runs a steady load over a long period (hours or days) to check for resource issues like memory leaks.

2. Performance Glossary
Response Time: The total time taken from sending a request to receiving a complete response.
Average Response Time: The arithmetic mean of all request times during a test.sum of all times divided by total requests)  It can be easily skewed by a single outlier, such as one request that takes 5 seconds due to a network glitch, making the whole system look slow
p95 (95th Percentile): A critical metric meaning 95% of users experienced a response time at or below this value. This is more representative of user experience than the average because it isn't skewed by one or two very fast requests.
Throughput: The number of requests the system can handle per second (e.g., 10 req/sec).
Error Rate: The percentage of requests that failed (returned a 4xx or 5xx error) compared to the total requests.
Virtual Users (VUs): Simulated users running the test scripts concurrently.


3.Simple Test Plan: Login API

Plan Component	Details
Objective	Establish a performance baseline for the Login API endpoint.
Tool	Apache JMeter 
Target URL	https://jsonplaceholder.typicode.com/users (Safe public API) 
Safe User Count	5 Virtual Users with a 5-second ramp-up 
Test Duration	30 seconds or 10 iterations per user.
Success Criteria	Avg Response Time < 500ms; Error Rate 0% 
Safety Rule	Always run in Staging/Dev; never Production without explicit approval
