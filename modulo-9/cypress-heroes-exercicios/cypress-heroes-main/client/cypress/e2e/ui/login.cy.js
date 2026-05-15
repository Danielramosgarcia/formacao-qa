import LoginPage from "../pages/loginPage";
import userData from "../fixtures/userData.json";

const loginPage = new LoginPage()

describe("Login", () => {
  
  beforeEach(() => {
    loginPage.accessLoginPage()
  });

  it("should login successfully with valid credentials", () => {
    loginPage.loginWithAnyUser(userData.userSuccess.email, userData.userSuccess.password)
    loginPage.checkLoginSuccess()
  });

  it("should display an error message with invalid credentials", () => {
    loginPage.loginWithAnyUser(userData.userFail.email, userData.userFail.password)
    loginPage.checkLoginFail()    
  });
});