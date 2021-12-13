"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const module_1 = require();
const typePasswordElement = document.querySelector('#typePassword');
const typeGoogleElement = document.querySelector('#typeGoogle');
const typeFacebookElement = document.querySelector('#typeFacebook');
const loginAsAdminElement = document.querySelector('#loginAsAdmin');
const resetPasswordElement = document.querySelector('#resetPassword');
let guest = new User;
let admin = new Admin;
document.querySelector('#login-form').addEventListener('submit', (event)=>{
    event.preventDefault();
    let user = loginAsAdminElement.checked ? admin : guest;
    debugger;
    let auth = false;
    switch(true){
        case typePasswordElement.checked:
            auth = user.checkPassword(module_1.passwordElement.value);
            break;
        case typeGoogleElement.checked:
            auth = user.checkGoogleLogin('secret_token_google');
            break;
        case typeFacebookElement.checked:
            debugger;
            auth = user.getFacebookLogin('secret_token_fb');
            break;
    }
    if (auth) alert('login success');
    else alert('login failed');
});
resetPasswordElement.addEventListener('click', (event)=>{
    event.preventDefault();
    let user = loginAsAdminElement.checked ? admin : guest;
    user.resetPassword();
});

//# sourceMappingURL=index.a3286677.js.map
