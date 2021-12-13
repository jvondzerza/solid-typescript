import {FacebookAuth} from "./facebookAuth";
import {AdminAuth} from "./adminAuth";
import {GoogleAuth} from "./googleAuth";

export class User implements FacebookAuth, AdminAuth, GoogleAuth {
    private _password : string;
    private _facebookToken : string;
    private _googleToken : string;

    constructor(password: string, facebookToken: string, googleToken: string) {
        this._password = password;
        this._facebookToken = facebookToken;
        this._googleToken = googleToken;
    }

//Interesting detail here: while I did not define a return type or param type, any deviation from the interface will give you an error.
    // Test it out by uncommenting the code below.
    checkGoogleLogin(token: string) {
        // return "this will not work";
        return (token === this._googleToken);
    }

    setGoogleToken(token : string) {
        this._googleToken = token;
    }

    getFacebookLogin(token: string) {
        return (token === this._facebookToken);
    }

    setFacebookToken(token : string) {
        this._facebookToken = token;
    }

    checkPassword(password: string) : boolean {
        return (password === this._password);
    }

    resetPassword() {
        this._password = prompt('What is your new password?');
    }
}