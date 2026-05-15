import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import userData from "../fixtures/userData.json";

const loginPage = new LoginPage()
const homePage = new HomePage()

describe("Heroes Listing", () => {
    
    beforeEach(() => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userSuccess.email, userData.userSuccess.password)
        loginPage.checkLoginSuccess()
    });
    
    it("should display heroes list after login", () => {
        homePage.checkHeroesListIsVisible()
    });    
});