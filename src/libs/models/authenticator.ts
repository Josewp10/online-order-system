import { user } from "./types/user";
import { IVerificator } from "./IVerificator";
import { users } from "../database/users";


export class Authenticator implements IVerificator{
    verify(user:user) {        
        let dbUser = users[user.username];
        
        if (!dbUser) throw 'User not found'

        if (user.password == dbUser.password) {
            user.loginDetails.logged = true;       
        }else{
            user.loginDetails.logged = false;       
        }
        
        delete user.password;
        return user;
    }
    
}