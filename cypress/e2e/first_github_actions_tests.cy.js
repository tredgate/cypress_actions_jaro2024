describe("Github Actions Tests", () => {
  it("Open pmtool, fill username and check its value", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username").type("admin");
    cy.get("#username").should("have.value", "admin");
  });

  it("Login Header exist", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("h3.form-title").should("exist");
  });
});
