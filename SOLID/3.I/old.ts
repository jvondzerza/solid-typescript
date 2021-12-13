import {User} from "./user";
import {Admin} from "./admin";
import {GoogleBot} from "./googleBot";

const passwordElement = <HTMLInputElement>document.querySelector('#password');
const typePasswordElement = <HTMLInputElement>document.querySelector('#typePassword');
const typeGoogleElement = <HTMLInputElement>document.querySelector('#typeGoogle');
const typeFacebookElement = <HTMLInputElement>document.querySelector('#typeFacebook');
const loginAsAdminElement = <HTMLInputElement>document.querySelector('#loginAsAdmin');
const loginFormElement = <HTMLFormElement>document.querySelector('#login-form');
const resetPasswordElement = <HTMLAnchorElement>document.querySelector('#resetPassword');

let guest = new User('user', 'secret_token_fb', 'secret_token_google');
let admin = new Admin('admin');
//let googleBot = new GoogleBot('secret_token_google')

loginFormElement.addEventListener('submit', (event) => {
    event.preventDefault();

    let user = loginAsAdminElement.checked ? admin : guest;

    debugger;

    let auth = false;
    switch(true) {
        case typePasswordElement.checked:
            auth = user.checkPassword(passwordElement.value);
            break;
        case typeGoogleElement.checked:
            switch (user) {
                case admin:
                    alert('Function not supported for login type')
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
                    alert('Function not supported for login type')
                    auth = false;
                    break;
                case guest:
                    debugger;
                    auth = user.getFacebookLogin('secret_token_fb');
                    break;
            }
            break;
    }

    if(auth) {
        alert('login success');
    } else {
        alert('login failed');
    }
});

resetPasswordElement.addEventListener('click', (event) => {
   event.preventDefault();

   let user = loginAsAdminElement.checked ? admin : guest;
   user.resetPassword();
});