# E-commerce Website Testing using Cypress

![Cypress Tests](https://github.com/sowmiyakodiswaran/ecommerce-cypress-testing/actions/workflows/cypress.yml/badge.svg)

## Project Overview

This project automates end-to-end functional test scenarios for the [SauceDemo](https://www.saucedemo.com/) e-commerce demo application using Cypress and JavaScript.

It demonstrates UI test automation, reusable commands, assertions, functional workflow validation, and continuous integration using GitHub Actions.

## Objectives

- Validate login functionality and error handling.
- Verify product listings and price sorting.
- Test shopping cart operations, including adding and removing products.
- Validate checkout form behavior and order completion.
- Verify checkout summary calculations.
- Run automated tests through GitHub Actions.

## Tech Stack

- **Language:** JavaScript
- **Testing Framework:** Cypress
- **Runtime:** Node.js
- **Version Control:** Git and GitHub
- **CI/CD:** GitHub Actions

## Test Scenarios

### 1. Login Validation
- Login with valid credentials.
- Validate invalid login credentials.
- Verify error handling when login fields are empty.

### 2. Product Selection
- Verify that products are displayed.
- Verify sorting by price from low to high.

### 3. Shopping Cart
- Add a product to the cart.
- Remove a product from the cart.
- Verify cart contents and cart badge behavior.

### 4. Checkout
- Complete checkout with valid details.
- Validate missing required checkout information.
- Verify the checkout overview and calculate the order total from subtotal and tax.
- Complete checkout, verify the confirmation message, return to the products page, and add another product.

## Testing Approach

- End-to-end UI testing
- Functional testing
- Positive and negative test scenarios
- Assertions and validation checks
- Reusable Cypress custom commands
- Headless test execution
- Continuous integration using GitHub Actions

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

SauceDemo is a demo e-commerce application used here to practice web testing and automation.

## Project Structure

```text
ecommerce-cypress-testing/
├── .github/
│   └── workflows/
│       └── cypress.yml
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js
│   │   ├── selection.cy.js
│   │   ├── cart.cy.js
│   │   └── checkout.cy.js
│   ├── fixtures/
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── .gitignore
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

## Test Execution Evidence

### Cypress Test Run

<img width="1315" height="312" alt="Cypress test run evidence" src="https://github.com/user-attachments/assets/43b96ffa-9343-4512-8dcf-2b88d8f23450" />

### Login Validation

<img width="907" height="281" alt="Login validation test evidence" src="https://github.com/user-attachments/assets/7ecacedf-887c-4a3c-a6cf-236b40b33a47" />

### Product Selection

<img width="957" height="305" alt="Product selection test evidence" src="https://github.com/user-attachments/assets/81ceafab-42fa-4d6f-b0d8-bbab25b8b881" />

### Shopping Cart

<img width="959" height="307" alt="Shopping cart test evidence" src="https://github.com/user-attachments/assets/31233305-a3f4-4a14-801f-cdb3e40f1ae0" />

### Checkout

<img width="959" height="318" alt="Checkout test evidence" src="https://github.com/user-attachments/assets/8ea31ef4-e5cc-47d6-941f-449c1e182995" />

## Continuous Integration

GitHub Actions is configured to run Cypress tests on pushes, pull requests, and manual workflow dispatches.

Check the workflow badge at the top of this README for the latest status.

## Author

Software Testing Project | Cypress Automation
