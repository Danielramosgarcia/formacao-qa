import userData from "../fixtures/userData.json"
import LoginPage from "../pages/loginPage"
import MenuPage from "../pages/menuPage"

const loginPage = new LoginPage()
const menuPage = new MenuPage()

describe("Login Cypress RealWorld App", () => {
  
  beforeEach(() => {
    loginPage.accessLoginPage()
    

  })  

  it("Login - Success", () => {    
    loginPage.loginWithAnyUser(userData.userSuccess1.username, userData.userSuccess1.password)
    
    menuPage.checkLoginSuccess()
  })
  
  it("Login - Fail", () => {
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkLoginFail()
  })
})