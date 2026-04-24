class LoginPage {
    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "button[type='submit']",
            wrongCredentialAlert: "[role='alert']",
            singUpButton: "[data-test='signup']"
        }
        return selectors
    }
    accessLoginPage() {
         cy.visit("localhost:3000/signin")
    }

    loginWithAnyUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }

    checkAccessInvalid() {
        cy.get(this.selectorsList().wrongCredentialAlert)
    }
    
    checkSingUpPage() {
        cy.get(this.selectorsList().singUpButton.click()) 
        cy.location("pathname").should("equal", "http://localhost:3000/signup")
    }
}

export default LoginPage