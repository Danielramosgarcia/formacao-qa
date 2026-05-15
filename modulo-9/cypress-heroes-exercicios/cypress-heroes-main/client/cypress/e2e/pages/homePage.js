class HomePage {
    selectorsList() {
        const selectors = {
            heroCards: "[data-cy='hero-card']",
            deleteButton: "[data-cy='trash']",
            editButton: "[data-cy='pencil']",
            likeButton: "[data-cy='like']",
            moneyButton: "[data-cy='money']",
            createNewHeroButton: "[href='/heroes/new']",
            anyButton: "button"
        };
        
        return selectors
    };

    checkHeroesListIsVisible() {
        cy.get(this.selectorsList().heroCards).should("have.length.greaterThan", 0)
    };

    checkPermissions(assertion) {
        cy.get(this.selectorsList().editButton).should(assertion)
        cy.get(this.selectorsList().deleteButton).should(assertion)
    };

    clickElement(element) {
        cy.get(this.selectorsList()[element]).click()
    };

    openCreateHeroPage() {
        cy.get(this.selectorsList().createNewHeroButton).click()
    };

    checkHeroExists(heroName) {
        cy.get(this.selectorsList().heroCards).contains(heroName).should("be.visible")
    };    
};

export default HomePage

