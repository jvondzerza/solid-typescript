"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const admin_1 = require("./admin");
const passwordElement = document.querySelector('#password');
const typePasswordElement = document.querySelector('#typePassword');
const typeGoogleElement = document.querySelector('#typeGoogle');
const typeFacebookElement = document.querySelector('#typeFacebook');
const loginAsAdminElement = document.querySelector('#loginAsAdmin');
const loginFormElement = document.querySelector('#login-form');
const resetPasswordElement = document.querySelector('#resetPassword');
let guest = new user_1.User('user', 'secret_token_fb', 'secret_token_google');
let admin = new admin_1.Admin('admin');
//let googleBot = new GoogleBot('secret_token_google')
loginFormElement.addEventListener('submit', (event) => {
    event.preventDefault();
    let user = loginAsAdminElement.checked ? admin : guest;
    debugger;
    let auth = false;
    switch (true) {
        case typePasswordElement.checked:
            auth = user.checkPassword(passwordElement.value);
            break;
        case typeGoogleElement.checked:
            switch (user) {
                case admin:
                    alert('Function not supported for login type');
                    auth = false;
                    break;
                case guest:
                    auth = user.checkGoogleLogin('secret_token_google');
                    break;
            }
            break;
        case typeFacebookElement.checked:
            switch (user) {
                case admin:
                    alert('Function not supported for login type');
                    auth = false;
                    break;
                case guest:
                    debugger;
                    auth = user.getFacebookLogin('secret_token_fb');
                    break;
            }
            break;
    }
    if (auth) {
        alert('login success');
    }
    else {
        alert('login failed');
    }
});
resetPasswordElement.addEventListener('click', (event) => {
    event.preventDefault();
    let user = loginAsAdminElement.checked ? admin : guest;
    user.resetPassword();
});
