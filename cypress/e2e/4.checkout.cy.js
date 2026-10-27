
describe("Checkout Functionality", () => {
  beforeEach(() => {
    cy.login();

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .click();

    cy.get(".shopping_cart_link").click();
    cy.get('[data-test="checkout"]').click();
  });

  it("Checkout with valid details", () => {
    cy.get('[data-test="firstName"]').type("Test");
    cy.get('[data-test="lastName"]').type("User");
    cy.get('[data-test="postalCode"]').type("600001");

    cy.get('[data-test="continue"]').click();

    cy.url().should("include", "/checkout-step-two.html");
    cy.get(".cart_item").should("have.length", 1);
    cy.get('[data-test="finish"]').click();

    cy.get('[data-test="complete-header"]')
      .should("be.visible")
      .and("have.text", "Thank you for your order!");
  });

  it("TC09 - Checkout with missing information", () => {
    cy.get('[data-test="continue"]').click();

    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain", "First Name is required");
  });

  
  
  it("TC10 - Verify checkout overview and total", () => {
    cy.get('[data-test="firstName"]').should("be.visible").type("Test");
    cy.get('[data-test="lastName"]').should("be.visible").type("User");
    cy.get('[data-test="postalCode"]').should("be.visible").type("600001");

    cy.get('[data-test="continue"]').click();

    // Confirm navigation to the checkout overview
    cy.url().should("include", "/checkout-step-two.html");

    // Confirm the product is shown
    cy.get(".cart_item").should("have.length", 1);

    // Verify the order summary
    cy.get(".summary_subtotal_label").should("be.visible");
    cy.get(".summary_tax_label").should("be.visible");
    cy.get(".summary_total_label").should("be.visible");
  });
  
  it("TC11 - Complete checkout and continue shopping", () => {
    // Fill in checkout details
    cy.get('[data-test="firstName"]').type("Test");
    cy.get('[data-test="lastName"]').type("User");
    cy.get('[data-test="postalCode"]').type("600001");

    // Continue to order overview
    cy.get('[data-test="continue"]').click();

    cy.url().should("include", "/checkout-step-two.html");
    cy.get(".cart_item").should("have.length", 1);

    // Finish the order
    cy.get('[data-test="finish"]').click();

    // Verify order confirmation
    cy.get('[data-test="complete-header"]')
      .should("be.visible")
      .and("contain", "Thank you for your order!");

    // Return to the products home page
    cy.get('[data-test="back-to-products"]').click();

    cy.url().should("include", "/inventory.html");
    cy.get(".inventory_list").should("be.visible");

    // Continue shopping by adding another product
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    cy.get(".shopping_cart_badge").should("have.text", "1");
  });
  
  it("TC12 - Verify checkout overview and total", () => {
    cy.get('[data-test="firstName"]').type("Test");
    cy.get('[data-test="lastName"]').type("User");
    cy.get('[data-test="postalCode"]').type("600001");

    cy.get('[data-test="continue"]').click();

    // Confirm navigation to the checkout overview
    cy.url().should("include", "/checkout-step-two.html");

    // Confirm the product is shown
    cy.get(".cart_item").should("have.length", 1);

    // Read and validate the subtotal, tax, and total
    cy.get(".summary_subtotal_label").invoke("text").then((subtotalText) => {
      cy.get(".summary_tax_label").invoke("text").then((taxText) => {
        cy.get(".summary_total_label").invoke("text").then((totalText) => {
          const subtotal = Number(subtotalText.replace("Item total: $", "").trim());
          const tax = Number(taxText.replace("Tax: $", "").trim());
          const total = Number(totalText.replace("Total: $", "").trim());

          expect(subtotal).to.be.greaterThan(0);
          expect(tax).to.be.greaterThan(0);
          expect(total).to.be.greaterThan(0);

          expect(
            Math.round((subtotal + tax) * 100)
          ).to.equal(Math.round(total * 100));
        });
      });
    });
  });

});
