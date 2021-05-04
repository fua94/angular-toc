describe("First test", () => {
  it("should visit login page", () => {
    cy.visit("/");
    cy.get(".btn-secondary");
    cy.get("button[type=reset]");
  });
});
