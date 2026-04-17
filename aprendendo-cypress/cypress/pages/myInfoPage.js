class MyInfoPage {
    
    selectorsList() {
        const selectors = {
                fistNameField: "[name='firstName']",
                middleNameField: "[name='middleName']",
                lastNameField: "[name='lastName']",
                genericField:".oxd-input--active",
                dateField: "[placeholder='yyyy-dd-mm']",
                dateCloseButton: ".--close",
                submitButton: "[type='submit']",
                dropdownField: "[clear='false']",
                listboxField: "[role='listbox']"
        }
        return selectors
    }
    
    fillPersonalDetails(firstName, middleName, lastName) {
            cy.get(this.selectorsList().fistNameField).clear().type(firstName)
            cy.get(this.selectorsList().middleNameField).clear().type(middleName)
            cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(EmployeeId, otherId, driverLicense, licenseExpiryDate) {
            cy.get(this.selectorsList().genericField).eq(3).clear().type(EmployeeId)
            cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
            cy.get(this.selectorsList().genericField).eq(5).clear().type(driverLicense)
            cy.get(this.selectorsList().dateField).eq(0).clear().type(licenseExpiryDate)
            cy.get(this.selectorsList().dateCloseButton).click()
    }

    fillStatus(nationality, maritalStatus, dateOfBirth) {
        cy.get(this.selectorsList().dropdownField).eq(0).click()
        cy.get(this.selectorsList().listboxField).contains(nationality).click()
        cy.get(this.selectorsList().dropdownField).eq(1).click()
        cy.get(this.selectorsList().listboxField).contains(maritalStatus).click()
        cy.get(this.selectorsList().dateField).eq(1).clear().type(dateOfBirth)
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({ force: true})
        cy.get("body").should("contain", "Successfully Updated") 
    }

}

export default MyInfoPage