/**
 * Authentication service for an Single Sign On (Google)
 * There's no sign up, and the login (token acquisition) happens on the client side.
 *
 */
export interface AuthenticationSsoService {

    /**
     * This is an Sso service, so the login happens on the client side, using google's api.
     *
     * @param email
     * @return token to be used on every request (promise)
     */
    //login(email:string, password:string):Promise<string>;

    /**
     * Authenticates a request using its token.
     *
     *
     * @param token for authorization
     * @return readerId (user ID) associated with this token
     */
    authenticate(token:string):Promise<string>;


}