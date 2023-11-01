import { IVerificator } from "./IVerificator";
import {User} from './user';

export class Authenticator implements IVerificator{
    verify(user?:User) {
        console.log(user);
        throw "Method not implemented.";
    }
    
}