# E-commerce Website Testing using Cypress

![Cypress Tests](https://github.com/sowmiyakodiswaran/ecommerce-cypress-testing/actions/workflows/cypress.yml/badge.svg)

## Project Overview

This project automates end-to-end functional test scenarios for the [SauceDemo](https://www.saucedemo.com/) e-commerce demo application using Cypress and JavaScript.

The project demonstrates UI testing, test automation, assertions, and continuous integration using GitHub Actions.

## Objectives

- Validate login functionality and error handling.
- Verify product display and selection.
- Test shopping cart interactions.
- Validate checkout workflows.
- Execute automated tests through GitHub Actions.

## Tech Stack

- **Language:** JavaScript
- **Testing Framework:** Cypress
- **Runtime:** Node.js
- **Version Control:** Git and GitHub
- **CI/CD:** GitHub Actions

## Test Scenarios

### 1. Login Validation
- Verify login with valid credentials.
- Validate the response to invalid credentials.
- Check expected page navigation and error messages.

### 2. Product Selection
- Verify product listings.
- Test product selection and related UI interactions.

### 3. Shopping Cart
- Test adding products to the cart.
- Test removing products from the cart.
- Verify relevant cart interactions.

### 4. Checkout
- Test checkout-related form interactions.
- Validate expected checkout behavior and order summary where covered by the test cases.

*Note: The scenarios listed above should be kept aligned with the actual assertions in the test files.*

## Testing Approach

- End-to-end UI testing
- Automated assertions
- Functional workflow validation
- Headless test execution
- Continuous integration with GitHub Actions

## Installation and Setup

### Prerequisites
- Node.js and npm
- Git

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/sowmiyakodiswaran/ecommerce-cypress-testing.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ecommerce-cypress-testing
   ```

3. Install dependencies:

   ```bash
   npm ci
   ```

4. Open the Cypress interactive runner:

   ```bash
   npx cypress open
   ```

5. Run tests in headless mode:

   ```bash
   npm test
   ```

## Application Under Test

[SauceDemo](https://www.saucedemo.com/)

SauceDemo is a demo e-commerce application suitable for practicing web testing and automation.

## Project Structure

```text
ecommerce-cypress-testing/
├── .github/
│   └── workflows/
│       └── cypress.yml
├── cypress/
│   ├── e2e/
│   │   └── *.cy.js
│   └── support/
│       └── e2e.js
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

## Test Execution Evidence

### Cypress Test Run

<img width="1315" height="312" alt="image" src="https://github.com/user-attachments/assets/43b96ffa-9343-4512-8dcf-2b88d8f23450" />

### Login Validation

<img width="907" height="281" alt="image" src="https://github.com/user-attachments/assets/7ecacedf-887c-4a3c-a6cf-236b40b33a47" />

### Product Selection

<img width="957" height="305" alt="image" src="https://github.com/user-attachments/assets/81ceafab-42fa-4d6f-b0d8-bbab25b8b881" />

### Addition to Cart

<img width="959" height="307" alt="image" src="https://github.com/user-attachments/assets/31233305-a3f4-4a14-801f-cdb3e40f1ae0" />

### Checkout

<img width="959" height="318" alt="image" src="https://github.com/user-attachments/assets/8ea31ef4-e5cc-47d6-941f-449c1e182995" />

## Continuous Integration

GitHub Actions is configured to run Cypress tests on pushes, pull requests, and manual workflow dispatches.

Check the workflow badge at the top of this README for the latest status.

## Author

Software Testing and Cypress Automation Project
2b88d8f23450" />


### Login Validation
<img width="907" height="281" alt="image" src="https://github.com/user-attachments/assets/7ecacedf-887c-4a3c-a6cf-236b40b33a47" />


### Product Selection
<img width="957" height="305" alt="image" src="https://github.com/user-attachments/assets/81ceafab-42fa-4d6f-b0d8-bbab25b8b881" />

### Addition to Cart
<img width="959" height="307" alt="image" src="https://github.com/user-attachments/assets/31233305-a3f4-4a14-801f-cdb3e40f1ae0" />

### Checkout of Products



## Author
Software Testing Project | Cypress Automation
