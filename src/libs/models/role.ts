export class Rol {
    public id:number | undefined ;
    public nombre:string | undefined ;
    public permisos: string[];

    constructor(id:number,nombre:string,permisos:string[]){
        this.id = id
        this.nombre=nombre
        this.permisos =permisos
    }
}