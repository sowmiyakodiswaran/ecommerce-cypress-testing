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

## Author
Software Testing Project | Cypress Automation
