class MenuPage {
    selectorsList() {
        const selectors = {
            displayUsername: "[data-test='sidenav-username']",
            homeButton: "[data-test='sidenav-home']",
            myAccountButton: "[data-test='sidenav-user-settings']",
            bankAccountsButton: "[data-test='sidenav-bankaccounts']",
            notificationsButton: "[data-test='sidenav-notifications']",
            logoutButton: "[data-test='sidenav-signout']",
            newTransactionButton: "[data-test='nav-top-new-transaction']"
        }
        return selectors
    }

    checkLoginSuccess() {
        cy.get(this.selectorsList().displayUsername).should('be.visible')
    }

    accessAnyPage(nameButton) {
        cy.get(this.selectorsList()[nameButton]).click()
    }
}

export default MenuPage