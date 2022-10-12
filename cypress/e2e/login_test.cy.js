import {LoginPage} from "./pages/login_page";

const loginPage = new LoginPage()

describe("All Login Tests", function () {
  beforeEach(function () {
    cy.visit("https://www.cochrane.org/");
  });
  it("Log in with right username and wrong password", () => {
    //cy.visit('https://www.cochrane.dk/')
    //cy.visit("https://www.cochrane.org/");

    cy.get(".accept_all").click();
    cy.get(
      "#top-nav-wrapper > #top-nav > #top-nav-inner > #secondary-menu > .menu > .last"
    ).click();
    loginPage.enterUsername("arnav199125@gmail.com")
    loginPage.enterPassword("Cochrane")
    loginPage.clickLogin()
    cy.get('.menu-block-wrapper > .menu > :nth-child(2) > a').click()

  });

  it("Log in with wrong username and right password", () => {
    //cy.visit('https://www.cochrane.dk/')
    //cy.visit("https://www.cochrane.org/");

    cy.get(".accept_all").click();
    cy.get(
      "#top-nav-wrapper > #top-nav > #top-nav-inner > #secondary-menu > .menu > .last"
    ).click();
      loginPage.enterUsername("arnav1991@gmail.com")
      loginPage.enterPassword("Cochranebakhtiar")
      loginPage.clickLogin()
      cy.get('.menu-block-wrapper > .menu > :nth-child(2) > a').click()
  });
  it("Log in with wrong username and wrong password", () => {
    //cy.visit('https://www.cochrane.dk/')
    //cy.visit("https://www.cochrane.org/");

    cy.get(".accept_all").click();
    cy.get(
      "#top-nav-wrapper > #top-nav > #top-nav-inner > #secondary-menu > .menu > .last"
    ).click();
    loginPage.enterUsername("arnav1991@gmail.com")
    loginPage.enterPassword("Cochrane")
    loginPage.clickLogin()
    cy.get('.menu-block-wrapper > .menu > :nth-child(2) > a').click()
  });

  it("Log in with right username and right password", () => {
    //cy.visit('https://www.cochrane.dk/')
    //cy.visit("https://www.cochrane.org/");

    cy.get(".accept_all").click();
    cy.get(
      "#top-nav-wrapper > #top-nav > #top-nav-inner > #secondary-menu > .menu > .last"
    ).click();
    loginPage.enterUsername("arnav199125@gmail.com")
    loginPage.enterPassword("Cochranebakhtiar")
    loginPage.clickLogin()
    cy.get('.menu-block-wrapper > .menu > :nth-child(2) > a').click()
  });
});
