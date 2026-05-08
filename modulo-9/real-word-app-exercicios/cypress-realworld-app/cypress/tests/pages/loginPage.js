class LoginPage {
    selectorsList() {
        const selectors = {
            usernameField: "[data-test='signin-username']",
            passwordField: "[data-test='signin-password']",
            loginButton: "[data-test='signin-submit']",
            wrongCredentialAlert: "[data-test='signin-error']",
            singUpButton: "[data-test='signup']"
        }
        return selectors
    }
    
    accessLoginPage() {
         cy.visit("http://localhost:3000/signin")
    }

    loginWithAnyUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }

    checkLoginFail() {
        cy.get(this.selectorsList().wrongCredentialAlert).should("be.visible")
    }
    
    accessSingUpPage() {
        cy.get(this.selectorsList().singUpButton).click() 
        cy.location("pathname").should("equal", "/signup")
    }
}

export default LoginPage