class TransactionPage {
    selectorsList() {
        const selectors = {
            contactListButton: "[data-test='user-list-item-GjWovtg2hr']",
            amountField: "[data-test='transaction-create-amount-input']",
            addANoteField: "[data-test='transaction-create-description-input']",
            payButton: "[data-test='transaction-create-submit-payment']",
            circleIcon: "[data-testid='CheckCircleIcon']"
        }
        return selectors
    }

    clickOnContact() {
        cy.get(this.selectorsList().contactListButton).click()
        cy.get(this.selectorsList().amountField).should("exist")
    }

    completeTransaction(amount, note) {
        cy.get(this.selectorsList().amountField).type(amount)
        cy.get(this.selectorsList().addANoteField).type(note)
        cy.get(this.selectorsList().payButton).click()
    }

    checkTransactionSuccess() {
        cy.get(this.selectorsList().circleIcon).should("have.length", 3)
    }

    checkTransactionFails() {
        cy.get(this.selectorsList().circleIcon).should("have.length", 1)
    }

}

export default TransactionPage

