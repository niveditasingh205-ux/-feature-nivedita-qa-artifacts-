# Klodr Automation Smoke Suite

## Project Description
This project is an automated smoke suite for the Klodr Platform. It verifies the critical "health check" flows including:
- Login
- Dashboard Loading
- Opening the Salon module
- Logout

## Setup Instructions
To set up this project locally, ensure you have Node.js installed, then run:
```bash
npm install
How to Run the Tests
You can run the smoke suite using the following commands:
1. Interactive Mode (Cypress UI)
To watch the tests run in the browser:
npx cypress open
2. Headless Mode (Terminal)
To run the tests in the background and see the results in the terminal:
npx cypress run
