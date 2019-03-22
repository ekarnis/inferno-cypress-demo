import { INPUT_SELECTORS, OUTPUT_SELECTORS } from "../constants/Selectors";
import { INPUT_VALUES, OUTPUT_VALUES } from "./BasicTest.data.js";

describe("Test the app with a variety of values", function() {
  it("Works with low numbers", function() {
    cy.visit("/input");
    INPUT_SELECTORS.map((selector, index) => {
      cy.get(selector)
        .clear()
        .type(INPUT_VALUES.low[index]);
    });

    cy.get(".material-icons").click();
    cy.get(".mdl-layout__drawer > .mdl-navigation > [href='/output']").click();
    cy.get(".mdl-layout__obfuscator").click();

    OUTPUT_SELECTORS.map((selector, index) => {
      cy.get(selector).contains(OUTPUT_VALUES.low[index]);
    });
  });
  it("Works with middle numbers", function() {
    cy.visit("/input");
    INPUT_SELECTORS.map((selector, index) => {
      cy.get(selector)
        .clear()
        .type(INPUT_VALUES.middle[index]);
    });

    cy.get(".material-icons").click();
    cy.get(".mdl-layout__drawer > .mdl-navigation > [href='/output']").click();
    cy.get(".mdl-layout__obfuscator").click();

    OUTPUT_SELECTORS.map((selector, index) => {
      cy.get(selector).contains(OUTPUT_VALUES.middle[index]);
    });
  });
  it("Works with high numbers", function() {
    cy.visit("/input");
    INPUT_SELECTORS.map((selector, index) => {
      cy.get(selector)
        .clear()
        .type(INPUT_VALUES.high[index]);
    });

    cy.get(".material-icons").click();
    cy.get(".mdl-layout__drawer > .mdl-navigation > [href='/output']").click();
    cy.get(".mdl-layout__obfuscator").click();

    OUTPUT_SELECTORS.map((selector, index) => {
      cy.get(selector).contains(OUTPUT_VALUES.high[index]);
    });
  });
});
