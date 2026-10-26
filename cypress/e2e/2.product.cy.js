
describe("Products Page", () => {
  beforeEach(() => {
    cy.login();
  });

  it("TC04 - Verify products are displayed", () => {
    cy.get(".inventory_item")
      .should("have.length.greaterThan", 0);
  });

  it("TC05 - Sort products by price: low to high", () => {
    cy.get('[data-test="product-sort-container"]')
      .select("lohi");

    cy.get(".inventory_item_price").then(($prices) => {
      const prices = [...$prices].map((element) =>
        parseFloat(element.innerText.replace("$", ""))
      );

      expect(prices).to.deep.equal(
        [...prices].sort((a, b) => a - b)
      );
    });
  });
});
