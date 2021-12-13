"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
class Admin {
    constructor(password) {
        this._password = password;
    }
    checkPassword(password) {
        return (password === this._password);
    }
    resetPassword() {
        this._password = prompt('What is your new password?');
    }
}
exports.Admin = Admin;
