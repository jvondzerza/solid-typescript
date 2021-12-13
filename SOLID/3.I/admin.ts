import {AdminAuth} from "./adminAuth";

export class Admin implements AdminAuth {
    private _password : string;

    constructor(password: string) {
        this._password = password;
    }

    checkPassword(password: string): boolean {
        return (password === this._password);
    }

    resetPassword() {
        this._password = prompt('What is your new password?');
    }
}