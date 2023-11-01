import { user } from "./types/user";
import { IVerificator } from "./IVerificator";
import {User} from './user';


export class Authenticator implements IVerificator{
    verify(user:user) {
        
        delete user.password;
        user.loginDetails.logged = false;        
        return user;
    }
    
}