import userData from "../fixtures/userData.json"
import LoginPage from "../pages/loginPage"
import MenuPage from "../pages/menuPage"
import TransactionPage from "../pages/transactionPage"
import HomePage from "../pages/homePage"

const loginPage = new LoginPage()
const menuPage = new MenuPage()
const transactionPage = new TransactionPage()
const homePage =  new HomePage()

describe("Transaction History", () => {
    const amount = "100"
    const note = "cypress test payment"   

    beforeEach(() => {
        loginPage.accessLoginPage()

    })

    it("should display new transaction in transaction history", () => {       
        loginPage.loginWithAnyUser(userData.userSuccess1.username, userData.userSuccess1.password)
        
        menuPage.checkLoginSuccess()        
        menuPage.accessAnyPage("newTransactionButton")

        transactionPage.clickOnContact()
        transactionPage.completeTransaction(amount, note)
        transactionPage.checkTransactionSuccess()

        menuPage.accessAnyPage("homeButton")

        homePage.clickAnyTab("mineTab")
        homePage.checkTransaction(amount, note)
    });

    it("should display a message indicating that the user has no previous transactions", () => {
        loginPage.loginWithAnyUser(userData.userSuccess2.username, userData.userSuccess2.password)

        homePage.clickAnyTab("mineTab")
        homePage.checkNoTransactions()    
    })
});