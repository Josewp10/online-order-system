import { User } from "../models/user";
import { roles } from "./roles";
const users:{ [username: string]: User } = {};


const createUsers = ()=>{
    users['Sebas']= new User('Sebas','messi123',roles['admin'])
    users['Alexis']= new User('Alexis','cr7123',roles['admin'])
    users['Jose']= new User('Jose','melo123',roles['mortal'])
}

export {createUsers, users}