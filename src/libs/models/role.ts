export class Rol {
    public id:number | undefined ;
    public name:string | undefined ;
    public permissions: string[];

    constructor(id:number,name:string,permissions:string[]){
        this.id = id
        this.name=name
        this.permissions =permissions
    }
}