class LoginPage {
    selectorsList() {
        const selectors = {
            loginAndLogoutButton: "button",
            signInButton: "form button",
            emailField: "[data-cy='email']",
            passwordField: "[data-cy='password']",
        };
        
        return selectors
    };    
    
    accessLoginPage() {
        cy.visit("http://localhost:3000/heroes")
    };

    loginWithAnyUser(username, password) {
        cy.get(this.selectorsList().loginAndLogoutButton).contains("Login").click()
        cy.get(this.selectorsList().emailField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().signInButton).contains("Sign in").click()
    };

    checkLoginFail() {
        cy.contains("Invalid email or password")
    };

    checkLoginSuccess() {
        cy.get(this.selectorsList().loginAndLogoutButton).contains("Logout")
    };
};

export default LoginPage