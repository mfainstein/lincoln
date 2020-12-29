export interface AuthorizationService {
    authorize(token:string):Promise<string>;
}