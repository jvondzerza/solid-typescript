import {GoogleAuth} from "./googleAuth";

export class GoogleBot implements GoogleAuth{
    private _googleToken: string;

    constructor(googleToken: string) {

        this._googleToken = googleToken;
    }

    checkGoogleLogin(token: string) {
        // return "this will not work";
        return (token === this._googleToken);
    }

    setGoogleToken(token : string) {
        this._googleToken = token;
    }
}