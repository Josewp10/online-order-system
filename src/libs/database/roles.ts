import { Rol } from "../models/role";
const roles:{ [rol: string]:Rol } = {};

const createRoles = ()=>{
    roles['admin'] = new Rol(1,'admin',['*']);
    roles['mortal'] = new Rol(2,'mortal',['read']);
    console.log('Roles created');
}

export {createRoles, roles};