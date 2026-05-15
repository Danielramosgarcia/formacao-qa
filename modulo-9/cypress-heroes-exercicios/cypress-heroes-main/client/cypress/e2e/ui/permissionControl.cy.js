import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import userData from "../fixtures/userData.json";

const loginPage = new LoginPage()
const homePage = new HomePage()

describe("Permission Control", () => {
    
    beforeEach(() => {
        loginPage.accessLoginPage()
    });

    it("should hide admin features for regular users", () => {
        loginPage.loginWithAnyUser(userData.userSuccess.email, userData.userSuccess.password)

        homePage.checkPermissions("not.exist")
    });
    
    it("should allow admin features for admin users", () => {
        loginPage.loginWithAnyUser(userData.UserSuccessAdmin.email, userData.UserSuccessAdmin.password)

        homePage.checkPermissions("be.visible")
    });
});