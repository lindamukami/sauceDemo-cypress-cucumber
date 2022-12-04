import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import login from "../../pages/LoginPage.spec";
beforeEach(() => {
    cy.viewport(1600,720)

});
Given ("I navigate to the saucedemo website", () => {
    login.enterURL()
});
When("User enter valid credentials and clicks on the Login button", (datatable) => {
    datatable.hashes().forEach((element) => {
        login.enterUsernamePassword(element.username, element.validpassword)
    });
    login.clickLoginButton()
    
});
When("User clicks on the Login button", () =>{
    login.clickLoginButton()
});
Then("Validate the title after Login", () =>{
    login.validateTitle
});

When("User enter invalid credentials and clicks on the Login button", (datatable) => {
    datatable.hashes().forEach((element) => {
        login.enterUsernamePassword(element.username, element.invalidpassword)
    });
    login.clickLoginButton()
    
});
When("User clicks on the Login button", () =>{
    login.clickLoginButton()
});
Then("Error message should display", (datatable) => {
    datatable.hashes().forEach((element) => {
        login.validateErrorMessage(element.errormessage)
    });

});