import userData from "../fixtures/userData.json"
import LoginPage from "../pages/loginPage"
import MenuPage from "../pages/menuPage"
import TransactionPage from "../pages/transactionPage"

const loginPage = new LoginPage()
const menuPage = new MenuPage()
const transactionPage = new TransactionPage()

describe('Send money in Cypress RealWorld App', () => {
    
    beforeEach(() => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userSuccess1.username, userData.userSuccess1.password)
        
        menuPage.checkLoginSuccess()

    })  


    it("successfully sends money", () => {
        menuPage.accessAnyPage("newTransactionButton")

        transactionPage.clickOnContact()
        transactionPage.completeTransaction("100", "test")
        transactionPage.checkTransactionSuccess()

    });

    // BUG: application allows transactions with insufficient funds
    it("display an error message when sending money without sufficient funds", () => {
        menuPage.accessAnyPage("newTransactionButton")

        transactionPage.clickOnContact()
        transactionPage.completeTransaction("10000", "test")
        transactionPage.checkTransactionFails()
    });
});