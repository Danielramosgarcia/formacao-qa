import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import CreateHeroPage from "../pages/createHeroPage";
import userData from "../fixtures/userData.json";

const loginPage = new LoginPage()
const homePage = new HomePage()
const createHeroPage = new CreateHeroPage()

describe("Hero Creation", () => {
    const heroName = "Shadow Strike"

    afterEach(() => {
        cy.task("deleteHero", heroName)
    });

    beforeEach(() => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.UserSuccessAdmin.email, userData.UserSuccessAdmin.password)
        loginPage.checkLoginSuccess()
    });
    
    it("should create a new hero successfully", () => {
        homePage.openCreateHeroPage()

        createHeroPage.fillHeroForm(heroName, 102, 88, 157, "Flying", "Super Speed")
        createHeroPage.uploadHeroImage()
        createHeroPage.submitHero()

        homePage.checkHeroExists("Shadow Strike")
    });
});