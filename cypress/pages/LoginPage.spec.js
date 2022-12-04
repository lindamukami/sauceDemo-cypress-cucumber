class LoginPage {
    enterURL() {
        cy.visit("https://www.saucedemo.com/")
        
    }
    enterUsernamePassword(username, password){
        cy.get("#user-name").clear()
        cy.get("#user-name").type(username)
        cy.get("#password").clear()
        cy.get("#password").type(password)
        return this
    }
    clickLoginButton(){
        return cy.get("#login-button").click().wait(8000)
        
    }
    validateTitle(){
        return cy.title().should("eq","Products")
    }
    validateErrorMessage(errorMessage){
        return cy.contains(errorMessage)
    }

}
const login = new LoginPage()
export default login;