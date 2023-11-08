import { Rol } from "./role";
export class User{
    public username:string;
    public password:string;
    public role:Rol;
    constructor(username:string, password:string, role:Rol){
        this.username=username;
        this.password=password;
        this.role=role;
    }
}