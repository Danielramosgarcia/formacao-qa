import userData from "../fixtures/userData.json"
import LoginPage from "../pages/loginPage"
import SingUpPage from "../pages/singUpPage"

const loginPage = new LoginPage()
const singUpPage = new SingUpPage()

describe("Register new users", () => {
    beforeEach(() => {
        loginPage.accessLoginPage()
    })  

    it("Register new users whith valid information", () => {
        loginPage.accessSingUpPage()
        
        singUpPage.fillAllFields(
            "testeName",  
            "ValidLastName1",     
            "validusername1234",  
            "password123",
            "password123" 
        )
        singUpPage.validRegistration()  
    });

    it("Register new users whith invalid information", () => {
        loginPage.accessSingUpPage()

        singUpPage.fillAllFields(
            "TestFirstName", 
            "TestLastName", 
            "", 
            "1234", 
            "1234"
        )
        singUpPage.invalidRegistration()        
    });
});