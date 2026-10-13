describe("Login Functionality", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("TC01 - Login with valid credentials", () => {
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.url().should("include", "/inventory.html");
    cy.get(".title").should("have.text", "Products");
  });

  it("TC02 - Login with invalid credentials", () => {
    cy.get('[data-test="username"]').type("wrong_user");
    cy.get('[data-test="password"]').type("wrong_password");
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain", "Username and password do not match");
  });

  it("TC03 - Login with empty fields", () => {
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain", "Username is required");
  });
});
