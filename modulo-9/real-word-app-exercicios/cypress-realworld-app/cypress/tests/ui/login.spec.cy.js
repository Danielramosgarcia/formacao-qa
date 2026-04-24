import userData from "../fixtures/userData.json"
import LoginPage from "../pages/loginPage"

const loginPage = new LoginPage()

describe('Login Orange HRM Tests', () => {
  
  it("Login - Success", () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    
    dashboardpage.checkDashboardPage()
  })
  
  it("Login - Fail", () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })
})