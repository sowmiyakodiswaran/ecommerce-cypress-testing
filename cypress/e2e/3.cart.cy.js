
describe("Shopping Cart", () => {
  beforeEach(() => {
    cy.login();
  });

  it("TC06 - Add a product to the cart", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .click();

    cy.get(".shopping_cart_badge").should("have.text", "1");

    cy.get(".shopping_cart_link").click();

    cy.get(".cart_item").should("have.length", 1);
    cy.get(".inventory_item_name")
      .should("contain", "Sauce Labs Backpack");
  });

  it("TC07 - Remove a product from the cart", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .click();

    cy.get(".shopping_cart_link").click();

    cy.get(".cart_item").should("have.length", 1);

    cy.get('[data-test="remove-sauce-labs-backpack"]')
      .click();

    cy.get(".cart_item").should("have.length", 0);
    cy.get(".shopping_cart_badge").should("not.exist");
  });
});
