class HomePage {
    selectorsList () {
        const selectors = {
            everyoneTab: "[data-test='nav-public-tab']",
            friendsTab: "[data-test='nav-contacts-tab']",
            mineTab: "[data-test='nav-personal-tab']",
            transactionItem: "[data-test^='transaction-item']",
            transactionEmptyButton: "[data-test='transaction-list-empty-create-transaction-button']"
        }
        return selectors
    }
    
    clickAnyTab(nameButton) {
        cy.get(this.selectorsList()[nameButton]).click()
    }

    checkTransaction(amount, note) {
        cy.get(this.selectorsList().mineTab).click()
        cy.contains(note).should("be.visible")
        cy.contains(`-$${amount}.00`).should("be.visible")
    }

    checkNoTransactions() {
        cy.get(this.selectorsList().transactionEmptyButton).should("be.visible")
    }
}

export default HomePage