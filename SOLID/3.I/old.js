"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const admin_1 = require("./admin");
const googleBot_1 = require("./googleBot");
const passwordElement = document.querySelector('#password');
const typePasswordElement = document.querySelector('#typePassword');
const typeGoogleElement = document.querySelector('#typeGoogle');
const typeFacebookElement = document.querySelector('#typeFacebook');
const loginAsAdminElement = document.querySelector('#loginAsAdmin');
const loginFormElement = document.querySelector('#login-form');
const resetPasswordElement = document.querySelector('#resetPassword');
let guest = new user_1.User('user', 'secret_token_fb', 'secret_token_google');
let admin = new admin_1.Admin('admin');
let googleBot = new googleBot_1.GoogleBot('secret_token_google');
loginFormElement.addEventListener('submit', (event) => {
    event.preventDefault();
    let user = loginAsAdminElement.checked ? admin : guest || googleBot;
    debugger;
    let auth = false;
    switch (true) {
        case typePasswordElement.checked:
            auth = user.checkPassword(passwordElement.value);
            if (user === googleBot_1.GoogleBot) {
                alert('Bot only has google permissions');
            }
            break;
        case typeGoogleElement.checked:
            if (user === admin) {
                alert('Function not supported for admins');
            }
            auth = user.checkGoogleLogin('secret_token_google');
            break;
        case typeFacebookElement.checked:
            switch (user) {
                case admin:
                    alert('Function not supported for admins');
                    break;
                case googleBot:
                    alert('Bot only has google permissions');
                    break;
                case guest:
                    debugger;
                    auth = user.getFacebookLogin('secret_token_fb');
                    break;
            }
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
