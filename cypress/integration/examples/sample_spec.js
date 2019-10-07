describe("My First Test", function() {
  it("Visits the Kitchen Sink", function() {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();

    cy.url().should("include", "/commands/actions");

    cy.get(".action-email")
      .type("test@email.me")
      .should("have.value", "test@email.me");
  });
});
