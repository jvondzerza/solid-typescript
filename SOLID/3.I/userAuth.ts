export interface UserAuth {
    setFacebookToken(token : string): void;
    getFacebookLogin(token : string) : boolean;
}