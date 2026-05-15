class CreateHeroPage {
    selectorsList() {
        const selectors = {
            nameField: "[data-cy='nameInput']",
            priceField: "[data-cy='priceInput']",
            fansField: "[data-cy='fansInput']",
            savesField: "[data-cy='savesInput']",
            powersSelect: "[data-cy='powersSelect']",
            imageSelectButton: "[data-cy='avatarFile']",
            submitButton: "form button"
        };
        
        return selectors
    };

    fillHeroForm(name, price, fans, saves, powers) {
        cy.get(this.selectorsList().nameField).clear().type(name) 
        cy.get(this.selectorsList().priceField).clear().type(price)
        cy.get(this.selectorsList().fansField).clear().type(fans)
        cy.get(this.selectorsList().savesField).clear().type(saves)  

        cy.get(this.selectorsList().powersSelect).select(powers)   
    };

    uploadHeroImage() {
        cy.get(this.selectorsList().imageSelectButton).selectFile("cypress/fixtures/avatar.jpg", { force: true })
    };

    submitHero() {
        cy.get(this.selectorsList().submitButton).click()
    }
};

export default CreateHeroPage