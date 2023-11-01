import { IVerificator } from "./IVerificator";
import { users } from "../database/users";
export class Authorizer implements IVerificator{

    verify(data:any) {        
        
        let user = users[data.user.username]
        if(user == undefined) throw 'Please provide an existing user'
        let permisions = user.role.permissions;
               
        let authorized = permisions.includes(data.request.method);
        if (!authorized) throw 'User not authorized for this action'
    }
}