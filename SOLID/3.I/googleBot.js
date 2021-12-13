"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleBot = void 0;
class GoogleBot {
    constructor(googleToken) {
        this._googleToken = googleToken;
    }
    checkGoogleLogin(token) {
        // return "this will not work";
        return (token === this._googleToken);
    }
    setGoogleToken(token) {
        this._googleToken = token;
    }
}
exports.GoogleBot = GoogleBot;
