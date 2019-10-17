describe("Site Navigation", function() {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Search for a postcode on landing page through to loading contact information of a project", function() {
    cy.get(".searchbar__input")
      .type("EC2 5EJ")
      .should("have.value", "EC2 5EJ");

    cy.get("button--search").click();

    cy.url().should("include", "/results/");
  });

  it("click on example project on landing page and be able to get to project details", function() {
    cy.get("button--search").click();

    cy.url().should("include", "/results/");
  });

  it("Search for a postcode on landing page and click on different map options", function() {
    cy.get(".searchbar__input")
      .type("EC2 5EJ")
      .should("have.value", "EC2 5EJ");

    cy.get("button--search").click();

    cy.url().should("include", "/results/");
  });
});
