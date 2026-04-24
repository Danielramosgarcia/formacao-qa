class SingUpPage {
    selectorsList () {
        const selectors = {
            fistNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            confirmPasswordField: "[name='confirmPassword']",
            singUpButton: "[type='submit']"
        }
        return selectors
    }

}


export default SingUpPage