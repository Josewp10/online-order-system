import { IVerificator } from "./IVerificator";
import { users } from "../database/users";
export class Authorizer implements IVerificator{

    verify(data:any) {        
        let permisions = users[data.user.username].role.permissions;
        let authorized = permisions.includes(data.request.method);
        if (!authorized) throw 'User not authorized for this action'
    }
}