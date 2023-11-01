import { Rol } from "../models/role";
const roles:{ [rol: string]:Rol } = {};

const createRoles = ()=>{
    roles['admin'] = new Rol(1,'admin',['GET','POST','PUT','DELETE']);
    roles['mortal'] = new Rol(2,'mortal',['GET']);
    console.log('Roles created');
}

export {createRoles, roles};