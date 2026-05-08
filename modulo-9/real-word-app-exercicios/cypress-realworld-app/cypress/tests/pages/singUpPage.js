class SingUpPage {
    selectorsList () {
        const selectors = {
            fistNameField: "[data-test='signup-first-name'] input",
            lastNameField: "[data-test='signup-last-name'] input",
            usernameField: "[data-test='signup-username'] input",
            passwordField: "[data-test='signup-password'] input",
            confirmPasswordField: "[data-test='signup-confirmPassword'] input",
            singUpButton: "[data-test='signup-submit']"
        }
        return selectors
    }
    
    fillAllFields(fistName, lastName, userName, password, confirmPassword) {
        cy.get(this.selectorsList().fistNameField).clear().type(fistName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        
        if(userName) {
            cy.get(this.selectorsList().usernameField).clear().type(userName)
        }
        
        cy.get(this.selectorsList().passwordField).clear().type(password)
        cy.get(this.selectorsList().confirmPasswordField).clear().type(confirmPassword)      
    }

    validRegistration(){
        cy.get(this.selectorsList().singUpButton).click()
        cy.location("pathname").should("equal", "/signin")
    }

    invalidRegistration(){        
        cy.get(this.selectorsList().singUpButton).should("be.disabled")
    }
}

export default SingUpPage