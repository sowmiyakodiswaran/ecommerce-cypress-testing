# E-commerce Website Testing using Cypress

## Project Overview
This project automates functional test scenarios for the SauceDemo e-commerce demo website using Cypress and JavaScript.

## Objectives
- Validate login functionality and error handling.
- Verify product listings and sorting.
- Test adding and removing products from the shopping cart.
- Validate checkout form fields and order summaries.
- Automate the end-to-end shopping workflow.

## Tech Stack
- JavaScript
- Cypress
- Node.js
- Git and GitHub
## Test Scenarios Covered

The project focuses on validating key e-commerce user workflows using Cypress and JavaScript.

### 1. Login Validation
- Verify that a user can log in with valid credentials.
- Validate the application's response to invalid credentials.
- Check that the expected page or error message appears after login attempts.

### 2. Product Selection
- Verify that products are displayed correctly.
- Select a product and validate the expected interaction.
- Check that the selected product information is displayed as expected.

### 3. Shopping Workflows
- Validate key shopping interactions.
- Verify that selected products are handled as expected during the workflow.
- Check the application's behavior after user actions.

### Testing Approach
- **Framework:** Cypress
- **Language:** JavaScript
- **Testing type:** End-to-end testing
- **Validation:** Assertions and UI behavior checks

## Installation and Setup

1. Clone the repository.
2. Install dependencies:

   `npm install`

3. Open Cypress:

   `npx cypress open`

4. To execute tests in headless mode:

   `npx cypress run`

## Application Under Test
https://www.saucedemo.com/

SauceDemo is a demo application used for testing practice.

## Project Structure

- `cypress/e2e/` — Automated test specifications
- `cypress/support/` — Reusable Cypress commands and support configuration
- `cypress.config.js` — Cypress configuration

## Test Execution Evidence

### Cypress Test Run
![Cypress test execution results](screenshots/test-run-results.png)
<img width="1315" height="312" alt="image" src="https://github.com/user-attachments/assets/43b96ffa-9343-4512-8dcf-2b88d8f23450" />


### Login Validation
![Login validation test](screenshots/login-test.png)
<img width="907" height="281" alt="image" src="https://github.com/user-attachments/assets/7ecacedf-887c-4a3c-a6cf-236b40b33a47" />


### Product Selection
![Product selection test](screenshots/product-selection.png)
<img width="957" height="305" alt="image" src="https://github.com/user-attachments/assets/81ceafab-42fa-4d6f-b0d8-bbab25b8b881" />

### Addition to Cart
<img width="959" height="307" alt="image" src="https://github.com/user-attachments/assets/31233305-a3f4-4a14-801f-cdb3e40f1ae0" />

### Checkout of Products
<img width="959" height="318" alt="image" src="https://github.com/user-attachments/assets/8ea31ef4-e5cc-47d6-941f-449c1e182995" />


## Author
Software Testing Project | Cypress Automation
