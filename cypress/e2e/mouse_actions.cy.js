describe("Mouse actions tests", { tags: "@smoke" }, () => {
  it("Scroll into view", () => {
    cy.visit("https://tredgate.com/webtrain/");
    cy.get("body h1").scrollIntoView().should("be.visible");
  });

  it("Double Click Test", () => {
    cy.visit("http://www.webdriveruniversity.com/Actions/index.html");
    cy.get("#double-click").dblclick();
  });

  it("Click and hold test", () => {
    cy.visit("http://www.webdriveruniversity.com/Actions/index.html");
    cy.get("#click-box").trigger("mousedown");
    cy.wait(2500);
    cy.get("#click-box").trigger("mouseup");
  });

  it("Drag and drop tests", () => {
    cy.visit("http://www.webdriveruniversity.com/Actions/index.html");
    cy.get("#draggable").trigger("mousedown", { which: 1 });
    cy.get("#droppable")
      .trigger("mousemove")
      .trigger("mouseup", { force: true });
  });
});
