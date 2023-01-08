describe("Example test", () => {
  it("Visits homepage", () => {
    cy.visit("http://localhost:3000/");

    cy.get("button").click();

    cy.contains("h1", "Name:");
  });
});

export {};
