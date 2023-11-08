export interface user { 
    username: string, 
    password?: string,
    loginDetails:{
        ip:string,
        logged?:boolean
    }
     
}